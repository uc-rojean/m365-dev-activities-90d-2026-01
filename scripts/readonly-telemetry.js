
// scripts/readonly-telemetry.js
// Read-only GET calls to Microsoft Graph; writes tiny summaries to /reports and /logs.

import fs from 'fs';
import fetch from 'node-fetch';
import { ConfidentialClientApplication } from '@azure/msal-node';

const {
  M365_TENANT_ID,
  M365_TENANT_DOMAIN,
  M365_CLIENT_ID,
  M365_CLIENT_SECRET,
  GRAPH_SCOPES = 'Files.Read.All Sites.Read.All User.Read.All', // for logging only
} = process.env;

const authority = `https://login.microsoftonline.com/${M365_TENANT_ID}`;
const graphBase = 'https://graph.microsoft.com/v1.0';

const cca = new ConfidentialClientApplication({
  auth: {
    clientId: M365_CLIENT_ID,
    authority,
    clientSecret: M365_CLIENT_SECRET,
  },
});

async function getToken() {
  const result = await cca.acquireTokenByClientCredential({
    scopes: ['https://graph.microsoft.com/.default'], // app-only
  });
  if (!result?.accessToken) throw new Error('Failed to acquire access token.');
  return result.accessToken;
}

async function gget(url, token) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) throw new Error(`GET ${url} failed: ${res.status} ${await res.text()}`);
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
  } catch {
    userCount = -1;
  }

  // 2) Teams channels (sample; app-only can be limited)
  let channelsSummary = [];
  try {
    const teams = await gget(`${graphBase}/teams?$top=5`, token);
    for (const t of teams.value ?? []) {
      const chans = await gget(`${graphBase}/teams/${t.id}/channels?$top=50`, token);
      channelsSummary.push({ teamId: t.id, teamName: t.displayName, channels: (chans.value?.length ?? 0) });
    }
  } catch {
    channelsSummary.push({ error: 'Teams listing not available in app-only or lacks consent.' });
  }

  // 3) SharePoint: root site drives (sample)
  let drivesSummary = [];
  try {
    const rootSite = await gget(`${graphBase}/sites/root`, token);
    const drives = await gget(`${graphBase}/sites/${rootSite.id}/drives?$top=10`, token);
    drivesSummary = (drives.value ?? []).map(d => ({ driveId: d.id, name: d.name, size: d.quota?.total ?? null }));
  } catch {
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
  const reportsPath = `reports/${ymd}-readonly-summary.json`;
 
