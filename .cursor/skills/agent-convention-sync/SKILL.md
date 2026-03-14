---
name: agent-convention-sync
description: Seek out and update agent discovery files as conventions evolve. Use when agent ecosystems add new ways to state behavior, skills, or rules; when discovery files need revision; or when maintaining FOR_AGENTS.md, .cursorrules, docs/for-agents.md, docs/agent-discovery.md.
---

# Agent Convention Sync — HALOS

Keep HALOS agent discovery files current as coding tools and agent frameworks evolve.

## When to Use This Skill

- User asks to update or add agent discovery/convention files
- User mentions new agent tools (e.g., Aider, Continue, Bolt, v0) or conventions (e.g., `.agentrules`, `AI_CONTEXT.md`)
- Discovery files may be out of date
- Proposal or discussion about how agents discover HALOS

## Current Discovery Files

| File | Purpose |
|------|---------|
| `FOR_AGENTS.md` | Root-level agent entry point |
| `.cursorrules` | Legacy Cursor config |
| `AGENTS.md` | Contract and agent definitions |
| `docs/for-agents.md` | Full agent guidelines, discovery table |
| `docs/agent-discovery.md` | Why/how documentation |
| `spec/manifest.json` | Machine-readable discovery |
| `.cursor/rules/halos-alignment.mdc` | Cursor rule (always apply) |

## Process for Additions or Revisions

1. **Research** — Search for new conventions: agent instruction formats, discovery mechanisms, tool-specific config files (e.g., `.aider.conf`, `.continuerc`, `AI_CONTEXT.md`, `.well-known/agents/`).

2. **Propose** — For structural changes (new files, new sections), use the proposal process (`proposals/`). For minor updates (fixing links, wording), edit directly.

3. **Update files**:
   - Add new discovery files if a convention gains adoption and HALOS should be visible there
   - Update `docs/for-agents.md` discovery table when adding/changing files
   - Update `docs/agent-discovery.md` "Files Added" and "Maintenance" sections
   - Keep `FOR_AGENTS.md` as a brief pointer; avoid duplicating full contract
   - Keep `.cursorrules` minimal (one-line pointer)

4. **Canonical sources** — The HALOS contract lives in `spec/core.json` and `.cursor/rules/halos-alignment.mdc`. Discovery files should **point to** these, not duplicate them.

5. **README** — Update the "For AI Agents" section and "Agents" links if new files are added.

## Conventions to Watch

- **Agent Skills (SKILL.md)** — Anthropic/agentskills.io format
- **OSSA** — Agent manifests, `.ossa.yaml`
- **Agent Discovery Protocol (ADP)** — `.well-known/agents/`
- **Cursor** — `.cursorrules`, `.cursor/rules/`, `AGENTS.md`
- **Aider** — `.aider.conf`, `.aiderignore`
- **Continue** — `.continuerc`
- **Emerging** — `FOR_AI.md`, `AI_CONTEXT.md`, `.agentrules`, `AGENT_INSTRUCTIONS.md`

When a convention becomes widely used, consider adding a HALOS pointer in that format. When obsolete, mark deprecated in docs but avoid breaking existing users.

## Related Docs

- [docs/agent-discovery.md](docs/agent-discovery.md) — Full documentation
- [spec/RELATED_SPECS.md](spec/RELATED_SPECS.md) — Ecosystem specs
