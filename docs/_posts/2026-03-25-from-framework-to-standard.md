---
title: "From Framework to Standard: 12 Days of HALOS"
excerpt: "A framework is a set of ideas. A standard is a shared commitment. Here's what it took to become one."
date: 2026-03-25
image: /assets/posts/2026-03-25-from-framework-to-standard/social-draft.png
feed_image: /assets/posts/2026-03-25-from-framework-to-standard/feed-draft.png
---

A framework is a set of ideas. A standard is something you can implement, adopt, and validate against. The distance between the two is where most good intentions stall.

Twelve days ago, HALOS was a document: eight principles, a rationale, and a GitHub repository. Today it is a machine-readable spec with JSON schemas, a validation CI pipeline, an adoption toolkit designed for both humans and AI agents, a signatory registry, and a growing community site. This post describes what changed, why it matters, and what we still need to get right.

---

## The problem with frameworks

Frameworks are easy to agree with and easy to ignore. They describe desirable behavior without creating any structural incentive to conform. You can read a framework, nod, and continue exactly as before—there is nothing to check your work against.

HALOS was at risk of this. The eight core principles—human primacy, attribution, transparency, provenance, and the rest—are principled and defensible. But as long as they existed only as prose, alignment was entirely self-declared. An agent or platform could claim HALOS compliance with no way for anyone to verify the claim.

The gap between "declares alignment" and "demonstrably aligns" is the gap HALOS has to close to be worth anything.

---

## What landed

**halos-spec is now the canonical standard.** The machine-readable specification—`core.json`, `manifest.json`, `changelog.json`, and their schemas—now lives in a dedicated repository designed to be the authoritative source. `spec/CANONICAL.md` documents this explicitly. The principles are no longer maintained by hand; a `generate-principles.js` script renders them from `core.json`, eliminating the drift that comes with manual duplication.

**There is a schema for the adoption profile.** The primary artifact an adopter creates is a `halos.yaml` governance profile—a declaration of how their repo, product, or agent operates relative to HALOS. Previously, this file was invented informally during NorthHarbor AI's own adoption with no formal definition. `halos-profile.schema.json` now defines the structure. Adopters and agents can validate what they generate before they ship it.

**AI agents can adopt HALOS without human hand-holding.** `adopt/AGENT-PROMPT.md` is a complete, standalone prompt that any AI coding agent can use to adopt HALOS in a new repository: profile creation, conflict register, provenance setup, and first provenance record. `FOR_AGENTS.md` is the outward-facing entry point for any agent working in halos-spec. This matters because a standard that requires humans to interpret it at every adoption point will not scale.

**Domain profiles are now a first-class concept.** The initial profile is `software-dev`, with a mapping to SLSA, CycloneDX, and Chainloop—the provenance tools most common in software supply chain work. The pattern is extensible: a healthcare org might map HALOS to HL7 FHIR provenance; a research institution might map to scholarly attribution norms. Profiles make universal principles actionable in specific contexts.

**CI validates the spec itself.** Every push to halos-spec now checks that `core.json`, `manifest.json`, and `changelog.json` conform to their schemas, that provenance examples validate, and that the generated principles file matches `core.json`. If the spec drifts from the schemas, CI fails. This is a small but significant commitment: the project holds itself to the same verifiability standard it asks of adopters.

---

## What this means for adoption

The practical path to adopting HALOS is now two phases.

Phase one is governance: create a `halos.yaml` profile declaring how your repo or product operates, and a conflict register to document any intentional deviations from HALOS principles. The adoption guide walks through this in full; the templates are ready to copy.

Phase two is provenance: integrate the provenance spec (CORE-3 and CORE-4) so that AI involvement in decisions and artifacts is recorded in a machine-readable, auditable way. This is the harder phase—it requires touching your actual development workflow—but it is also where HALOS becomes verifiable rather than declarative.

---

## What we still need

The signatory registry is live and open. Two founding signatories—Bob Hong and HALOS Agent—have committed. But the value of a signatory registry grows with the number of signatories, and two is not a network. If you are building with AI and care about provenance and attribution, [becoming a signatory](https://halos.northharbor.dev/supporters.html) is the most concrete thing you can do to signal that.

HALOS Verify (Proposal 0004) is the other open thread. Conformance testing—a shared methodology for assessing how well an agent or platform aligns with each of the eight core requirements—is the next step toward making "HALOS-aligned" mean something specific and checkable. The proposal is open for input.

The Kubernetes annotation spec, OPA validation, Kyverno policies, and SonarQube integration are all on the backlog in halos-spec. These are the integration points where HALOS moves from a standalone governance artifact into the tools developers actually use. That work is open for contribution.

---

## The short version

In twelve days: 49 commits, 17 site pages, 7 schemas, 5 adoption templates, 4 proposals, 5 AI skills, and a whitepaper. More importantly: a standard you can implement, validate, and adopt—with tooling that works for humans and agents alike.

The framework was the easy part. What comes next is building the community that makes it mean something.

---

*HALOS is developed in public at [halos.northharbor.dev](https://halos.northharbor.dev). The spec lives at [github.com/northharbor-dev/halos-spec](https://github.com/northharbor-dev/halos-spec). Proposals, feedback, and signatories are welcome.*
