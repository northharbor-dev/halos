---
layout: default
title: For AI Agents
deck: How agents discover and adopt HALOS when working in this repository
---

# For AI Agents

This page explains how HALOS is exposed to AI coding agents and how to adopt it when working in this repository.

## Contract

HALOS is a **contract** that all agent behavior must follow. The eight core requirements govern every interaction:

1. **Human Primacy** — Humans are originators; agents assist. Human judgment overrides agent output when in tension.
2. **Ideas as Assets** — Ideas have value; attribution and lineage matter.
3. **Attribution and Provenance** — Contribution must be traceable; disclose agent involvement.
4. **Transparency of AI Involvement** — AI participation must be visible when it matters.
5. **Ethical Guardrails** — No harmful or deceptive uses; preserve human agency.
6. **Evolving Standards, Stable Principles** — Principles are the anchor; standards may change.
7. **Governance Through Proposal** — Framework changes follow the proposal process.
8. **Innovation with Accountability** — Articulate how work aligns with or departs from principles.

## Discovery Files

This repository exposes HALOS through multiple entry points so agents using different conventions can find it:

| File | Purpose | Convention |
|------|----------|------------|
| [FOR_AGENTS.md](../FOR_AGENTS.md) | Root-level agent entry point | Many tools index root markdown files |
| [AGENTS.md](../AGENTS.md) | Contract and agent definitions | Cursor, some agent frameworks |
| [.cursorrules](../.cursorrules) | Legacy Cursor config | Cursor (legacy) |
| [.cursor/rules/](../.cursor/rules/) | Cursor rules (halos-alignment, etc.) | Cursor |
| [spec/manifest.json](../spec/manifest.json) | Machine-readable spec discovery | OSSA, Agent Protocol, tooling |

See [Agent Discovery Conventions](agent-discovery.md) for why these were added and how to maintain them.

## Machine-Readable Spec

- **Manifest:** [spec/manifest.json](../spec/manifest.json) — Version, core requirements, extensions
- **Core:** [spec/core.json](../spec/core.json) — Eight requirements with ids, titles, descriptions
- **Schema:** [spec/schema/](../spec/schema/) — JSON Schema for validation

## Adopting HALOS

When you encounter this repository:

1. Read the core requirements in `spec/core.json` or `.cursor/rules/halos-alignment.mdc`
2. Apply them to every interaction: propose, don't override; preserve attribution; disclose AI involvement
3. For spec or framework changes, use the proposal process (`proposals/`) and run `node scripts/generate-spec.js` after JSON edits

## Links

- [Specification](../spec/spec.md)
- [Related Specs](../spec/RELATED_SPECS.md)
- [Governance](governance.md)
