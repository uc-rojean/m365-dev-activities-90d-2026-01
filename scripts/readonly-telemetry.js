
// scripts/readonly-telemetry.js
// Read-only GET calls to Microsoft Graph; writes tiny summaries to /reports and /logs.
// Uses Node 20 built-in fetch (no node-fetch dependency).

import fs from 'fs';
import { ConfidentialClientApplication } from '@azure/msal-node';

const {
  M365_TENANT_ID,
  M365_TENANT_DOMAIN,
  M365_CLIENT_ID,
  M365_CLIENT_SECRET,
  GRAPH_SCOPES = 'Files.Read.All Sites.Read.All User.Read.All', // for logging only
} = process.env;

if (!M365_TENANT_ID || !M365_CLIENT_ID || !M365_CLIENT_SECRET) {
  console.error('Missing required environment variables (TENANT_ID / CLIENT_ID / CLIENT_SECRET).');
  process.exit(1);
}

const authority = `https://login.microsoftonline.com/${M365_TENANT_ID}`;
const graphBase = 'https://graph.microsoft.com/v1.0';

const cca = new ConfidentialClientApplication({
  auth: {
    clientId: M365_CLIENT_ID,
    authority,
    clientSecret: M365_CLIENT_SECRET,
  },
});

// Acquire app-only token using .default (uses pre-consented app permissions)
async function getToken() {
  const result = await cca.acquireTokenByClientCredential({
    scopes: ['https://graph.microsoft.com/.default'],
  });
  if (!result?.accessToken) throw new Error('Failed to acquire access token.');
  return result.accessToken;
}

async function gget(url, token) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`GET ${url} failed: ${res.status} ${txt}`);
  }
  return res.json();
}

function stampUTC() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const y = now.getUTCFullYear();
  const m = pad(now.getUTCMonth() + 1);
  const d = pad(now.getUTCDate());
  const hh = pad(now.getUTCHours());
  const mm = pad(now.getUTCMinutes());
  return { ymd: `${y}-${m}-${d}`, hms: `${hh}:${mm}` };
}

async function main() {
  const { ymd, hms } = stampUTC();
  const token = await getToken();

  // 1) Users (sample count)
  let userCount = 0;
  try {
    const users = await gget(`${graphBase}/users?$top=50`, token);
    userCount = (users.value?.length ?? 0);
  } catch (e) {
    userCount = -1;
  }

  // 2) Teams channels (sample; app-only can be limited)
  let channelsSummary = [];
  try {
    const teams = await gget(`${graphBase}/teams?$top=5`, token);
    for (const t of teams.value ?? []) {
      const chans = await gget(`${graphBase}/teams/${t.id}/channels?$top=50`, token);
      channelsSummary.push({
        teamId: t.id,
        teamName: t.displayName,
        channels: (chans.value?.length ?? 0),
      });
    }
  } catch (e) {
    channelsSummary.push({ error: 'Teams listing not available in app-only or lacks consent.' });
  }

  // 3) SharePoint: root site drives (sample)
  let drivesSummary = [];
  try {
    const rootSite = await gget(`${graphBase}/sites/root`, token);
    const drives = await gget(`${graphBase}/sites/${rootSite.id}/drives?$top=10`, token);
    drivesSummary = (drives.value ?? []).map(d => ({
      driveId: d.id,
      name: d.name,
      size: d.quota?.total ?? null,
    }));
  } catch (e) {
    drivesSummary.push({ error: 'SharePoint drives listing requires Sites.Read.All and admin consent.' });
  }

  // Compose report
  const report = {
    timestampUtc: `${ymd} ${hms}`,
    tenant: M365_TENANT_DOMAIN,
    scopesConfigured: GRAPH_SCOPES,
    users: { sampledTop: 50, sampledCount: userCount },
    teams: { sampledTeams: channelsSummary.length, summary: channelsSummary },
    sharepoint: { drives: drivesSummary },
    note: 'Read-only metadata only. No write operations performed.',
  };

  // Save files
  fs.mkdirSync('reports', { recursive: true });
  fs.mkdirSync('logs', { recursive: true });

  const reportsPath = `reports/${ymd}-readonly-summary.json`;
  const logsPath = `logs/${ymd}-run-notes.txt`;

  fs.writeFileSync(reportsPath, JSON.stringify(report, null, 2));
  fs.writeFileSync(
    logsPath,
    [
      `Run (UTC): ${ymd} ${hms}`,
      `Tenant: ${M365_TENANT_DOMAIN}`,
      `Users sampled: ${userCount}`,
      `Teams entries: ${channelsSummary.length}`,
      `SharePoint drives: ${drivesSummary.length}`,
      `Scopes (configured): ${GRAPH_SCOPES}`,
      `Mode: READ-ONLY`,
    ].join('\n')
  );

  console.log(`Saved: ${reportsPath}`);
  console.log(`Saved: ${logsPath}`);
}

main().catch(err => {
  console.error('Telemetry error:', err?.message || err);
  process.exit(1);
});
