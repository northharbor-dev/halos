#!/bin/bash
# Capture local desktop and mobile previews of a served HALOS page.
set -euo pipefail

TARGET_PATH="${1:-/}"
BASE_URL="${HALOS_BASE_URL:-http://127.0.0.1:3000}"
OUTPUT_DIR="${HALOS_PREVIEW_DIR:-/tmp/halos-preview}"

if [[ "$TARGET_PATH" != /* ]]; then
  TARGET_PATH="/$TARGET_PATH"
fi

URL="${BASE_URL}${TARGET_PATH}"
SLUG="$(echo "$TARGET_PATH" | sed 's#^/##; s#/$##; s#[^A-Za-z0-9/_-]#-#g; s#/#__#g')"
if [[ -z "$SLUG" ]]; then
  SLUG="home"
fi

mkdir -p "$OUTPUT_DIR"

DESKTOP_OUT="${OUTPUT_DIR}/${SLUG}-desktop.png"
MOBILE_OUT="${OUTPUT_DIR}/${SLUG}-mobile.png"

npx playwright screenshot --browser=chromium --full-page --viewport-size="1440,1400" "$URL" "$DESKTOP_OUT"
npx playwright screenshot --browser=chromium --full-page --viewport-size="390,844" "$URL" "$MOBILE_OUT"

echo "Preview URL: $URL"
echo "Desktop screenshot: $DESKTOP_OUT"
echo "Mobile screenshot: $MOBILE_OUT"
echo ""
echo "If you want an interactive browser window too:"
echo "  npx playwright open --browser=chromium --viewport-size=\"1440,1400\" \"$URL\""
echo "  npx playwright open --browser=chromium --viewport-size=\"390,844\" \"$URL\""
