#!/bin/sh
# Build HALOS site and serve it (port 3000)
# Uses /workspace if mounted with spec, else bundled /halos
set -e

ROOT="$(/resolve.sh)"
cd "$ROOT"

# Build first
/build.sh

echo ""
echo "Serving at http://0.0.0.0:3000"
echo "Press Ctrl+C to stop"
echo ""

cd "$ROOT/docs" && exec python3 -m http.server 3000 --directory _site --bind 0.0.0.0
