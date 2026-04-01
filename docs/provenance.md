---
title: Provenance Spec
deck: How HALOS records the origin story of any artifact — who created it, what AI contributed, and who reviewed it.
---

<!-- Excerpts drawn from halos-spec v0.3 (2026-03-31). Update if the spec changes materially. -->

## What It Does

When people create things with AI — code, documents, designs, analyses — the artifacts they produce often carry no record of that involvement. Attribution is broken and accountability is unclear.

The HALOS Provenance Spec defines a standard structure for recording *how an artifact was created*. A provenance record captures:

- **The artifact** being described
- **The human author(s)** who directed the work
- **AI assistance** used — which models, what roles they played
- **Human review** steps taken before the artifact was used
- **Governance** policy references the work was produced under (supports multiple concurrent policies)

The spec is not a tool or platform — it is a format, like JSON Schema or OpenAPI. Any system that produces or consumes provenance data can implement it.

---

## A Minimal Record

The simplest valid provenance record names the artifact and its human author. Even when no AI was involved, the record makes that explicit:

```json
{
  "halos_version": "0.3",
  "artifact": {
    "id": "urn:example:my-document-v1",
    "type": "document",
    "description": "A short report written without AI assistance",
    "version": "1.0"
  },
  "human_author": {
    "name": "Jane Smith",
    "identifier": "https://github.example.com/janesmith",
    "role": "originator"
  },
  "ai_assistance": [],
  "timestamp": "2026-03-21T00:00:00Z"
}
```

An empty `ai_assistance` array is a positive assertion: "no AI was used." This is the baseline. Everything else in the spec builds from here.

---

## The Graph Model (v0.2+)

Real-world artifacts rarely have simple histories. Code gets scaffolded by AI, rewritten by a human, reviewed by a colleague, and evaluated against compliance policies. The graph model (introduced in v0.2) captures this by representing provenance as **Entities**, **Activities**, and **Relationships** — aligned with the [W3C PROV](https://www.w3.org/TR/prov-overview/) model but using plain JSON.

```json
{
  "halos_version": "0.3",
  "artifact": {
    "id": "urn:pkg:npm/auth-service@3.0.0",
    "type": "code",
    "description": "Authentication service rewrite with JWT support"
  },
  "human_author": {
    "name": "Bob Hong",
    "role": "originator"
  },
  "ai_assistance": [
    {
      "model": "claude-sonnet-4-6",
      "provider": "Anthropic",
      "role": "generation",
      "taskType": "scaffolding",
      "description": "Generated initial implementation from architecture specification"
    }
  ],
  "review": [
    {
      "reviewer": "Alice Chen",
      "type": "peer-review",
      "timestamp": "2026-03-25T16:00:00Z"
    }
  ]
}
```

The graph section adds entities (people, agents, artifacts), activities (create, review, decide), and typed relationships between them (`wasGeneratedBy`, `wasAttributedTo`, `wasAssociatedWith`). This makes it possible to trace the full lineage of a complex artifact.

---

## Decision Provenance

One of the most distinctive features of the spec is first-class support for **decision provenance** — recording not just what was built, but the key decisions that shaped it and how AI informed those decisions.

```json
{
  "decisions": [
    {
      "id": "urn:decision:token-strategy",
      "description": "Selected short-lived JWTs with refresh tokens over session-based auth",
      "responsible": "Bob Hong",
      "timestamp": "2026-03-24T10:00:00Z",
      "context": "Migrating from monolith session store to stateless microservices",
      "aiInputs": [
        {
          "model": "claude-sonnet-4-6",
          "provider": "Anthropic",
          "contribution": "Analyzed session vs token trade-offs for distributed systems",
          "taskType": "comparing"
        }
      ],
      "rationale": "Stateless tokens align with microservice architecture; refresh tokens limit exposure window",
      "outcome": "accepted"
    }
  ]
}
```

Each decision records who was responsible, what AI contributed to the analysis, and — critically — whether the human accepted, modified, or rejected the AI's input. This makes it possible to demonstrate that human judgment was applied at consequential moments.

---

## Human–AI Interaction Semantics

The spec introduces structured recording of how humans respond to AI output. Each graph activity can include an `interaction` block:

```json
{
  "interaction": {
    "type": "generation",
    "humanResponse": "modified",
    "responseNotes": "Accepted module structure; rewrote token rotation and added rate limiting"
  }
}
```

The `humanResponse` field captures whether AI output was `accepted`, `modified`, or `rejected` — making the human's role in shaping the final artifact visible and auditable.

---

## See It in Practice

These domain examples show complete provenance records with full collaboration narratives — who the human is, what they're building, where AI helps, and where human judgment overrides AI suggestions:

- [Enterprise Software Development](examples/enterprise-software-development.html) — payment reconciliation service with architecture decisions
- [Journalism & News Media](examples/journalism-news-media.html) — investigative reporting with AI-assisted research
- [Education & Student Learning](examples/education-student-learning.html) — curriculum development with pedagogical judgment

Each example includes a machine-readable `.halos.json` companion. See all [domain examples →](examples.html)

---

## Technical Reference

- [Full v0.3 spec on GitHub](https://github.com/northharbor-dev/halos-spec/blob/main/spec/provenance/v0.3.md) — multi-policy governance change summary and migration
- [v0.2 graph model spec](https://github.com/northharbor-dev/halos-spec/blob/main/spec/provenance/v0.2.md) — complete graph model field definitions and normative requirements
- [JSON Schema](https://github.com/northharbor-dev/halos-spec/blob/main/spec/schema/halos-provenance-v0.3.schema.json) — machine-readable schema for validation
- [v0.1 flat model](https://github.com/northharbor-dev/halos-spec/blob/main/spec/provenance/v0.1.md) — the simpler flat-document format
- [Terminology](https://github.com/northharbor-dev/halos-spec/blob/main/spec/terminology.md) — definitions of key terms
