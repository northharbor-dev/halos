---
title: "What Provenance Looks Like: Substack Draft"
subject: "What Provenance Looks Like — Nine Humans Who Disagreed with Their AI"
date: 2026-04-01
platform: substack
post: what-provenance-looks-like
status: draft
---

The hardest thing about building a governance standard is showing people what it looks like when it works.

Not the schema. Not the YAML. The moment where a person uses AI, disagrees with it, makes a different call, and that decision gets recorded somewhere a future auditor, regulator, or colleague can find it and understand why.

That's what we spent the last week building: nine of those moments, from nine different domains, each with a full machine-readable provenance record.

---

**First, the name**

HALOS has a new expansion: **Human–Agent Lineage and Origin Standard.**

The old version — "Human-Agent Living Operating System" — was a working title from earlier in the project. It implied software you run. HALOS is not software. It's a record-keeping standard: who was responsible, what the AI contributed, whether a human reviewed the result before it shipped.

"Lineage and Origin" maps to the two layers of the framework:
- **Origin** — the Principles. Where does responsibility sit? What does transparency require?
- **Lineage** — the Provenance Spec. What did the AI contribute? What did the human verify, reject, or override? Who reviewed it?

The expansion now matches the work. It also positions HALOS correctly alongside CycloneDX, SLSA, and W3C PROV — none of which describe themselves as operating systems.

---

**Provenance v0.3**

A specific, practical problem: in v0.2, the `governance` field was a single object. One policy per artifact.

But real artifacts live under multiple governance policies simultaneously. A payment service has both PCI-DSS requirements and an internal AI usage policy. A water treatment update has a state environmental permit and an internal change management policy. A research paper has a university AI policy and a journal's disclosure requirements.

v0.3 changes `governance` to an **array of policy references**. Multi-policy governance is now structural, not a workaround.

---

**Nine domain examples**

This is the heart of the update.

Each example in `halos-spec/examples/` includes a narrative — who's doing the work, how AI is involved, where human judgment matters — and a full v0.3 `.halos.json` provenance record. Every example demonstrates a human diverging from AI output in a way that was consequential.

A few:

**Carlos Medina, investigative reporter.** AI processed 4,300 regulatory filings covering 12 years of a chemical facility's violations. Surfaced 387 violations and a correlation with neighborhood respiratory complaints. Carlos verified a stratified sample of 60 findings — found a 7% misclassification rate, corrected it — consulted two independent researchers, and made an editorial decision about presenting a pattern that was real but not conclusive. The provenance record captures each step: what was verified, what was corrected, who was consulted, who made the call on framing.

**Luis Herrera, PE, control systems engineer.** AI proposed dosing parameters for a water treatment facility optimized for throughput. Luis reduced the recommended range by 15% and added rate-of-change limiting the AI had omitted, based on field experience with similar installations. In a regulated environment, that provenance record is how you demonstrate to a state inspector that a licensed professional — not an algorithm — made the safety-critical decision.

**Dr. Nkechi Okonkwo, computational epidemiologist.** Building a disease outbreak prediction model. AI ranked neighborhood population density as the second-most-predictive feature. She excluded it, because she knew from prior work that density correlates strongly with testing access in the study region. Including it would have built in systematic bias against underserved communities. The provenance record captures the AI's ranking, her domain knowledge, and the specific exclusion. If the model is later audited for fairness, that record explains a choice that would otherwise look arbitrary.

**Priya Chandrasekaran, open source maintainer.** AI recommended an `unsafe_inner()` API for a Rust permissions library. She rejected it and designed a `GroupPolicy` trait instead — because an unsafe API would require every caller to reason about safety invariants the library should enforce internally.

The other five — enterprise architecture, government housing policy, undergraduate research, film scoring, humanitarian field coordination — are all in the repo. Each tells the same story: the AI was useful, the human was essential, and the provenance record makes the human's reasoning visible and auditable.

---

**Self-provenance and testing**

The spec now eats its own dogfood. Each provenance spec version (v0.1, v0.2, v0.3) has its own `.halos.json` record documenting how it was created. The provenance records validate against the schemas they describe.

We also added a scenario-based test suite — enum coverage, schema evolution, semantic validation — so CI catches drift between the spec and its schemas before humans do.

---

**What else shipped**

- A storytelling-first homepage redesign
- A terminology page with precise definitions and W3C PROV / SLSA comparisons
- A FAQ page covering the most common adoption questions
- An example generation skill (`GENERATE-EXAMPLE.md`) so contributors can create new domain examples with an AI agent

---

**What's next**

A tagged release. The reorganization is complete, v0.3 is active, and adoption tooling needs a stable version reference instead of HEAD.

Then: the `software-dev` domain profile (SLSA + CycloneDX + Chainloop mapping), Phase 2 adoption tooling, and eventually signed release bundles and a validation CLI.

---

**Get involved**

**Star the repo** — [github.com/northharbor-dev/halos-spec](https://github.com/northharbor-dev/halos-spec). It helps people find it.

**Try the adoption flow** — go to [halos.northharbor.dev](https://halos.northharbor.dev), copy the prompt, paste it into your AI agent. See what it finds in your repo.

**Add a domain example** — if you work in a domain where AI-assisted decisions are consequential and you'd like to see a HALOS provenance example for it, the generation skill makes this straightforward.

**Become a signatory** — if you're building with AI and care about attribution and accountability, signing is the most concrete signal you can send.

We're building this in public because governance for AI tooling shouldn't be decided behind closed doors. Come be a geek about it.

---

*HALOS lives at [halos.northharbor.dev](https://halos.northharbor.dev). The spec is at [github.com/northharbor-dev/halos-spec](https://github.com/northharbor-dev/halos-spec).*
