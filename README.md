
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

### UC Day 03 – 88 days remaining (**December 29, 2025**) – Pending (Microsoft backend issue)
- **Timestamp (GMT+8):** _2025‑12‑29 hh:mm_
- **Status:** Pending / No dev changes
- **Reason:** Services remain read‑only; support still investigating.
- **Notes:** README updated; prepared structure for **UC Day 04** to start **December 30, 2025**.
<!-- Plan: Kick off read-only telemetry tomorrow (users/teams/sites/drives) -->

