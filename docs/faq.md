---
title: FAQ
deck: Common questions about the HALOS framework, provenance spec, and adoption.
---

## Provenance Spec

### Can I extend the entity types and activity types with my own domain-specific values?

The spec is designed for extensibility, but there's a nuance to be aware of.

**Entity types** (`artifact`, `person`, `agent`, `organization`, `policy`) and **activity types** (`create`, `generate`, `edit`, `review`, `approve`, `derive`, `decision`, `suggest`, `transform`, `other`) are defined as closed enums in the JSON schema. A strict validator will reject values outside these lists.

However, several other fields are explicitly open for extension:

- **`taskType`** — the cognitive task the AI performed (e.g., `classifying`, `scaffolding`, `debugging`). The spec recommends values but states they are "not a closed enum — implementations may extend them."
- **`techniques`** — named algorithms or methods (e.g., `retrieval-augmented-generation`, `chain-of-thought`). Fully open; domain-specific techniques are encouraged.
- **`interaction.type`** and **`interaction.humanResponse`** — the spec recommends values but does not constrain them in the schema.
- **`entity.role`** — roles like `author`, `reviewer`, `approver` are recommendations, not a closed set.
- **Relationship types** — the spec recommends W3C PROV-aligned types plus simpler aliases, and states "implementations may extend this set for domain-specific needs." However, the schema currently constrains these to a closed enum.

**In practice:** use `other` for entity or activity types that don't fit the predefined list, and put the specifics in the `description` field. For relationship types, taskTypes, and techniques, extend freely — the spec explicitly invites it.

We're tracking the gap between the spec's extensibility intent and the schema's strictness. A future version may relax the schema enums or introduce an extension mechanism.

### My artifact falls under multiple governance policies. How do I represent that?

As of v0.3, the `governance` field is an array. List all applicable policies:

```json
{
  "governance": [
    {
      "policy": "Internal AI Usage Policy",
      "version": "2.1",
      "url": "https://internal.example/policies/ai-usage"
    },
    {
      "policy": "PCI-DSS",
      "version": "4.0"
    },
    {
      "policy": "HALOS",
      "version": "1.0",
      "url": "https://halos.northharbor.dev"
    }
  ]
}
```

The `governance` array answers "under what policies was this artifact produced?" — which is distinct from `policyEvaluations`, which records what checks were actually run and their results. Not every governance policy has an automated evaluation.

### What's the difference between the flat fields and the graph model?

The flat fields (`human_author`, `ai_assistance`, `review`, `governance`) are the simple, required structure from v0.1. They capture the basics: who, what AI, what review, what policy.

The graph model (`graph.entities`, `graph.activities`, `graph.relationships`) is optional and captures richer histories: multiple people contributing at different stages, AI used at some steps but not others, decisions that shaped the artifact, and how humans responded to AI output.

Both can coexist in the same record. Start with flat fields; add the graph when your provenance story is more complex than "one person used one AI tool."

### Do I need a provenance record for every artifact?

No. HALOS doesn't prescribe coverage. Record provenance where it matters — artifacts with significant AI involvement, consequential decisions, or compliance requirements. A minimal record takes five fields and a few minutes.

### Can I use HALOS without AI involvement?

Yes. An empty `ai_assistance` array (`[]`) is a positive assertion: "no AI was used." This is useful for establishing baselines, satisfying disclosure requirements, or making human-only authorship explicit in environments where AI use is common.

---

## Adoption

### How do I start adopting HALOS?

Two phases:

1. **Phase 1 (Governance):** Create a `halos.yaml` profile declaring your organization's stance on human-AI collaboration. Use the [adoption guide](https://github.com/northharbor-dev/halos-spec/blob/main/adopt/GUIDE.md) or point an AI agent at the [adoption prompt](https://github.com/northharbor-dev/halos-spec/blob/main/adopt/AGENT-PROMPT.md) to generate it.

2. **Phase 2 (Provenance):** Start producing `.halos.json` records for artifacts where attribution and AI disclosure matter. Validate against the [JSON schema](https://github.com/northharbor-dev/halos-spec/blob/main/spec/schema/halos-provenance-v0.3.schema.json).

Phase 1 requires no tooling changes. Phase 2 can be incremental.

### How does HALOS relate to CycloneDX, SLSA, and other supply chain standards?

HALOS is complementary, not competing:

- **CycloneDX** answers "what is in this software?" — HALOS adds "who was responsible and what AI contributed." HALOS provenance embeds as a CycloneDX `component.evidence` property.
- **SLSA** answers "how was it built?" — HALOS adds "what decisions were made and by whom." HALOS supplements SLSA attestations with human-authorship data.
- **W3C PROV** is a general-purpose provenance ontology. HALOS adopts its conceptual model but uses plain JSON — no RDF required.
- **NIST AI RMF / ISO 42001** define governance frameworks. HALOS operates at the artifact level inside those processes, providing the traceability records that demonstrate compliance.

See the [integration guide](https://github.com/northharbor-dev/halos-spec/blob/main/mappings/cyclonedx-slsa.md) for embedding details.

---

## Versioning

### Why does the provenance spec use 0.x versions? Is it stable?

The `0.x` series signals the spec is still evolving. Breaking changes may occur between minor versions (e.g., v0.2 → v0.3 changed `governance` from object to array). This follows the same convention as [SLSA](https://slsa.dev), [CycloneDX](https://cyclonedx.org), and [semver section 4](https://semver.org/#spec-item-4).

The spec is suitable for use — all examples and the HALOS project itself use it. But adopters should pin to a specific version and expect to migrate when new versions ship.

`v1.0` will be declared when the spec is confident in stability.

### How do I migrate between versions?

Each spec version includes a migration path. For example, v0.2 → v0.3 requires wrapping the `governance` object in an array and updating `halos_version` to `"0.3"`. See [v0.3 migration notes](https://github.com/northharbor-dev/halos-spec/blob/main/spec/provenance/v0.3.md#migration-path).

For implementations that must support multiple versions, check the `halos_version` field and normalize accordingly.
