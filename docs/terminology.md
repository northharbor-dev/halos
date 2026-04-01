---
title: Terminology
deck: Plain-language definitions of the key concepts in HALOS — written so newcomers can orient quickly and practitioners can speak precisely.
---

## Why Terminology Matters

HALOS sits at the intersection of software supply chain security, AI governance, and accountability. These fields each have their own vocabulary, and some of the most important words — *provenance*, *lineage*, *attestation* — mean different things depending on who is using them.

This page defines what these terms mean inside HALOS. Where the usage overlaps with established standards like W3C PROV or SLSA, we note the connection. Where HALOS narrows or extends a term, we explain why.

> **Guiding principle:** Provenance is not just history — it is **accountability over time.**

---

## Core Layers

HALOS is organized into three layers. Understanding this structure helps orient every other term on this page.

### HALOS Principles

The governance framework defining human primacy, ethical constraints, attribution expectations, and transparency requirements. The principles are the normative foundation — they change slowly and anchor everything else. See [Principles](principles.html).

### HALOS Provenance

The structured representation of how an artifact was created, how it evolved over time, who (human and AI) contributed, and how decisions were made. This is the technical layer — it evolves as the spec matures. See [Provenance Spec](provenance.html).

### HALOS Attestation

A concrete, machine-readable artifact containing HALOS metadata — the verifiable record that makes provenance actionable. Typically embedded in CycloneDX SBOMs or SLSA provenance documents.

These three layers work together: **Principles** define what should be tracked and why. **Provenance** defines how to represent it. **Attestation** is the deliverable — the machine-readable record.

---

## Provenance

**The complete history of an artifact — not just what happened, but who was accountable at each step.**

Provenance is the broadest concept in HALOS. It encompasses everything about how an artifact came to exist: who created it, what tools and AI systems were involved, what decisions shaped it, who reviewed it, and under what governance policies it was produced.

Think of provenance as the full story behind something. If you pick up a painting in a museum and ask "where did this come from?", the provenance is the answer — not just "it was painted in 1887" but who painted it, who owned it, how it changed hands, and what certifications verify its authenticity.

In HALOS, provenance carries a deliberate emphasis on **accountability**. Knowing what happened is not enough. Provenance should make it clear who was responsible for each meaningful step.

**Example:** A provenance record for a software module might say: "Bob wrote the initial spec. Claude generated a scaffold from that spec. Bob modified the output, adding rate limiting. Alice reviewed and approved the final version. The work was governed by the team's internal AI usage policy."

**Related standards:** W3C PROV defines provenance broadly as "information about entities, activities, and people involved in producing a piece of data." HALOS aligns with this model and adds structured fields for AI involvement, human review, and governance policy references.

---

## Lineage

**The sequence or graph of transformations that an artifact undergoes — how it came to be in its current form.**

Lineage is a narrower concept than provenance. Where provenance is the full story, lineage is specifically the chain of transformations. It answers: *"What steps turned raw inputs into this final artifact?"*

The distinction matters because two artifacts can share the same lineage (same transformation steps) but have very different provenance (different people responsible, different governance policies, different review processes).

**Analogy:** If you order a custom piece of furniture, the *lineage* is the sequence of woodworking steps — rough lumber was cut, planed, joined, sanded, and finished. The *provenance* is everything else too: who the woodworker was, where the lumber was sourced, what design specifications were followed, and who inspected the final piece.

**In software:** The lineage of a compiled binary might be: source code → compiled → tested → packaged. The provenance adds: who wrote the source, what AI assisted, what review happened before the merge, and what compliance policies applied.

**In HALOS specifically:** The [graph model](provenance.html) (v0.2+) represents lineage through **Activities** (the transformations) and **Relationships** (how they connect). Relationship types like `derived_from`, `wasGeneratedBy`, and `wasRevisionOf` are the vocabulary for expressing lineage within a provenance record. Lineage is not a separate record — it is the structural backbone of provenance.

---

## Provenance vs. Lineage — When the Difference Matters

For simple artifacts with one author and no AI involvement, provenance and lineage may feel interchangeable. The distinction becomes important when:

- **Multiple people contribute at different stages.** Lineage shows the transformation chain; provenance shows who was accountable at each step.
- **AI is involved.** Lineage might show "generate → edit → review." Provenance adds that a specific model was used for generation, the human modified its output, and a reviewer verified the result.
- **Governance or compliance is required.** An auditor cares about provenance — not just what steps happened, but who authorized them and under what policy. Lineage alone cannot answer those questions.
- **Decisions shaped the artifact.** HALOS supports [decision provenance](provenance.html#decision-provenance) — recording why an approach was chosen. Decisions are part of provenance, not lineage. The artifact's transformation steps did not change because of a decision, but the *reason* those steps were taken is a provenance concern.

| | Lineage | Provenance |
|---|---|---|
| **Answers** | "How was this built?" | "Who is accountable, and how did this come to exist?" |
| **Scope** | Transformation steps | Full history including people, decisions, governance, and review |
| **Relationship** | A component of provenance | The whole picture |
| **Analogies** | Recipe steps | Recipe steps + who cooked, who sourced ingredients, who tasted and approved, what kitchen standards applied |

---

## Attestation

**A concrete, machine-readable record that asserts facts about an artifact's provenance.**

If provenance is the story, an attestation is the signed, verifiable document that tells that story in a way machines can process and verify.

In HALOS, a `.halos.json` file is an attestation. It follows a defined schema, can be validated programmatically, and can be embedded in other supply chain artifacts like CycloneDX SBOMs or SLSA provenance documents.

Attestation is what makes provenance actionable. Without it, provenance is just institutional knowledge or oral history — valuable, but not verifiable and not automatable.

**Related standards:** SLSA uses "attestation" to mean a signed statement about how a build artifact was produced. HALOS attestations serve a similar role but focus on human–AI collaboration metadata rather than build pipeline integrity.

---

## Artifact

**Any digital output or asset that HALOS can describe.**

This is intentionally broad. An artifact could be:

- source code or a compiled binary
- a document, report, or design file
- an AI model's output or a dataset
- a policy document or specification

HALOS does not prescribe what deserves a provenance record. That is a governance decision — but the spec can describe anything digital.

---

## Human Author

**The primary accountable human entity responsible for an artifact.**

This can be an individual, a team, or an organization. The key word is *accountable* — the human author is not necessarily the person who typed every line, but the person (or group) who directed the work and takes responsibility for the result.

In a world where AI can generate substantial portions of an artifact, human authorship means: *who decided what should be built, reviewed what was produced, and stands behind the outcome?*

---

## AI Assistance

**Any use of an AI system that contributes materially to an artifact.**

This includes code generation, content drafting, analysis, summarization, review suggestions, and any other meaningful contribution by an AI model. HALOS records *which* model was used, *what role* it played (generation, review, comparison, etc.), and *how the human responded* to its output.

The spec distinguishes between different levels of AI involvement — from minor suggestions to substantial generation — not to judge, but to make the nature of the collaboration visible.

---

## Review

**A human evaluation step applied to an artifact.**

HALOS treats review as a first-class concept because it is the primary mechanism through which humans exercise judgment over AI-assisted work. A provenance record can show that an artifact was reviewed, by whom, when, and what type of review it was (peer review, security review, editorial review, etc.).

The HALOS Principles state that critical outputs must have explicit human approval. Review is how that principle is operationalized.

---

## Governance

**The set of rules, policies, or principles that an artifact was produced under.**

Governance in HALOS is not abstract — it is a concrete reference in the provenance record. An artifact can cite multiple governance policies (e.g., "our internal AI usage policy," "PCI-DSS 4.0," and "HALOS Principles v1.0" simultaneously).

This answers the question auditors and stakeholders care about: *"Under what rules was this work done?"*

---

## Graph Concepts (v0.2+)

The HALOS provenance graph model represents the world using three building blocks:

### Entity
A thing that exists — a person, an AI model, an artifact, a policy, an organization. Entities are the nouns of provenance.

### Activity
An action performed over time — create, generate, modify, review, approve, deploy. Activities are the verbs.

### Relationship
A connection between entities and activities — `authored_by`, `generated_with`, `derived_from`, `reviewed_by`. Relationships are the connective tissue that turns isolated facts into a traceable story.

Together, these three concepts can represent arbitrarily complex collaboration histories while remaining simple enough to express in plain JSON. This model enables:

- **Traceability** — follow the chain from any artifact back to its origins
- **Accountability** — identify who was responsible at each step
- **Auditability** — verify that governance requirements were met
- **Visualization** — render collaboration histories as navigable graphs

---

## Quick Reference

| Term | One-line definition |
|---|---|
| **Provenance** | Full history + accountability |
| **Lineage** | Sequence of transformations |
| **Attestation** | Verifiable, machine-readable provenance record |
| **Artifact** | Any digital output HALOS can describe |
| **Human Author** | The accountable human behind an artifact |
| **AI Assistance** | Material AI contribution to an artifact |
| **Review** | Human evaluation step |
| **Governance** | The policies an artifact was produced under |
| **Entity** | A thing (person, model, artifact, policy) |
| **Activity** | An action (create, review, approve) |
| **Relationship** | A connection between entities and activities |
