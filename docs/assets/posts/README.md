# Post Images

Store blog post image assets here, grouped by post slug:

```text
assets/posts/
  YYYY-MM-DD-slug/
    social.png
    feed.png
```

Recommended outputs:

- `social.png` — primary post image for `og:image` and `twitter:image`
  Suggested target: `1200x630` or another landscape social-preview size.
- `feed.png` — smaller companion image for RSS and feed readers
  Suggested target: `420x420` square.

Suggested front matter in the corresponding file under `docs/_posts/`:

```yaml
image: /assets/posts/YYYY-MM-DD-slug/social.png
feed_image: /assets/posts/YYYY-MM-DD-slug/feed.png
```

Until per-post assets exist, the site falls back to shared HALOS default images.
