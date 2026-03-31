---
title: "Lineage and Origin — name, structure, and ecosystem"
date: 2026-03-31
entry_type: milestone
---

The name is settled. HALOS is the Human–Agent Lineage and Origin Standard. "Living Operating System" is retired — it read as runtime software and didn't position well alongside CycloneDX, SLSA, or W3C PROV. "Lineage and Origin" maps to both layers: the Principles define an ethical *origin* framework; the Provenance Spec captures *lineage* of work. The full name now appears consistently across the main site, halos-spec, and northharbor.dev.

**Two layers, made explicit.** The framework has always had two distinct, versioned parts — they just weren't surfaced:

- **HALOS Principles — v1.0, Stable.** The normative foundation: human primacy, attribution, transparency of AI involvement, and ethical guardrails. These do not version; they anchor everything else.
- **Provenance Spec — v0.1, Active.** The technical standard for recording who the accountable human is, what AI contributed, and whether a human reviewed an artifact before use.

The main site now leads with both, with version numbers, rather than treating them as a single undifferentiated framework.

**Where HALOS fits.** The ecosystem comparison — previously buried in the halos-spec README — is now front-and-center on the main site:

- *vs. CycloneDX/SBOM* — CycloneDX answers "what's in this software?" HALOS adds "who was responsible and what AI contributed." HALOS provenance embeds directly as `component.evidence`.
- *vs. SLSA* — SLSA answers "how was it built?" HALOS adds "what decisions were made and by whom."
- *vs. W3C PROV* — The v0.2 graph model aligns with W3C PROV (Entities, Activities, Agents) but uses plain JSON — no RDF required.
- *vs. NIST AI RMF / ISO 42001* — Governance frameworks define policy. HALOS operates at the artifact level inside those processes.

**Eight domain examples.** halos-spec now includes eight real-world scenario narratives, each with a `.md` account and a `.halos.json` provenance record using the v0.2 graph model:

- **Journalism** — Carlos Medina (investigative reporter) corrected an AI-generated violation dataset before publication
- **Enterprise software** — Tomoko Hayashi (platform engineer) rejected an AI-recommended CQRS architecture and rewrote the state machine from scratch
- **Scientific research** — Dr. Nkechi Okonkwo (computational epidemiologist) excluded a confounded feature the AI had ranked as highly predictive
- **Real-time critical systems** — Luis Herrera, PE (control systems engineer) reduced an AI-proposed dosing recommendation and added safety logic the AI had omitted
- **Government policy** — Fatima Al-Rashid (policy analyst) determined how to frame a politically consequential housing supply finding
- **Education** — Mateo Rivera (undergrad) rejected an AI-fabricated citation after verification failure
- **Music production** — Maya Reeves (composer) rejected an AI harmonic sketch, keeping only the structural idea
- **Nonprofit / humanitarian** — Amara Diallo (field coordinator) overrode an AI priority ranking based on ground-truth field data

Each narrative covers the scenario, collaboration process, artifact description, AIVSS-style risk interpretation, and framework crosswalk (NIST AI RMF, ISO/IEC 42001, CycloneDX).

**Coming next:**

- First tagged release of halos-spec — the March reorganization is complete, a release is overdue.
- `halos/spec/` content replaced with redirect stubs pointing to halos-spec (deferred from the March migration).
- `software-dev` domain profile fleshed out — full SLSA + CycloneDX + Chainloop mapping.
- Phase 2 adoption: introducing `.halos.json` provenance records as the reference implementation of CORE-3 and CORE-4.
