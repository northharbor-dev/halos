---
title: Examples
deck: Real-world scenarios showing how HALOS provenance records capture human-AI collaboration across professional domains.
---

Each example includes a detailed collaboration narrative — who the human is, what they're building, how AI is used, and where human judgment makes the difference. Every scenario demonstrates at least one decision where AI output is rejected or substantially modified with domain-specific rationale.

All scenarios, names, and organizations are fictional. Provenance records use the [v0.3](https://github.com/northharbor-dev/halos-spec/blob/main/spec/provenance/v0.3.md) provenance spec with graph model, decision provenance, human-AI interaction semantics, multi-policy governance, and policy evaluation traces.

The machine-readable `.halos.json` provenance records, additional example types, and a generation skill for contributing new examples are all in the **[halos-spec examples directory →](https://github.com/northharbor-dev/halos-spec/tree/main/examples)**

---

## Domain Examples

{% assign sorted = site.examples | sort: 'domain' %}

<div class="examples-grid">
{% for example in sorted %}
<article class="example-card">
  <h3><a href="{{ example.url | relative_url }}">{{ example.title }}</a></h3>
  <p class="example-card__domain">{{ example.domain }}</p>
  <p class="example-card__lead"><strong>{{ example.lead }}</strong> — {{ example.lead_role }}</p>
  <p class="example-card__decision">{{ example.key_decision }}</p>
</article>
{% endfor %}
</div>

---

## Companion Resources

Each narrative has a machine-readable companion `.halos.json` provenance record in the [halos-spec examples directory](https://github.com/northharbor-dev/halos-spec/tree/main/examples).

Additional example types in halos-spec:

| Example | Purpose |
|---------|---------|
| [minimal.json](https://github.com/northharbor-dev/halos-spec/blob/main/examples/minimal.json) | Smallest valid v0.1 provenance record |
| [v0.2-graph.json](https://github.com/northharbor-dev/halos-spec/blob/main/examples/v0.2-graph.json) | v0.2 graph model reference example |
| [CycloneDX embedding](https://github.com/northharbor-dev/halos-spec/blob/main/examples/embedded/cyclonedx.json) | HALOS inside a CycloneDX SBOM |
| [SLSA embedding](https://github.com/northharbor-dev/halos-spec/blob/main/examples/embedded/slsa.json) | HALOS as an in-toto/SLSA predicate |

## Contributing

New domain examples can be contributed to [halos-spec](https://github.com/northharbor-dev/halos-spec). Use the [GENERATE-EXAMPLE.md](https://github.com/northharbor-dev/halos-spec/blob/main/examples/GENERATE-EXAMPLE.md) agent prompt to generate a new example with an AI assistant.
