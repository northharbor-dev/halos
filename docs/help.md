---
layout: default
title: Help
deck: Get help with HALOS—validation, proposals, contributing, and the spec
---

# HALOS Help

Get help via chat or explore the guides below.

## Get help in chat

Ask the HALOS agent. Example prompts:

| You want to… | Try |
|--------------|-----|
| Get started | "help" |
| Validate the spec | "How do I validate?" |
| Build and serve locally | "How do I build and serve the site?" |
| Draft a proposal | "Help me draft a proposal" |
| Fix a typo or improve docs | "How do I contribute a small edit?" |
| Understand a principle | "What is HALOS-CORE-1?" or "Explain HALOS-CORE-4" |
| Adopt HALOS | "How do I adopt HALOS in my project?" |
| Explore what HALOS means for you | [explore.html](explore.html) — build a seeded prompt and open in Claude, ChatGPT, etc. |
| Publish after acceptance | "What's the publishing checklist?" |
| Review a proposal | "What should I check when reviewing?" |

## FAQ

### How do I validate the spec?

Run validation with Docker (no local Node/Ruby needed):

```bash
docker run --rm -v "$(pwd):/workspace" halos validate
```

Or run the steps locally: validate JSON schema, run `node scripts/generate-spec.js`, verify `spec/spec.md` and `spec/CHANGELOG.md`. See [docker/README.md](/docker/README.html) for options.

### How do I run integration tests?

```bash
./scripts/integration-test.sh
```

Starts the server in Docker, tests all paths (pages, spec, skills, assets), then stops. Run before deploying.

### How do I build and serve the site locally?

**Option 1 — Script (requires Jekyll locally):**
```bash
./scripts/serve.sh
```

**Option 2 — Docker (one-time build):**
```bash
docker run --rm -v "$(pwd):/workspace" -p 3000:3000 halos serve
```

**Option 3 — Docker with live reload** (best for interactive editing):
```bash
./scripts/serve-watch.sh
```

Visit http://localhost:3000. With live reload, edits to docs or spec trigger an automatic rebuild and browser refresh.

### How do I propose a change?

1. Copy [proposals/TEMPLATE.md](https://github.com/northharbor-dev/halos/blob/main/proposals/TEMPLATE.md)
2. Create `proposals/NNNN-short-title.md`
3. Fill each section; ensure alignment with principles
4. Open a pull request

Full process: [proposals/README](https://github.com/northharbor-dev/halos/blob/main/proposals/README.md) and [Governance](governance.html).

### How do I make a small doc fix?

Typos and clarity fixes go directly to a PR. See [CONTRIBUTING](https://github.com/northharbor-dev/halos/blob/main/CONTRIBUTING.md). Substantive changes use the proposal process.

### What is the publishing checklist?

After a proposal is accepted: update manifest version, append changelog, run `node scripts/generate-spec.js`, push PR, merge, tag release. Full checklist: [spec/PUBLISHING.md](https://github.com/northharbor-dev/halos/blob/main/spec/PUBLISHING.md).

### What should I check when reviewing a proposal?

- Alignment with [principles](principles.html)
- Scope: focused and actionable
- Completeness: all TEMPLATE sections filled
- For spec changes: schema validation will run in CI

## Agent skills

The HALOS agent has skills for specific tasks:

| Skill | When to use |
|-------|-------------|
| **halos-help** | General questions, routing |
| **proposal-assist** | Drafting or structuring proposals |
| **validation-and-build** | Validation, build, Docker issues |
| **spec-explainer** | Principles, adoption, core requirements |
| **agent-convention-sync** | Updating discovery files (FOR_AGENTS.md, etc.) |

## Learn HALOS in any AI

Paste the prompt in [LEARN_HALOS.md](https://github.com/northharbor-dev/halos/blob/main/LEARN_HALOS.md) into ChatGPT, Claude, Gemini, or any AI chat. The AI will have the full HALOS framework. Try: "Explain HALOS", "How do I adopt HALOS?", "Help me write a proposal that aligns with HALOS."

**Explore what HALOS means for you:** Use the [Explore tool](explore.html) to describe your role and concerns, then get a seeded prompt and a clickable link to open in Claude, ChatGPT, or any AI chatbot.

## Links

- [Spec](/spec/spec.html)
- [Principles](principles.html)
- [Explore](explore.html)
- [Governance](governance.html)
- [For Agents](for-agents.html)
- [Everyday Humans](everyday-humans.html)
