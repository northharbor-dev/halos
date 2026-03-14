---
layout: default
title: Agent Discovery Conventions
deck: Why and how HALOS exposes agent instructions through multiple entry points

# Agent Discovery Conventions

This document explains why HALOS uses multiple files and locations to expose agent instructions, and how they were added and should be maintained.

## Problem

AI coding agents (Cursor, Aider, Continue, GitHub Copilot, Claude Code, etc.) do not share a single convention for discovering "how to behave in this repo." Different tools look in different places:

- **Cursor** — `.cursor/rules/*.mdc`, `AGENTS.md`, legacy `.cursorrules`
- **Aider** — `.aider.conf`, files explicitly @-mentioned
- **Continue** — `.continuerc`, project context
- **Others** — Often index root-level markdown, `README`, `docs/`

A general-purpose agent that clones or encounters this repo may not natively seek out `AGENTS.md` or `.cursor/rules/`. To maximize discovery, HALOS exposes its contract through several conventions.

## Files Added


| File                       | Location  | Why                                                                                                                                                                     |
| -------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FOR_AGENTS.md**          | Repo root | Many tools index root-level markdown. A short, explicit filename (`FOR_AGENTS`, `AGENTS`) is searchable. Provides immediate entry point for agents that crawl the repo. |
| **.cursorrules**           | Repo root | Legacy Cursor convention. Ensures Cursor users get HALOS even if they don't use `.cursor/` rules. One-line pointer to authoritative sources.                            |
| **docs/for-agents.md**     | docs/     | Tools that crawl `docs/` for documentation. Full agent guidelines, discovery table, links to spec.                                                                      |
| **README "For AI Agents"** | README.md | README is universally read. A visible section near the top ensures agents see the contract early.                                                                       |


## How They Were Added

1. **FOR_AGENTS.md** — Created at repo root with brief contract statement and links to AGENTS.md, spec/, docs/for-agents.md.
2. **.cursorrules** — Minimal one-liner pointing to AGENTS.md, spec/, docs/for-agents.md. Avoids duplicating content; delegates to authoritative sources.
3. **docs/for-agents.md** — Full page with contract summary, discovery table, machine-readable spec pointers, and adoption steps.
4. **README** — Added "For AI Agents" section after Overview with clear callout and links.

All files avoid duplicating the full contract; they point to `spec/core.json` and `.cursor/rules/halos-alignment.mdc` as the canonical sources.

## Maintenance

As agent ecosystems evolve, new conventions may emerge (e.g., `.agentrules`, `AI_CONTEXT.md`, OSSA manifest at `.well-known/agents/`). The [agent-convention-sync](/agents/skills/agent-convention-sync/SKILL.md) skill guides agents to:

- Search for new or changed agent-instruction conventions
- Propose additions or revisions to the discovery files
- Keep the discovery table in `docs/for-agents.md` and `docs/agent-discovery.md` up to date
- Use the proposal process for structural changes

## Discovery Table (Current)

The discovery table in `docs/for-agents.md` should be updated when:

- New discovery files are added
- A file's purpose or convention changes
- A convention becomes obsolete (mark deprecated, don't delete immediately — some users may still rely on it)

## Related

- [Agent Discovery Protocol (ADP)](/spec/RELATED_SPECS.html) — Industry spec for agent discovery via `.well-known/agents/`
- [HALOS spec](/spec/spec.html) — The principles these files expose

