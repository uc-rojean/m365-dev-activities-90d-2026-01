
# Commit Conventions (Conventional Commits)

## Types
- `docs:` documentation changes (README, logs, reports)
- `ci:` automation/workflows (GitHub Actions, scripts)
- `report:` generated outputs (CSV/JSON summaries)
- `chore:` maintenance (deps, configs), no functional changes

## Examples
- `docs(readme): initialize 90-day cycle (Jan 2026) — UC log structure`
- `ci(graph): daily read-only telemetry — success (users, channels, drives)`
- `report(storage): export OneDrive/SharePoint usage summary`
- `docs(logs): UC Day 03 — record outcomes and next steps`

## Message Pattern
`<type>(<scope>): <subject>`
- Subject: concise and imperative
- Body (optional): add context, timestamps, run metrics
