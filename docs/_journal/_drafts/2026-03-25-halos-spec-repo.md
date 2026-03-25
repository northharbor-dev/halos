---
title: "halos-spec becomes the canonical standard"
date: 2026-03-25
entry_type: milestone
---

halos-spec is now the single source of truth for everything normative. The separation is real: halos holds the community site, narrative, and governance process; halos-spec holds the machine-readable spec, schemas, adoption toolkit, and examples.

What landed today:

- **Adoption toolkit** — `adopt/GUIDE.md`, templates for `HALOS-ADOPTION.md` and `halos.yaml`, and `adopt/AGENT-PROMPT.md` so any AI agent can adopt HALOS in a new repo without human hand-holding.
- **halos-profile schema** — `spec/schema/halos-profile.schema.json` formally defines the `halos.yaml` governance profile. Adopters and agents can now validate what they generate.
- **Spec migration** — `manifest.json`, `core.json`, and `changelog.json` moved from halos into halos-spec. `spec/CANONICAL.md` declares this the authoritative source.
- **Generated principles** — `scripts/generate-principles.js` renders `core.json` to `PRINCIPLES/halos-principles-v1.0.md`. The principles are no longer maintained by hand.
- **Domain profiles scaffolded** — `profiles/software-dev/` provides a SLSA/CycloneDX/Chainloop mapping. Other domains can follow the same pattern.
- **CI validation** — GitHub Actions workflow validates core.json, manifest.json, changelog.json, provenance examples, and drift between generated principles and core.json on every push.
- **FOR_AGENTS.md** — outward-facing agent discovery entry point for any agent working in halos-spec or adopting HALOS externally.
