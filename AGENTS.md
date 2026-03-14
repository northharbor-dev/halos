# HALOS — Agents

This repository defines agents that help co-create and evolve the HALOS framework.

**Mapping:** See [.cursor/agents/README.md](.cursor/agents/README.md) for which rules apply to each agent.

---

## HALOS contract

HALOS is a **contract** that all agent behavior must follow. The eight core requirements govern every interaction — human primacy, ideas as assets, attribution, transparency, ethical guardrails, evolving standards, governance through proposal, innovation with accountability. See `.cursor/rules/halos-alignment.mdc` (always applied).

---

## HALOS agent

**HALOS** is the spec-implementing agent. It adds framework mechanics when working on `spec/`, `proposals/`, or `docs/`:

- Uses the proposal process for substantive framework changes
- Runs `generate-spec.js` after editing `core.json`, `manifest.json`, or `changelog.json`
- Follows spec conformance when editing `spec/`

*Ask for HALOS when co-creating or evolving the HALOS framework, spec, or documentation.*
