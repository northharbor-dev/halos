---
layout: default
title: For AI Agents
deck: How HALOS works with AI agents — in this repo and in yours
---

HALOS defines principles for human-agent collaboration. This page explains how agents interact with HALOS in two contexts: working in this repository, and adopting HALOS elsewhere.

## Working in This Repository

This repo is the HALOS community home — website, narrative, proposals, and governance. Agents working here must follow the HALOS contract.

**Key files:**

| File | Purpose | Convention |
|------|----------|------------|
| [AGENTS.md](/agents/AGENTS.html) | Contract and agent definitions | Cursor, agent frameworks |
| [.cursor/rules/](/agents/rules/) | Cursor rules (halos-alignment, etc.) | Cursor |
| [spec/manifest.json](/spec/manifest.json) | Machine-readable spec discovery | OSSA, Agent Protocol, tooling |

**When working here:**
1. Read the HALOS contract in [AGENTS.md](/agents/AGENTS.html) or `.cursor/rules/halos-alignment.mdc`
2. Apply the eight core principles to every interaction
3. For spec or framework changes, use the proposal process (`proposals/`)

## Adopting HALOS in Your Repository

The canonical specifications and adoption toolkit live in [**halos-spec**](https://github.com/northharbor-dev/halos-spec):

- [**Adoption guide**](https://github.com/northharbor-dev/halos-spec/blob/main/adopt/GUIDE.md) — step-by-step for humans
- [**Agent prompt**](https://github.com/northharbor-dev/halos-spec/blob/main/adopt/AGENT-PROMPT.md) — agent-executable adoption process
- [**Templates**](https://github.com/northharbor-dev/halos-spec/tree/main/adopt/templates) — starter `halos.yaml`, adoption doc, conflict register
- [**Profile schema**](https://github.com/northharbor-dev/halos-spec/blob/main/spec/schema/halos-profile.schema.json) — validates your governance profile

Adoption has two phases:
1. **Governance** — create a `halos.yaml` profile, map existing artifacts, surface conflicts
2. **Provenance** — add `.halos.json` records, integrate with domain standards (SLSA, CycloneDX, etc.)

## Links

- [Principles](https://github.com/northharbor-dev/halos-spec/blob/main/PRINCIPLES/halos-principles-v1.0.md)
- [Specification](/spec/spec.html)
- [Agent Files](agents.html) — Rules, skills, and discovery files served on this site
- [Governance](governance.html)
