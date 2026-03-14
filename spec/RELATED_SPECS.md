# Related Specs and HALOS

How HALOS fits in the broader agent-spec ecosystem, and options for future integration.

---

## Why We Track This

The shift to human–agent collaboration is a shared challenge. No single spec will solve it alone. HALOS is engaged with the broader world: we track related efforts, learn from them, and contribute where we can. We believe that understanding the full landscape — capabilities, protocols, principles, accountability — helps the whole community navigate our evolution more thoughtfully.

This document reflects that engagement: not a competitor’s scorecard, but a map of the terrain we’re navigating together.

---

## Positioning

HALOS focuses on **behavioral principles and ethics** — how agents *should* behave when collaborating with humans. It does not specify:

- How to represent agent capabilities or skills
- How to define tasks or workflows
- How agents discover or communicate with each other

Other specs address those concerns. HALOS can coexist with, or eventually be implemented on top of, them.

---

## Related Specs (Full List)

| Spec | Source | Scope | Format | Covers | Used By / Spec |
|------|--------|-------|--------|--------|----------------|
| **Agent Skills** | Anthropic / agentskills.io | Reusable agent capabilities packaged as skills | SKILL.md in a folder, YAML frontmatter (name, description) + Markdown instructions | Discovery (metadata only), activation when relevant, execution of instructions | Claude, Cursor, Gemini CLI, VS Code, and others. [agentskills.io/specification](https://agentskills.io/specification), [github.com/anthropics/skills](https://github.com/anthropics/skills) |
| **OSSA** | Open Standard for Software Agents | Agent manifests (role, LLM config, tools, deployment) | YAML/JSON manifest | Role, LLM config, tools, capabilities, trust, governance | LangChain, CrewAI, OpenAI, Anthropic, etc. [openstandardagents.org/specification](https://openstandardagents.org/specification) |
| **Agent Protocol** | agentprotocol.ai | How agents communicate (runtime protocol) | OpenAPI 3.0 REST API | Tasks, steps, artifacts — how goals are described and executed | [agentprotocol.ai/specification](https://agentprotocol.ai/specification) |
| **A2A (Agent2Agent)** | Google | Agent-to-agent communication | JSON-RPC 2.0 over HTTP | Discovery, message exchange, tasks, artifacts | [a2a-protocol.org](https://a2a-protocol.org), [github.com/google/A2A](https://github.com/google/A2A) |
| **Agent Discovery Protocol (ADP)** | Metisos | Agent discovery via manifests and cryptographic signatures | JSON manifests at `.well-known/agents/` | Discovery, verification | [agentdiscovery.io/docs](https://agentdiscovery.io/docs), [github.com/metisos/adp-protocol](https://github.com/metisos/adp-protocol) |

### HALOS Relationship (Summary)

| Spec | How HALOS Relates |
|------|-------------------|
| Agent Skills | **Capabilities.** Skills define *what* an agent can do; HALOS defines *how* it should behave when doing it. Skills can be HALOS-aligned if their instructions embody the principles. |
| OSSA | **Structural.** OSSA defines the agent manifest; HALOS could map as a behavioral overlay or constraint set for OSSA agents claiming alignment. |
| Agent Protocol | **Execution.** Protocol defines how tasks run; HALOS principles apply regardless of execution model. HALOS internally uses the Agent Protocol to govern its own agent behavior (see [Implementation Choices](#implementation-choices)). |
| A2A | **Communication.** A2A defines agent-to-agent messages; HALOS governs the behavioral norms underlying that communication. |
| ADP | **Discovery.** ADP enables finding agents; HALOS-aligned agents could advertise alignment in their discovery manifests. |

### Additional Specs (Principles & Accountability)

| Spec | Source | Focus | HALOS Relationship |
|------|--------|-------|---------------------|
| [The Agent Oath](https://theagentoath.com) | theagentoath.com | Ethical principles (human welfare, agency, transparency) — prose only | **Principles.** Philosophically aligned with HALOS. Potential normative reference. |
| [APAAI Protocol](https://apaaiprotocol.org) | apaaiprotocol.org | Action → Policy → Evidence; audit trail; human-in-the-loop | **Accountability.** Could provide verifiable evidence of HALOS compliance. |

---

## Implementation Choices

HALOS internally uses the [Agent Protocol](https://agentprotocol.ai/specification) to govern its own agent behavior. This choice is transparent and on the record.

**HALOS does not mandate this for anyone else.** The specification defines principles and requirements; how to implement them is up to the maintainers of each agent ecosystem. Some may use Agent Protocol; others may use OSSA, A2A, custom tooling, or entirely different stacks. HALOS remains implementation-agnostic — what matters is alignment with the core principles, not the particular runtime or framework used to achieve it.

---

## Current Stance

HALOS does **not** formally adopt or depend on any of these specs. The ecosystem is early; adoption varies. We monitor developments and keep HALOS self-contained so it can:

- Stand alone as a principles-and-ethics spec
- Integrate later via extensions or mappings when community norms solidify

---

## Future: HALOS Implemented on Other Specs

We expect that, over time, implementations may want to:

- **Map HALOS onto OSSA** — An OSSA extension or constraint set that defines how an OSSA agent satisfies HALOS-CORE-1 through HALOS-CORE-8.
- **Use APAAI as a HALOS extension** — For implementations that need auditable evidence of HALOS alignment, an extension defining the APAAI policy structure for HALOS requirements.
- **Reference The Agent Oath** — HALOS core requirements could map to Agent Oath tenets for cross-community alignment.

Such mappings would live in `spec/extensions/` or in a dedicated `spec/mappings/` once proposed and accepted through the HALOS governance process.

---

## Machine-Readable Reference

The manifest includes a `relatedSpecs` array for tooling and agents. Each entry has `id`, `source`, `url`, and `relationship`:

```json
"relatedSpecs": [
  { "id": "agent-skills", "source": "Anthropic / agentskills.io", "url": "https://agentskills.io/specification", "relationship": "capabilities" },
  { "id": "ossa", "source": "Open Standard for Software Agents", "url": "https://openstandardagents.org/specification/", "relationship": "structural" },
  { "id": "agent-protocol", "source": "agentprotocol.ai", "url": "https://agentprotocol.ai/specification", "relationship": "execution" },
  { "id": "a2a", "source": "Google", "url": "https://a2a-protocol.org", "relationship": "communication" },
  { "id": "adp", "source": "Metisos", "url": "https://agentdiscovery.io/docs", "relationship": "discovery" },
  { "id": "the-agent-oath", "source": "theagentoath.com", "url": "https://theagentoath.com", "relationship": "principles" },
  { "id": "apaaiprotocol", "source": "apaaiprotocol.org", "url": "https://apaaiprotocol.org", "relationship": "accountability" }
]
```

See [manifest.json](manifest.json) for the current manifest. Related specs are informational; they do not create a formal dependency.
