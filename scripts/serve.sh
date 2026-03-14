#!/bin/bash
# Serve HALOS site locally. Copies spec into docs, then runs Jekyll.
set -e
cd "$(dirname "$0")/.."
echo "Copying spec into docs..."
cp -r spec docs/
echo "Starting Jekyll server..."
cd docs && exec jekyll serve --livereload "$@"
