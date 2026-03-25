---
layout: default
title: Whitepaper
deck: "HALOS: A Human-Centered Provenance Layer for AI Systems"
---

## HALOS: A Human-Centered Provenance Layer for AI Systems

### Enabling Verifiable Human–AI Collaboration with Policy Enforcement

---

## Abstract

As artificial intelligence becomes deeply embedded in software development, content creation, and decision-making systems, a critical gap has emerged:

> We lack a standardized way to capture, verify, and enforce **human accountability and AI involvement** across digital artifacts.

Existing standards such as CycloneDX and SLSA provide strong foundations for **transparency** and **integrity**, but do not address:

* Who (human vs AI) contributed
* How decisions were made
* Where responsibility lies

HALOS (Human–Agent Lineage & Oversight Specification) introduces:

* A **governance layer** (Principles)
* A **provenance model** (Provenance Spec)
* A pathway to **enforcement** through systems like Chainloop

SLSA, CycloneDX, and Chainloop are **example implementations** of the layers that HALOS integrates with — they are not the only options. HALOS is designed to be implementation-agnostic, and alternate systems are expected to fulfill these roles depending on the domain, industry, or organizational context.

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

---

### 1.2 Existing standards solve adjacent problems

* CycloneDX
  → What is inside a system

* SLSA
  → Can we trust how it was built

These are necessary — but incomplete.

---

### 1.3 The missing layer

What is missing is:

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
| CycloneDX / SLSA                     |
| (Transparency + integrity)           |
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

The current model (v0.1) is an **accountability envelope**.

Future versions evolve toward a **provenance graph**:

* Entities (humans, AI, artifacts)
* Activities (create, review, transform)
* Relationships (authored_by, derived_from, approved_by)

This evolution is necessary to support richer collaboration scenarios. 

---

## 4. The Enforcement Gap

Even with provenance captured, a key problem remains:

> Provenance without enforcement is advisory, not authoritative.

Organizations need to answer:

* Should this artifact be deployed?
* Does it meet governance requirements?
* Can we trust its lineage?

---

## 5. Chainloop as Enforcement Layer

Chainloop provides:

* Evidence collection
* Attestation storage
* Policy evaluation
* Enforcement gates

---

### 5.1 System Integration

```
Developer / Agent
        ↓
Artifact Creation
        ↓
HALOS Metadata Generated
        ↓
+-----------------------------+
| HALOS Attestation           |
| - human_author              |
| - ai_assistance             |
| - lineage                   |
| - review                    |
+-----------------------------+
        ↓
Chainloop Control Plane
        ↓
Policy Evaluation
        ↓
Allow / Block Promotion
```

---

## 6. HALOS + Chainloop: End-to-End Flow

```
[Human + AI Collaboration]
            ↓
     Artifact Produced
            ↓
 HALOS Provenance Generated
            ↓
 Embedded into:
   - CycloneDX SBOM
   - SLSA Provenance
            ↓
       Chainloop
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

## 7. Policy Examples

### 7.1 Human Accountability

Rule:

* All production artifacts must have a human reviewer

Evaluation:

* `halos.review.human_approved == true`

---

### 7.2 AI Transparency

Rule:

* AI contributions must be declared

Evaluation:

* Missing or empty `ai_assistance` → fail

---

### 7.3 Lineage Completeness

Rule:

* Artifact must include at least one upstream reference

Evaluation:

* `lineage.length > 0`

---

## 8. Why This Matters

This model enables:

### 8.1 Verifiable accountability

* Responsibility is explicit and traceable

### 8.2 Transparent AI usage

* AI is visible, not hidden

### 8.3 Resilient systems

* Provenance supports fallback and audit

### 8.4 Policy-driven governance

* Rules are enforced automatically

---

## 9. Strategic Positioning

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

## 10. Future Directions

* Graph-based provenance (v0.2+)
* Cryptographic signing of HALOS metadata
* Identity integration (OIDC, SPIFFE)
* Policy-as-code frameworks
* Visualization and audit tooling

---

## 11. Conclusion

As AI becomes integral to how systems are built and operated, we must evolve beyond traditional notions of provenance.

The future requires:

* Human-centered accountability
* Transparent AI collaboration
* Enforceable governance

HALOS, combined with systems like Chainloop, provides a path toward:

> **Trustworthy, verifiable, and enforceable human–AI systems**

---

## One-line Summary

HALOS defines what must be true about human–AI collaboration.
Chainloop ensures those truths are enforced.

---
