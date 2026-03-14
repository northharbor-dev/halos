---
id: "0003"
status: accepted
type: specification
date: "2026-03-15"
author: "halos"
affects: core
---

# 0003 — HALOS Signatory Registry

**Status:** accepted  
**Type:** specification  
**Date:** 2026-03-15  
**Author:** halos

## Summary

This proposal establishes a public registry of individuals and organizations who support the principles of HALOS. Signatories are listed in the HALOS repository and displayed on the HALOS website, with optional filtering by profession, organization, or country. Phase 1 uses a GitHub PR workflow—contributors add themselves via pull request. Phase 2 (when backend exists) adds a web form. Early signatories are recognized as Founding Supporters. The registry demonstrates community support, builds visibility around principled human–AI collaboration, and encourages accountability and transparency.

## Motivation

HALOS is a framework document. To become a movement, it needs visible community backing:

1. **Credibility** — A public roster of supporters gives the framework legitimacy.
2. **Community ownership** — Signatories signal alignment with HALOS values and encourage others to engage.
3. **Accountability** — Public affiliation creates gentle pressure to uphold the principles.
4. **Provenance** — Each signature is attributable and traceable through the PR history.

Early signatories will be recognized as **Founding Supporters**, reinforcing the sense of community and commitment.

## Proposal

### Guiding Principles for the Registry

The signatory process should reflect HALOS values:

| Principle | Application |
|-----------|-------------|
| **Transparency** | Signatories are publicly visible unless they choose privacy options. |
| **Human Primacy** | The registry recognizes individuals first; organizations may also participate. |
| **Open Governance** | The process for joining is open and inspectable (GitHub PRs, public merge history). |
| **Provenance** | Each signature is attributable via git history. |
| **Low Barrier to Entry** | Supporting HALOS should be simple and accessible. |

### Phase 1: GitHub Signatory Model

The simplest implementation uses the existing open-source workflow.

**Location:** `signatories/signatories.json` (or equivalent) in the HALOS repository.

**Process:**

1. A supporter forks the HALOS repository.
2. They add their entry to the signatory list.
3. They open a Pull Request.
4. Automated checks validate: formatting, schema compliance, duplicate detection.
5. A maintainer merges the PR.
6. The contributor becomes a HALOS Signatory.

**Schema (minimal recommended):**

Start with **required:** `name`, `date_signed`; **optional:** `github` (for verification). A default statement is supplied; signatories may customize it if they wish.

The `signatories.json` file (or equivalent) includes an instructional comment at the top—either a `_instructions` key (if the format permits) or a leading block in `CONTRIBUTING.md`—that tells contributors:

> *"Statement is optional. If omitted, the default 'I support the HALOS principles for transparent and ethical human-AI collaboration.' is used. You may customize the statement to reflect your support in your own words."*

**Example entry (minimal):**

```json
{
  "name": "Jane Doe",
  "date_signed": "2026-03-14",
  "github": "janedoe"
}
```

**Example with optional fields and customized statement:**

```json
{
  "name": "Jane Doe",
  "role": "Software Engineer",
  "organization": "Independent",
  "country": "USA",
  "github": "janedoe",
  "statement": "I support the HALOS principles for transparent and ethical human-AI collaboration.",
  "date_signed": "2026-03-14"
}
```

**Default statement** (used when `statement` is omitted): *"I support the HALOS principles for transparent and ethical human-AI collaboration."*

**Required fields:** `name`, `date_signed`.  
**Optional fields:** `github`, `role`, `organization`, `country`, `website`, `statement`, `visibility` (e.g. to hide from public listing while still being in the registry). When `statement` is omitted, the default above is displayed.

**Organization:** Freeform text. No fixed vocabulary or enum; signatories may enter company name, "Independent", institution, or any identifier they choose.

**Automated validation:**
- JSON schema compliance
- Duplicate detection: reject if `github` username already exists (case-insensitive). Entries without `github` are not deduplicated by this rule.
- Date format (ISO 8601)
- Length limits on free-text fields
- Basic sanity checks (e.g. no URLs in `name`)

**Duplicate policy:** Reject entries whose `github` username (case-insensitive) already exists in the registry. Document in CONTRIBUTING.

**Removal:** Signatories request removal by opening a PR that deletes their entry. Document the process in CONTRIBUTING.

**Supporting docs:** `signatories/CONTRIBUTING.md` with instructions for adding oneself, duplicate policy, and removal via PR.

### Phase 2: Web Signatory Form (When Backend Exists)

Once a backend exists for the signatory registry, a web form can simplify the process:

**Form inputs:** Name, role, organization (optional), country (optional), GitHub/website (optional), statement of support (optional), agreement checkbox.

**Agreement text (example):** *"I affirm that I support the principles of HALOS and believe in transparent and responsible human-agent collaboration."*

**Validation:** Email confirmation, GitHub verification (optional), duplicate detection, basic spam filtering.

Submissions would be stored in the backend and either (a) synced to `signatories.json` via CI, or (b) served from the database with the JSON file as an export.

### Public Registry Page

A page at `halos.northharbor.dev/supporters` (or `/signatories`) displays signatories.

**Phase 1 (static JSON):** The page loads `signatories.json` and renders a **pageable display** with **25 signatories per page**. Initial view shows the first page; users can navigate to next/previous or jump by page number. Display includes:

- **Top / featured view** — Highlight the first 100 signatories (by date_signed) as a quick-scan list
- **Pageable list** — Full roster with pagination (25 per page)
- **Filters** (client-side): by profession/role, organization, country, Founding Supporters

**Phase 2+ (persistence store):** When a backend exists for the signatory registry, the page gains server-side pagination and search. Users can find themselves or people they know by name, organization, role, or country. The signatory registry is **not coupled** to the HALOS Index (0002); persistence may be shared or separate—no relation or enforcement.

### Recognition: Founding Supporters and Badges

- **Founding Supporter** — The **first 25 signatories** (by merge date) receive this designation.
- **Badge tiers** — Separate badge assets for:
  - **Founder** — HALOS creator(s)
  - **Founding Supporter** — First 25 signatories (SVG/PNG for light and dark)
  - **Early Supporter** — Signatories 26–100 (distinct badge)

Badges are suitable for GitHub profiles, personal websites, research papers, and conference materials. Each tier has its own asset; provisioning (design, formats) is in scope for this proposal.

### Deferred Scope (Follow-Up Proposal)

The following items were explicitly deferred from this proposal. A follow-up proposal should address:

- **Phase 2: Web signatory form** — When a backend exists; form inputs, validation, sync to JSON or DB.
- **Phase 2+: Server-side pagination and search** — For registries beyond 100 signatories.
- **Organizational signatories** — Companies or institutions signing as entities; separate schema or list.
- **Project badges** — *"This project supports HALOS principles"* for repos and software.
- **HALOS Trust Graph** — Governance roles, working groups, attribution systems built on signatory identity.
- **Cryptographically verifiable signatures** — PGP, commit-signed entries, or similar proof-of-identity.

## Alignment with Principles

- **Principle 2 (Ideas as Assets)** — Signatories contribute their endorsement as an asset; the registry gives that contribution visibility.
- **Principle 3 (Attribution and Provenance)** — Each signature is attributable via git history and optional GitHub handle. Traceability is built in.
- **Principle 4 (Transparency)** — The registry is public. Signatories know they are listed; the process is inspectable.
- **Principle 7 (Governance Through Proposal)** — The registry supports governance by building a community that can participate in proposals and review.
- **Principle 8 (Innovation with Accountability)** — Signing signals accountability to the principles; the registry amplifies responsible innovation.

## Alternatives Considered

| Alternative | Why Not |
|-------------|---------|
| **Centralized signatory service only** | Requires backend and ops. Phase 1 with GitHub avoids that; we can add a web form later. |
| **GitHub-only, no web form ever** | Some supporters may not use GitHub. Phase 2 improves accessibility when feasible. |
| **Anonymous or pseudonymous only** | Undermines credibility and provenance. Real names (or verifiable handles) support accountability. |
| **Invitation-only** | High barrier; contradicts "low barrier to entry." Open PR model is more inclusive. |
| **External platform (e.g. Change.org)** | Lacks integration with HALOS repo, no git provenance, dependency on third party. |

## Open Questions

1. **Schema edge cases** — Privacy/visibility options, `_instructions` placement (top-level key in JSON vs. CONTRIBUTING only). Recommendation: minimal required `name`, `date_signed`; optional `github`, `statement` (default supplied, customizable).
2. **Cryptographic verification** — Worth a dedicated proposal for PGP/commit-signed proofs? Captured as future work.

## References

- HALOS Principles: [docs/principles.md](../docs/principles.md)
- HALOS Governance: [docs/governance.md](../docs/governance.md)
- GitHub contribution workflows: common OSS practice (e.g. [all-contributors](https://allcontributors.org/))

---

## Decision

**Outcome:** accepted  
**Date:** 2026-03-15  
**Notes:** Phase 1 implemented (signatories.json, CONTRIBUTING.md, validation, Supporters page with table layout and pagination, badges, founding signatories). Deferred scope—web form, server-side pagination/search, organizational signatories, project badges, Trust Graph, cryptographic verification—to be addressed in a follow-up proposal.
