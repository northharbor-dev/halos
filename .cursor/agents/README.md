---
name: README
model: inherit
---

# HALOS Agent Manifest

Maps agents to rules for the HALOS repository.

---

## Global (always applied)

| Rule | Path | Scope |
|------|------|-------|
| HALOS contract | `.cursor/rules/halos-alignment.mdc` | `alwaysApply: true` — principles govern every interaction |

## HALOS (spec-implementing agent)

| Type | Path |
|------|------|
| Rules | `.cursor/rules/agents/halos.mdc`, `.cursor/rules/halos-spec-conformance.mdc` |
| Skills | *(none)* |

Adds framework mechanics when working in `spec/`, `proposals/`, `docs/`. The HALOS contract (above) applies to all interactions.

### Skills

| Skill | Path | When used |
|-------|------|-----------|
| agent-convention-sync | `.cursor/skills/agent-convention-sync/` | Updating discovery files (FOR_AGENTS.md, .cursorrules, docs/for-agents.md) as agent conventions evolve |
