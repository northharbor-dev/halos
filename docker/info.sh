#!/bin/sh
# Print HALOS spec version and source (bundled vs mounted)
set -e

ROOT="$(/resolve.sh)"
if [ "$ROOT" = "/halos" ]; then
  SOURCE="bundled"
else
  SOURCE="workspace (mounted)"
fi

VERSION="$(node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1])).version)" "$ROOT/spec/manifest.json")"
echo "HALOS spec $VERSION ($SOURCE)"
echo "  root: $ROOT"
echo "  serve: docker run -p 3000:3000 halos serve"
echo "  spec:  https://halos.northharbor.dev/spec/spec.html"
