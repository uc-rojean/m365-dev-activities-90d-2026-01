
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


- **UC Day 24** – _(2026‑01‑19 time not captured GMT+8)_ – Dev pause; documentation-only; preparing plan to resume read-only dev if backend extends
- 
### UC Day 24 – 66 days remaining (**January 19, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑19 (time not captured)_
- **Status:** Documentation-only update (dev activities paused)
- **Activities:**
  - No new announcements observed yet; still **tracking** the Jan 22 and Jan 23 service health updates.
  - Kept **read‑only** posture; no workflow run or code changes.
  - Drafting a light **comeback plan** (GET‑only telemetry, counters, logging polish) to execute **if** the backend team extends remediation beyond the next updates.
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** We’ll decide on resuming **read‑only dev** immediately after the upcoming service health communications.

#### Next
- Record outcomes from the Jan 22 and Jan 23 updates; if remediation is extended, resume light **read‑only** dev activities with daily documentation.

---


- **UC Day 25** – _(2026‑01‑20 time not captured GMT+8)_ – Dev pause; documentation-only; monitoring service health timelines (read‑only persists)
- 
### UC Day 25 – 65 days remaining (**January 20, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑20 (time not captured)_
- **Status:** Documentation-only update (dev activities paused; awaiting backend team updates)
- **Activities:**
  - Continuing to **monitor Service health** for SharePoint/OneDrive.
  - Still awaiting previously noted communications:
    - **Jan 22, 2026 at 4:00 AM GMT+8** — OneDrive permissions/access repair process update.
    - **Jan 23, 2026 at 4:00 PM GMT+8** — Fix deployment/monitoring update for timeout/latency issues; completion still targeted **by end of January 2026**.
  - No telemetry runs or code changes; **GET‑only posture** remains.
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** Remaining days aligned to dashboard. We’ll keep updates minimal to reduce load while waiting for backend progress.

#### Next
- Record outcomes from the Jan 22 and Jan 23 service health updates. If remediation extends, resume light **read‑only** dev activities with daily documentation.

---


- **UC Day 26** – _(2026‑01‑21 time not captured GMT+8)_ – Dev pause; documentation-only; monitoring Jan 22 (04:00) and Jan 23 (16:00) service health updates (read‑only persists)
- 
### UC Day 26 – 64 days remaining (**January 21, 2026**) – Documentation-only (no workflow)

- **Timestamp (GMT+8):** _2026‑01‑21 (time not captured)_
- **Status:** Documentation-only update (dev activities paused; awaiting backend team updates)
- **Activities:**
  - Monitoring **Service health** for SharePoint/OneDrive:
    - **Jan 22, 2026 at 4:00 AM GMT+8** — OneDrive permissions/access repair process update.
    - **Jan 23, 2026 at 4:00 PM GMT+8** — Fix deployment/monitoring update for timeout/latency issues; completion still targeted **by end of January 2026**.
  - Community/peer signal: a client with a dev account reported **deactivation notices** appearing **without email notification**, suggesting broader impact across tenants.
  - No telemetry runs or code changes; **GET‑only posture** remains.
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** We’ll keep updates minimal and factual while waiting for the next official communications.

#### Next
- Record outcomes from the **Jan 22 (04:00)** and **Jan 23 (16:00)** updates; if remediation extends, resume light **read‑only** dev activities with daily documentation.

---


- **UC Day 27** – _(2026‑01‑22 03:01 GMT+8)_ – Backend update logged: OneDrive restore/share permission issue; automated repair partially deployed; full saturation ETA late Feb 2026
- 
### UC Day 27 – 63 days remaining (**January 22, 2026**) – Documentation-only (service health update)

- **Timestamp (GMT+8):** _2026‑01‑22 03:01_
- **Status:** Documentation-only update (backend remediation in progress; no workflow)
- **Issue:** Some users with edit and full control permissions may be unable to access or share some files in Microsoft OneDrive
- **Latest Update (Logged):**
  - **User impact:** Users with edit and full control permissions may be unable to access or share some files/folders in OneDrive.
  - **More info:** Impact specifically affects **files, folders, and list items that were deleted and recently restored from the recycle bin**. Users may experience failures in **sharing** and **permission operations**. Processes enumerating permissions may also fail. **Site administrators retain complete access** to the deleted/restored content.
  - **Root cause:** A recent deployment introduced a **code regression** causing a compatibility issue that prevents deleted-and-restored items from becoming accessible again.
  - **Update (Jan 22, 2026, 3:01 AM GMT+8):** Validations for the **automated repair process** are complete and it has been deployed to a portion of the affected infrastructure. Additional tests are running in that infrastructure to confirm the desired remediation effect before wider deployment. Current estimate for repair process saturation across all affected infrastructure: **late February 2026**.
  - **Next update by:** **Thursday, February 5, 2026 at 4:00 AM GMT+8**
- **Activities:**
  - Logged the latest backend update and timelines (no history entries included).
  - Maintained **read-only posture**; no telemetry runs or code changes today.
- **Endpoints:** _None_ (no run)
- **Artifacts:** _None_ (no run)
- **Notes:** While the fix is being implemented, organizations may raise a support case to have the fix manually run to repair affected items. For now, we will continue documentation-only updates and wait for the next backend communication.

#### Next
- Wait for the next scheduled update (**Feb 5, 2026 4:00 AM GMT+8**) and record any changes in timeline or remediation scope.

---


- **UC Day 28** – _(2026‑01‑23 14:11 GMT+8)_ – Unexpected OneDrive AUP block (/FraudThrottle.htm#1033); backend update logged for M365 Groups SecurityEnabled impact; fix saturation ongoing
- 
### UC Day 28 – 62 days remaining (**January 23, 2026**) – Documentation-only (critical access issue + service health update)

- **Timestamp (GMT+8):** _2026‑01‑23 14:11_
- **Status:** Documentation-only update (critical access issue observed; backend remediation ongoing)

- **Critical event (Tenant access / OneDrive):**
  - **Observed:** OneDrive shows **Access Denied** message:
    - “This page has been blocked as it violates the Acceptable Use Policy located in the Terms of Use. If you believe this is a mistake, please contact our Support team using M365 Admin Center for further assistance.”
  - **URL indicator:** page includes `/FraudThrottle.htm#1033`
  - **Impact concern:** primary OneDrive data appears inaccessible (estimated ~50TB). Tenant usefulness and data safety are now uncertain.
  - **Action today:** documentation-only (no changes executed).

- **Service health update (Logged – latest only):**
  - **Issue:** Some admins and users managed through Microsoft 365 Groups may be unable to access some Microsoft 365 services
  - **User impact:** Admins and users managed through Microsoft 365 Groups may be unable to access some Microsoft 365 services.
  - **More info:** Affects admins/users whose access is managed by Microsoft 365 Groups previously configured with `SecurityEnabled=True` (now switched to `False`).
  - **Root cause:** A recent service operation intended to upgrade API flow changed `SecurityEnabled` back to `False` by default, causing access impact.
  - **Update (Jan 23, 2026, 2:11 PM GMT+8):** Fix deployment is progressing as expected; monitoring continues as it saturates.
  - **Next update by:** **Friday, January 30, 2026 at 4:00 PM GMT+8**
  - **Manual remediation guidance:** service health provided PowerShell/Graph steps to restore `SecurityEnabled=True` for impacted groups (not executed today; logged for reference).

- **Endpoints:** _None_ (no workflow run)
- **Artifacts:** _None_ (no run)
- **Notes:** Maintain documentation-first approach until backend/service health provides the next official update. Current priority is understanding the OneDrive AUP block state and whether access/data can be restored.

#### Next
- Monitor backend update on **Jan 30, 2026 (4:00 PM GMT+8)** and record changes in status, remediation scope, or timeline.

---


- **UC Day 29** – _(2026‑01‑24 time not captured GMT+8)_ – Documentation‑only; OneDrive/SharePoint blocked (Access Denied); plan to continue limited dev activities excluding SP/OD; conversation backup first

-

### UC Day 29 – 61 days remaining (**January 24, 2026**) – Documentation‑only (no workflow)
- **Timestamp (GMT+8):** _2026‑01‑24 (time not captured)_
- **Status:** Documentation‑only update (pause continues; planning limited dev activities without SharePoint/OneDrive)
- **Activities:**
  - Confirmed **OneDrive & SharePoint are fully blocked (Access Denied)**; no access to SP/OD content or uploads at this time. 
  - Decision: Continue **documentation-first** while preparing a **limited dev activity plan** that excludes SharePoint/OneDrive endpoints entirely.
  - **Dev activity plan (limited, no SharePoint/OneDrive):**
    - Focus on **Graph read-only telemetry** for safe areas only (e.g., Users/Groups/Teams where available) and skip all `/sites/*` and OneDrive/SharePoint calls.
    - Improve workflow resilience: treat blocked services as **warnings** (log + continue) instead of failing the run.
    - Maintain **Entra/App registration hygiene** (review permissions, secret rotation planning, least-privilege checks) without touching SharePoint/OneDrive.
  - Noted that **Microsoft apps + Windows 11 license remain active**, and **Outlook is accessible**, so there is still a channel to monitor and respond to support communications.
  - Priority action: **Back up our conversations** into a Word document archive so progress and decisions remain accessible even if the dev tenant becomes unrecoverable.
- **Endpoints:** _None_ (no workflow run)
- **Artifacts:** _None_ (documentation-only)
- **Notes:** Continue daily README documentation; resume limited read-only dev activities once the plan is ready (excluding SP/OD) and/or when backend/support provides updates.

#### Next
- Keep documenting daily status and support/service health updates.
- When ready, restart dev activities in a limited way (no SharePoint/OneDrive) and keep workflows “green” by handling blocked endpoints gracefully.

---


### UC Day 30 – 60 days remaining (January 25, 2026) – Documentation-only (SP/OD blocked; backup focus)

- **Planned Date:** January 25, 2026 (60 days remaining)  
- **Actual Run:** January 25, 2026 (time not captured)  
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- **SharePoint and OneDrive remain totally blocked (Access Denied).**
- Microsoft desktop apps licensing is still working (including Windows 11 + Microsoft applications).
- Current priority: **back up all key conversations and session notes** first, before resuming dev activities or support escalation.
- Goal: keep the dev account active/renewable if possible (license value remains helpful even while SP/OD is blocked).

#### Observations / Alerts
- Received workflow notification email:
  - **`[uc-rojean/m365-dev-activities-90d-2026-01] Run failed: Daily Read-only Telemetry - main (ff5cd3e)`**
- Likely cause: existing telemetry flow still touches SharePoint/OneDrive endpoints and fails due to the current access block.

#### Activities (Documentation-only)
- Logged the SP/OD blocked status and the workflow failure email details for traceability.
- Continued **conversation backup** work (archiving multiple chats into Word documents for long-term reference).
- Noted that support outreach will resume **after** backups are completed.

#### Plan (Next Steps — after backups)
- Resume dev activities in a **limited mode** that excludes SharePoint/OneDrive until access is restored:
  - Focus on **Graph Directory** (users/groups/delta), **Teams structure** (where permitted), and **Outlook signals** (if accessible).
- Update automation to avoid failing runs when SP/OD is unavailable:
  - Add a “skip SP/OD” flag and/or wrap SP/OD calls in guarded error handling so the workflow can still produce reports.

#### Endpoints (Planned / Allowed — GET only; exclude SharePoint/OneDrive for now)
- `/users` (pagination + `$select`, `$count`)
- `/users/delta` (delta sample)
- `/groups` (Teams-backed group discovery where applicable)
- `/teams/{teamId}/channels` (structure listing, if accessible)
- Mail/calendar endpoints (delegated), if enabled and needed

#### Artifacts
- None (documentation-only day)

#### Notes
- Continue maintaining **read-only posture** while access remains blocked.
- Keep preserving evidence/timeline (emails, screenshots, timestamps) for future support escalation.
- Cloud storage strategy will be revisited separately if SP/OD remains unavailable long-term.

---


### UC Day 31 – 59 days remaining (January 26, 2026) – Documentation-only (backup nearing completion)

- **Planned Date:** January 26, 2026 (59 days remaining)  
- **Actual Run:** January 26, 2026 (time not captured)  
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked / Access Denied**, so we are keeping a **documentation-first** approach.
- I am **almost finished backing up** all our conversations/chat history to Word documents for long-term reference.
- Goal remains the same: keep the dev account alive/renewable if possible (license value still helps), while planning alternatives for cloud storage.

#### Activities (Documentation-only)
- Continued and nearly completed the **chat/conversation backup** process (organizing sessions for future review).
- Recorded that dev activities remain paused until backups are completed, to reduce stress and avoid missed documentation.
- Maintained **read-only posture** due to SP/OD access restrictions.

#### Plan (Next Steps — after backup completion)
- Once backups are complete, resume dev activities in **limited mode** (exclude SharePoint/OneDrive until access is restored):
  - Focus on Microsoft Graph **Directory** signals (users/groups/delta) and other accessible workloads.
  - Keep workflows resilient by avoiding SP/OD calls that can fail while access is blocked.
- After backups, resume contacting support again (Outlook still accessible), using a clear timeline and preserved evidence.

#### Endpoints / Workloads (Planned — limited mode; exclude SharePoint/OneDrive for now)
- Graph Directory: `/users`, `/users/delta`, `/groups` (GET-only)
- Teams structure (if accessible): `/teams/{teamId}/channels` (GET-only)
- Outlook signals (if needed and accessible): mailbox/calendar endpoints (GET-only, delegated where applicable)

#### Artifacts
- None (documentation-only day)

#### Notes
- Priority is preservation: keep documentation updated while finishing backups.
- Cloud storage strategy will be decided separately if SP/OD remains blocked long-term.

---


### UC Day 32 – 58 days remaining (January 27, 2026) – Documentation-only (support screen share; evidence prep)

- **Planned Date:** January 27, 2026 (58 days remaining)  
- **Actual Run:** January 27, 2026 (time not captured)  
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint Online and OneDrive for Business remain **blocked (Access Denied)**.
- We continue a **documentation-first** approach while coordinating with Microsoft Support.
- Goal: restore access (or obtain a safe data-retrieval path) while keeping the tenant active and licenses usable.

#### Support Case Update
- **Case ID:** 2601260030005751  
- **Assigned Support Ambassador:** Rilwan Abiodun Ismail (Microsoft SMB O365 Support)  
- **Working Hours:** Mon–Fri, 09:00 AM – 05:00 PM (EST)  
- **Scope Notes (from Support):** No RCA provided by break/fix; third-party apps are out of scope; remote session may be requested (observe‑only, no control).

##### Latest Interaction (Jan 26, 2026 – late evening, GMT+8)
- **Live screen-share session completed** with Microsoft Support.
- **Requested by Support:** Provide **screenshots** showing **Access Denied** for:
  1) SharePoint  
  2) SharePoint Admin  
  3) OneDrive
- **Next step by Support:** Coordinate/escalate to higher-level team for root cause and restoration path after receiving the screenshots.

#### Activities (Documentation-only)
- Logged the **support ownership email** and **screen-share session** outcomes.
- Prepared the **evidence plan** (screenshots of Access Denied pages in SharePoint, SharePoint Admin, and OneDrive).
- Continued organizing backups of key conversations for historical traceability and future reviews.

#### Action Items
- **Capture screenshots** of Access Denied in SharePoint, SharePoint Admin, and OneDrive (**pending/ongoing**).
- **Reply-all** to the support email thread with the screenshots and brief timestamps/notes.
- Await support’s update after escalation.

#### Plan (Next Steps)
- Maintain **read-only** and **documentation-first** posture until SP/OD access is restored.
- After evidence is submitted, **track support responses** and schedule follow-up screen share if requested.
- When we resume dev signals, operate in **limited mode** (exclude SharePoint/OneDrive), focusing on Graph Directory, Teams structure, and Outlook endpoints.

#### Artifacts
- **Support thread:** Case 2601260030005751 (email)  
- **Evidence:** Screenshots of Access Denied pages (**to be attached via email**)

#### Notes
- Keep preserving a clear timeline (dates/times, who called, what was requested).
- No workflow/code changes today; documentation-only while evidence is being prepared and submitted.
``

---


### UC Day 33 – 57 days remaining (January 28, 2026) – Documentation-only (support escalation ongoing; SP/OD still blocked)

- **Planned Date:** January 28, 2026 (57 days remaining)  
- **Actual Run:** January 28, 2026 (time not captured)  
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint Online, SharePoint Admin Center, and OneDrive remain **blocked (Access Denied)**.
- Current priority remains **documentation + conversation backup** to preserve history and evidence while waiting for support resolution.
- Goal: maintain daily README updates until the support ticket is resolved and access is restored.

#### Support Case Update
- **Support Request ID:** 2601260030005751
- A Microsoft Support screen-share session was completed, and the support engineer requested **screenshots** showing **Access Denied** for:
  - SharePoint
  - SharePoint Admin
  - OneDrive
- Support advised they will coordinate/escalate to a higher-level team after reviewing the screenshots to investigate the cause of the sudden access blocking.

#### Activities (Documentation-only)
- Logged the latest support interaction and the required evidence (screenshots for SP/OD/Admin Access Denied).
- Continued **backup of key conversations and session notes** into Word documents for long-term retention.
- Maintained documentation-first posture while waiting for Microsoft’s investigation and next update.

#### Artifacts
- None (documentation-only day)

#### Notes
- Maintain **read-only posture** while SharePoint/OneDrive access remains blocked.
- Keep collecting a clear timeline (dates/times, screenshots, support replies) to support escalation and resolution tracking.

#### Next Steps
- Send the requested screenshots (SharePoint, SharePoint Admin, OneDrive – Access Denied) to the support thread (Reply All).
- Continue daily README updates while awaiting support’s resolution and restoration steps.

---


### UC Day 34 – 56 days remaining (January 29, 2026) – Documentation-only (support validation call; SP/OD still blocked)

- **Planned Date:** January 29, 2026 (56 days remaining)  
- **Actual Run:** January 29, 2026 (time not captured)  
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Current priority remains **documentation-first** while waiting for Microsoft Support investigation and resolution.
- Goal: maintain daily README updates as a continuous timeline until full access is restored.

#### Support Case Update
- **Support Request ID:** 2601260030005751
- Microsoft Support called to **validate** whether the issue still persists.
- Confirmation provided during the call:
  - **SharePoint:** still **Access Denied**
  - **OneDrive:** still **Access Denied**
- Support advised the case is still being **coordinated with the internal team** for further investigation.
- Additional note from Support: there are still **backend issues pending fix**, which may be contributing to the ongoing access problem.

#### Activities (Documentation-only)
- Logged the support validation call outcome and current status (SP/OD still Access Denied).
- Continued maintaining a clear timeline of events, support touchpoints, and next steps for traceability.

#### Artifacts
- None (documentation-only day)

#### Notes
- Maintain **read-only posture** while SharePoint/OneDrive access remains blocked.
- Continue to preserve the timeline (support calls, confirmations, and any backend/service notes).

#### Next Steps
- Await internal-team investigation updates from Microsoft Support.
- Continue daily README documentation until the ticket reaches a resolution and access is restored.

---

#### Extension Update (January 30, 2026 – 01:45 AM, GMT+8)

- Observed recurring workflow failure email:
  - **`[uc-rojean/m365-dev-activities-90d-2026-01] Run failed: Daily Read-only Telemetry - main (6227529)`**
- Implemented a resilience fix to prevent failures caused by **SharePoint/OneDrive Access Denied**:
  - Added a skip flag approach: **`SKIP_SP_OD=true`** so SharePoint/OneDrive endpoints are skipped while access remains blocked.
  - Updated telemetry script to treat SharePoint/OneDrive collection as **best-effort** (log and continue instead of failing the entire run).
  - Hardened pagination utility to handle `@odata.nextLink` reliably and support optional headers.
  - Improved CSV utility for stable, consistent output (sorted headers + safer escaping).
- Workflow dependency note:
  - Confirmed **no `package-lock.json` exists** yet; workflow uses `npm install` when lock file is absent.
- Purpose of this extension:
  - Keep read-only telemetry runs operational **without SharePoint/OneDrive**, while support investigation continues.

---


### UC Day 35 – 55 days remaining (January 30, 2026) – Documentation-only (telemetry workflow stable; awaiting support)
- **Planned Date:** January 30, 2026 (57 days remaining)  
- **Actual Run:** January 30, 2026 (time not captured)  
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**. [1](L674)
- Current approach remains **documentation-first** while Microsoft Support investigation continues. [1](L674)
- Microsoft backend issues are still pending fix (no resolution confirmed yet). [1](L684)

#### Support Case Update
- **Support Request ID:** 2601260030005751 [1](L679)
- As of this moment: **no new email response and no call received** from Microsoft Support (awaiting next update). [1](L684)

#### Workflow / Repo Maintenance (Daily Read-only Telemetry)
- The previously failing workflow **“Daily Read-only Telemetry”** was fixed, and the latest run is confirmed **successful** (no issue observed after yesterday’s changes). [1](L1907)
- Implemented resilience handling to prevent failures caused by **SharePoint/OneDrive Access Denied**:
  - Added **SKIP_SP_OD=true** to skip SharePoint/OneDrive endpoints while access remains blocked. [1](L1909)
  - Updated telemetry logic to treat SharePoint/OneDrive collection as **best-effort** (log and continue instead of failing the run). [1](L1909)
  - Hardened pagination utility for reliable `@odata.nextLink` handling and improved CSV output stability. [1](L1912)

#### Activities (Documentation-only)
- Logged successful status of the repaired telemetry workflow and confirmed stability after fixes. [1](L1909)
- Logged that Microsoft Support has not yet returned with new communication (email/call). [1](L684)
- Continued maintaining a clear timeline while SharePoint/OneDrive access remains blocked. [1](L674)

#### Artifacts
- Workflow run artifacts expected/available via GitHub Actions: `reports/**` and `logs/**` (from the hardened workflow design). [1](L1909)

#### Notes
- Maintain **read-only posture** while SharePoint/OneDrive access is blocked. [1](L674)
- Continue daily README documentation until support provides a resolution or restoration path. [1](L674)

#### Next Steps
- Wait for Microsoft Support follow-up (email or call) and be ready for another screen-share session if requested. [1](L679)
- Continue documentation-only daily updates while backend issues remain unresolved. [1](L684)

---


### UC Day 36 – 54 days remaining (January 31, 2026) – Documentation-only (awaiting support update)
- **Planned Date:** January 31, 2026 (54 days remaining)  
- **Actual Run:** January 31, 2026 (time not captured)  
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Microsoft backend issues are still **pending fix** (no confirmed resolution yet).
- Weekend posture: keep updates **documentation-only** while waiting for support follow-up.

#### Support Case Update
- **Support Request ID:** 2601260030005751
- No new email or call received from Microsoft Support as of today.
- Expecting the next update possibly on **Monday** (no schedule confirmed).

#### Workflow / Repo Maintenance (Daily Read-only Telemetry)
- The previously failing “Daily Read-only Telemetry” workflow remains **stable** after the fixes.
- Current approach keeps telemetry operational while SharePoint/OneDrive is blocked (SKIP_SP_OD enabled), allowing runs to continue without failing due to SP/OD restrictions.

#### Activities (Documentation-only)
- Logged current status: SP/OD still blocked, support follow-up pending, backend fix still pending.
- Continued maintaining the daily README timeline while waiting for support resolution.

#### Artifacts
- None for today (documentation-only day).

#### Notes
- Maintain **read-only posture** while SharePoint/OneDrive access remains blocked.
- Continue daily documentation until support provides a resolution or restoration path.

#### Next Steps
- Wait for Microsoft Support follow-up (email/call) and be ready for another screen-sharing session if requested.
- Continue documentation-only updates through the weekend.
``

---


### UC Day 37 – 53 days remaining (February 01, 2026) – Documentation-only (awaiting support update; maintain calm + low-pressure posture)
- **Planned Date:** February 01, 2026 (53 days remaining)
- **Actual Run:** February 01, 2026 (time not captured)
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Microsoft backend issues are still **pending fix** (no confirmed resolution yet).
- Maintain a **calm, low-pressure posture** (no new changes required today since workflow is stable).

#### Support Case Update
- **Support Request ID:** 2601260030005751
- No new email or call received from Microsoft Support as of today.
- Expecting a possible support update **later afternoon/evening today** (no schedule confirmed).

#### Workflow / Repo Maintenance (Daily Read-only Telemetry)
- Daily Read-only Telemetry workflow continues to run **smoothly/stably** after recent fixes.
- Current approach remains: keep telemetry operational while SP/OD is blocked (skip or best-effort handling where applicable).

#### Activities (Documentation-only)
- Logged current status: SP/OD still blocked, support follow-up pending, backend fix still pending.
- Continued maintaining the daily README timeline while waiting for support resolution.
- Avoided introducing new changes today to reduce stress and preserve stability.

#### Artifacts
- None for today (documentation-only day).

#### Notes
- Maintain **read-only posture** while SharePoint/OneDrive access remains blocked.
- Continue daily documentation until support provides a resolution or restoration path.

#### Next Steps
- Wait for Microsoft Support follow-up (email/call) and be ready for another screen-sharing session if requested.
- Continue documentation-only updates until access is restored.
``

---


### UC Day 38 – 52 days remaining (February 02, 2026) – Documentation-only (Microsoft Support contact + screen share; SP/OD still blocked)
- **Planned Date:** February 02, 2026 (52 days remaining)
- **Actual Run:** February 02, 2026 (time not fully captured)
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Continue maintaining a calm, low-pressure posture while waiting for full restoration.

#### Support Case Update (NEW UC Day Log)
- **Support Request ID:** 2601260030005751
- **Call Attempt (Missed):** Microsoft Support tried to reach me around **19:00 GMT+8** on **February 02, 2026**, but I missed the call because I was not feeling well.
- **Call + Screen Sharing (Completed):** Microsoft Support successfully called later and we completed a **screen sharing session** a while ago (exact start/end time not captured).

#### Workflow / Repo Maintenance (Daily Read-only Telemetry)
- Daily Read-only Telemetry workflow remains **stable** after recent fixes.
- No new workflow changes introduced today (documentation-only day).

#### Activities (Documentation-only)
- Logged the Microsoft Support contact attempts and the completed screen sharing session.
- Continued daily documentation timeline while waiting for backend resolution / access restoration.
- Avoided additional system changes to preserve stability and reduce stress.

#### Artifacts
- None for today (documentation-only day).

#### Notes
- If additional Microsoft Support calls arrive, log date/time + summary of requests to keep documentation complete.
- Maintain read-only posture until SharePoint/OneDrive access is restored.

#### Next Steps
- Proceed to document the details/results of the screen sharing session in the next UC Day entry (if needed).
- Continue tracking support communications and wait for resolution steps from Microsoft.

---


### UC Day 39 – 51 days remaining (February 03, 2026) – Documentation-only (Support screen share; tenant flagged; attempted paid license purchase blocked)
- **Planned Date:** February 03, 2026 (51 days remaining)
- **Actual Run:** February 03, 2026
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied; backend issue not yet fixed)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Backend issue is **still not fixed** as of today.

#### Support Case Update (NEW UC Day Log)
- **Support Request ID:** 2601260030005751
- **Support Call + Screen Sharing:** Microsoft Support called around **15:32 GMT+8** on **February 03, 2026**.
- We proceeded with a **screen sharing session via Quick Assist**.
- Support advised that the engineering team **cannot proceed with restoration of access** because Microsoft found that the tenant had been **flagged for fraud activities**.
- Microsoft Support **did not provide specific details** on what caused or triggered the fraud flag.

#### Attempted Alternative Resolution (Paid License Purchase)
- Microsoft Support suggested trying to **purchase a paid license** to check whether SharePoint/OneDrive access would be restored **without deleting** the current Microsoft Developer E5 trial subscription.
- During the purchase process, the transaction **could not proceed** due to the following error:

  **Error Message:**
  "Remove from your cart to complete this purchase. isn't compatible with a product that your organization already has. (CV: 5MRMsFhX8zAZcjJe.12)"

#### Communication / Evidence Sent
- I **sent an email** to Microsoft Support showing the purchase error above (including the CV reference).

#### Activities (Documentation-only)
- Documented the support call, Quick Assist screen share outcome, and the fraud-flag restriction shared by Support.
- Documented the attempted paid license purchase workaround and the blocking purchase error.
- Logged that the backend issues remain unresolved.

#### Artifacts
- Email sent to Microsoft Support with screenshot/text of the purchase error (CV included).
- No new code changes (documentation-only day).

#### Notes
- Current state remains unchanged: SharePoint/OneDrive still blocked; tenant flagged; no detailed cause disclosed.
- Awaiting Microsoft Support response regarding the paid license purchase error and next steps.

#### Next Steps
- Wait for Microsoft Support follow-up (email/call) regarding the license purchase error and possible restoration path.
- Continue documenting daily status until access is restored or a formal remediation path is provided.

---


### UC Day 39 – 51 days remaining (February 03, 2026) – Extension (Light Dev Activity via GitHub Actions; web-only; workflow runs successful)
- **Planned Date:** February 03, 2026 (51 days remaining)
- **Actual Run:** February 03, 2026 (Evening; times recorded below)
- **Status:** Completed (light dev activity; no complex troubleshooting)

#### Situation / Context
- Current focus is to maintain calm, low-pressure progress while Microsoft Support case is ongoing.
- SharePoint/OneDrive access restoration is still pending from Microsoft.

#### Light Dev Activity (Web-only)
- No GitHub Desktop / no local installs used.
- Activity performed purely via **GitHub Actions** “Run workflow” button to maintain a gentle development signal.

#### Activity Log (Successful Runs)
1) **Feb 03, 2026 – 18:42 GMT+8**
   - **Action:** Run workflow
   - **Workflow name:** Daily Read-only Telemetry.yml
   - **Result:** Success

2) **Feb 03, 2026 – 18:45 GMT+8**
   - **Action:** Run workflow
   - **Workflow name:** daily.yml
   - **Result:** Success

#### Notes
- This extension activity is intentionally light to avoid overload while awaiting Support updates.
- No changes were introduced to scripts or workflow files today (execution only).

#### Artifacts
- GitHub Actions run history (2 successful workflow runs executed manually via web).

#### Next Steps
- Continue light workflow-based dev activity as needed while waiting for Microsoft Support response.
- Proceed with documentation updates and follow-up email only when Support responds (avoid spamming / multiple cases).

---


### UC Day 40 – 50 days remaining (February 04, 2026) – Documentation-only (awaiting Microsoft Support update; keep calm + maintain stability)
- **Planned Date:** February 04, 2026 (50 days remaining)
- **Actual Run:** February 04, 2026 (time not captured)
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Maintain a **calm, low-pressure posture** while waiting for Microsoft’s backend update.

#### Support Case Status
- **TrackingID:** 2601260030005751
- No confirmed restoration update received today.
- Continue monitoring for Microsoft Support follow-up regarding:
  - tenant access restoration path
  - paid license purchase workaround (Business Basic) error investigation

#### Workflow / Dev Signals (Read-only posture)
- Daily Read-only Telemetry approach remains the primary low-impact “dev signal”.
- No workflow/config changes introduced today (documentation-only day).

#### Activities (Documentation-only)
- Logged current state: SP/OD still blocked; Support update pending.
- Kept documentation timeline consistent while waiting for backend resolution.
- Avoided any new complex actions to preserve stability and reduce stress.

#### Artifacts
- None for today (documentation-only day).

#### Notes
- Continue operating in a **read-only + minimal-change** mode until access is restored.
- Preserve a single-thread support communication flow (avoid multiple cases).

#### Next Steps
- Wait for Microsoft Support update and be ready to document any email/call/screen share as a new UC Day log.
- Continue light dev activity via GitHub Actions (manual run) as needed to maintain activity signals while SP/OD remains blocked.

---


### UC Day 41 – 49 days remaining (February 05, 2026) – Documentation-only (Support update received; service request closed; monitor until follow-up window)
- **Planned Date:** February 05, 2026 (49 days remaining)
- **Actual Run:** February 05, 2026 (time not captured)
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Continue maintaining a calm, low-pressure posture while waiting for Microsoft’s backend update.

#### Support Case Update (NEW UC Day Log)
- **TrackingID:** 2601260030005751
- **Update received via phone call + email** from Microsoft Support.
- Support advised that the issue appears to be **affecting customers with developer tenants**, meaning this is not isolated to a single tenant.
- Support advised to **wait** for a pending update from Microsoft.
- Support confirmed they will **close the service request**, but we can continue communication via email if needed.

#### Support Email Summary (for documentation)
- Support representative: **Rilwan Abiodun Ismail**
- Support email: **gim_wfn_rilis@office365support.com**
- Working hours: **Mon–Fri | 09:00AM–05:00PM (EST)**
- Escalation contacts (shared by Support):
  - Technical Lead: **Shaikh Sh | gim_wfi_shsha@office365support.com**
  - Team Manager: **Girish Rajani | gim_wfi_girra@office365support.com**
  - Technical Adviser: **Ravi Pandit | rpandit@microsoft.com**

#### Case Closure Status
- **TrackingID#2601260030005751 is closed as of February 05, 2026.**
- Plan: If SharePoint/OneDrive access is still blocked **5 days before the 30-day mark**, we will follow up for assistance/update.
  - **Follow-up target date:** **March 02, 2026**

#### Activities (Documentation-only)
- Logged the support confirmation that the issue affects developer tenants.
- Logged the service request closure and the official support contacts provided.
- Set follow-up timeline (March 02, 2026) to avoid spamming and to keep communication in one smooth thread.

#### Artifacts
- Microsoft Support email text saved for documentation (includes closure statement and contact list).
- No code changes today (documentation-only day).

#### Notes
- Keep support communication in the same email thread (avoid creating multiple cases unless absolutely required).
- Continue light dev activity via GitHub Actions/workflows while SP/OD remains blocked (minimal pressure).

#### Next Steps
- Wait for any Microsoft update.
- If no restoration occurs by **March 02, 2026**, send a follow-up email requesting an update and restoration path.
- Continue daily documentation entries while the tenant remains restricted.

---


### UC Day 42 – 48 days remaining (February 06, 2026) – Light Dev Activity (web-only; workflows + Graph Explorer + Dev Dashboard check)
- **Planned Date:** February 06, 2026 (48 days remaining)
- **Actual Run:** February 06, 2026 (times recorded below)
- **Status:** Completed (light dev activity; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Continue calm, low-pressure progress while waiting for Microsoft’s backend update.

#### Light Dev Activity (Web-only; beginner-friendly)
- No local installations used (browser-only approach).

##### Option A – GitHub Actions (Manual Run Workflow)
1) **Feb 06, 2026 – 17:44 GMT+8**
   - **Workflow:** daily.yml
   - **Action:** Run workflow
   - **Result:** Success

2) **Feb 06, 2026 – 17:45 GMT+8**
   - **Workflow:** Daily Read-only Telemetry.yml
   - **Action:** Run workflow
   - **Result:** Success

##### Option B – Microsoft Graph Explorer (Read-only)
- **Action:** Performed read-only Graph Explorer activity
- **Result:** Success
- **Note:** Specific queries not captured (light execution only)

##### Option C – Microsoft 365 Developer Dashboard (Status Check)
- **Subscription status:** Active
- **Days remaining:** 48/90
- **Warning banners:** None

#### Support / Case Tracking Notes
- **TrackingID#2601260030005751** is closed as of **February 05, 2026**.
- Plan: If SharePoint/OneDrive access is still blocked by **March 02, 2026** (5 days before 30-day mark), send a follow-up request for assistance/update.

#### Activities Summary
- Completed multiple light dev touchpoints (GitHub Actions + Graph Explorer + dashboard check) to maintain ongoing development signals without stressing the system.
- No script/workflow modifications today (execution + monitoring only).

#### Artifacts
- GitHub Actions run history (2 successful manual workflow runs).
- Developer Program dashboard status snapshot (Active; 48/90; no warnings).

#### Notes
- Maintain a steady “light activity” rhythm while SP/OD remains blocked.
- Avoid creating new support cases; keep communication smooth and minimal unless required.

#### Next Steps
- Continue light dev signals (manual workflow runs + occasional Graph Explorer read-only checks).
- Monitor for Microsoft updates regarding developer tenant access issues.
- Follow-up on **March 02, 2026** if access is still blocked.

---


### UC Day 43 – 47 days remaining (February 07, 2026) – Light Dev Activity + Backend Advisory Updates (SP/OD still blocked)
- **Planned Date:** February 07, 2026 (47 days remaining)
- **Actual Run:** February 07, 2026 (times recorded below)
- **Status:** Completed (light dev activity; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Continue calm, low-pressure progress while waiting for Microsoft’s backend resolution.

#### Light Dev Activity (Web-only; beginner-friendly)
- Activity performed early to preserve time for family while maintaining development signals.

##### GitHub Actions – Manual Run Workflow (Success)
- **Date/Time:** February 07, 2026 – 08:08 GMT+8
- **Actions:** Ran `daily.yml` + `Daily Read-only Telemetry.yml`
- **Result:** Success (both)

##### Microsoft Graph Explorer – Read-only Queries (Success)
- **Queries executed:** `/me` and `/organization`
- **Result:** Success

##### Microsoft 365 Developer Dashboard – Status Check
- **Subscription status:** Active
- **Days remaining:** 48 days remaining (no warnings)
- **Warning banners:** None

#### Backend Team Advisory Updates (Reference / Monitoring)
> Note: Detailed root cause and issue background are already documented in prior UC entries.

1) **Some admins and users managed through Microsoft 365 Groups may be unable to access some Microsoft 365 services**
- **Update:** Feb 6, 2026, 7:19 PM GMT+8
- Our analysis of the aforementioned timeout issues is taking longer than expected to efficiently resume deployment on the remaining impacted groups.
- Work is ongoing to identify options that can accelerate progress of analyzing the timeout issues.
- **Next update by:** Friday, February 20, 2026 at 8:30 PM GMT+8

2) **Some users with edit and full control permissions may be unable to access or share some files in Microsoft OneDrive**
- **Update:** Feb 5, 2026, 2:37 AM GMT+8
- Tests within the infrastructure that received the automated repair process are completed and confirm that the action remediates the impact.
- Monitoring continues as deployment progresses to remaining affected infrastructure; expected completion remains late February 2026.
- **Next update by:** Thursday, February 19, 2026 at 4:00 AM GMT+8

#### Support / Case Tracking Notes
- **TrackingID#2601260030005751** is closed as of **February 05, 2026**.
- Plan: If SharePoint/OneDrive access is still blocked by **March 02, 2026** (5 days before the 30-day mark), send a follow-up request for assistance/update.

#### Activities Summary
- Completed multiple light dev touchpoints (GitHub Actions + Graph Explorer + dashboard check) to maintain ongoing development signals without relying on SharePoint/OneDrive access.
- No modifications introduced to workflows/scripts today (execution + monitoring only).

#### Artifacts
- GitHub Actions run history (successful manual runs).
- Developer dashboard status snapshot (Active; no warnings).
- Backend advisory update notes recorded for tracking.

#### Next Steps
- Continue light dev activity cadence (manual workflow runs + occasional Graph Explorer read-only checks).
- Monitor backend advisories through February 19–20 update windows.
- Follow up on **March 02, 2026** if SharePoint/OneDrive is still blocked.

---


### UC Day 44 – 46 days remaining (February 08, 2026) – Light Dev Activity (web-only; workflows + Graph Explorer + Dev Dashboard check)
- **Planned Date:** February 08, 2026 (46 days remaining)
- **Actual Run:** February 08, 2026 (times recorded below)
- **Status:** Completed (light dev activity; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Continue calm, low-pressure progress while waiting for Microsoft’s backend resolution/update.

#### Light Dev Activity (Web-only; beginner-friendly)
- Activity performed in a lightweight manner due to ongoing personal workload and schedule constraints.
- No local installations used (browser-only approach).

##### Option A – GitHub Actions (Manual Run Workflow)
- **Date/Time:** February 08, 2026 – 13:48 GMT+8
- **Workflows executed:** `daily.yml` + `Daily Read-only Telemetry.yml`
- **Result:** Success (both)

##### Option B – Microsoft Graph Explorer (Read-only)
- **Queries executed:** `/me` and `/organization`
- **Result:** Success

##### Option C – Microsoft 365 Developer Dashboard (Status Check)
- **Subscription status:** Active
- **Days remaining:** 47 days remaining
- **Warning banners:** None

#### Support / Case Tracking Notes
- **TrackingID#2601260030005751** is closed as of **February 05, 2026**.
- Plan: If SharePoint/OneDrive access is still blocked by **March 02, 2026** (5 days before the 30-day mark), send a follow-up request for assistance/update (same email thread; avoid spamming/new cases).

#### Activities Summary
- Completed multiple light dev touchpoints (GitHub Actions + Graph Explorer + dashboard check) to maintain ongoing development signals without relying on SharePoint/OneDrive access.
- No modifications introduced to workflows/scripts today (execution + monitoring only).

#### Artifacts
- GitHub Actions run history (2 successful manual workflow runs).
- Developer Program dashboard status snapshot (Active; 47 days remaining; no warnings).

#### Notes
- Maintain a steady “light activity” rhythm while SP/OD remains blocked.
- Keep activities minimal until other background tasks are completed; consider upgrading dev activities later when workload is lighter.

#### Next Steps
- Continue light dev signals (manual workflow runs + occasional Graph Explorer read-only checks).
- Monitor for Microsoft updates regarding developer tenant access issues.
- Follow up on **March 02, 2026** if access is still blocked.

---


### UC Day 45 – 45 days remaining (February 09, 2026) – Documentation-only (no dev activity; focused on CIBI credit dispute & budget tracker updates)
- **Planned Date:** February 09, 2026 (45 days remaining)
- **Actual Run:** February 09, 2026 (time not captured)
- **Status:** Completed (documentation-only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- **No dev activity today** to prioritize critical personal tasks:
  - **CIBI** credit report dispute preparation/filing
  - **Budget tracker** updates to current status
- Maintain calm, low-pressure posture while SP/OD remains blocked.
- Continue manual documentation and backups of important notes/conversations.

#### Support Case Status
- **TrackingID:** 2601260030005751
- **Case state:** Closed as of **February 05, 2026**
- **Plan:** If SP/OD is still blocked by **March 02, 2026** (5 days before the 30-day mark), send a single-thread **follow-up** for assistance/update.

#### Service Health / Backend Notes
- No new backend advisories captured **today** for this entry.
- (Previous service advisories were already documented in earlier UC Days; not repeated here.)

#### Activities (Documentation-only)
- Logged missed dev activity with reason (CIBI dispute + budget updates).
- Kept daily timeline consistent.
- Continued read-only stance and avoided changes that could add stress during ongoing SP/OD restrictions.

#### Artifacts
- None for today (documentation-only).

#### Notes
- Keep using **web-only light signals** on the next available day (GitHub Actions + basic Graph Explorer) to maintain renewal-friendly telemetry while SP/OD is blocked.
- Continue **backing up** key chat snippets to Word after each session.

#### Next Steps
- Resume **light dev activity** when time allows (Actions + Graph /me + /organization).
- Maintain one-thread communication with Microsoft for any follow-ups.
- Re-check on **March 02, 2026** for the scheduled follow-up if no restoration yet.

---


### UC Day 46 – 44 days remaining (February 10, 2026) – Documentation‑only (no dev activity; SP/OD still blocked; keep low‑pressure posture)
- **Planned Date:** February 10, 2026 (44 days remaining)
- **Actual Run:** February 10, 2026 (time not captured)
- **Status:** Completed (documentation‑only; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- No dev activity today to keep mental load low and maintain focus on other priorities this week.
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Continue calm, low‑pressure posture while awaiting Microsoft’s backend updates.

#### Support Case Status
- **TrackingID:** 2601260030005751
- **Case state:** Closed as of **February 05, 2026**
- **Plan:** If SP/OD is still blocked by **March 02, 2026** (5 days before the 30‑day mark), send a single‑thread **follow‑up** for assistance/update.

#### Service Health / Backend Notes
- No new advisories recorded **today** for this tenant (prior advisories are already captured in earlier UC Days).

#### Activities (Documentation‑only)
- Logged missed dev activity with reason: focus required on other commitments this week.
- Kept daily timeline consistent for continuity and auditability.
- Maintained read‑only stance (no config or workflow edits) to avoid unnecessary changes during access restrictions.

#### Artifacts
- None for today (documentation‑only).

#### Notes
- Resume **light dev signals** (GitHub Actions manual runs + Graph Explorer /me + /organization) on the next available day to maintain renewal‑friendly telemetry while SP/OD remains blocked.
- Keep communications with Microsoft in a **single email thread** to avoid fragmentation.

#### Next Steps
- Wait for Microsoft updates; avoid creating new cases unless strictly necessary.
- If no restoration by **March 02, 2026**, trigger the planned follow‑up on TrackingID#2601260030005751.
``

---


### UC Day 47 – 43 days remaining (February 11, 2026) – Light Dev Activity (web‑only; workflows + Graph Explorer + Dev Dashboard check)
- **Planned Date:** February 11, 2026 (43 days remaining)
- **Actual Run:** February 11, 2026 – 06:38 GMT+8
- **Status:** Completed (light dev activity; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Continue calm, low‑pressure posture while awaiting Microsoft’s backend updates.

#### Light Dev Activity (Web‑only; beginner‑friendly)
##### GitHub Actions – Manual Run Workflow (Success)
- **Date/Time:** February 11, 2026 – 06:38 GMT+8  
- **Workflows executed:** `daily.yml` and `Daily Read-only Telemetry.yml`  
- **Result:** Success (both)

##### Microsoft Graph Explorer – Read‑only (Success)
- **Queries executed:** `/me` and `/organization`  
- **Result:** Success

##### Microsoft 365 Developer Dashboard – Status Check
- **Subscription status:** Active  
- **Days remaining:** 44 days remaining  
- **Warning banners:** None

#### Support / Case Tracking Notes
- **TrackingID#2601260030005751** is closed as of **February 05, 2026**.
- **Plan:** If SharePoint/OneDrive access is still blocked by **March 02, 2026** (5 days before the 30‑day mark), send a single‑thread **follow‑up** for assistance/update.

#### Activities Summary
- Completed multiple **light dev touchpoints** (GitHub Actions + Graph Explorer + dashboard check) to maintain renewal‑friendly telemetry without SP/OD writes.
- No script/workflow modifications today (execution + monitoring only).

#### Artifacts
- GitHub Actions run history (2 successful manual workflow runs).
- Developer dashboard status snapshot (Active; 44 days remaining; no warnings).

#### Notes
- Maintain a steady “light activity” rhythm on weekdays; consider **heavier dev activities** on Saturday/Sunday as time allows.
- Keep communications with Microsoft in a single email thread to avoid fragmentation.

#### Next Steps
- Continue daily light signals (Actions + Graph /me and /organization).
- Follow up on **March 02, 2026** if SharePoint/OneDrive is still blocked.

---


### UC Day 48 – 42 days remaining (February 12, 2026) – Light Dev Activity (web‑only; workflows + Graph Explorer + Dev Dashboard check)
- **Planned Date:** February 12, 2026 (42 days remaining)
- **Actual Run:** February 12, 2026 – 18:45 GMT+8
- **Status:** Completed (light dev activity; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Continue calm, low‑pressure posture while awaiting Microsoft’s backend updates.

#### Light Dev Activity (Web‑only; beginner‑friendly)
##### GitHub Actions – Manual Run Workflow (Success)
- **Date/Time:** February 12, 2026 – 18:45 GMT+8  
- **Workflows executed:** `daily.yml` and `Daily Read-only Telemetry.yml`  
- **Result:** Success (both)

##### Microsoft Graph Explorer – Read‑only (Success)
- **Queries executed:** `/me` and `/organization`  
- **Result:** Success

##### Microsoft 365 Developer Dashboard – Status Check
- **Subscription status:** Active  
- **Days remaining:** 42 days remaining  
- **Warning banners:** None

#### Support / Case Tracking Notes
- **TrackingID#2601260030005751** is closed as of **February 05, 2026**.
- **Plan:** If SharePoint/OneDrive access is still blocked by **March 02, 2026** (5 days before the 30‑day mark), send a single‑thread **follow‑up** for assistance/update.

#### Activities Summary
- Completed multiple **light dev touchpoints** (GitHub Actions + Graph Explorer + dashboard check) to maintain renewal‑friendly telemetry without SP/OD writes.
- No script/workflow modifications today (execution + monitoring only).

#### Artifacts
- GitHub Actions run history (2 successful manual workflow runs).
- Developer dashboard status snapshot (Active; 42 days remaining; no warnings).

#### Notes
- Maintain a steady “light activity” rhythm on weekdays; consider **heavier dev activities** on Saturday/Sunday as time allows.
- Keep communications with Microsoft in a single email thread to avoid fragmentation.

#### Next Steps
- Continue daily light signals (Actions + Graph /me and /organization).
- Follow up on **March 02, 2026** if SharePoint/OneDrive is still blocked.

---


### UC Day 49 – 41 days remaining (February 13, 2026) – Light Dev Activity (web‑only; workflows + Graph Explorer + Dev Dashboard check)
- **Planned Date:** February 13, 2026 (41 days remaining)
- **Actual Run:** February 13, 2026 – 21:15 GMT+8
- **Status:** Completed (light dev activity; SharePoint/OneDrive still Access Denied)

#### Situation / Context
- SharePoint and OneDrive remain **blocked (Access Denied)**.
- Continue calm, low‑pressure posture while awaiting Microsoft’s backend updates.

#### Light Dev Activity (Web‑only; beginner‑friendly)
##### GitHub Actions – Manual Run Workflow (Success)
- **Date/Time:** February 13, 2026 – 21:15 GMT+8  
- **Workflows executed:** `daily.yml` and `Daily Read-only Telemetry.yml`  
- **Result:** Success (both)

##### Microsoft Graph Explorer – Read‑only (Success)
- **Queries executed:** `/me` and `/organization`  
- **Result:** Success

##### Microsoft 365 Developer Dashboard – Status Check
- **Subscription status:** Active  
- **Days remaining:** 41 days remaining  
- **Warning banners:** None

#### Support / Case Tracking Notes
- **TrackingID#2601260030005751** is closed as of **February 05, 2026**.
- **Plan:** If SharePoint/OneDrive access is still blocked by **March 02, 2026** (5 days before the 30‑day mark), send a single‑thread **follow‑up** for assistance/update.

#### Activities Summary
- Completed multiple **light dev touchpoints** (GitHub Actions + Graph Explorer + dashboard check) to maintain renewal‑friendly telemetry without SP/OD writes.
- No script/workflow modifications today (execution + monitoring only).

#### Artifacts
- GitHub Actions run history (2 successful manual workflow runs).
- Developer dashboard status snapshot (Active; 41 days remaining; no warnings).

#### Notes
- Maintain a steady “light activity” rhythm on weekdays; consider **heavier dev activities** on Saturday/Sunday as time allows.
- Keep communications with Microsoft in a single email thread to avoid fragmentation.

#### Next Steps
- Continue daily light signals (Actions + Graph /me and /organization).
- Follow up on **March 02, 2026** if SharePoint/OneDrive is still blocked.

---

