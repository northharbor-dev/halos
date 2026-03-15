# HALOS “Getting Involved” Section — Implementation Plan

**Status:** Proposal (planning)  
**Date:** 2026-03-15  
**Author:** Product + front-end planning

---

## Executive Summary

Add and improve a **Getting Involved** section to the HALOS site to make it easy for visitors to understand how to engage—read the spec, become a signatory, contribute via GitHub, and follow updates on NorthHarbor’s LinkedIn company page. The plan favors a **homepage section first** with an optional dedicated page for depth.

---

## 1. Information Architecture

### Current State

| Section / Page   | Purpose                                       | Engagement?                               |
|------------------|-----------------------------------------------|-------------------------------------------|
| Hero             | What is HALOS                                 | —                                         |
| Explore panel    | Personalized HALOS prompt                     | Low friction                              |
| Dive deeper      | Spec, vision, principles, governance, supporters, etc. | Read-only, navigational           |
| Context          | Origin, identity, repo link                    | Single GitHub link                        |
| Why This Exists  | Motivation, email contact                     | Email only                                |
| Supporters page  | Signatory registry                            | PR flow for signatories                   |
| Help page        | FAQ, proposal process, contributing           | References GitHub, governance             |
| Nav              | 12 links; GitHub external                     | No LinkedIn                               |

**Gap:** No single place that answers “How can I support it?” and “Where do I follow updates?” in one view. Context is scattered across Dive deeper, Context, Help, and Supporters.

### Recommended Placement

| Location        | Approach                                        |
|-----------------|--------------------------------------------------|
| **Homepage**    | New section **Getting Involved** between “Dive deeper” and “Context” |
| **Dedicated page** | Optional: `getting-involved.html` for expanded content and links |
| **Nav**         | Add **Getting Involved** link (or rely on homepage + footer) |
| **Footer**      | Add LinkedIn link, keep GitHub, preserve existing line |

**Rationale:** Place Getting Involved after Dive deeper so visitors first see what HALOS is, then how to engage. Context stays at the end as background. A dedicated page is optional for v1; the homepage section can be sufficient.

---

## 2. Homepage vs Dedicated Page vs Both

**Recommendation: Both, implemented in two phases.**

| Phase | Deliverable                                      |
|-------|---------------------------------------------------|
| **Phase 1** | Homepage section only (high leverage, minimal change) |
| **Phase 2** | Dedicated `getting-involved.html` if content grows or nav needs it |

**Phase 1 focus:** One strong homepage section that answers all four questions. Phase 2 can add a deeper page if you want more room for contributor vs signatory vs supporter nuance, or if the nav feels crowded.

---

## 3. Engagement Paths — UX and Content

### Four Paths

| Path                  | Audience                     | CTA / Action                          | Destination                                   |
|-----------------------|------------------------------|---------------------------------------|-----------------------------------------------|
| **Read the spec**     | Developers, researchers, adopters | Read the spec / Dive into the spec   | `/spec/spec.html`                             |
| **Become a signatory**| Supporters willing to affirm  | Become a signatory / Add yourself    | Supporters page + `signatories/CONTRIBUTING.md` |
| **Contribute improvements** | Contributors (proposals, docs) | Contribute via GitHub / Propose changes | GitHub repo, proposals, CONTRIBUTING.md        |
| **Follow updates**   | All (lowest commitment)       | Follow on LinkedIn / Stay connected  | NorthHarbor LinkedIn company page             |

### Role Distinctions (Yes, Differentiate)

| Term           | Meaning                                                | Where it lives          |
|----------------|--------------------------------------------------------|-------------------------|
| **Signatory**  | Publicly affirmed support; listed in registry          | Supporters page         |
| **Contributor**| Proposes changes, improves docs, participates in review| GitHub, governance      |
| **Supporter**  | General term for anyone who supports HALOS             | Marketing copy, not form|

**Recommendation:** Use “signatory” and “contributor” explicitly. “Supporters” stays as the page name (registry of signatories). Avoid overloading “supporter” with multiple meanings.

---

## 4. Section Structure and Layout

### Visual Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Getting Involved                                           │
│  Short intro (1–2 sentences)                                 │
├─────────────────────────────────────────────────────────────┤
│  [Card 1]         [Card 2]         [Card 3]         [Card 4]  │
│  Read the spec    Become a        Contribute       Follow    │
│                   signatory       via GitHub       updates   │
│  CTA →            CTA →           CTA →           CTA →     │
└─────────────────────────────────────────────────────────────┘
```

- **Component:** Reuse existing `section-card` + `card-grid` for consistency.
- **Cards:** Four cards, same pattern as Dive deeper.
- **Icons (optional):** Simple inline icon or first-letter emphasis. Avoid heavy iconography.
- **Mobile:** Existing `card-grid` collapses to single column on small screens (`minmax(0, 1fr)` at ~768px).

---

## 5. Proposed Content

### Section Heading

**Primary:** *Getting Involved*  
**Alternative:** *How to Engage* (slightly softer)

### Intro Copy (2 options)

**Option A (direct):**
> HALOS is an open framework. You can read the spec, affirm your support as a signatory, propose changes via GitHub, or simply stay connected for updates.

**Option B (question-led):**
> How can you support HALOS? Read the spec, join the signatory registry, contribute proposals and docs on GitHub, or follow project updates on our company page.

### Card Content and CTAs

| Card             | Title (h3)        | Description                           | CTA Label              | Link                                   |
|------------------|-------------------|----------------------------------------|------------------------|----------------------------------------|
| Read the spec    | Read the Spec     | Machine-readable core and extensions for HALOS alignment. | Read the spec          | `/spec/spec.html`                      |
| Signatory        | Become a Signatory| Publicly affirm your support. Add yourself via pull request. | Add yourself           | `/supporters.html` (or direct to signatories/CONTRIBUTING) |
| Contribute       | Contribute        | Propose changes, improve docs, or participate in review. | Contribute on GitHub   | `https://github.com/northharbor-dev/halos` |
| Follow updates   | Follow Updates    | Stay connected on the NorthHarbor LinkedIn company page. | Follow on LinkedIn     | `https://www.linkedin.com/company/northharbor` |

**LinkedIn URL:** Confirmed: `https://www.linkedin.com/company/northharbor`. Use `rel="noopener noreferrer"` for external links.

---

## 6. Microcopy — Final Suggestions

### Section Intro (recommended)

> HALOS is developed in public and welcomes participation. Read the spec, become a signatory, contribute improvements via GitHub, or follow project updates on the NorthHarbor LinkedIn company page.

### Card Microcopy (concise)

| Card       | Description                                                                 | CTA        |
|-----------|-----------------------------------------------------------------------------|------------|
| **Spec**  | Machine-readable core and extensions. Understand what HALOS requires.      | Read the spec |
| **Signatory** | Publicly affirm your support for the principles. Add yourself via pull request. | Add yourself |
| **Contribute** | Propose changes, improve docs, or join the review process. All via GitHub. | Contribute on GitHub |
| **Follow** | Stay connected for milestones, announcements, and discussion.               | Follow on LinkedIn |

---

## 7. Component Structure

### Implementation Approach

1. **Reuse patterns:** `section-card`, `card-grid`, `card` (same as Dive deeper).
2. **Include (optional):** Create `_includes/getting-involved-cards.html` so the block can be reused on a future dedicated page.
3. **Structure:**

   ```html
   <section class="section-card" id="getting-involved" aria-labelledby="getting-involved-heading">
     <h2 id="getting-involved-heading">Getting Involved</h2>
     <p class="section-card__lead">HALOS is developed in public …</p>
     <div class="card-grid" role="list">
       <a class="card" href="..." role="listitem">…</a>
       …
     </div>
   </section>
   ```

4. **Semantic HTML:** Use `role="list"` / `role="listitem"` only if screen readers benefit; otherwise `<div>` and `<a>` are sufficient. Ensure `<a>` cards have descriptive link text (card heading + short description).

---

## 8. Nav and Footer Updates

### Nav

- **Option A:** Add “Getting Involved” linking to `/#getting-involved`. Keeps nav focused; users land on homepage and scroll.
- **Option B:** Omit from nav; rely on homepage placement and footer.

**Recommendation:** Start without a nav link. The homepage section is discoverable on scroll. Add a nav link in Phase 2 if you introduce a dedicated page.

### Footer

Current:

> HALOS is developed in public through NorthHarbor Development.

**Proposed addition:**

> HALOS is developed in public through NorthHarbor Development. [GitHub](…) · [LinkedIn](…)

Or:

> HALOS is developed in public through NorthHarbor Development.  
> <small>[GitHub](…) · [Follow on LinkedIn](…)</small>

**Placement:** LinkedIn alongside GitHub in the footer feels natural and low-key, not promotional.

---

## 9. Accessibility and Semantic HTML

| Concern              | Recommendation                                                                 |
|----------------------|---------------------------------------------------------------------------------|
| Link purpose         | Each card link describes destination (e.g. “Read the spec”, “Add yourself”)   |
| Heading hierarchy    | `h2` for section; `h3` inside cards                                             |
| Focus states         | Ensure `.card:hover` and `:focus-visible` are distinct and visible             |
| External links       | Add `rel="noopener noreferrer"` for GitHub and LinkedIn                         |
| Screen readers       | Keep link text meaningful; avoid “click here”                                     |
| Reduced motion      | Respect `prefers-reduced-motion` for any card animations                      |
| Color contrast       | Use existing design tokens (accent, halo) for text and links                    |

---

## 10. Implementation Checklist (Phase 1)

- [ ] Add Getting Involved section to `docs/index.md` between Dive deeper and Context.
- [ ] Confirm NorthHarbor LinkedIn company page URL.
- [ ] Add LinkedIn + GitHub links to footer in `_layouts/default.html`.
- [ ] Apply `rel="noopener noreferrer"` to all external links in the new section and footer.
- [ ] Verify card-grid behavior on mobile (existing breakpoints).
- [ ] Run basic accessibility check (heading levels, link text, focus states).

---

## 11. Optional Future Enhancements

| Enhancement                         | When to consider                                      |
|------------------------------------|-------------------------------------------------------|
| Dedicated `getting-involved.html`  | When homepage feels long or you want a nav entry      |
| “Stay connected” email signup      | When you have a list and capacity to maintain it     |
| Role-specific paths (dev vs non-tech)| When you see different personas needing tailored flows |
| FAQ within Getting Involved       | When common questions repeat (e.g. “Do I need to code?”) |
| Visual distinction for primary CTA | If one path (e.g. signatory) should be emphasized   |

---

## 12. Files to Modify

| File                     | Change                                                                 |
|--------------------------|------------------------------------------------------------------------|
| `halos/docs/index.md`    | Insert Getting Involved section between Dive deeper and Context        |
| `halos/docs/_layouts/default.html` | Add LinkedIn (+ optionally GitHub) to footer                     |

**Optional:** `halos/docs/_includes/getting-involved-cards.html` if you want the block reusable.

---

## 13. Tone Alignment

The proposed copy aims to be:

- **Open** — “welcomes participation”, “developed in public”
- **Credible** — concrete actions (spec, PR, GitHub, LinkedIn)
- **Early-stage but intentional** — clear roles, minimal process
- **Welcoming** — developers, creators, researchers, non-technical supporters

Avoid:

- Corporate or closed language
- Overly formal or promotional tone
- Implied exclusivity

---

*This plan is ready for review. After approval, proceed with Phase 1 edits to `index.md` and `default.html`.*
