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

HALOS internally uses the [Agent Protocol](https://agentprotocol.ai/specification) to govern its own agent behavior, but does not require adopters to do the same. Implementation of the spec is up to the maintainers of each agent ecosystem. See [Related Specs → Implementation Choices](spec/RELATED_SPECS.md#implementation-choices).

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
├── AGENTS.md                 # HALOS agent (spec-implementing)
├── LICENSE                   # CC-BY-4.0
├── CONTRIBUTING.md           # How to contribute
├── .cursor/                  # HALOS contract (always), agent rules, spec conformance
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
│   └── everyday-humans.md    # Plain-language explanation for general readers
└── proposals/
    ├── README.md             # Proposal process (RFC-style)
    └── TEMPLATE.md           # Template for new proposals
```

## Agents

- **[AGENTS.md](AGENTS.md)** — HALOS agent that fully implements the spec when co-creating the framework

## Specification

- **[Manifest](spec/manifest.json)** — Machine-readable entry point; agents discover version, core, extensions
- **[Spec (human-readable)](spec/spec.md)** — Core and optional extensions
- **[Related Specs](spec/RELATED_SPECS.md)** — How HALOS fits in the agent-spec ecosystem and future mapping options

## Documentation

- **[Vision](docs/vision.md)** — Philosophy, motivation, and long-term direction
- **[Principles](docs/principles.md)** — Foundational ideas that anchor the framework
- **[Governance](docs/governance.md)** — How proposals are made, reviewed, and adopted
- **[About the Author](docs/origin.md)** — Origin, authorship, and drafting context
- **[Identity](docs/identity.md)** — Public identity, symbolism, and design rationale
- **[HALOS for Everyday Humans](docs/everyday-humans.md)** — Plain-language framing for people outside the tech world
- **[Proposals](proposals/README.md)** — Process for contributing and evolving HALOS

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
