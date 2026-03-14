#!/bin/sh
# Build HALOS GitHub Pages site — copies spec + agents, runs Jekyll
# Uses /workspace if mounted with spec, else bundled /halos
set -e

ROOT="$(/resolve.sh)"
cd "$ROOT"

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
cd "$ROOT" && BUNDLE_GEMFILE=/jekyll/Gemfile bundle exec jekyll build -s docs -d docs/_site

if [ ! -f docs/_site/spec/spec.html ]; then
  echo "Error: spec/spec.html was not built."
  exit 1
fi

echo "Site built at $ROOT/docs/_site"
