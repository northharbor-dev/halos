# Social — For AI Agents

This folder contains platform-specific post content for LinkedIn, Substack, and other channels. It is **not part of the Jekyll site** and will never be published automatically.

---

## Folder structure

```
social/
  FOR_AGENTS.md          ← you are here
  YYYY-MM-DD-slug-platform.md   ← published posts
```

Drafts in progress live in `docs/_drafts/` (Jekyll won't publish them).
Once published externally, they move here.

---

## Workflow

### 1. Drafting
- Create the file in `docs/_drafts/` as `YYYY-MM-DD-slug-platform.md`
- Set `status: draft` in front matter
- Screenshot placeholders use `[Screenshot N — description]` format
- The draft stays in `docs/_drafts/` until the post goes live

### 2. Publishing
- Human publishes the post externally (LinkedIn, Substack, etc.)
- Human confirms the published URL

### 3. Archiving (agent task)
- Move the file from `docs/_drafts/` to `social/`
- Update front matter: set `status: published`, add `published_date` and `published_url`
- Commit with message: `Archive [platform] post: [title] (published YYYY-MM-DD)`

---

## Front matter reference

```yaml
---
title: "Post title"
date: YYYY-MM-DD          # date drafted
platform: linkedin        # linkedin | substack | medium | devto
post: slug                # source blog post slug in docs/_posts/
status: draft             # draft | published
published_date: YYYY-MM-DD   # set when archiving
published_url: https://...   # set when archiving
---
```

---

## File naming

`YYYY-MM-DD-source-post-slug-platform.md`

Example: `2026-03-25-from-framework-to-standard-linkedin.md`

---

## Notes for agents

- Never edit files in `social/` to update content — posts are already live
- If asked to draft a new social post, start in `docs/_drafts/`
- If asked to archive a published post, follow the workflow above
- Screenshot placeholders are intentional — do not remove them
- `docs/SYNDICATION.md` covers canonical link and attribution requirements for cross-posting
