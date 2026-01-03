
// scripts/readonly-telemetry-extended.js
const fs = require('fs');
const path = require('path');
const { ConfidentialClientApplication } = require('@azure/msal-node');
const { paginate } = require('./utils/paginate.cjs');
const { toCsv }    = require('./utils/toCsv.cjs');

const TENANT_ID = process.env.M365_TENANT_ID;
const CLIENT_ID = process.env.M365_CLIENT_ID;
const CLIENT_SECRET = process.env.M365_CLIENT_SECRET;
// Default scopes: Graph /.default (app permissions)
const GRAPH_SCOPES = (process.env.GRAPH_SCOPES || 'https://graph.microsoft.com/.default').split(',');

// Optional Teams Workflow webhook URL (put in Actions secret TEAMS_WORKFLOW_URL)
const TEAMS_WORKFLOW_URL = process.env.TEAMS_WORKFLOW_URL || '';

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
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function ensureDirs() {
  fs.mkdirSync('reports', { recursive: true });
  fs.mkdirSync('logs', { recursive: true });
}

async function fetchGraph(url, { headers = {} } = {}) {
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

async function collectUsers() {
  // Requires Application permissions: User.Read.All (and admin consent)
  // Pagination with $top; $count=true needs ConsistencyLevel: eventual
  const users = await paginate(
    `/users?$top=50&$select=id,displayName,mail,userPrincipalName&$count=true`,
    fetchGraph
  );

  // Delta for users (changes since last token); we capture current delta token to persist
  // If you have a stored deltaToken, you can start from it using /users/delta?$deltaToken=...
  const deltaResp = await fetchGraph(
    `/users/delta?$select=id,displayName,mail,userPrincipalName`,
    { headers: { ConsistencyLevel: 'eventual' } }
  );
  const usersDelta = Array.isArray(deltaResp.value) ? deltaResp.value : [];
  const deltaToken =
    deltaResp['@odata.deltaLink'] || deltaResp['@odata.nextLink'] || '';

  return { users, usersDelta, deltaToken };
}

async function collectTeamsChannels() {
  // List top few Teams (via groups with provisioning option 'Team')
  // Requires Application permission: Group.Read.All (app-only)
  const teamsGroups = await paginate(
    `/groups?$top=25&$count=true&$filter=resourceProvisioningOptions/Any(x:x eq 'Team')&$select=id,displayName`,
    fetchGraph
  );

  const sampleTeams = teamsGroups.slice(0, 5); // sample only
  const teamChannels = [];
  for (const t of sampleTeams) {
    // List channels (pagination)
    // Requires Application permission: Team.ReadBasic.All
    const chans = await paginate(
      `/teams/${t.id}/channels?$top=50&$select=id,displayName`,
      fetchGraph
    );
    teamChannels.push({ teamId: t.id, teamName: t.displayName, channels: chans });
  }
  return { teamsGroups, teamChannels };
}

async function collectSharePointDrives() {
  // Use the root site to keep it simple and read-only
  // Requires Application permission: Sites.Read.All
  const drives = await paginate(
    `/sites/root/drives?$top=50&$select=id,driveType,name,owner`,
    fetchGraph
  );

  // Delta for items in the root drive (files/folders)
  // Requires Files.Read.All or Sites.Read.All
  let driveDeltaItems = [];
  try {
    const deltaResp = await fetchGraph(`/sites/root/drive/root/delta`);
    driveDeltaItems = Array.isArray(deltaResp.value) ? deltaResp.value : [];
  } catch (e) {
    // In restricted backends, this may fail—log and continue
    driveDeltaItems = [{ warning: 'deltaUnavailable', reason: e.message }];
  }

  return { drives, driveDeltaItems };
}

function normalizeForCsv(summary) {
  const rows = [];

  (summary.users || []).forEach(u =>
    rows.push({ entity: 'user', id: u.id, name: u.displayName, mail: u.mail, upn: u.userPrincipalName })
  );

  (summary.usersDelta || []).forEach(u =>
    rows.push({ entity: 'userDelta', id: u.id, name: u.displayName, mail: u.mail, upn: u.userPrincipalName })
  );

  (summary.teamsGroups || []).forEach(g =>
    rows.push({ entity: 'teamGroup', id: g.id, name: g.displayName })
  );

  (summary.teamChannels || []).forEach(t =>
    (t.channels || []).forEach(c =>
      rows.push({ entity: 'channel', teamId: t.teamId, teamName: t.teamName, id: c.id, name: c.displayName })
    )
  );

  (summary.drives || []).forEach(d =>
    rows.push({
      entity: 'drive',
      id: d.id,
      name: d.name,
      driveType: d.driveType,
      ownerId: d?.owner?.user?.id || d?.owner?.group?.id || '',
      ownerType: d?.owner?.user ? 'user' : d?.owner?.group ? 'group' : '',
    })
  );

  (summary.driveDeltaItems || []).forEach(it =>
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
  // Minimal card payload (Teams Workflows accept generic JSON; Adaptive Card is optional)
  const payload = {
    type: 'message',
    title: 'UC Day 07 — Read-only Telemetry',
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

  log('Starting UC Day 07 telemetry (read-only, app-only).');

  const { users, usersDelta, deltaToken } = await collectUsers();
  log(`Users: ${users.length}, Users (delta sample): ${usersDelta.length}`);

  const { teamsGroups, teamChannels } = await collectTeamsChannels();
  const channelsCount = teamChannels.reduce((sum, t) => sum + (t.channels?.length || 0), 0);
  log(`Teams (groups tagged as Team): ${teamsGroups.length}, Channels (sampled): ${channelsCount}`);

  const { drives, driveDeltaItems } = await collectSharePointDrives();
  log(`Site drives: ${drives.length}, Drive delta items (sample): ${driveDeltaItems.length}`);

  const summary = {
    date,
    notes: 'UC Day 07 (Microsoft 114) — pagination + delta + CSV/JSON; read-only only.',
    counters: {
      users: users.length,
      usersDelta: usersDelta.length,
      teamsGroups: teamsGroups.length,
      channelsSample: channelsCount,
      drives: drives.length,
      driveDeltaItems: driveDeltaItems.length,
    },
    tokens: {
      usersDeltaToken: deltaToken, // Persist externally if you want continuity across runs
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
  log('UC Day 07 telemetry completed successfully.');

  await postTeamsWebhook(date, summary.counters);
}

main().catch(err => {
  const date = nowStamp();
  const logPath = path.join('logs', `${date}-run-notes.txt`);
  fs.mkdirSync('logs', { recursive: true });
  fs.appendFileSync(logPath, `[${new Date().toISOString()}] ERROR: ${err.message}\n`);
  console.error(err);
  process.exit(1);
});
