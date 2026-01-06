
# UC Daily Index — Read‑only Telemetry Campaign

This index tracks our day‑by‑day activities, status, timestamps (GMT+8), artifacts, and notes.  
**Scope:** Read‑only, app‑only telemetry via Microsoft Graph; no cloud writes while backend restrictions persist.

---

- **UC Day 06** – _(2026‑01‑02 06:11 GMT+8)_ – Workflow enabled; telemetry executed; artifacts uploaded; fixes applied (Graph query + script truncation)
- 
### UC Day 06 – 85 days remaining (**January 02, 2026**) – Read-only (backend issue)

- **Timestamp (GMT+8):** _2026‑01‑02 06:11_
- **Status:** Completed (workflow enabled + telemetry run)
- **Activities:**
  - Added **Actions secrets**: `M365_TENANT_ID`, `M365_TENANT_DOMAIN`, `M365_CLIENT_ID`, `M365_CLIENT_SECRET`, `GRAPH_SCOPES`
  - Upgraded `.github/workflows/daily.yml` to execute Node **read‑only telemetry**
  - Implemented minimal telemetry script (`scripts/readonly-telemetry.js`) using **MSAL (client credentials)** and **Graph GETs**
  - Generated summaries to `/reports/` and notes to `/logs/` (**uploaded as run artifacts**)
- **Endpoints (GET only):** Users (sample), Teams channels (sample), SharePoint site drives (sample)
- **Artifacts:** `uc-day-readonly-telemetry` (zip) → `reports/YYYY-MM-DD-readonly-summary.json`, `logs/YYYY-MM-DD-run-notes.txt`
- **Notes:** App‑only mode; **no cloud writes** while OneDrive/SharePoint remain restricted.

#### Fixes & Troubleshooting (Day 06)
- **Graph Explorer – “Unsupported Query”** when listing applications:
  - Resolved by adding **Application.Read.All** (delegated) and using **ConsistencyLevel: eventual** with `$count=true` when filtering.
  - Retrieved app object & **Client ID (`appId`)** and created a new **client secret (`addPassword`)**; saved `secretText` securely.
- **GitHub Actions – `SyntaxError: Unexpected end of input`** in telemetry script:
  - Root cause: **truncated file**; replaced with **validated script** using Node 20’s built‑in `fetch` (no `node-fetch` needed).
  - Re‑ran workflow; **artifact successfully produced**.
- **Runtime install option (optional):**
  - If `package.json` is absent, workflow can install MSAL at runtime: `npm i @azure/msal-node`.

---

- **UC Day 07** – _(2026‑01‑03 XX:XX GMT+8)_ – Pagination + delta planning; CSV/JSON normalization plan; webhook decision deferred
- 
### UC Day 07 – 84 days remaining (**January 03, 2026**) – Planning (read-only)

- **Timestamp (GMT+8):** _2026‑01‑03 (time not captured)_
- **Status:** Completed (planning session)
- **Activities:**
  - Designed **pagination knobs** (`GRAPH_MAX_PAGES`, `GRAPH_DELAY_MS`) and **delta** approach for users & drive items
  - Decided to **normalize** outputs to **CSV + JSON**
  - Deferred **Teams webhook** until we stabilize counters
- **Notes:** Continued read‑only posture due to backend state.

---

- **UC Day 08** – _(2026‑01‑03 15:10 GMT+8)_ – Workflow re‑run; pagination + delta; JSON/CSV written; fixes applied (diff markers + HTML entities + ConsistencyLevel)
- 
### UC Day 08 – 84 days remaining (**January 03, 2026**) – Read-only Telemetry (extended)

- **Timestamp (GMT+8):** _2026‑01‑03 15:10_
- **Status:** Completed (workflow re‑run + artifacts produced)
- **Activities:**
  - Cleaned telemetry script: **removed diff markers** and **replaced HTML entities** (`&amp;`/`&gt;` → `&`/`>`)
  - Added **ConsistencyLevel: 'eventual'** for `$count=true` queries (Users, Groups filtered as Teams)
  - Implemented `paginateWithHeaders(...)` for header‑aware pagination
  - Adjusted **Teams channels** call to rely on pagination (`@odata.nextLink`) without `$top` hardcap
  - Wrote **JSON** (`reports/YYYY-MM-DD-readonly-summary.json`) and **CSV** (`reports/YYYY-MM-DD-readonly-summary.csv`); logged run notes to `logs/YYYY-MM-DD-run-notes.txt`
  - Kept **app‑only** authentication via **MSAL** client credentials (Graph `/.default`)
- **Endpoints (GET only):**
  - `GET /users?$top=50&$select=id,displayName,mail,userPrincipalName&$count=true`
  - `GET /users/delta?$select=id,displayName,mail,userPrincipalName`
  - `GET /groups?$top=25&$count=true&$filter=resourceProvisioningOptions/Any(x:x eq 'Team')&$select=id,displayName`
  - `GET /teams/{teamId}/channels?$select=id,displayName`
  - `GET /sites/root/drives?$top=50&$select=id,driveType,name,owner`
  - `GET /sites/root/drive/root/delta` (guarded by `try/catch`)
- **Artifacts:** `reports/YYYY-MM-DD-readonly-summary.json`, `reports/YYYY-MM-DD-readonly-summary.csv`, `logs/YYYY-MM-DD-run-notes.txt`
- **Notes:** App‑only mode; **no cloud writes** while OneDrive/SharePoint restrictions persist. Runner uses **Node 20** (global `fetch`).

#### Fixes & Troubleshooting (Day 08 / carried from Microsoft 114)
- **Node syntax error – `Unexpected token 'const'`** → diff markers removed
- **Invalid Graph queries** due to HTML entities → replaced with raw `&`, `>`
- **$count=true without header** → added **ConsistencyLevel: 'eventual'**
- **SharePoint drive delta** may fail under restrictions → wrapped in `try/catch`, log warning row

---

- **UC Day 09** – _(Planned: 2026‑01‑04 · 83 days remaining)_ | **Executed:** _(2026‑01‑06)_
- 
### UC Day 09 – 83 days remaining (**January 04, 2026**) – Light (no webhook)

- **Planned Date:** **January 04, 2026** (83 days remaining)
- **Actual Run (GMT+8):** **January 06, 2026** _(time not captured)_
- **Reason for Delay:** **Sick leave**
- **Status:** Completed (light catch‑up; **webhook postponed** to UC Day 12)
- **Activities:**
  - **Docs housekeeping:** Added UC Day 06–08 entries, artifacts links, and fixes summary
  - **Config sample:** Prepared `config/read-only.env.sample` with safer pagination & logging defaults
  - **Delta prep:** Created `tokens/users-delta-token.txt` (stub) for future delta continuity
- **Notes:** Keep **read‑only** posture; no webhook work until **UC Day 12**.

---

## Known states & notes

- **Tenant/Backend restrictions (OneDrive/SharePoint):**  
  Certain **drive item delta** calls may fail while services are read‑only; script **logs a warning row** and continues (no hard failure).
- **Graph `$count=true` requirements:**  
  When using `$count=true`, send header **`ConsistencyLevel: 'eventual'`** to ensure reliable results (applied to **Users** and **Groups** queries).
- **Pagination & throttling:**  
  Tuned via **`GRAPH_MAX_PAGES`** and **`GRAPH_DELAY_MS`**. Current light defaults: `GRAPH_MAX_PAGES=25`, `GRAPH_DELAY_MS=200`.
- **Authentication:**  
  **App‑only** via **MSAL client credentials** (`/.default` scopes). No delegated flows used in telemetry runs.
- **Node version:**  
  GitHub Actions runner uses **Node 20** with **global `fetch`** (no `node-fetch` needed).
- **Webhook plan:**  
  Deferred until **UC Day 12** to reduce cognitive load. We’ll wire it to a small `counters.json` or daily summary when ready.

---
