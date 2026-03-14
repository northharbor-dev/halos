# HALOS Proposals

*RFC-Style Proposal Process*

---

## Overview

HALOS evolves through proposals. Anyone may submit a proposal to add specifications, clarify principles, change governance, or otherwise extend the framework. Proposals are reviewed, discussed, and either accepted, deferred, or rejected.

This process is inspired by [Internet RFCs](https://www.rfc-editor.org/), [Kubernetes enhancement proposals](https://kubernetes.io/docs/contribute/participate/), and similar open governance models.

## How to Propose

1. **Copy the template** — Use [TEMPLATE.md](TEMPLATE.md) as your starting point
2. **Create a new file** — Name it `NNNN-short-title.md` (e.g., `0001-attribution-format.md`). Use the next available number
3. **Fill in the content** — Complete each section; the template explains what goes where
4. **Open discussion** — Submit a pull request or open an issue to start review
5. **Iterate** — Respond to feedback; revise the proposal as needed
6. **Decision** — A maintainer will accept, defer, or reject with rationale

## Proposal Statuses

| Status | Meaning |
|--------|---------|
| **draft** | Work in progress; not yet ready for review |
| **proposed** | Submitted for review |
| **under-review** | Actively being discussed |
| **accepted** | Approved; will be or has been integrated |
| **deferred** | Postponed; may be revisited later |
| **rejected** | Declined; rationale documented |

## Proposal Types

| Type | Description | Example |
|------|-------------|---------|
| **Specification** | New format, schema, or standard | Attribution metadata format |
| **Clarification** | Interpretation of existing docs | How Principle 4 applies to fine-tuned models |
| **Process** | Governance or workflow change | How to handle principle amendments |
| **Principle** | Change to foundational principles | Rare; high bar |

## What Makes a Good Proposal

- **Scoped** — Addresses one thing well rather than many things poorly
- **Grounded** — Tied to real use cases or problems
- **Aligned** — Consistent with [HALOS principles](../docs/principles.md)
- **Clear** — Understandable to reviewers without extensive background
- **Actionable** — Leads to a concrete change (doc update, new spec, etc.)

## Numbering

Proposals are numbered sequentially: `0001`, `0002`, `0003`, …  
The number is assigned when the proposal is first submitted. Gaps are allowed if a proposal is withdrawn.

## Proposal Frontmatter

Proposals should include YAML frontmatter for machine readability:

```yaml
---
id: "0001"
status: draft | proposed | under-review | accepted | deferred | rejected
type: specification | clarification | process | principle
date: "2025-03-15"
author: "handle"
affects: core | extensions | governance
---
```

The [index](index.json) lists all proposals with id, status, type, date.

## After Acceptance

- Specifications are integrated into `spec/` (see [spec/PUBLISHING.md](../spec/PUBLISHING.md))
- Clarifications update the relevant docs
- Process changes update [governance.md](../docs/governance.md) or this README
- The proposal file is updated with status `accepted` and a Decision section
- **CI must pass** before merge — see [.github/workflows/spec-validate.yml](../.github/workflows/spec-validate.yml)

## Index

| # | Title | Status |
|---|-------|--------|
| 0001 | [Strengthen Explore Tool Input Sanitization](0001-explore-input-sanitization.md) | proposed |
| 0002 | [HALOS Index: Persist Anonymized Roles and Concerns](0002-halos-index-persistence.md) | proposed |
| 0003 | [HALOS Signatory Registry](0003-signatory-registry.md) | proposed |

*(This index will be updated as proposals are submitted.)*
