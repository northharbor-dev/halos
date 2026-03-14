#!/bin/sh
# HALOS spec validation — schema checks + generate + verify
# Uses /workspace if mounted with spec, else bundled /halos
set -e

ROOT="$(/resolve.sh)"
cd "$ROOT"

echo "Validating JSON Schema..."
npx --yes ajv-cli validate --spec=draft2020 \
  -s spec/schema/manifest.schema.json -d spec/manifest.json
npx --yes ajv-cli validate --spec=draft2020 \
  -s spec/schema/core.schema.json -d spec/core.json
npx --yes ajv-cli validate --spec=draft2020 \
  -s spec/schema/changelog.schema.json -d spec/changelog.json

echo "Generating spec..."
node scripts/generate-spec.js

echo "Verifying generated files..."
test -s spec/spec.md || (echo "Error: spec/spec.md missing or empty" && exit 1)
test -s spec/CHANGELOG.md || (echo "Error: spec/CHANGELOG.md missing or empty" && exit 1)

echo "HALOS spec validation passed."
