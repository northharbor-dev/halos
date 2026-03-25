---
title: "From Framework to Standard: Substack Draft"
subject: "From Framework to Standard: 12 Days of HALOS (and the moment it adopted itself)"
date: 2026-03-25
platform: substack
post: from-framework-to-standard
status: draft
---

Fair warning: this post is for people who think "a machine-readable governance spec with CI validation" is genuinely exciting. If that's you — welcome, you're among friends.

---

**What happened this week**

HALOS is a governance standard for AI-assisted work. Eight core principles — human primacy, attribution, transparency, provenance — packaged as a machine-readable spec you can implement, validate against, and adopt with an AI agent.

We built an onboarding flow. You go to the site, hit one button, copy a prompt, paste it into Claude Code (or Cursor or Copilot), and your agent does the rest.

We had built this for other projects. We hadn't run it on NorthHarbor Dev — the parent open source community HALOS lives under — until this week.

So we did. From a phone.

[Screenshot 1 — website widget]
*One button. That's the whole onboarding.*

The agent ran the full Phase 1 adoption: scanned the repo, generated `halos.yaml`, adoption docs, a compatibility map, and a conflict register. Then it found 5 real conflicts with the HALOS principles. Flagged every one for human review before touching anything. Opened a PR.

[Screenshot 2 — agent working / todo list]
*Todos ticking off in real time on mobile.*

[Screenshot 3 — conflict register]
*Five conflicts. Two high severity. All requiring human decisions before remediation. Exactly as designed.*

[Screenshot 4 — PR]
*PR #1 on northharbor-dev-web. End to end.*

A governance standard that can't adopt itself has a credibility problem. We think ours just filed its own bug report, and honestly, that's the best possible outcome.

---

**The 12-day backstory**

The self-adoption flow didn't appear from nowhere. Here's what had to exist first:

A machine-readable spec (`core.json`, `manifest.json`, `changelog.json`) with schemas so there's something to validate against. A formal `halos-profile.schema.json` so the governance file you generate is checkable, not just informal YAML. A standalone agent prompt that any AI coding agent can run without a human interpreting the standard at each step. Domain profiles that map universal principles to real toolchains — SLSA, CycloneDX, Chainloop for software dev. And CI that validates the spec itself, because if the standard drifts from its own schemas, that should break something.

In 12 days: 49 commits, 17 site pages, 7 schemas, 5 adoption templates, 4 proposals, a whitepaper.

The framework was always the easy part.

---

**What adoption looks like**

Phase 1 is governance: one copied prompt, one agent run, four generated artifacts, and a clear list of where your project deviates from HALOS principles — with human decisions required before anything gets changed.

Phase 2 is provenance: integrating CORE-3 and CORE-4 so AI involvement in decisions and artifacts is recorded in a machine-readable, auditable trail. This is the harder phase, but it's where HALOS becomes verifiable rather than declarative.

---

**What's still open**

The signatory registry is live. Two founding signatories have committed. The value of a registry scales with its members — if you're building with AI and care about attribution, becoming a signatory is the most concrete signal you can send.

HALOS Verify (Proposal 0004) — a shared conformance testing methodology — is the next structural piece. Kubernetes annotations, OPA validation, Kyverno policies, and SonarQube integration are on the backlog and open for contribution.

---

**Try it / join the fun**

If any of this resonates, here's how to get involved — no commitment required:

**⭐ Star the repo** — github.com/northharbor-dev/halos-spec — it helps others find it and it genuinely means something to a small open source project

**💬 Tell us what you think** — comment here, open a GitHub issue, or reply to this email. We want to hear from people who'd actually use this, including the skeptics

**🔗 Try the adoption flow** — go to halos.northharbor.dev, hit "Adopt HALOS in your project," paste the prompt into your AI agent of choice, and see what it finds in your repo

**✍️ Become a signatory** — if you're building with AI and care about attribution and accountability, signing is the most concrete signal you can send

**🛠 Contribute** — Kubernetes annotations, OPA validation, Kyverno policies, SonarQube integration are all open on the backlog. HALOS Verify (our conformance testing proposal) is open for input. If you have a domain you want to map HALOS principles to, domain profiles are a first-class concept now.

We're building this in public because governance for AI tooling shouldn't be something one company decides in a room. Come be a geek about it with us.

---

*HALOS lives at halos.northharbor.dev. The spec is at github.com/northharbor-dev/halos-spec.*
