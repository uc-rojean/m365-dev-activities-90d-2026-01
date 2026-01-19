
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
### UC Day 08 – 83 days remaining (**January 03, 2026**) – Read-only Telemetry (extended)

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


- **UC Day 09** – _(2026-01-06 21:37 GMT+8)_ – Light catch‑up; config & knobs applied; runtime MSAL install; **no webhook**
-

### UC Day 09 – 82 days remaining (**January 04, 2026**) – Light (no webhook)

- **Planned Date:** **January 04, 2026** (83 days remaining)
- **Actual Run (GMT+8):** **2026-01-06** _(time not captured)_
- **Reason for Delay:** **Sick leave**
- **Status:** Completed (light catch‑up; **webhook postponed** to UC Day 12)

- **Activities:**
  - **Config & knobs:** Added `config/read-only.env.sample` with safe defaults; applied `GRAPH_MAX_PAGES=25` & `GRAPH_DELAY_MS=200` in workflow
  - **Runtime dependency:** Installed **@azure/msal-node** at runtime in Actions (keeps repo light; optional persistent dep now in `package.json`)
  - **Docs housekeeping:** Updated `docs/UC-Daily-Index.md` and appended **Known states & notes** section
  - **Read‑only posture:** No cloud writes; GET‑only Graph calls; Teams webhook deferred to **UC Day 12**

- **Endpoints (GET only):**
  - `GET /users?$top=50&$select=id,displayName,mail,userPrincipalName&$count=true` (paginated; ConsistencyLevel)
  - `GET /users/delta?$select=id,displayName,mail,userPrincipalName` (delta sample)
  - `GET /groups?$top=25&$count=true&$filter=resourceProvisioningOptions/Any(x:x eq 'Team')&$select=id,displayName` (Teams groups; ConsistencyLevel)
  - `GET /teams/{{teamId}}/channels?$select=id,displayName` (channels; paginated)
  - `GET /sites/root/drives?$top=50&$select=id,driveType,name,owner` (root site drives)
  - `GET /sites/root/drive/root/delta` (best‑effort; guarded by try/catch)

- **Artifacts:**
  - `reports/YYYY-MM-DD-readonly-summary.json`
  - `reports/YYYY-MM-DD-readonly-summary.csv`
  - `logs/YYYY-MM-DD-run-notes.txt`

- **Notes:** App‑only via MSAL client credentials; Node 20 runner (global `fetch`); **read‑only** due to backend restrictions. See operational notes below.

---

### Operational notes (read‑only telemetry)
- See **Known states & notes** for backend behavior, headers, and pagination knobs:
  - `docs/UC-Daily-Index.md` — Known states & notes

---

#### Fixes & Troubleshooting (context from Day 08 / Microsoft 114)
- **Diff markers** accidentally in source → removed
- **HTML entities** (`&amp;`, `&gt;`) in queries → corrected to raw `&`, `>`
- **$count=true header** → added `ConsistencyLevel: 'eventual'` to Users & Groups queries
- **SharePoint delta** → wrapped in try/catch; logs warning when unavailable

#### Next (UC Day 10 & 11 — light)
- Teach telemetry to read/write a simple **delta token** file (optional; no webhook yet)
- Emit minimal **counters.json** for later webhook use (Day 12)

---


- **UC Day 10** – _(2026‑01‑05 time not captured GMT+8)_ – Dev pause; backend fixing issue; quick assist with Microsoft support pending (schedule conflict)
- 
### UC Day 10 – 81 days remaining (**January 05, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑05 (time not captured)_
- **Status:** Documentation-only update (**dev activities paused until January 11**)
- **Activities:**
  - Recorded backend status: **team still fixing** tenant restrictions
  - Logged support status: **quick assist pending** due to **schedule conflict**
  - Kept telemetry posture **read-only**; no Graph runs or code changes today
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** Pause until **January 11, 2026** to rest and reset mindset; continue tracking backend/support updates.

#### Next (UC Day 11)
- Maintain **documentation-only** status
- Proceed once backend team confirms progress or support session schedules

---


- **UC Day 11** – _(2026‑01‑06 time not captured GMT+8)_ – Dev pause; backend fixing issue; quick assist with Microsoft support pending (schedule conflict)
- 
### UC Day 11 – 80 days remaining (**January 06, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑06 (time not captured)_
- **Status:** Documentation-only update (**dev activities paused until January 11**)
- **Activities:**
  - Backend team **still fixing** issue (read-only restrictions persist)
  - **Support quick assist pending** — schedule conflict remains
  - No telemetry runs; keep **read-only** posture
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** Will resume light activities after **January 11, 2026** once backend/support outlook is clearer.

#### Next (UC Day 12)
- Continue **documentation-only** and monitor backend/support updates

---


- **UC Day 12** – _(2026‑01‑07 time not captured GMT+8)_ – Dev pause; backend fixing issue; quick assist with Microsoft support pending (schedule conflict)
- 
### UC Day 12 – 79 days remaining (**January 07, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑07 (time not captured)_
- **Status:** Documentation-only update (**dev activities paused until January 11**)
- **Activities:**
  - Backend team **still fixing** issue
  - **Microsoft support quick assist pending** (schedule conflict)
  - No runs or code changes; maintain **read-only** posture
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** Webhook work remains **deferred**; will resume after **January 11, 2026** as schedule allows.

#### Next (UC Day 13)
- Proceed with **support submissions** and log progress (if any)

---


- **UC Day 13** – _(2026‑01‑08 time not captured GMT+8)_ – Support session ongoing; submitted .har and Steps Recorder files to Microsoft support
- 
### UC Day 13 – 78 days remaining (**January 08, 2026**) – Documentation-only (support submissions)

- **Timestamp (GMT+8):** _2026‑01‑08 (time not captured)_
- **Status:** Documentation-only update (support session ongoing)
- **Activities:**
  - Conducted **quick assist** session with Microsoft support
  - **Submitted** diagnostic materials: **.har** file(s) and **Steps Recorder** files
  - No telemetry runs; continue **read-only** posture
- **Endpoints:** _None_ (no run)
- **Artifacts:** _External support submissions_ (not stored in repo)
- **Notes:** Await

---


- **UC Day 14** – _(2026‑01‑09 time not captured GMT+8)_ – Awaiting Microsoft support internal investigation (on submitted .har & Steps Recorder files)
- 
### UC Day 14 – 77 days remaining (**January 09, 2026**) – Documentation-only (awaiting investigation)

- **Timestamp (GMT+8):** _2026‑01‑09 (time not captured)_
- **Status:** Documentation-only update (awaiting support investigation)
- **Activities:**
  - Backend team **still fixing** issue
  - Awaiting **Microsoft support internal team** investigation of submitted materials
  - No telemetry runs or code changes; remain **read-only**
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** Continue pause; reassess after **January 11, 2026** or upon support updates.

#### Next
- Resume light activities once backend/support status improves (post‑January 11)

---


- **UC Day 14 — Extension Update** – _(2026‑01‑09 22:41 GMT+8)_ – Dashboard days aligned; Teams call with Microsoft support/internal team; new .har collected; awaiting investigation
- 
### UC Day 14 – 76 days remaining (**January 09, 2026**) – Documentation-only (support & dashboard alignment)

- **Timestamp (GMT+8):** _2026‑01‑09 22:41_
- **Status:** Documentation-only update (live support call completed; internal investigation pending until **Tuesday, January 13, 2026**)
- **Activities:**
  1. **Alignment of dev dashboard remaining days left:** Reconciled to **76 days**; noted possible **timezone mismatch** between the dev dashboard and **Manila (GMT+8)**. Adjusted README counters accordingly; will re-check on next login.
  2. **Teams video call** with **Microsoft support** and the **internal team** handling the read‑only case and mistaken violation tagging in the dev tenant.
  3. **Collected fresh `.har` file** during screen share; submitted for **internal team review**.
  4. **Waiting for investigation** results from the internal team **until Tuesday, January 13, 2026**.
- **Endpoints:** _None_ (no workflow run)
- **Artifacts:** _External support submissions_ (latest **.har**); not stored in repo
- **Notes:** Tenant remains **read‑only** (OneDrive/SharePoint). We’ll keep telemetry **GET‑only** and continue documentation updates while investigation proceeds.

#### Next
- Await investigation feedback by **January 13, 2026**; plan light activities update afterward.

---


- **UC Day 15** – _(2026‑01‑10 time not captured GMT+8)_ – Dev pause; documentation-only; awaiting Microsoft internal investigation (read-only persists)
- 
### UC Day 15 – 75 days remaining (**January 10, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑10 (time not captured)_
- **Status:** Documentation-only update (dev activities paused)
- **Activities:**
  - Backend team **still fixing** tenant restrictions (OneDrive/SharePoint in read-only)
  - Awaiting **Microsoft internal investigation** results (per UC Day 14 extension update)
  - No telemetry runs; kept **read-only** posture
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** Remaining days reflect dashboard alignment; timezone mismatch with Manila (GMT+8) noted earlier.

#### Next (UC Day 16)
- Maintain documentation-only; monitor for investigation updates

---


- **UC Day 16** – _(2026‑01‑11 time not captured GMT+8)_ – Dev pause; documentation-only; investigation pending; read-only persists
- 
### UC Day 16 – 74 days remaining (**January 11, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑11 (time not captured)_
- **Status:** Documentation-only update (dev activities paused)
- **Activities:**
  - No change in backend status; **read-only** restrictions persist
  - Still **awaiting Microsoft internal team** findings
  - No code changes or telemetry runs today
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** Webhook remains **deferred**; we’ll reconsider after investigation feedback.

#### Next (UC Day 17)
- Continue documentation-only; prep to summarize support outcome when available

---


- **UC Day 17** – _(2026‑01‑12 time not captured GMT+8)_ – Dev pause; documentation-only; awaiting Microsoft response (target update by Tue, Jan 13)
- 
### UC Day 17 – 73 days remaining (**January 12, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑12 (time not captured)_
- **Status:** Documentation-only update (dev activities paused)
- **Activities:**
  - Tracking **Microsoft internal investigation** (expecting updates by **Tuesday, January 13, 2026**)
  - No runs or code changes while read-only mode continues
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** We’ll keep the README current and stay in **GET‑only** posture once activities resume.

#### Next
- Record investigation outcome on/after **January 13, 2026**, then plan light activities

---


- **UC Day 18** – _(2026‑01‑13 19:38 GMT+8)_ – Dev pause; documentation-only; awaiting backend Jan 15 update (OneDrive/SharePoint full control); support monitoring continues
- 
### UC Day 18 – 72 days remaining (**January 13, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑13 19:38_
- **Status:** Documentation-only update (dev activities paused)
- **Activities:**
  - Checked **Service health**: next backend team update for **OneDrive/SharePoint full control** is scheduled on **January 15, 2026**.
  - Noted some **M365 services also affected**, but priority is the OneDrive/SharePoint restoration.
  - **Support case**: handler confirmed they are **actively monitoring** and awaiting the **internal team’s** findings.
  - No telemetry runs; maintained **read-only** posture to avoid any unintended changes.
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** Taking a short break to refresh and prepare for a clean comeback. We will keep documentation current. Concern about files noted; we’ll continue to avoid write actions and await the backend/internal team’s updates.

#### Next
- Await the backend team’s **January 15, 2026** update on OneDrive/SharePoint. Record outcome and plan next light steps afterward.

---


- **UC Day 19** – _(2026‑01‑14 time not captured GMT+8)_ – Dev pause; documentation-only; awaiting Jan 15 backend update (read-only persists)
- 
### UC Day 19 – 71 days remaining (**January 14, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑14 (time not captured)_
- **Status:** Documentation-only update (dev activities paused)
- **Activities:**
  - Monitoring **Service health** ahead of the **January 15** backend update window.
  - No telemetry runs or code changes; remain **read-only** to avoid unintended writes.
  - Continuing to track support communications passively (no new tickets today).
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** Remaining days aligned to dashboard. We’ll record whatever is announced tomorrow.

#### Next (UC Day 20)
- Capture any final support outcomes and the backend update results (if any).

---


- **UC Day 20** – _(2026‑01‑15 time not captured GMT+8)_ – Support final resolution noted; documentation-only; waiting for backend team fix (no new tickets)
- 
### UC Day 20 – 70 days remaining (**January 15, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑15 (time not captured)_
- **Status:** Documentation-only update (support outcome recorded; dev activities paused)
- **Activities:**
  - **Support final resolution:** Product Group’s review identified the tenant as associated with **abuse/fraud** under the **Acceptable Use Policy**; tenant placed in a **blocked state** for non-compliance. Microsoft Support **cannot override** or remove the block because it’s enforced at the **service‑protection** level.
  - Decision: **No new tickets** will be opened until the backend team finishes their fix and provides platform updates.
  - No telemetry or code changes today; **GET‑only posture** remains.
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** Continue to document status while awaiting backend/investigation progress.

#### Next (UC Day 21)
- Log any **Service health** updates related to SharePoint/OneDrive access and remediation timelines.

---


- **UC Day 21** – _(2026‑01‑16 time not captured GMT+8)_ – Service health updates recorded (SharePoint/OneDrive); documentation-only; remediation in progress
- 
### UC Day 21 – 69 days remaining (**January 16, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑16 (time not captured)_
- **Status:** Documentation-only update (service health notes)
- **Activities:**
  - **SharePoint/OneDrive:** *Some admins and users managed through Microsoft 365 Groups may be unable to access some Microsoft 365 services*  
    - **Jan 16, 2026, 2:19 PM GMT+8** — *The deployment of the fix has resumed and we're monitoring as it saturates for timeout errors and latency issues. We continue to anticipate the fix to complete by the **end of January 2026***.  
      **Next update by:** **Friday, January 23, 2026 at 4:00 PM GMT+8**
  - **SharePoint/OneDrive:** *Some users with edit and full control permissions may be unable to access or share some files in Microsoft OneDrive*  
    - **Jan 15, 2026, 2:47 AM GMT+8** — *Validation of our automated repair process to identify and correct currently impacted folders, files, and list items is ongoing and will require a bit longer than expected. An updated timeline is expected in the next communication.*  
      **Next update by:** **Thursday, January 22, 2026 at 4:00 AM GMT+8**
  - No runs or code changes; documentation only.
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** We’ll continue to mirror key service health statements and dates to keep the history accurate.

#### Next (UC Day 22)
- Maintain documentation-only status; record any changes in the service health timelines.

---


- **UC Day 22** – _(2026‑01‑17 time not captured GMT+8)_ – Dev pause; documentation-only; tracking next service health milestones (read-only persists)
- 
### UC Day 22 – 68 days remaining (**January 17, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑17 (time not captured)_
- **Status:** Documentation-only update (no new announcements)
- **Activities:**
  - Awaiting the next **SharePoint/OneDrive** service health updates (Jan 22 and Jan 23 schedule).
  - No telemetry or code changes; keep **GET‑only** posture.
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** We’ll reassess plans after the upcoming service health communications.

#### Next
- Record outcomes from the Jan 22 and Jan 23 service health updates; continue documentation-first approach.

---


- **UC Day 23** – _(2026‑01‑18 time not captured GMT+8)_ – Dev pause; documentation-only; monitoring service health timelines (read-only persists)
- 
### UC Day 23 – 67 days remaining (**January 18, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑18 (time not captured)_
- **Status:** Documentation-only update (dev activities paused)
- **Activities:**
  - Continuing to **monitor Service health** for SharePoint/OneDrive.
  - Awaiting scheduled communications noted previously:
    - **Jan 22, 2026 at 4:00 AM GMT+8** – OneDrive permissions/access repair process update.
    - **Jan 23, 2026 at 4:00 PM GMT+8** – Fix deployment/monitoring update for timeout/latency issues; completion still targeted **by end of January 2026**.
  - No telemetry runs or code changes; **GET‑only posture** remains.
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** We’ll continue “documentation‑first” until the backend team posts further details.

#### Next (UC Day 24)
- Maintain documentation‑only; if backend extends beyond current estimates, prepare to resume **dev activities** in **read‑only mode**.

---
