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

## Post images

New blog posts should ship with two image assets:

- **Social/page image** — larger image used for `og:image`, `twitter:image`, and link previews.
- **Feed image** — smaller square or thumbnail-friendly image used in RSS/Atom readers.

Recommended front matter:

```yaml
---
title: "Post title"
excerpt: "One-sentence summary."
date: YYYY-MM-DD
image: /assets/posts/YYYY-MM-DD-slug/social.png
feed_image: /assets/posts/YYYY-MM-DD-slug/feed.png
---
```

Current fallback behavior:

- If a post omits `image`, HALOS uses the default banner image.
- If a post omits `feed_image`, HALOS uses the default feed thumbnail.

Suggested workflow for new posts:

1. Create the draft in `docs/_posts/` with `title`, `excerpt`, `date`, `image`, and `feed_image`.
2. Generate a relevant hero/social image for the post topic.
3. Export a smaller companion image for feed readers.
4. Save both under `docs/assets/posts/YYYY-MM-DD-slug/`.
5. Verify the post page exposes `og:image` and the feed exposes `media:thumbnail`.

See [`assets/posts/README.md`](assets/posts/README.md) for the folder convention and suggested sizes.

Until per-post images exist, the default HALOS images keep previews and feed readers populated.
