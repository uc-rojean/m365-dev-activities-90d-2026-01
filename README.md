
# m365-dev-activities-90d-2026-01

> **Microsoft 365 Developer — 90‑day cycle (January 2026).**  
> Daily UC logs, GitHub Actions automation, and read‑only Microsoft Graph telemetry while OneDrive/SharePoint remain in restricted mode.

!Cycle
!Month
!Mode
<!-- TODO: Add your CI badge once the workflow exists:
!CI
-->

## 📌 Purpose
- Maintain consistent **dev activity** signals during the 90‑day renewal period.
- Document **UC Day** progress and automation runs.
- Operate **read‑only** against Microsoft 365 until service restrictions are lifted.
<!-- Internal note: Extend to write operations after backend fix is confirmed. -->

## 🚦 Current Service Context
- OneDrive/SharePoint: **read‑only** due to backend incident.
- Support: Engaged, fix timeline pending.
<!-- Keep incident IDs, case numbers, and dates in /docs/support.md -->

## 🗓 UC Day Log (rolling)
- **UC Day 01** – _(YYYY‑MM‑DD hh:mm GMT+8)_ – Status: …
- **UC Day 02** – _(YYYY‑MM‑DD hh:mm GMT+8)_ – Status: …
<!-- Pattern: “UC Day NN – <timestamp> – <brief result>”. Keep logs concise here; details in /logs/YYYY/MM/DD.md -->

## ⚙️ Automation
- **Workflows:** `.github/workflows/daily.yml` (read‑only Graph GET calls)
- **Outputs:** `/reports/` (JSON/CSV summaries), `/logs/` (daily run notes)
- **Telemetry:** endpoints called, run duration, success counts
<!-- Ensure secrets are configured in GitHub → Settings → Secrets and variables → Actions -->

## 🗂 Repository Structure


-------

## 🗓 UC Day Log (January 2026 Cycle)

<!--
Before saving:
- Confirm local time (GMT+8) timestamps.
- Adjust "days remaining" if your count uses a different rule.
- Add links to logs/reports if available.
-->

### UC Day 01 – 90 days remaining (**December 27, 2025**) – Pending (Microsoft backend issue)
- **Timestamp (GMT+8):** _2025‑12‑27 hh:mm_
- **Status:** Pending / No dev changes
- **Reason:** OneDrive & SharePoint are still in **read‑only mode**; support case unresolved.
- **Notes:** Repository initialized; no write operations performed.
<!-- Internal: Keep incident/case references in /docs/support.md -->


### UC Day 02 – 89 days remaining (**December 28, 2025**) – Pending (Microsoft backend issue)
- **Timestamp (GMT+8):** _2025‑12‑28 hh:mm_
- **Status:** Pending / No dev changes
- **Reason:** Backend issue persists; continuing with documentation only.
- **Notes:** Planned automation scoped to **read‑only Graph GETs**; deferred until secrets/checks are ready.
<!-- TODO: Add daily.yml once ready; ensure secrets are configured in Actions -->


### UC Day 03 – 88 days remaining (**December 29, 2025**) – Read-only (Microsoft backend issue) — **Repository initialized**

- **Created new repository:** `m365-dev-activities-90d-2026-01`
- **Added:** `README.md` (intro, purpose, UC log structure)
- **Added:** `/docs/commits.md` (conventional commit patterns)
- **Context:** OneDrive/SharePoint still **read-only**; focusing on documentation/setup today.
- **Plan for UC Day 04 (Dec 30, 2025):**
  - Bootstrap `daily.yml` (GitHub Actions) for **read‑only Graph GET telemetry** (users, teams, sites/drives)
  - Create `/reports/` & `/logs/` folders for automation outputs

<!--
Before saving:
- Timestamp (GMT+8): 2025-12-29 HH:MM
- Link to initial commit(s): e.g., https://github.com/<org>/m365-dev-activities-90d-2026-01/commit/<sha>
- Optional PR link if you used a PR: https://github.com/<org>/<repo>/pull/<number>
Internal notes:
- Keep support/incident references in /docs/support.md
- Secrets for Actions to be added under GitHub → Settings → Secrets and variables → Actions
-->


### UC Day 04 – 87 days remaining (**December 30, 2025**) – Read-only (Microsoft backend issue)

- **Focus:** Set up structure for read‑only telemetry and daily logging (no cloud writes).
- **Activities:**
  - Created repo scaffolding for **/logs** and **/reports** (placeholders only)
  - Added **issue & PR templates** to standardize daily updates
  - Drafted **GitHub Actions** `daily.yml` skeleton (read‑only plan; safe to enable later)
  - Defined **read‑only Graph scopes** to use once secrets are ready (`Files.Read.All`, `Sites.Read.All`, `User.Read.All`)
- **Context:** OneDrive/SharePoint still **read‑only**; we will execute only **GET**/metadata operations when possible.
- **Next (UC Day 05):**
  - Enable `daily.yml` after adding secrets in **GitHub → Settings → Secrets and variables → Actions**
  - Run read‑only telemetry (list Users, Teams channels, SharePoint sites & drives)
  - Publish lightweight summaries to `/reports/` and notes to `/logs/`

<!--
Before saving:
- Timestamp (GMT+8): 2025-12-30 HH:MM
- CI badge link: add after workflow exists
- Adjust “days remaining” if your counter differs
Internal notes:
- Keep case/incident IDs in /docs/support.md
- Do NOT commit secrets; store them in GitHub Actions secrets:
  - M365_TENANT_ID
  - M365_TENANT_DOMAIN
  - M365_CLIENT_ID
  - M365_CLIENT_SECRET (optional until needed)
  - GRAPH_SCOPES="Files.Read.All Sites.Read.All User.Read.All"
-->

!Daily Read-only Telemetry


### UC Day 05 – 86 days remaining (**January 01, 2026**) – Missed (New Year; backend issue)

- **Timestamp (GMT+8):** _2026‑01‑01 hh:mm_
- **Status:** Missed / Deferred
- **Reason:** New Year celebration; OneDrive/SharePoint remain **read‑only** due to backend incident.
- **Notes:** Planned Day 05 activities (enable `daily.yml`, run read‑only telemetry, publish summaries) moved to **UC Day 06**.
- **Next (UC Day 06):**
  - Add Actions secrets, enable workflow
  - Run read‑only Graph GETs (Users, Teams channels, SharePoint sites/drives)
  - Publish summaries to `/reports/` and notes to `/logs/`


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

#### Next (UC Day 07)
- Add **pagination/delta** for wider coverage
- Normalize outputs (**CSV/JSON**) and link run artifacts from README
- Consider **change notifications** / triage for Defender alerts (still read‑only)


### UC Day 07 – 84 days remaining (**January 03, 2026**) – Read-only (backend issue)

- **Timestamp (GMT+8):** _2026‑01‑03 13:10_
- **Status:** Implemented (code + workflow updates in place); telemetry run to be validated; **Teams webhook moved to UC Day 08**
- **Activities:**
  - Added `scripts/utils/paginate.js` to support OData `@odata.nextLink` pagination
  - Added `scripts/utils/toCsv.js` to normalize arrays into CSV (one-level flatten + proper escaping)
  - Implemented `scripts/readonly-telemetry-extended.js` (MSAL client credentials; pagination + delta; exports JSON + CSV; logs)
  - Updated `.github/workflows/daily.yml` to run the extended telemetry and upload artifacts
  - Optional Teams Workflow webhook prepared (**deferred to UC Day 08**) for posting run counters to a chosen channel
- **Endpoints (GET only):**
  - Users (+ `delta`)
  - Teams channels (sample via groups tagged as Team)
  - SharePoint site drives (+ drive/root `delta` sample)
- **Deliverables (on successful run):**
  - `/reports/YYYY-MM-DD-readonly-summary.json`
  - `/reports/YYYY-MM-DD-readonly-summary.csv`
  - `/logs/YYYY-MM-DD-run-notes.txt`
- **Notes:**
  - App‑only mode; **no cloud writes** while OneDrive/SharePoint remain restricted.
  - Teams webhook mapping (Parse JSON → Post message/card) will be finalized on **UC Day 08**.

#### Next (UC Day 08)
- Finalize **Teams Workflow webhook**: add **Parse JSON** step to map `title`, `date`, and `counters.*`; post either a Markdown message or an Adaptive Card.
- Quick end‑to‑end test (`curl` or manual Action run) to confirm the channel receives the summary.
- (Optional) Persist `usersDeltaToken` across runs via a secret (e.g., `USERS_DELTA_TOKEN`) for true delta continuity.


- **UC Day 08** – _(2026-01-03 15:10 GMT+8)_ – Workflow re-run; pagination + delta; JSON/CSV written; webhook optional; fixes applied (diff markers + HTML entities + ConsistencyLevel)
- 
### UC Day 08 – 84 days remaining (**January 03, 2026**) – Read-only Telemetry (extended)

- **Timestamp (GMT+8):** _2026-01-03 15:10_
- **Status:** Completed (workflow re-run + artifacts produced)
- **Activities:**
  - Cleaned telemetry script: **removed diff markers** and **replaced HTML entities** (`&amp;`/`&gt;` → `&`/`>`)
  - Added **ConsistencyLevel: 'eventual'** for `$count=true` queries (Users, Groups filtered as Teams)
  - Implemented `paginateWithHeaders(...)` for easier header-aware pagination
  - Adjusted **Teams channels** call to rely on pagination (`@odata.nextLink`) without `$top` hardcap
  - Wrote **JSON** (`reports/YYYY-MM-DD-readonly-summary.json`) and **CSV** (`reports/YYYY-MM-DD-readonly-summary.csv`); logged run notes to `logs/YYYY-MM-DD-run-notes.txt`
  - Kept **app-only** authentication via **MSAL** client credentials (Graph `/.default`)
  - Optional **Teams Workflow webhook** posting enabled via `TEAMS_WORKFLOW_URL`
- **Endpoints (GET only):**
  - `GET /users?$top=50&$select=id,displayName,mail,userPrincipalName&$count=true` (paginated, ConsistencyLevel)
  - `GET /users/delta?$select=id,displayName,mail,userPrincipalName` (delta sample + token capture)
  - `GET /groups?$top=25&$count=true&$filter=resourceProvisioningOptions/Any(x:x eq 'Team')&$select=id,displayName` (Teams groups, ConsistencyLevel)
  - `GET /teams/{{teamId}}/channels?$select=id,displayName` (channels, paginated)
  - `GET /sites/root/drives?$top=50&$select=id,driveType,name,owner` (root site drives)
  - `GET /sites/root/drive/root/delta` (best-effort item delta; guarded by try/catch)
- **Artifacts:** `uc-day-readonly-telemetry` (zip) → `reports/YYYY-MM-DD-readonly-summary.json`, `reports/YYYY-MM-DD-readonly-summary.csv`, `logs/YYYY-MM-DD-run-notes.txt`
- **Notes:** App‑only mode; **no cloud writes** while OneDrive/SharePoint restrictions persist. Runner uses **Node 20** (global `fetch`).

#### Fixes & Troubleshooting (Day 08 / carried from Microsoft 114)
- **Node syntax error – `Unexpected token 'const'`**
  - Root cause: **diff markers** (`-` / `+`) left inside `.cjs` source
  - Fix: remove markers; re-run — script parses and executes correctly
- **Invalid Graph queries due to HTML entities**
  - Root cause: `&amp;` / `&gt;` appearing in query strings
  - Fix: replace with raw characters (`&`, `>`) in all URLs
- **$count=true queries missing header**
  - Root cause: calls lacking **ConsistencyLevel: 'eventual'`**
  - Fix: apply header to users & groups (Teams) queries; counts stabilize
- **SharePoint drive delta edge case**
  - Behavior: may fail under restricted backends
  - Fix: wrap in `try/catch` and log a **warning row** instead of failing the run

#### Commit messages
- `fix(readonly-telemetry): remove diff markers and HTML entities; add ConsistencyLevel header for $count`
- `feat(paginate): introduce paginateWithHeaders to support ConsistencyLevel on $count queries`
- `chore(teams): rely on @odata.nextLink for channels pagination; drop hard $top cap`
- `docs(day08): add UC Day 08 summary (activities, fixes, artifacts)`
- `ci(actions): ensure Node 20 runner; daily telemetry workflow stable`

#### Next (UC Day 09)
- Persist **users delta token** across runs (e.g., artifact or small KV file) for true delta continuation
- Add simple **Adaptive Card** payload for Teams webhook (status + counters)
- Expand **error matrix** for permission/tenant states; surface friendly guidance in logs
- Consider **change notifications** for select resources (still read‑only triage)

---
