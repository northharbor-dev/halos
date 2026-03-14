---
name: proposal-assist
description: Help draft and structure proposals. Use when the user wants to write a proposal, submit a framework change, extend the spec, or needs guidance on the proposal process.
---

# Proposal Assist — HALOS

Help users draft, structure, and refine proposals. Guide alignment with principles and completeness.

## When to Use

- User wants to write a proposal
- User asks how to submit a change to the framework
- User needs help with proposal structure or alignment
- User asks about the publishing checklist or review process

## Proposal Template Walkthrough

Guide the user through [proposals/TEMPLATE.md](proposals/TEMPLATE.md):

| Section | Purpose |
|---------|---------|
| Summary | 2–3 sentences; what and outcome |
| Motivation | Why needed; problem; gap |
| Proposal | Concrete; enough detail to implement |
| Alignment with Principles | How it aligns; cite HALOS-CORE-N if relevant |
| Alternatives Considered | Other approaches; why this one |
| Open Questions | Unresolved; feedback needed |
| References | Related discussions, specs |

## Proposal Types

- **specification** — New format, schema, standard
- **clarification** — Interpretation of existing docs
- **process** — Governance or workflow change
- **principle** — Change to foundational principles (rare; high bar)

## Statuses

draft → proposed → under-review → accepted | deferred | rejected

## Alignment Check

When reviewing a draft, verify:
- Each principle touched is cited (HALOS-CORE-1 through HALOS-CORE-8)
- Scope is focused (one thing well)
- Actionable (leads to concrete change)

## Publishing Checklist (post-acceptance)

Point to [spec/PUBLISHING.md](spec/PUBLISHING.md):

1. Update `spec/manifest.json` (version, proposals)
2. Append `spec/changelog.json`
3. Run `node scripts/generate-spec.js`
4. Push PR; CI must pass
5. Merge; tag release (e.g. `git tag v1.0.0`)
6. Update proposal: status `accepted`, Decision section

## Review Checklist (for reviewers)

When the user asks what to check when reviewing:
- Alignment with [principles](docs/principles.md)
- Scope: focused, actionable
- All TEMPLATE sections filled
- For spec changes: schema validation in CI

## Related

- [proposals/README.md](proposals/README.md) — Full process
- [spec/PUBLISHING.md](spec/PUBLISHING.md) — Publication steps
