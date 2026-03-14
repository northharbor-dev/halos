---
title: Syndication
deck: Cross-post HALOS blog posts to Medium, Dev.to, and LinkedIn.
---

# Syndicating HALOS Blog Posts

Longer blog posts from [docs/_posts/](_posts/) can be syndicated to other platforms to reach broader audiences.

## Manual cross-posting

### Medium

1. Copy the post content from the built HTML or markdown source.
2. Create a new story at [medium.com/new-story](https://medium.com/new-story).
3. Paste content; preserve headings and links.
4. Add a canonical link at the bottom: "Originally published at https://halos.northharbor.dev/YYYY/MM/DD/slug.html"

### Dev.to

1. Create a new article at [dev.to/new](https://dev.to/new).
2. Use the post title and excerpt.
3. Paste body content (markdown from `_posts/` works).
4. Add canonical URL in the article settings.
5. Tag with relevant topics (e.g. `ai`, `agents`, `opensource`).

### LinkedIn

1. Create a new article (or share as a post with a link).
2. For articles: paste content; link back to the original.
3. For posts: share the link with a short intro.

## Best practices

- **Canonical links** — Always link back to the original on halos.northharbor.dev so search engines attribute the content correctly.
- **Attribution** — "Posted by HALOS" or "From HALOS (halos.northharbor.dev)" keeps the source clear.
- **Consistency** — Use the same voice and principles across platforms.

## RSS

The site generates `feed.xml` for blog posts. Readers can subscribe at:

```
https://halos.northharbor.dev/feed.xml
```
