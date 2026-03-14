#!/bin/bash
# Serve HALOS site with Jekyll live reload — browser auto-refreshes on file changes.
# Run from repo root. Requires Docker and a built halos image: docker build -t halos .
set -e
cd "$(dirname "$0")/.."

if [ ! -f spec/manifest.json ]; then
  echo "Error: run from halos repo root (spec/manifest.json not found)"
  exit 1
fi

echo "Starting with live reload at http://localhost:3000"
echo "Edit files in docs/ or spec/ — browser will refresh automatically"
echo "Press Ctrl+C to stop"
echo ""

exec docker run --rm \
  -v "$(pwd):/workspace" \
  -p 3000:3000 \
  -p 35729:35729 \
  halos watch
