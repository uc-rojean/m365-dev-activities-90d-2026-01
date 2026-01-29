// scripts/readonly-telemetry-extended.cjs
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { ConfidentialClientApplication } = require('@azure/msal-node');
const { paginate } = require('./utils/paginate.cjs');
const { toCsv } = require('./utils/toCsv.cjs');

const TENANT_ID = process.env.M365_TENANT_ID;
const CLIENT_ID = process.env.M365_CLIENT_ID;
const CLIENT_SECRET = process.env.M365_CLIENT_SECRET;

// Default scopes: Graph /.default (app permissions)
const GRAPH_SCOPES = (process.env.GRAPH_SCOPES || 'https://graph.microsoft.com/.default')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

// Optional Teams Workflow webhook URL (put in Actions secret TEAMS_WORKFLOW_URL)
const TEAMS_WORKFLOW_URL = process.env.TEAMS_WORKFLOW_URL || '';

// Skip SharePoint/OneDrive while tenant is blocked
const SKIP_SP_OD = String(process.env.SKIP_SP_OD || 'false').toLowerCase() === 'true';

const msalConfig = {
  auth: {
    clientId: CLIENT_ID,
    authority: `https://login.microsoftonline.com/${TENANT_ID}`,
    clientSecret: CLIENT_SECRET,
  },
};
const cca = new ConfidentialClientApplication(msalConfig);

async function getToken() {
  const res = await cca.acquireTokenByClientCredential({ scopes: GRAPH_SCOPES });
  return res.accessToken;
}

function nowStamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function ensureDirs() {
  fs.mkdirSync('reports', { recursive: true });
  fs.mkdirSync('logs', { recursive: true });
}

async function fetchGraph(url, { headers = {} } = {}) {
  // Node 18+ has global fetch; runner is Node v20.x so this is fine.
  const token = await getToken();

  const res = await fetch(`https://graph.microsoft.com/v1.0${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      ...headers,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Graph ${url} failed: ${res.status} ${res.statusText}\n${text}`);
  }
  return res.json();
}

// Helper: paginate with custom headers (e.g., ConsistencyLevel: 'eventual')
async function paginateWithHeaders(url, headers) {
  // Uses paginate's new { headers } option (works with full @odata.nextLink normalization too)
  return paginate(url, fetchGraph, { headers });
}

async function collectUsers() {
  // Requires Application permissions: User.Read.All (with admin consent)
  // $count=true requires ConsistencyLevel: 'eventual'
  const users = await paginateWithHeaders(
    `/users?$top=50&$select=id,displayName,mail,userPrincipalName&$count=true`,
    { ConsistencyLevel: 'eventual' }
  );

  // Delta for users (changes since last token)
  const deltaResp = await fetchGraph(
    `/users/delta?$select=id,displayName,mail,userPrincipalName`,
    { headers: { ConsistencyLevel: 'eventual' } }
  );
  const usersDelta = Array.isArray(deltaResp.value) ? deltaResp.value : [];
  const deltaToken = deltaResp['@odata.deltaLink'] || deltaResp['@odata.nextLink'] || '';

  return { users, usersDelta, deltaToken };
}

async function collectTeamsChannels() {
  // List Teams via groups with provisioning option 'Team'
  // Requires Application permission: Group.Read.All
  const teamsGroups = await paginateWithHeaders(
    `/groups?$top=25&$count=true&$filter=resourceProvisioningOptions/Any(x:x eq 'Team')&$select=id,displayName`,
    { ConsistencyLevel: 'eventual' }
  );

  const sampleTeams = teamsGroups.slice(0, 5); // sample only
  const teamChannels = [];

  for (const t of sampleTeams) {
    // List channels (Requires Application permission: Team.ReadBasic.All)
    const chans = await paginate(
      `/teams/${t.id}/channels?$select=id,displayName`,
      fetchGraph
    );
    teamChannels.push({ teamId: t.id, teamName: t.displayName, channels: chans });
  }

  return { teamsGroups, teamChannels };
}

async function collectSharePointDrivesBestEffort(log) {
  // Use the root site to keep it simple and read-only
  // Requires Application permission: Sites.Read.All
  // BUT: tenant is currently blocked (Access Denied), so this must not crash the workflow.

  if (SKIP_SP_OD) {
    log('SKIP_SP_OD=true → skipping SharePoint/OneDrive endpoints.');
    return {
      drives: [],
      driveDeltaItems: [{ warning: 'skipped', reason: 'SKIP_SP_OD=true' }],
    };
  }

  let drives = [];
  try {
    drives = await paginate(
      `/sites/root/drives?$top=50&$select=id,driveType,name,owner`,
      fetchGraph
    );
  } catch (e) {
    // If blocked, log and continue
    log(`SharePoint drives unavailable (continuing): ${e.message}`);
    return {
      drives: [],
      driveDeltaItems: [{ warning: 'drivesUnavailable', reason: e.message }],
    };
  }

  // Delta for items in the root drive (files/folders)
  // Requires Files.Read.All or Sites.Read.All
  let driveDeltaItems = [];
  try {
    const deltaResp = await fetchGraph(`/sites/root/drive/root/delta`);
    driveDeltaItems = Array.isArray(deltaResp.value) ? deltaResp.value : [];
  } catch (e) {
    // In restricted backends, this may fail—log and continue
    log(`Drive delta unavailable (continuing): ${e.message}`);
    driveDeltaItems = [{ warning: 'deltaUnavailable', reason: e.message }];
  }

  return { drives, driveDeltaItems };
}

function normalizeForCsv(summary) {
  const rows = [];

  (summary.users || []).forEach((u) =>
    rows.push({
      entity: 'user',
      id: u.id,
      name: u.displayName,
      mail: u.mail,
      upn: u.userPrincipalName,
    })
  );

  (summary.usersDelta || []).forEach((u) =>
    rows.push({
      entity: 'userDelta',
      id: u.id,
      name: u.displayName,
      mail: u.mail,
      upn: u.userPrincipalName,
    })
  );

  (summary.teamsGroups || []).forEach((g) =>
    rows.push({ entity: 'teamGroup', id: g.id, name: g.displayName })
  );

  (summary.teamChannels || []).forEach((t) =>
    (t.channels || []).forEach((c) =>
      rows.push({
        entity: 'channel',
        teamId: t.teamId,
        teamName: t.teamName,
        id: c.id,
        name: c.displayName,
      })
    )
  );

  (summary.drives || []).forEach((d) =>
    rows.push({
      entity: 'drive',
      id: d.id,
      name: d.name,
      driveType: d.driveType,
      ownerId: d?.owner?.user?.id || d?.owner?.group?.id || '',
      ownerType: d?.owner?.user ? 'user' : d?.owner?.group ? 'group' : '',
    })
  );

  (summary.driveDeltaItems || []).forEach((it) =>
    rows.push({
      entity: 'driveDelta',
      id: it.id || '',
      name: it.name || '',
      size: it.size || '',
      folder: it.folder ? 'true' : '',
      file: it.file ? 'true' : '',
      lastModifiedDateTime: it.lastModifiedDateTime || '',
    })
  );

  return rows;
}

async function postTeamsWebhook(date, counters) {
  if (!TEAMS_WORKFLOW_URL) return;

  const payload = {
    type: 'message',
    title: 'Read-only Telemetry',
    date,
    counters,
  };

  try {
    const res = await fetch(TEAMS_WORKFLOW_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error('Webhook failed', res.status, text);
    }
  } catch (e) {
    console.error('Webhook error', e.message);
  }
}

async function main() {
  ensureDirs();
  const date = nowStamp();
  const logPath = path.join('logs', `${date}-run-notes.txt`);
  const jsonPath = path.join('reports', `${date}-readonly-summary.json`);
  const csvPath = path.join('reports', `${date}-readonly-summary.csv`);

  function log(msg) {
    const line = `[${new Date().toISOString()}] ${msg}\n`;
    fs.appendFileSync(logPath, line);
    console.log(msg);
  }

  const MAX_PAGES = Number(process.env.GRAPH_MAX_PAGES || 50);
  const DELAY_MS = Number(process.env.GRAPH_DELAY_MS || 100);
  log(`Pagination knobs → maxPages=${MAX_PAGES}, delayMs=${DELAY_MS}ms`);
  log(`Flags → SKIP_SP_OD=${SKIP_SP_OD}`);

  log('Starting telemetry (read-only, app-only).');

  const { users, usersDelta, deltaToken } = await collectUsers();
  log(`Users: ${users.length}, Users (delta sample): ${usersDelta.length}`);

  const { teamsGroups, teamChannels } = await collectTeamsChannels();
  const channelsCount = teamChannels.reduce((sum, t) => sum + (t.channels?.length || 0), 0);
  log(`Teams (groups tagged as Team): ${teamsGroups.length}, Channels (sampled): ${channelsCount}`);

  const { drives, driveDeltaItems } = await collectSharePointDrivesBestEffort(log);
  log(`Site drives: ${drives.length}, Drive delta items (sample): ${driveDeltaItems.length}`);

  const summary = {
    date,
    notes: 'Read-only telemetry — pagination + delta + CSV/JSON; app-only; best-effort when SP/OD is blocked.',
    flags: {
      skipSpOd: SKIP_SP_OD,
    },
    counters: {
      users: users.length,
      usersDelta: usersDelta.length,
      teamsGroups: teamsGroups.length,
      channelsSample: channelsCount,
      drives: drives.length,
      driveDeltaItems: driveDeltaItems.length,
    },
    tokens: {
      usersDeltaToken: deltaToken,
    },
    users,
    usersDelta,
    teamsGroups,
    teamChannels,
    drives,
    driveDeltaItems,
  };

  fs.writeFileSync(jsonPath, JSON.stringify(summary, null, 2), 'utf-8');
  const csvRows = normalizeForCsv(summary);
  fs.writeFileSync(csvPath, toCsv(csvRows), 'utf-8');

  log(`Written JSON → ${jsonPath}`);
  log(`Written CSV → ${csvPath}`);
  log('Telemetry completed successfully.');

  await postTeamsWebhook(date, summary.counters);
}

main().catch((err) => {
  const date = nowStamp();
  const logPath = path.join('logs', `${date}-run-notes.txt`);
  fs.mkdirSync('logs', { recursive: true });
  fs.appendFileSync(logPath, `[${new Date().toISOString()}] ERROR: ${err.message}\n`);
  console.error(err);
  process.exit(1);
});
