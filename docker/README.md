# HALOS Docker Image

Multi-platform image for validation, Jekyll build, and serving the HALOS spec site. Supports linux/amd64 and linux/arm64. No local Node.js, Ruby, or Jekyll required.

The image includes a **bundled copy** of the spec and docs. You can run it without cloning the repo, or mount your local workspace to override.

## Commands

| Command   | Description |
|-----------|--------------|
| `validate` | Validate spec (schema + generate + verify) — default |
| `build`    | Build the GitHub Pages site (spec + agents + Jekyll) |
| `serve`    | Build site and serve at http://localhost:3000 |
| `watch`    | Serve with Jekyll live reload — browser auto-refreshes on file changes |
| `info`     | Print spec version and source (bundled vs mounted) |

## Distribution (no mount)

Consume the spec without cloning — uses the version baked into the image:

```bash
# Pull and serve (visit http://localhost:3000)
docker run --rm -p 3000:3000 ghcr.io/northharbor-dev/halos-validate serve

# Show version
docker run --rm ghcr.io/northharbor-dev/halos-validate info
```

## Development (with mount)

From the halos repository root, mount the workspace to validate or serve your local changes:

```bash
docker run --rm -v "$(pwd):/workspace" ghcr.io/northharbor-dev/halos-validate
docker run --rm -v "$(pwd):/workspace" ghcr.io/northharbor-dev/halos-validate build
docker run --rm -v "$(pwd):/workspace" -p 3000:3000 ghcr.io/northharbor-dev/halos-validate serve

# With live reload (edit docs/ or spec/ — browser refreshes automatically)
# Expose both 3000 and 35729 for the page and LiveReload websocket
docker run --rm -v "$(pwd):/workspace" -p 3000:3000 -p 35729:35729 ghcr.io/northharbor-dev/halos-validate watch
```

When `/workspace` contains `spec/manifest.json`, the image uses your mounted repo; otherwise it uses the bundled spec.

## Build locally

```bash
docker build -t halos .
docker run --rm halos info
docker run --rm -p 3000:3000 halos serve
```

The image is built and pushed to `ghcr.io/northharbor-dev/halos-validate` on push to main.

## Multi-Platform Build

```bash
docker buildx build --platform linux/amd64,linux/arm64 -t halos .
```

## Integration tests

Run the integration test suite (starts server, checks all paths, stops):

```bash
./scripts/integration-test.sh
```

Uses Docker by default. Set `BASE_URL` to test an already-running server.

## Use Cases

- **Distribution** — Pull and serve without cloning; version-pinned via image tag
- **Validation** — Validate spec without Node.js/Ruby locally
- **Development** — Mount repo to iterate on spec and preview site
- **CI** — Single image for validation and build
