#!/bin/sh
# HALOS Docker entrypoint — validate | build | serve | info
set -e

case "${1:-validate}" in
  validate) exec /validate.sh ;;
  build)    exec /build.sh ;;
  serve)    exec /serve.sh ;;
  info)     exec /info.sh ;;
  *)        echo "Usage: validate | build | serve | info"; exit 1 ;;
esac
