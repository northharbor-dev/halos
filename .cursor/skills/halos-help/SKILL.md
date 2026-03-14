---
name: halos-help
description: Answer help questions and route users. Use when the user says help, how do I, what is HALOS, or asks about contributing, validating, proposing, or understanding the spec.
---

# HALOS Help — Chat Assistance

Provide friendly, concise answers to common questions. Route to the right doc or skill when appropriate.

## When to Use

- User says "help", "how do I", "what is HALOS", "I need help"
- Questions about: validate, build, serve, propose, contribute, principles, publish, review

## Response Style

- Short answer first, then "Learn more: [link]"
- If ambiguous: "Are you trying to (A) validate the spec, (B) draft a proposal, or (C) understand the principles? I can guide you."

## Quick Answers

### What is HALOS?

A framework for principled human-agent collaboration. Eight core principles govern behavior (human primacy, attribution, transparency, ethical guardrails, etc.). Learn more: [docs/everyday-humans.md](docs/everyday-humans.md) or [docs/principles.md](docs/principles.md).

### How do I validate?

- **Docker:** `docker run --rm halos validate` (or with `-v "$(pwd):/workspace"` when developing)
- **Local:** Run schema validation (ajv-cli), then `node scripts/generate-spec.js`; verify spec/spec.md and spec/CHANGELOG.md

Learn more: [docker/README.md](docker/README.md), [.github/workflows/spec-validate.yml](.github/workflows/spec-validate.yml).

### How do I build and serve the site?

- **Script:** `./scripts/serve.sh` (requires Jekyll locally)
- **Docker:** `docker run --rm -p 3000:3000 halos serve`

Visit http://localhost:3000. Learn more: [docker/README.md](docker/README.md).

### How do I propose a change?

Copy [proposals/TEMPLATE.md](proposals/TEMPLATE.md), create `proposals/NNNN-short-title.md`, fill each section, open a PR. Use the **proposal-assist** skill for drafting help. Learn more: [proposals/README.md](proposals/README.md).

### How do I contribute a small edit?

Typos and clarity fixes go directly to a PR. Substantive changes use the proposal process. Learn more: [CONTRIBUTING.md](CONTRIBUTING.md).

### How do I publish after a proposal is accepted?

Update manifest version, append changelog, run `node scripts/generate-spec.js`, push PR, merge, tag release. Full checklist: [spec/PUBLISHING.md](spec/PUBLISHING.md).

### What should I check when reviewing a proposal?

- Alignment with [principles](docs/principles.md)
- Scope: focused and actionable
- Completeness: all TEMPLATE sections filled
- For spec changes: CI will validate schemas

### How do I adopt HALOS?

Read the core requirements in [spec/core.json](spec/core.json) or [docs/for-agents.md](docs/for-agents.md). Apply: propose don't override; preserve attribution; disclose AI involvement. Use the **spec-explainer** skill for principle details.

### Discovery file updates?

Use the **agent-convention-sync** skill when updating FOR_AGENTS.md, .cursorrules, docs/for-agents.md, docs/agent-discovery.md.

## Routing

| User intent | Skill or doc |
|-------------|--------------|
| Draft a proposal | proposal-assist |
| Validation/build/Docker errors | validation-and-build |
| Explain a principle, adopt HALOS | spec-explainer |
| Discovery file maintenance | agent-convention-sync |
| General help | This skill, [HELP.md](HELP.md), [docs/help.md](docs/help.md) |
