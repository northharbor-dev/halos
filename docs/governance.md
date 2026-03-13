# HALOS Governance

*How the Framework Evolves*

---

## Purpose

Governance exists to keep HALOS credible, coherent, and responsive. It answers: who can propose changes? How are proposals reviewed? Who decides? The process should be lightweight enough to avoid paralysis and rigorous enough to maintain quality.

## Roles

| Role | Responsibility |
|------|----------------|
| **Contributor** | Anyone who proposes changes, participates in discussion, or submits feedback |
| **Reviewer** | Community members who evaluate proposals for clarity, alignment with principles, and technical soundness |
| **Maintainer** | Those with merge authority who shepherd proposals through the process and ensure consistency |

Roles are not formally assigned at this stage. As the community grows, structure may evolve.

## Proposal Process

HALOS uses an RFC-style proposal process. The flow:

1. **Draft** — Author creates a proposal using the [template](../proposals/TEMPLATE.md), adds it to `proposals/`, and opens discussion (e.g., via GitHub issue or discussion)
2. **Review** — Community reviews for alignment with [principles](principles.md), clarity, and feasibility
3. **Revision** — Author incorporates feedback; proposal may go through multiple rounds
4. **Decision** — A maintainer or designated decider accepts, defers, or rejects
5. **Integration** — Accepted proposals are reflected in the docs (new or updated specification, principle clarification, etc.)

Proposals are numbered (e.g., `0001-`, `0002-`) and tracked in the `proposals/` directory. Status is indicated in the proposal header.

## Scope of Proposals

Proposals may cover:

- **New specifications** — e.g., an attribution format, a provenance schema
- **Clarifications** — interpretation of existing principles or docs
- **Process changes** — adjustments to governance itself
- **Principle changes** — rare; requires exceptional justification

Proposals that conflict with [principles](principles.md) should explain why the principle should change rather than why the proposal should override it.

## Decision Criteria

When evaluating proposals, reviewers consider:

1. **Alignment** — Does it align with HALOS principles?
2. **Clarity** — Is it well-written and unambiguous?
3. **Scope** — Is it appropriately scoped, or does it try to do too much?
4. **Practicality** — Can it be implemented or adopted in practice?
5. **Consistency** — Does it fit with existing docs and prior decisions?

## Principle Changes

Changes to [principles.md](principles.md) are held to a higher bar:

- Must address a real limitation or error, not merely preference
- Require broad consensus, not just maintainer approval
- Should be rare—principles are the stable anchor of the framework

## Disputes

When agreement cannot be reached, maintainers may:

- **Defer** — Postpone until more information or consensus emerges
- **Reject** — Decline with reasoned explanation
- **Accept with dissent** — Proceed while documenting minority view

Transparency is preferred. Rationale for decisions should be documented in the proposal or in commit messages.

## Repository Maintenance

- `main` is the canonical branch
- Docs are in `docs/`; proposals in `proposals/`
- Significant changes go through the proposal process; typos and minor fixes may be direct PRs

## Evolution of Governance

This governance document may itself be updated through the proposal process. Meta-proposals about governance require careful review to avoid capture or conflicts of interest.

---

*Governance is minimal by design. As the community grows, this document may be refined. Proposals welcome.*
