#!/bin/bash
# Serve HALOS site locally. Copies spec and agent discovery into docs, builds, then serves.
# Uses jekyll build + npx serve to avoid WEBrick sendfile errors (Errno::EPERM) on some systems.
set -e
cd "$(dirname "$0")/.."
echo "Copying spec into docs..."
cp -r spec docs/
echo "Copying agent discovery and .cursor into docs..."
mkdir -p docs/agents docs/agents/rules docs/agents/agents docs/agents/skills
cp FOR_AGENTS.md AGENTS.md docs/agents/
cp .cursorrules docs/agents/cursorrules
cp -r .cursor/rules/* docs/agents/rules/
cp -r .cursor/agents/* docs/agents/agents/
cp -r .cursor/skills/* docs/agents/skills/
echo "Building with Jekyll..."
cd docs && jekyll build
if [ ! -f _site/spec/spec.html ]; then
  echo "Error: spec/spec.html was not built. Ensure spec/ was copied (run this script from repo root)."
  exit 1
fi
echo ""
echo "Serving at http://localhost:3000"
echo "Press Ctrl+C to stop"
echo ""
exec python3 -m http.server 3000 --directory _site
