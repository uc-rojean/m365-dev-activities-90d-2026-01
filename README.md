
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
