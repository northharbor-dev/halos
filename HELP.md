# HALOS Help

Ask the HALOS agent for help. In chat, try:

- **"help"** — Get started
- **"How do I validate the spec?"** — Validation commands
- **"How do I build and serve the site?"** — Local dev
- **"Help me draft a proposal"** — Proposal flow
- **"What is HALOS-CORE-1?"** — Principle explanation
- **"How do I contribute?"** — Contribution flow

## Quick links

| I want to… | See |
|------------|-----|
| Validate spec | `docker run --rm halos validate` or [docker/README.md](docker/README.md) |
| Build and serve site | `./scripts/serve.sh` or `docker run -p 3000:3000 halos serve` |
| Preview desktop + mobile | `./scripts/preview-local.sh /path/to/page.html` |
| Check site on phone | Run `./scripts/serve.sh`, then open one of the printed `http://<lan-ip>:3000` URLs on your phone |
| Run integration tests | `./scripts/integration-test.sh` |
| Draft a proposal | [proposals/TEMPLATE.md](proposals/TEMPLATE.md), [proposals/README.md](proposals/README.md) |
| Make a small edit | [CONTRIBUTING.md](CONTRIBUTING.md) |
| Understand principles | [docs/principles.md](docs/principles.md), [For Everyone](docs/everyday-humans.md) |
| Read the spec | [spec/spec.md](spec/spec.md), [spec/manifest.json](spec/manifest.json) |
| Learn in any AI | [LEARN_HALOS.md](LEARN_HALOS.md) — paste into ChatGPT, Claude, etc. |
| Publish after acceptance | [spec/PUBLISHING.md](spec/PUBLISHING.md) |

## Full help

- [docs/help.md](docs/help.md) — FAQ, skills, chat prompts
