---
name: validation-and-build
description: Troubleshoot validation, build, and Docker. Use when the user has validation errors, build failures, Docker issues, or questions about running validate, build, or serve.
---

# Validation and Build — HALOS

Help users validate the spec, build the site, and use Docker. Per [halos-repo-operations](.cursor/rules/halos-repo-operations.mdc), run validation and build before committing.

## When to Use

- Validation errors (schema, generate-spec)
- Build failures (Jekyll, Docker)
- Docker commands or image issues
- Questions about local dev (serve, scripts)

## Validation

### Commands

**Docker (recommended):**
```bash
docker run --rm halos validate
# With local changes:
docker run --rm -v "$(pwd):/workspace" halos validate
```

**Local:**
```bash
npx --yes ajv-cli validate --spec=draft2020 -s spec/schema/manifest.schema.json -d spec/manifest.json
npx --yes ajv-cli validate --spec=draft2020 -s spec/schema/core.schema.json -d spec/core.json
npx --yes ajv-cli validate --spec=draft2020 -s spec/schema/changelog.schema.json -d spec/changelog.json
node scripts/validate-spec-immutability.js origin/main
node scripts/generate-spec.js
test -s spec/spec.md && test -s spec/CHANGELOG.md
```

**Pre-push immutability check:**
```bash
node scripts/validate-spec-immutability.js origin/main
```

### Common Errors

- **Schema validation fails** — Check JSON syntax; ensure required fields in manifest, core, changelog; run `node scripts/generate-spec.js` after JSON edits
- **spec.md / CHANGELOG.md missing** — Run `node scripts/generate-spec.js` from repo root
- **ajv-cli not found** — Use `npx --yes ajv-cli` or Docker

## Build and Serve

### Docker

```bash
# Build site
docker run --rm halos build

# Serve (builds then serves on 3000)
docker run --rm -p 3000:3000 halos serve

# Info (version, bundled vs mounted)
docker run --rm halos info
```

### Local Script

```bash
./scripts/serve.sh
```

Requires: Jekyll, Python 3. Copies spec and agents into docs, runs `jekyll build`, serves `docs/_site` on port 3000.

### Common Build Errors

- **Jekyll / Sass errors** — Ensure Ruby, bundle; check docs/_config.yml
- **spec/spec.html not built** — Ensure spec/ was copied to docs/ (script does this; Docker build does too)

## CI Workflows

- **[spec-validate.yml](.github/workflows/spec-validate.yml)** — Schema validation, generate-spec, verify outputs
- **[deploy-pages.yml](.github/workflows/deploy-pages.yml)** — Build site, deploy to GitHub Pages
- **[docker-build.yml](.github/workflows/docker-build.yml)** — Build and push Docker image

## Integration tests

```bash
./scripts/integration-test.sh
```

Spins up the site in Docker, checks all paths (200s, expected content), verifies 404 for unknown paths. Run before committing or deploying. CI runs this as a pre-deploy gate.

## Before Committing

Per halos-repo-operations:
- Run validation (Docker or local)
- Run build and verify key pages if changing docs/spec
- No secrets in committed files; pinned dependencies
