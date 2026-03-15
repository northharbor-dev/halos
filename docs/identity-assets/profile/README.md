# HALOS Profile Assets

Optimized images for GitHub, LinkedIn, and social profiles.

| File | Size | Use |
|------|------|-----|
| `halos-profile-420.png` | 420×420 | GitHub profile avatar. Rendered from `halos-halo-ring-institutional-randomized.svg` |
| `halos-linkedin-banner.png` | 1584×528 | LinkedIn background banner (3:1, fills editor preview) |
| `bob-hong-linkedin-banner.png` | 1584×528 | Personal banner for Bob Hong |

## Regenerate

Profile avatar:
```bash
rsvg-convert -w 420 -h 420 -o halos-profile-420.png ../selected/halos-halo-ring-institutional-randomized.svg
```

LinkedIn banners:
```bash
rsvg-convert -w 1584 -h 528 -o halos-linkedin-banner.png halos-linkedin-banner.svg
rsvg-convert -w 1584 -h 528 -o bob-hong-linkedin-banner.png bob-hong-linkedin-banner.svg
```
