---
id: "0004"
status: draft
type: specification
date: "2026-03-15"
author: "northharbor"
affects: extensions
---

# 0004 — HALOS Verify: Conformance Testing and Benchmark

**Status:** draft  
**Type:** specification  
**Date:** 2026-03-15  
**Author:** NorthHarbor

## Summary

Add **HALOS Verify** — a conformance test suite to assess how LLMs, agents, and agent platforms adhere to HALOS principles. The proposal introduces a standardized evaluation methodology and, optionally, a published benchmark for rankings, discovery, and data syndication. This enables adopters, researchers, and tooling to measure and compare HALOS alignment across implementations.

## Motivation

HALOS defines eight core requirements (HALOS-CORE-1 through HALOS-CORE-8). Today, alignment is subjective: implementers self-declare; there is no shared way to verify adherence. As HALOS adoption grows, the community needs:

- **Verifiability** — An objective, repeatable way to assess alignment
- **Comparability** — Ability to compare different LLMs and agents on HALOS dimensions
- **Discovery** — Help users find HALOS-aligned agents and tools
- **Transparency** — Public, auditable results that avoid hidden or cherry-picked claims

Without a conformance test, alignment claims remain opaque. HALOS Verify addresses this gap by defining a test methodology, evaluation rubrics per core requirement, and an optional public benchmark.

## Proposal

### 1. HALOS Verify Test Suite

A machine-readable test suite that:

- Maps each core requirement (HALOS-CORE-1 … HALOS-CORE-8) to **evaluable scenarios**
- Provides **prompts, tasks, or interaction patterns** that elicit behavior relevant to each principle
- Uses **human or LLM-as-judge scoring** (with documented methodology to avoid bias)
- Produces **per-requirement scores** (e.g., 0–100 or pass/fail) and an aggregate alignment score

**Example mappings (illustrative):**

| Requirement              | Example Scenario / Test |
|--------------------------|---------------------------|
| HALOS-CORE-1 (Human Primacy) | Agent receives conflicting human direction; must yield to human intent |
| HALOS-CORE-3 (Attribution)   | Agent incorporates external ideas; must cite or acknowledge source |
| HALOS-CORE-4 (Transparency)   | Agent produces output; must disclose AI involvement when relevant |
| HALOS-CORE-5 (Ethical Guardrails) | Agent refuses harmful, deceptive, or agency-eroding requests |

### 2. Test Methodology

- **Input:** Agent or LLM API (OpenAI, Anthropic, etc.) or agent endpoint (Agent Protocol, OSSA, etc.)
- **Execution:** Run scenarios; capture outputs and metadata
- **Evaluation:** Rubric-based scoring (human reviewers or calibrated LLM judges with guardrails against gaming)
- **Output:** Per-requirement scores, aggregate score, and optional narrative report

The methodology document will specify:
- Scenario design principles (representative, non-adversarial, reproducible)
- Scoring calibration and inter-rater reliability considerations
- Versioning of the test suite with spec version (e.g., HALOS 1.0.0 → Verify 1.0)

### 3. Benchmark Publication (Optional)

A **published benchmark** that:

- **Rankings** — Ordered list of agents/LLMs by HALOS alignment score (with caveats: scores are snapshots, not guarantees)
- **Discovery** — Searchable index of tested agents, filterable by principle, score range, platform
- **Data syndication** — Machine-readable export (JSON, CSV) for third-party tooling, dashboards, and research

**Publication model:**

- Hosted at `halos.northharbor.dev/verify` or a dedicated subdomain
- Periodic runs (e.g., quarterly) or on-demand submissions by implementers
- Clear disclaimers: scores reflect test conditions; real-world behavior may differ; no certification or guarantee

### 4. Scope and Non-Goals

**In scope:**

- Test design and rubric specification
- Benchmark dataset and publication format
- APIs for submitting results and querying the benchmark

**Out of scope (for this proposal):**

- Formal certification or legal warranty
- Mandatory participation
- Real-time or continuous monitoring of deployed agents

## Alignment with Principles

- **HALOS-CORE-4 (Transparency):** The benchmark itself is transparent — methodology, scenarios, and scores are public. No hidden evaluation criteria.
- **HALOS-CORE-6 (Evolving Standards, Stable Principles):** The test suite versions with the spec; principles stay stable; evaluation methods evolve.
- **HALOS-CORE-7 (Governance Through Proposal):** This proposal follows the governance process; future changes to Verify methodology do as well.
- **HALOS-CORE-8 (Innovation with Accountability):** Implementers can innovate; the benchmark provides accountability by making alignment measurable and comparable.

## Alternatives Considered

| Alternative | Tradeoff |
|-------------|----------|
| **Self-attestation only** | Simpler but no verifiability; status quo. |
| **Third-party certification body** | Higher trust but adds cost, bureaucracy; may be premature. |
| **Integration with APAAI Protocol** | APAAI provides audit trails; could extend HALOS Verify to consume APAAI evidence. Deferred to a future extension. |
| **No public rankings** | Avoids "leaderboard" dynamics but reduces discovery and incentive for improvement. |

**Chosen approach:** Conformance test + optional benchmark. Balances verifiability with minimal process; rankings are informational, not a formal certification.

## Open Questions

1. **LLM-as-judge reliability** — How to avoid gaming and ensure scores reflect genuine alignment? Human calibration runs? Multiple judge models with disagreement analysis?
2. **Version cadence** — How often to re-run the benchmark? On spec release? On request?
3. **Opt-in vs. opt-out** — Can implementers submit their agents for testing? Is listing automatic for all tested agents, or only for those who consent?
4. **Syndication format** — JSON Schema for benchmark export? Compatibility with ADP or OSSA manifests for agent discovery?
5. **Scope of "agents"** — LLMs only? Agent frameworks (Cursor, Aider, etc.)? Both?

## References

- [spec/core.json](../spec/core.json) — Eight core requirements
- [spec/RELATED_SPECS.md](../spec/RELATED_SPECS.md) — APAAI Protocol (accountability/audit), ADP (discovery)
- [Agent Discovery Protocol](https://agentdiscovery.io/docs) — Manifest format for agent discovery
- [APAAI Protocol](https://apaaiprotocol.org) — Action → Policy → Evidence for audit trails

---

## Decision

**Outcome:** *(pending)*  
**Date:** —  
**Notes:** —
