---
id: "0005"
status: draft
type: specification
date: "2026-03-31"
author: "northharbor"
affects: extensions
---

# 0005 — HALOS Provenance Spec v0.3: Scope and Input

**Status:** draft
**Type:** specification
**Date:** 2026-03-31
**Author:** NorthHarbor

## Summary

HALOS Provenance Spec v0.2 is now active. This proposal opens the conversation for what v0.3 should address. It is a scope-gathering proposal, not a technical specification — we are collecting input from adopters and the community before committing to a direction.

## Motivation

v0.2 introduced the graph model, decision provenance, human–AI interaction semantics, and policy evaluation traces. With v0.2 active and domain examples published across eight professional domains, we have enough real-world signal to reason about what is missing or underdeveloped.

Rather than the core team deciding v0.3 scope unilaterally, this proposal invites the community to identify gaps based on actual adoption experience.

## Candidate Areas

These are topics that have surfaced in design discussions or adoption feedback. None are committed — this is the list to react to.

**1. Multi-artifact lineage.** v0.2 supports `wasDerivedFrom` relationships between artifacts, but the current model is shallow. Complex workflows (a dataset producing a model producing a report) may need richer chaining — upstream provenance referenced rather than re-stated.

**2. Versioned human identities.** The current spec stores human author as a name/role snapshot. Long-lived artifacts may involve the same person in different roles, or different people over time. A versioned identity model (or a pointer to an external identity record) could make attribution more durable.

**3. Redaction and privacy.** Some provenance fields contain information that cannot be published (source identities in journalism, patient data in healthcare, proprietary algorithm details). A standard approach to redaction — marking fields as withheld and the reason — would make HALOS usable in more regulated contexts.

**4. Provenance aggregation.** When many artifacts in a project use HALOS records, there is currently no standard way to aggregate them — to ask questions like "what fraction of artifacts in this release had human review?" Aggregate queries may require a manifest or index structure.

**5. Tooling integration patterns.** The software-dev domain profile (coming in a near-term release) will define SLSA + CycloneDX + Chainloop integration. v0.3 could formalize integration patterns as a first-class spec concept rather than keeping them in profiles only.

**6. AI agent identity.** v0.2 records AI tools as named strings. As AI agents become more complex (multi-model, tool-using, autonomous), a richer agent identity model — version, capability level, orchestration context — may be warranted.

## Open Questions

1. What gaps have you encountered in v0.2 records that you've authored or reviewed?
2. Which candidate areas are most important for your domain or use case?
3. Are there areas not listed above that v0.3 should address?
4. Should v0.3 remain backward compatible with v0.2, or is a clean break warranted for any of these changes?

## How to Contribute

Open a GitHub issue or pull request in [northharbor-dev/halos](https://github.com/northharbor-dev/halos) referencing this proposal. The proposals process is described in [proposals/README.md](README.md).

## References

- [HALOS Provenance Spec v0.2](https://github.com/northharbor-dev/halos-spec/blob/main/spec/provenance/v0.2.md)
- [Domain examples](https://github.com/northharbor-dev/halos-spec/tree/main/examples)
- [Proposals process](README.md)

---

## Decision

**Outcome:**
**Date:**
**Notes:**
