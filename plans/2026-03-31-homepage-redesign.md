# HALOS Home Page Redesign: Storytelling-First Optimization

**Date:** 2026-03-31
**Status:** Proposed
**Author:** Bob Hong + Claude

## Context

The current HALOS home page reads like documentation — it front-loads an adopt CTA before visitors understand HALOS, uses dense philosophical text instead of concrete examples, and buries the most interactive element (the explore form) below five sections of text. The page needs to follow a persuasion arc, not an information dump.

**Goal:** Take someone from "never heard of HALOS" to "I want to be part of this" through narrative tension, concrete proof, and progressive disclosure.

**Primary outcomes:**
1. People recognize what HALOS is and why it's important
2. Drive engagement: learn more, adopt, explore examples, become signatory, contribute

---

## Diagnosis

The current page is structured as a reference document: here is the thing, here is how to adopt it, here is what it contains, here is how it compares. This is the architecture of a README, not a landing page.

**Current flow and problems:**

| # | Current Section | Problem |
|---|----------------|---------|
| 1 | Hero (logo + tagline) | Generic. Logo-first greeting before establishing stakes |
| 2 | Adopt callout | WAY too early. Asking for commitment before understanding |
| 3 | Intro + collaboration modes | Dense, abstract, philosophical |
| 4 | Framework (two layers) | Technical, inside-baseball |
| 5 | Where HALOS Fits (comparisons) | Niche audience, alienates newcomers |
| 6 | Explore form | Most engaging element — buried too deep |
| 7 | Go Further (10 cards) | Overwhelming, tries to be site navigation |
| 8 | Why This Exists | Nice but disconnected after card overload |

---

## New Page Flow

### Section 1: Opening Provocation (replaces Hero)

Replace the logo-first hero with a stark, emotional opening. Start with the problem, not the product.

**Content:**
> *"Who made this?"*
>
> Every day, AI generates code that ships to production, writes reports that inform decisions, creates content that shapes opinion. Almost none of it carries a record of who was responsible, what the AI contributed, or whether a human reviewed it.

Then the HALOS mark and name appear as the *answer* — not a greeting. "Human-Agent Lineage and Origin Standard" as a clean subtitle.

**Visual:** Massive serif type for the question (`clamp(2.8rem, 6vw, 5.5rem)`), dramatic tightened cyan radial glow behind the text. The mark fades in on scroll or after a beat. Remove the "Open Framework" eyebrow pill.

---

### Section 2: Three-Sentence Explainer (replaces dense intro paragraphs)

Just enough to understand what HALOS is. Three sentences, no more:

> HALOS is an open standard for recording who is responsible when humans and AI work together. It tracks what the AI contributed, whether a human reviewed it, and who is accountable for the result. Two parts: stable **Principles** that define the ethics, and an evolving **Provenance Spec** that captures the record.

**Visual:** Deck-sized text, generous vertical padding. "Principles" in `--halo` color, "Provenance Spec" in `--accent` to begin the two-layer visual language.

---

### Section 3a: Annotated Example — "Show Don't Tell" (NEW)

Condensed visual walkthrough from the journalism example. Four timeline steps:

| Step | What Happens | HALOS Records |
|------|-------------|---------------|
| 1 | Carlos uses AI to analyze 4,300 regulatory filings | `mode: human+ai` — human directed, AI processed |
| 2 | AI finds violation/health correlation | `interaction: ai-generated` — AI surfaced the pattern |
| 3 | Carlos verifies against sources, spends 3 weeks on the ground | `interaction: modified` — human verified and contextualized |
| 4 | Article publishes with full AI disclosure | `reviewed: true` — transparent, accountable |

Uses the existing collaboration mode badge SVGs as visual anchors. Link: "See all domain examples — journalism, education, government, music, and more."

**Visual:** New `.story-timeline` component — vertical left-border line with step cards branching off. Badge icons (72px) on left, description center, HALOS annotation right. Left border color shifts from cyan (AI) to white (human review).

---

### Section 3b: Explore Form (moved UP from position 6)

Move the existing explore form embed much higher. Reframe heading: "See what HALOS means for your world." Keep the community image and gradient border treatment.

---

### Section 4: Audience Lanes (replaces "Where HALOS Fits")

Four cards for self-selection instead of technical standard comparisons:

| Audience | Hook | CTA |
|----------|------|-----|
| **Developers & Engineers** | Add provenance to AI-assisted code in one command | Copy adoption prompt |
| **Policy & Governance** | Artifact-level traceability governance frameworks require | Read the Principles |
| **Researchers & Academics** | Study human-AI collaboration with structured data | View domain examples |
| **Everyone** | Understand what AI accountability means for your work | Try the Explore tool |

**Remove from home page:** CycloneDX/SLSA/W3C PROV/NIST comparison cards. Move to a dedicated standards-comparison page or into provenance docs.

---

### Section 5: Framework at a Glance (drastically simplified)

Keep the two-layer visual but cut text to one line each:
- **Principles v1.0** — The ethical foundation. Human primacy, attribution, transparency, guardrails. *Stable.*
- **Provenance Spec v0.3** — The technical record. Who contributed, what AI did, whether it was reviewed. *Evolving.*

Single link: "Read the full framework." Remove paragraph descriptions and inline GitHub links.

---

### Section 6: Adopt HALOS (moved from position 2 to here)

NOW visitors have context. Keep the copy-prompt mechanic. Add two-phase reassurance:

> **Phase 1 (today):** Governance declaration. Create a profile and review against principles. No tooling changes.
> **Phase 2 (when ready):** Instrument your workflow to produce `.halos.json` provenance records.

Show a small 5-line `halos.yaml` preview to make the output tangible before anyone copies anything.

---

### Section 7: Social Proof (NEW)

HALOS is in founding phase — lean into that:

> HALOS is in its founding phase. The first 25 signatories become **Founding Supporters**. [Add your name]

Display the Founding Supporter badge SVG as a visual element. Link to supporters page.

---

### Section 8: Go Further (reduced from 10 cards to 4)

| Card | Links to |
|------|----------|
| **Understand** | everyday-humans.html |
| **Read the Spec** | Provenance + Principles |
| **See Examples** | examples.html |
| **Contribute** | GitHub repo |

Everything else (Vision, Whitepaper, Terminology, FAQ, Origin, For Agents, Follow Updates) stays accessible via nav and footer only.

---

### Section 9: Closing Statement (tightened)

Single paragraph, more personal. Email contact. Done.

---

## Visual Enhancements

1. **Scroll-triggered entrance animations** — `IntersectionObserver` + `opacity/translateY` transitions, wrapped in `prefers-reduced-motion` check. ~25 lines of JS.
2. **Faint halo watermark** — The ring SVG at `opacity: 0.03`, large scale, positioned behind the provocation section.
3. **Tightened radial glow** — Make the cyan light source more dramatic and focused in the hero area.

---

## Files to Modify

| File | Changes |
|------|---------|
| `docs/index.md` | Full restructure — new section order, new content, new HTML |
| `docs/assets/style.css` | New components: `.hero-provocation`, `.story-timeline`, `.story-step`, `.audience-lanes`, `.phase-breakdown`. Modify `.hero`, simplify `.layer` |
| `docs/_includes/explore-form-embed.html` | Minor — update heading text |

## New Content to Create

- Condensed journalism example walkthrough (hardcoded in index.md)
- `halos.yaml` preview snippet for adopt section
- Standards comparison page (to house the removed CycloneDX/SLSA/PROV/NIST cards)

---

## Verification

1. Run Jekyll locally: `bundle exec jekyll serve`
2. Check all sections render in correct order
3. Verify adopt copy-prompt button still works (JS preserved)
4. Verify explore form still loads and functions
5. Test responsive behavior at 720px, 520px, 480px breakpoints
6. Verify scroll animations respect `prefers-reduced-motion`
7. Check all internal links resolve
