# HALOS

<p align="center">
  <img src="docs/identity-assets/selected/halos-halo-ring-institutional-randomized.svg" alt="HALOS identity mark" width="160" />
</p>

**Human-Agent Living Operating System**

A framework for principled collaboration between humans and intelligent agents.

---

## Overview

HALOS is an open framework for principled collaboration between humans and intelligent agents.

It is developed in public through this repository and stewarded by NorthHarbor Development. HALOS was originated by Bob Hong and is currently founder-led, with proposals and contributions welcomed from the broader community.

This repository is **not** a software implementation. It is a conceptual framework and evolving specification that may inform many future systems, including commercial, open-source, and research efforts.

HALOS is a principles framework, not an implementation. How agents execute those principles — via Agent Protocol, OSSA, A2A, or any other runtime — is left to the maintainers of each ecosystem. See [Related Specs](spec/RELATED_SPECS.md).

## For AI Agents

**HALOS governs this repository.** All agent behavior must follow the HALOS contract (human primacy, attribution, transparency, ethical guardrails). See [FOR_AGENTS.md](FOR_AGENTS.md), [AGENTS.md](AGENTS.md), and [docs/for-agents.md](docs/for-agents.md). Machine-readable spec: [spec/manifest.json](spec/manifest.json), [spec/core.json](spec/core.json).

## Why HALOS

As AI systems become more capable collaborators, a gap has emerged: we lack shared norms for how humans and agents should work together. Who owns the output of a human–agent collaboration? How do we trace the origin of an idea when both contributed? How do we evolve standards without fragmenting the space?

HALOS addresses these questions by providing:

- **A shared vocabulary** — precise terms for attribution, provenance, and creative direction
- **Governance model** — how the framework itself evolves through open proposal and review
- **Ethical guardrails** — boundaries that preserve human agency and accountability
- **Stable principles** — foundations that remain consistent as implementations and use cases expand

## Key Themes

| Theme | Description |
|-------|-------------|
| Ideas as assets | Recognition that ideas and creative works have value and deserve proper treatment |
| Attribution and provenance | Clear tracing of who or what contributed to a work, and how |
| Transparency of AI involvement | Visible disclosure when AI systems participate in creation |
| Ethical guardrails | Boundaries for human–agent collaboration that protect human primacy |
| Governance for evolving standards | A process for the framework to adapt without abandoning its core |
| Innovation with accountability | Balancing experimentation with trust and responsibility |
| Human originators | Humans as the source of meaningful creative direction |

## Repository Structure

```
halos/
├── README.md                 # This file
├── HELP.md                   # Quick help and chat prompts
├── LEARN_HALOS.md            # Paste-into-AI prompt to learn HALOS
├── FOR_AGENTS.md             # Agent entry point (root-level discovery)
├── AGENTS.md                 # HALOS contract and spec-implementing agent
├── .cursorrules              # Legacy Cursor config (points to HALOS)
├── LICENSE                   # CC-BY-4.0
├── CONTRIBUTING.md           # How to contribute
├── .cursor/                  # HALOS contract (always), agent rules, skills
├── spec/                     # Machine-readable specification
│   ├── manifest.json         # Discovery entry point for agents
│   ├── core.json             # Core requirements (source of truth)
│   ├── schema/               # JSON Schema definitions
│   └── spec.md               # Human-readable spec (generated)
├── docs/
│   ├── vision.md             # Philosophy and motivation
│   ├── principles.md         # Foundational ideas
│   ├── governance.md         # How HALOS evolves
│   ├── origin.md             # About the author and project origin
│   ├── identity.md           # Public identity and design rationale
│   ├── everyday-humans.md    # HALOS for Everyone — plain-language framing
│   ├── for-agents.md         # Full agent guidelines
│   └── agent-discovery.md    # Why/how discovery files were added
└── proposals/
    ├── README.md             # Proposal process (RFC-style)
    └── TEMPLATE.md           # Template for new proposals
```

## Agents

- **[FOR_AGENTS.md](FOR_AGENTS.md)** — Root-level agent entry point
- **[AGENTS.md](AGENTS.md)** — HALOS contract and spec-implementing agent
- **[docs/for-agents.md](docs/for-agents.md)** — Full agent guidelines and discovery table
- **[docs/agent-discovery.md](docs/agent-discovery.md)** — Why and how discovery files were added

## Validation

Validate the spec without local tools using Docker:

```bash
docker run --rm -v "$(pwd):/workspace" ghcr.io/northharbor-dev/halos-validate
```

See [docker/README.md](docker/README.md) for build and multi-platform options.

## Specification

- **[Manifest](spec/manifest.json)** — Machine-readable entry point; agents discover version, core, extensions
- **[Spec (human-readable)](spec/spec.md)** — Core and optional extensions
- **[Provenance Model (halos-spec)](https://github.com/northharbor-dev/halos-spec)** — Defines the structure of HALOS provenance records: machine-readable descriptions of how artifacts were created through human–agent collaboration, implementing HALOS-CORE-3 and HALOS-CORE-4. Not a mandated implementation; domain profiles map HALOS principles to specific toolchains.
- **[Related Specs](spec/RELATED_SPECS.md)** — How HALOS fits in the agent-spec ecosystem and future mapping options

## Documentation

- **[Vision](docs/vision.md)** — Philosophy, motivation, and long-term direction
- **[Principles](docs/principles.md)** — Foundational ideas that anchor the framework
- **[Governance](docs/governance.md)** — How proposals are made, reviewed, and adopted
- **[About the Author](docs/origin.md)** — Origin, authorship, and drafting context
- **[Identity](docs/identity.md)** — Public identity, symbolism, and design rationale
- **[HALOS for Everyone](docs/everyday-humans.md)** — Plain-language framing for everyone
- **[For AI Agents](docs/for-agents.md)** — Agent guidelines and discovery
- **[Agent Discovery Conventions](docs/agent-discovery.md)** — Why and how discovery files were added
- **[Proposals](proposals/README.md)** — Process for contributing and evolving HALOS
- **[Help](docs/help.md)** — FAQ, chat prompts, and skill index

## Learn HALOS in any AI

**Paste HALOS into your favorite AI** — Copy the prompt in [LEARN_HALOS.md](LEARN_HALOS.md) into ChatGPT, Claude, Gemini, or any AI chat. The AI will have the full HALOS framework and can help you apply it. Sample prompts to try after pasting: "Explain HALOS in one paragraph", "How do I adopt HALOS?", "Help me write a proposal that aligns with HALOS." Results will vary by AI, current events, and technology—that's part of the value.

## Getting Help

Ask the HALOS agent in chat: "help", "how do I validate?", "help me draft a proposal", "what is HALOS-CORE-1?"

- **[HELP.md](HELP.md)** — Quick reference and chat prompts
- **[docs/help.md](docs/help.md)** — Full help page, FAQ, skills

## Status

**Early stage.** The framework is in formation. Principles and governance are being refined through discussion. Proposals are welcome.

## License

This work is licensed under [CC-BY-4.0](LICENSE). You may share and adapt with attribution.

## About

HALOS is stewarded in public by [NorthHarbor Development](https://github.com/northharbor-dev).

NorthHarbor AI is a separate commercial organization that may build on or be informed by HALOS, but HALOS itself is maintained here as an open framework.

Questions, concerns, or thoughtful feedback are welcome at [halos@northharbor.dev](mailto:halos@northharbor.dev).

## About the Author

HALOS was originated by Bob Hong, founder of NorthHarbor. It emerged through an iterative process combining human insight, practical experience building complex systems, and AI-assisted exploration. NorthHarbor develops HALOS in the open as a living framework for transparent, principled human-AI collaboration.
