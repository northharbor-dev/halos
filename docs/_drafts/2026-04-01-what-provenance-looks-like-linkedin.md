---
title: "What Provenance Looks Like: LinkedIn Draft"
date: 2026-04-01
platform: linkedin
post: what-provenance-looks-like
status: draft
---

**What does AI accountability look like in practice?**

Not in a framework deck. In a newsroom, a water treatment facility, an epidemiology lab, a humanitarian field office.

HALOS — now the **Human–Agent Lineage and Origin Standard** — just shipped nine domain examples showing exactly that.

Each example tells the story of a human who used AI, disagreed with it, and made a consequential decision:

- An investigative reporter who found a 7% misclassification rate in AI-analyzed regulatory filings and corrected it before publication
- A PE who reduced AI-recommended dosing parameters by 15% and added safety logic the AI omitted — based on field experience
- An epidemiologist who excluded a feature the AI ranked as highly predictive — because she knew it was confounded by testing access disparities
- An open source maintainer who rejected an AI-recommended unsafe API and designed a safer abstraction

Each example includes a full machine-readable provenance record documenting what the AI contributed, what the human changed, and why. That record is the answer when an auditor, inspector, or colleague asks: "who made this decision?"

Also in this update:
- **Provenance v0.3** — multi-policy governance (artifacts governed by multiple concurrent policies get structured references, not workarounds)
- **Self-provenance** — the spec now records its own creation provenance
- **Schema test suite** — CI validates the spec against its own schemas

The gap HALOS fills: CycloneDX tells you what's in an artifact. SLSA tells you how it was built. HALOS tells you **who decided, who reviewed, and who is responsible.** They're complements, not competitors.

All nine domain examples, the v0.3 spec, and the adoption toolkit are in the repo.

Star the repo: github.com/northharbor-dev/halos-spec
Try the adoption flow: halos.northharbor.dev
Become a signatory: the registry is open

Building in public. The door is open.

#AIGovernance #OpenSource #Provenance #BuildInPublic #AIStandards #ResponsibleAI
