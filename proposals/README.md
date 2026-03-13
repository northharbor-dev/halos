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

## After Acceptance

- Specifications are integrated into `docs/` or a new `specs/` directory
- Clarifications update the relevant docs
- Process changes update [governance.md](../docs/governance.md) or this README
- The proposal file is updated with status `accepted` and a Decision section

## Index

| # | Title | Status |
|---|-------|--------|
| — | *No proposals yet* | — |

*(This index will be updated as proposals are submitted.)*
