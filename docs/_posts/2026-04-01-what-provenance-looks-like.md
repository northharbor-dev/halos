---
title: "What Provenance Looks Like"
excerpt: "Nine domains, nine humans who disagreed with their AI, and a spec that finally has the right name."
date: 2026-04-01
---

A governance standard for AI-assisted work is only useful if you can show what it looks like in practice. Not in the abstract — in the specific context where a human used AI, disagreed with it, and made a decision that mattered.

That's what the last week of HALOS development was about: making the standard concrete.

---

## The name

HALOS has a new expansion: **Human–Agent Lineage and Origin Standard.**

The previous expansion — "Human-Agent Living Operating System" — was a working title from an earlier phase. It implied runtime software. HALOS is not software you run. It is a record-keeping standard: who was responsible, what the AI contributed, whether a human reviewed the result. That is lineage and origin work, and the name now says so.

This matters for positioning. CycloneDX, SLSA, W3C PROV — none of them call themselves operating systems. HALOS sits alongside these standards as a complement, and its name should reflect that.

---

## Provenance v0.3: multi-policy governance

A payment service governed by both PCI-DSS and an internal AI usage policy. A water treatment update governed by both a state environmental permit and internal change management. An academic paper governed by both a university AI policy and a journal's disclosure requirements.

In v0.2, the `governance` field was a single object. You picked one policy and lost traceability to the others, or you concatenated them into a string and lost structure. Neither works for compliance.

v0.3 changes `governance` to an **array of policy references**. Each policy gets its own entry with name, version, and URL. Multi-policy governance is now a first-class concept rather than a workaround.

---

## Nine humans who disagreed with their AI

The `examples/` directory in halos-spec now contains nine domain examples. Each includes a narrative companion — who is doing the work, how AI is involved, where human judgment matters — alongside a full v0.3 provenance record for a real artifact in that domain.

What makes these examples useful is that every one of them demonstrates a meaningful divergence: a human who looked at what the AI produced and made a different decision, for a specific, documented reason.

**Carlos Medina, investigative reporter.** AI analyzed 4,300 regulatory filings and surfaced 387 violations. Carlos verified a stratified sample of 60, found a 7% misclassification rate, corrected it, and made an editorial judgment about how to present a pattern that was real but not conclusive.

**Luis Herrera, PE.** AI proposed dosing parameters for a water treatment facility. Luis reduced the range by 15% and added rate-of-change limiting the AI had omitted — based on field experience with similar installations. In a regulated environment, that provenance record is how you demonstrate to an inspector that a licensed professional made the safety-critical call.

**Dr. Nkechi Okonkwo, computational epidemiologist.** AI ranked neighborhood density as the second-most-predictive feature for disease outbreak risk. She excluded it — because density correlates with testing access in the study region, and including it would build in systematic bias. The provenance record captures that exclusion and why.

**Priya Chandrasekaran, open source maintainer.** AI recommended an `unsafe_inner()` API for a Rust permissions library. She rejected it and designed a `GroupPolicy` trait instead — because the unsafe API would have required callers to reason about safety invariants the library should enforce.

The other five — enterprise software architecture, government housing policy analysis, undergraduate research, film score composition, humanitarian field coordination — are in `halos-spec/examples/`. Each one tells the same story: the AI was useful, the human was essential, and the provenance record makes the human's reasoning visible.

---

## Self-provenance

A standard that defines provenance should practice it. Each HALOS spec version now has its own `.halos.json` provenance record documenting how it was created. The spec validates against its own schemas. The provenance records validate against the spec they describe. It's turtles, but the good kind.

---

## What else shipped

- **Schema test suite** — scenario-based tests for enum coverage, schema evolution, and semantic validation. CI catches drift between the spec and its schemas.
- **Example generation workflow** — an agent skill (`GENERATE-EXAMPLE.md`) that produces new domain examples. Contributors give it a domain; it generates the narrative and provenance record.
- **Terminology page** — precise definitions for provenance, lineage, attestation, and the three-layer model, with explicit comparisons to W3C PROV and SLSA terminology.
- **FAQ page** — extensibility, governance process, versioning strategy, adoption questions.
- **Homepage redesign** — storytelling-first layout with a narrative arc rather than a feature list.

---

## What's next

A tagged release is overdue. With the reorganization complete and v0.3 active, the spec needs a stable, versioned release that adoption tooling can reference instead of HEAD.

After that: the `software-dev` domain profile mapping HALOS to SLSA + CycloneDX + Chainloop, Phase 2 adoption tooling, and — on the longer horizon — signed release bundles and a validation CLI.

---

HALOS is developed in public at [halos.northharbor.dev](https://halos.northharbor.dev). The spec and examples live at [github.com/northharbor-dev/halos-spec](https://github.com/northharbor-dev/halos-spec). The signatory registry is open.
