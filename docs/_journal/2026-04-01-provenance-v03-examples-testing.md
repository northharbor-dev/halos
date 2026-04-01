---
title: "v0.3, nine examples, self-provenance, and a test suite"
date: 2026-04-01
entry_type: milestone
---

**Provenance v0.3 is active.** The `governance` field changed from a single object to an array of policy references. Real-world artifacts live under multiple concurrent governance policies — PCI-DSS + internal AI usage, environmental permits + change management, university AI policy + journal disclosure. v0.2 forced a choice between losing traceability or losing structure. v0.3 makes multi-policy governance first-class.

v0.2 was promoted to active, then immediately superseded by v0.3. All domain examples updated to v0.3.

**Ninth domain example: open source project governance.** Priya Chandrasekaran, a lead maintainer of a Rust permissions library, rejected an AI-recommended `unsafe_inner()` API and designed a `GroupPolicy` trait instead — because the unsafe API would have required callers to reason about safety invariants the library should enforce internally. Brings the total to nine domains.

**Self-provenance bootstrapping (plan 004).** Each spec version — v0.1, v0.2, v0.3 — now has its own `.halos.json` provenance record. The spec validates against its own schemas. The provenance records validate against the spec they describe. If HALOS defines how to record provenance, its own history should be the first reference implementation.

**Schema test suite.** Scenario-based tests: enum coverage, schema evolution, semantic validation. CI catches drift between the spec and its schemas. Agent bootstrap files added alongside the tests to make onboarding easier.

**Example generation workflow (plan 003).** `GENERATE-EXAMPLE.md` is an agent skill that produces new domain examples — narrative + provenance record — given a domain. Lowers the barrier for contributors.

**Terminology page enriched.** Added provenance vs lineage comparison and deeper explanations of the three-layer model. The distinction matters: provenance is the complete history; lineage is the chain of derivation within it.

**Site updates.** FAQ page, homepage storytelling redesign, examples section pulling from halos-spec.

**Next:** tagged release, `software-dev` domain profile, Phase 2 adoption tooling.
