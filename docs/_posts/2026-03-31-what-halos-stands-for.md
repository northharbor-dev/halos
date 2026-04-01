---
title: "What HALOS Stands For"
excerpt: "A name change, a clearer two-part structure, eight domain examples, and where HALOS fits alongside CycloneDX, SLSA, and W3C PROV."
date: 2026-03-31
---

Names matter for standards. If a standard's own name implies the wrong thing, everything built on top of it starts from the wrong mental model. That problem has a clean fix: get the name right.

HALOS was always the right name. The acronym expansion — "Human-Agent Living Operating System" — was not. It implied runtime software, a system you operate, something that processes inputs and produces outputs. That is not what HALOS is. HALOS is a record-keeping standard. It specifies how to document who was responsible for a decision, what an AI contributed, and whether a human reviewed the result before it was used. That is lineage and origin work — not operating system work.

The expansion has been updated everywhere: **HALOS is the Human–Agent Lineage and Origin Standard.** This post explains why the name changed, what the two-part structure means for adoption, where HALOS sits in the broader ecosystem, and what eight new domain examples demonstrate about what provenance actually looks like in practice.

---

## The name

"Lineage and Origin Standard" maps to both layers of the framework:

- **Origin** — the HALOS Principles establish the ethical and normative foundation. Where does responsibility sit? How should attribution work? What does transparency of AI involvement require? These are questions of origin: who is accountable, and on what basis.

- **Lineage** — the Provenance Spec captures the chain of work. What did the AI contribute? What did the human verify, reject, or override? Who reviewed the artifact before it was used? These are questions of lineage: how did this come to exist, step by step, and who made the decisions that shaped it.

"Living Operating System" was a working title from an earlier phase of the project, when the framing was more about a governance framework for ongoing human–agent collaboration. As HALOS matured into a named standard with versioned specifications, JSON schemas, and adoption tooling, the expansion stopped fitting. More practically: "Living Operating System" placed poorly alongside the adjacent standards HALOS is designed to complement — CycloneDX, SLSA, W3C PROV — none of which would describe themselves as operating systems.

---

## Two layers

The framework has always had two distinct parts. They just weren't clearly labeled:

**HALOS Principles — v1.0, Stable.** The eight core requirements: human primacy, attribution and provenance, transparency of AI involvement, ethical guardrails, and the governance process through which the standard itself evolves. The Principles are normative and stable. They do not version; they anchor everything else. An organization that commits to the HALOS Principles is making a declaration about how it operates — what it considers the human's role in AI-assisted work, what it treats as attributable, and what it owes to the people affected by its AI systems.

**Provenance Spec — v0.3, Active.** The technical specification for recording how an artifact was created: who the accountable human is, what AI tools contributed, what decisions were made, and whether a human reviewed the result. The Provenance Spec does version — it will evolve as we learn what needs to be captured and how. The v0.2 graph model introduced decision provenance, human–AI interaction semantics, and policy evaluation traces. v0.3 adds multi-policy governance — recognizing that artifacts routinely fall under multiple concurrent governance policies.

Why does this split matter for adopters? **You can commit to Phase 1 today with no tooling changes.**

Phase 1 is governance: create a `halos.yaml` profile, review it against the eight core requirements, document any intentional deviations in a conflict register. This is a declaration, not an instrumentation project. An engineering team, a newsroom, a research institution can do this in a day using the adoption guide and templates in `halos-spec/adopt/`.

Phase 2 is provenance: instrument your workflow to produce `.halos.json` records that capture AI contribution and human decision points at the artifact level. This is where the Provenance Spec comes in, where the schemas and examples become practically relevant, and where HALOS becomes verifiable rather than declarative. Phase 2 is more involved — but Phase 1 doesn't require it. The two-phase structure was designed to lower the barrier to entry while making Phase 2 a clear, well-defined next step rather than an indefinite future commitment.

---

## Where HALOS fits

The ecosystem question comes up consistently: how does HALOS relate to the other standards and frameworks that already govern software supply chain and AI risk?

The honest answer is that the supply chain and build-integrity space has good coverage. CycloneDX and SBOM tooling address component composition. SLSA addresses build integrity. W3C PROV is a mature ontology for provenance graphs. NIST AI RMF and ISO/IEC 42001 provide governance policy frameworks for AI risk. These are well-developed tools with broad adoption.

What they do not address — as a rule — is human accountability and decision provenance. They answer "what is in this artifact?" and "how was it built?" They do not answer "who decided, who reviewed, and who is responsible?" That is the gap HALOS fills, and it fills it as a complement to these tools, not as a replacement.

**vs. CycloneDX / SBOM** — CycloneDX catalogs components. HALOS records accountability. If you're building a software bill of materials, HALOS provenance can embed directly as `component.evidence` — the artifact's composition and its authorship chain live together. For AI-generated or AI-assisted components, the embedded HALOS record answers questions the BOM itself cannot.

**vs. SLSA** — SLSA establishes trust levels for build pipelines. HALOS adds the human layer: what decisions were made during development, which AI recommendations were accepted or rejected, who reviewed the artifact before it was deployed. SLSA tells you the build environment was sound; HALOS tells you the decisions behind what was built were sound.

**vs. W3C PROV** — The HALOS v0.2 graph model is conceptually aligned with W3C PROV — it uses the same Entity / Activity / Agent structure. The practical difference is encoding: HALOS uses plain JSON with simplified typing. There is no RDF requirement, no ontology infrastructure, no SPARQL. For organizations that need W3C PROV compatibility, the v0.2 graph maps cleanly; for organizations that just want a readable, validatable record, HALOS is the lower-friction path.

**vs. NIST AI RMF / ISO 42001** — Governance frameworks operate at the policy level. They define what an organization's AI risk management program should accomplish. HALOS operates at the artifact level inside those programs — it is the record that demonstrates, for a specific artifact, that governance policies were followed. When an auditor asks "show me that a human reviewed this AI-generated analysis before it informed a decision," a HALOS provenance record is the answer. HALOS and governance frameworks are not alternatives; HALOS is the evidence layer that makes governance claims verifiable.

---

## What the examples show

Theory is fine. The harder question is what provenance records look like in practice — in the contexts where AI is actually being used, and where the human's role is not supervisory in an abstract sense but specific and consequential.

The eight domain examples in `halos-spec/examples/` were written to answer that question concretely. Each includes a scenario narrative — who is doing what, how AI is used, where human judgment is required — alongside a full v0.3 `.halos.json` provenance record for a real artifact in that domain.

A few that illustrate the range:

**Carlos Medina, investigative reporter.** Carlos used an AI document analysis tool to process 4,300 regulatory filings covering 12 years of a chemical facility's violation record. The AI surfaced 387 violations and a correlation between violation spikes and respiratory complaint rates in the adjacent neighborhood. Carlos verified a stratified sample of 60 findings against primary source documents — found a 7% misclassification rate, corrected it — consulted two independent researchers about the health correlation, and made an editorial decision about how to present a pattern that was real but not conclusive. The HALOS record captures each of those steps: what the AI found, what was verified, what was corrected, what the experts said, who made the framing decision, and why.

**Luis Herrera, PE, control systems engineer.** Luis was redesigning a dosing control loop for a water treatment facility. The AI proposed a parameter set that optimized for throughput; Luis reduced the AI's recommended dosing range by 15% and added rate-of-change limiting logic the AI had omitted — based on field experience with similar installations. The HALOS record documents the specific divergence: what the AI recommended, what Luis changed, and the engineering rationale. In a regulated environment, that record isn't optional. It's how you demonstrate to an inspector that a licensed professional made the safety-critical decision.

**Dr. Nkechi Okonkwo, computational epidemiologist.** Nkechi was building a predictive model for disease outbreak risk. The AI ranked neighborhood population density as the second-most-predictive feature. She excluded it — because she knew from prior work that density correlates strongly with testing access in the study region, and including it would have built in a systematic bias against underserved communities. The HALOS record captures that decision: the AI's ranking, her domain knowledge, and the specific exclusion. If the model is later audited for fairness, that record explains a choice that would otherwise look arbitrary.

In every case, the human made a decision that diverged meaningfully from the AI's output — and the provenance record captures why. That is what HALOS is for: not to constrain AI use, but to make human judgment visible and auditable in a context where it matters.

The other five examples cover enterprise software architecture, government policy analysis, undergraduate research, music composition, and humanitarian response field coordination. They are all in `halos-spec/examples/`.

---

## What's next

The March reorganization of halos-spec is complete. A tagged release is overdue and will happen next. With a release in place, adoption and integration tooling can reference stable, versioned artifacts rather than a HEAD snapshot.

After that: the `software-dev` domain profile — a full SLSA + CycloneDX + Chainloop mapping that shows how HALOS integrates into a typical software supply chain workflow. Then Phase 2 adoption, using the examples above as a reference implementation of CORE-3 and CORE-4. And on the longer horizon: signed release bundles and a validation CLI.

---

HALOS is developed in public at [halos.northharbor.dev](https://halos.northharbor.dev). The spec and examples live at [github.com/northharbor-dev/halos-spec](https://github.com/northharbor-dev/halos-spec). Becoming a signatory is the most concrete way to signal that you share the commitment to human accountability in AI-assisted work — the registry is open and the process is straightforward.
