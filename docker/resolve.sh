#!/bin/sh
# Resolve workspace root: use mounted /workspace if it has spec, else use bundled /halos
if [ -f /workspace/spec/manifest.json ]; then
  echo /workspace
else
  echo /halos
fi
