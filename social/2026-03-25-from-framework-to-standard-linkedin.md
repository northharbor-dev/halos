---
title: "From Framework to Standard: LinkedIn Draft"
date: 2026-03-25
platform: linkedin
post: from-framework-to-standard
status: draft
---

**A governance standard that adopts itself.**

We shipped HALOS's agent-based onboarding flow. Then we ran it on the NorthHarbor Dev website — the parent open source community that HALOS lives under — for the first time, from a phone.

Here's what happened:

1. Hit "Copy" on halos.northharbor.dev
2. Pasted the agent prompt into Claude Code on mobile
3. The agent generated `halos.yaml`, adoption docs, a compatibility map, and a conflict register
4. Found 5 real conflicts (2 high, 2 medium, 1 low) — with human decisions flagged before any remediation
5. Opened PR #1

[Screenshot 1 — website widget]

[Screenshot 2 — agent working / todo list]

[Screenshot 3 — conflict register]

[Screenshot 4 — PR]

No hand-holding. No manual YAML. No human interpreting the standard at each step.

This is what makes HALOS different from a framework: **you don't read it and nod — you copy a prompt and it tells you where your gaps are.**

The broader context: in 12 days HALOS went from a document to a machine-readable standard with JSON schemas, a validation CI pipeline, domain profiles, and a signatory registry. The self-adoption flow is the clearest demonstration of why that infrastructure matters — a standard that can't onboard itself isn't ready to onboard anyone else.

The spec is live. The adoption path is two phases: governance (declare how you operate), then provenance (record AI involvement so it's auditable). Phase 1 takes one copied prompt.

If you're the kind of person who thinks "a standard should validate itself against its own schemas in CI" is a reasonable thing to care about — we'd genuinely love to hear from you.

⭐ Star the repo
💬 Drop a comment — what would you build this into?
🔗 Try the one-button adoption flow at halos.northharbor.dev
✍️ Become a signatory if you're building with AI and care about this stuff

We're building in public and the door is wide open.

#AIGovernance #OpenSource #Provenance #BuildInPublic #AIStandards
