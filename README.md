
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

[![Daily Read-only Telemetry]

