#!/bin/sh
# Serve HALOS site with Jekyll live reload (for local dev)
# Uses /workspace if mounted, else bundled /halos
# Changes to docs/, spec/, proposals/ trigger automatic rebuild and browser refresh
set -e

ROOT="$(/resolve.sh)"
cd "$ROOT"

echo "Preparing docs (copy spec, agents)..."
/build.sh

echo ""
echo "Serving with live reload at http://0.0.0.0:3000"
echo "Edit files in docs/ or spec/ — browser will refresh automatically"
echo "Press Ctrl+C to stop"
echo ""

cd "$ROOT"
exec env BUNDLE_GEMFILE=/jekyll/Gemfile bundle exec jekyll serve \
  --livereload \
  -H 0.0.0.0 \
  -P 3000 \
  -s docs \
  -d docs/_site
