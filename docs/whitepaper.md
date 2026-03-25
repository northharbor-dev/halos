---
layout: default
title: Whitepaper
deck: "HALOS: A Human-Centered Provenance Layer for AI Systems"
---

## HALOS: A Human-Centered Provenance Layer for AI Systems

### Enabling Verifiable Human–AI Collaboration with Policy Enforcement

*March 2026 — HALOS Principles v1.0, Provenance Spec v0.1*

---

## Abstract

As artificial intelligence becomes deeply embedded in software development, content creation, and decision-making systems, a critical gap has emerged:

> We lack a standardized way to capture, verify, and enforce **human accountability and AI involvement** across digital artifacts.

Existing standards provide strong foundations for **transparency** (CycloneDX, SPDX) and **integrity** (SLSA, in-toto), but do not address:

* Who (human vs AI) contributed
* How decisions were made
* Where responsibility lies

HALOS (Human–Agent Lineage and Origin Standard) introduces:

* A **governance layer** (Principles)
* A **provenance model** (Provenance Spec)
* A pathway to **enforcement** through policy engines

The standards and tools named in this paper — CycloneDX, SLSA, Chainloop, and others — are **representative examples** of the layers that HALOS integrates with. HALOS is designed to be implementation-agnostic; alternate systems are expected to fulfill these roles depending on the domain, industry, or organizational context.

This paper outlines how HALOS integrates with modern supply chain frameworks to create a **verifiable, enforceable model for human–AI collaboration**.

---

## 1. The Problem

### 1.1 AI is changing how things are created

Across domains:

* Software is increasingly AI-generated or assisted
* Content is synthesized, transformed, and recombined
* Decisions are influenced by probabilistic systems

But current systems do not reliably answer:

* Was AI used?
* Who is accountable?
* How did this artifact evolve?

### 1.2 Existing standards solve adjacent problems

A growing ecosystem of standards addresses software supply chain concerns, but each focuses on a specific layer:

| Standard | What it answers |
|----------|----------------|
| CycloneDX, SPDX, SWID | What is inside a system (transparency) |
| SLSA, in-toto, Sigstore | How it was built and whether we can trust the build (integrity) |
| Chainloop, OPA, Kyverno | Whether an artifact is allowed to proceed (enforcement) |

These are necessary — but none answers: **who contributed (human or AI), and who is accountable?**

### 1.3 The missing layer

> A **human-centered provenance model** that captures authorship, collaboration, and decision-making across both humans and AI.

---

## 2. HALOS Overview

HALOS introduces a layered approach:

```
+--------------------------------------+
| HALOS Principles                     |
| (Human primacy, governance, ethics)  |
+--------------------------------------+
| HALOS Provenance Spec                |
| (Authorship, lineage, AI disclosure) |
+--------------------------------------+
| Attestations (embedded in systems)   |
+--------------------------------------+
| Transparency + Integrity layers      |
| (CycloneDX, SLSA, or equivalents)   |
+--------------------------------------+
| Execution Systems (CI/CD pipelines)  |
+--------------------------------------+
```

---

## 3. HALOS Provenance Model

The HALOS Provenance Spec defines how to represent:

* Human authorship
* AI assistance
* Review and approval
* Lineage of transformations

The current model (v0.1) is an **accountability envelope** — a structured record attached to an artifact that declares who made it, how AI was involved, and whether a human reviewed it.

Future versions evolve toward a **provenance graph**:

* Entities (humans, AI, artifacts)
* Activities (create, review, transform)
* Relationships (authored_by, derived_from, approved_by)

This evolution is necessary to support richer collaboration scenarios where artifacts pass through multiple human and AI contributors over time.

---

## 4. The Enforcement Gap

Even with provenance captured, a key problem remains:

> Provenance without enforcement is advisory, not authoritative.

Organizations need to answer:

* Should this artifact be deployed?
* Does it meet governance requirements?
* Can we trust its lineage?

Provenance records are only as valuable as the systems that evaluate and act on them.

---

## 5. Enforcement

HALOS provenance becomes actionable when paired with an enforcement layer — a system that collects attestations, evaluates them against policy, and gates promotion or deployment.

An enforcement layer provides:

* Evidence collection — gathering HALOS provenance alongside other attestations
* Attestation storage — durable, verifiable record of what was collected
* Policy evaluation — checking provenance against organizational rules
* Enforcement gates — allowing, blocking, or warning before promotion

**Example systems:** Chainloop, OPA (Open Policy Agent), Kyverno, or custom CI policy steps. The specific system depends on the organization's existing toolchain and deployment model.

### End-to-End Flow

```
[Human + AI Collaboration]
            ↓
     Artifact Produced
            ↓
 HALOS Provenance Generated
            ↓
 Embedded into:
   - CycloneDX SBOM (or equivalent)
   - SLSA Provenance (or equivalent)
            ↓
   Enforcement Layer
   (Collect + Verify)
            ↓
     Policy Engine
            ↓
   ┌───────────────┐
   │   APPROVE     │
   │   REJECT      │
   │   WARN        │
   └───────────────┘
            ↓
   Deployment / Distribution
```

---

## 6. Policy Examples

Enforcement systems evaluate HALOS provenance fields against organizational policy. Here are representative rules:

### 6.1 Human accountability

**Rule:** All production artifacts must have a human reviewer.

**Evaluation:** `halos.review` must contain at least one entry where the reviewer is human.

**Scenario:** A CI pipeline generates a container image with AI-assisted code. Before promotion to production, the enforcement layer checks that a human reviewed the changes — not just that tests passed.

### 6.2 AI transparency

**Rule:** AI contributions must be declared.

**Evaluation:** If `ai_assistance` is missing or empty on an artifact known to involve AI tooling, the check fails.

**Scenario:** An organization requires all AI-assisted artifacts to be labeled. A developer commits code generated by an AI pair programmer but omits the `ai_assistance` field. The enforcement layer flags this before the artifact reaches production.

### 6.3 Lineage completeness

**Rule:** Artifacts must include upstream references.

**Evaluation:** `lineage` must contain at least one parent artifact ID.

**Scenario:** A document is published that was derived from an internal report. The lineage field traces back to the original, enabling audit of how the content evolved.

---

## 7. Why This Matters

### 7.1 Verifiable accountability

Responsibility is explicit and traceable. When something goes wrong, the provenance record answers: who directed this work, who reviewed it, and who is accountable.

### 7.2 Transparent AI usage

AI is visible, not hidden. Stakeholders — internal reviewers, customers, regulators — can see when and how AI participated in creating an artifact.

### 7.3 Resilient systems

Provenance supports fallback and audit. If an AI model is found to be unreliable, organizations can identify which artifacts were produced with its assistance.

### 7.4 Policy-driven governance

Rules are enforced automatically at pipeline boundaries, not through manual review alone. Governance scales with the organization.

---

## 8. Strategic Positioning

HALOS is not a replacement for existing standards.

It is a **missing semantic layer**.

The following table illustrates how HALOS relates to complementary systems. The named tools are **representative examples**, not exclusive requirements — alternate implementations are expected based on domain, industry, and organizational needs.

| Layer        | Responsibility                             | Example Implementations  |
| ------------ | ------------------------------------------ | ------------------------ |
| Transparency | What is in the system                      | CycloneDX, SPDX, SWID   |
| Integrity    | How it was built                           | SLSA, in-toto, Sigstore  |
| **HALOS**    | Who contributed and why decisions were made | —                        |
| Enforcement  | Whether it is allowed                      | Chainloop, OPA, Kyverno |

---

## 9. Future Directions

* **Graph-based provenance** (v0.2+) — richer modeling of multi-contributor, multi-step workflows
* **Domain profiles** — implementation guidance mapping HALOS principles to specific industries and toolchains (software development, regulated healthcare, consumer platforms)
* **Cryptographic signing** of HALOS metadata — tamper-evident provenance records
* **Identity integration** (OIDC, SPIFFE) — tying provenance to verified identities
* **Policy-as-code frameworks** — HALOS-aware policy templates for enforcement systems
* **Visualization and audit tooling** — making provenance human-readable at scale

---

## 10. Conclusion

As AI becomes integral to how systems are built and operated, we must evolve beyond traditional notions of provenance.

The future requires:

* Human-centered accountability
* Transparent AI collaboration
* Enforceable governance

HALOS provides a path toward:

> **Trustworthy, verifiable, and enforceable human–AI systems**

The principles define what must be true. The provenance spec captures evidence. Enforcement systems ensure those truths hold.

---

## Adopting HALOS

To adopt HALOS principles in your repository or organization, see the [adoption toolkit](https://github.com/northharbor-dev/halos-spec/blob/main/adopt/GUIDE.md) in the halos-spec repository.

---

## One-line Summary

HALOS defines what must be true about human–AI collaboration. Enforcement systems ensure those truths hold.

---
