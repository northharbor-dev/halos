#!/usr/bin/env bash
# HALOS integration test — pre-deployment check
# Spins up the site in Docker, tests all paths, exits 0 on success
set -e

PORT="${TEST_PORT:-3999}"
BASE_URL="${BASE_URL:-http://localhost:$PORT}"
CONTAINER_NAME="halos-integration-test-$$"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TIMEOUT=90

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

passed=0
failed=0

check() {
  local path="$1"
  local expected_status="${2:-200}"
  local must_contain="${3:-}"
  local url="${BASE_URL}${path}"
  local status body

  if body=$(curl -s -w "\n%{http_code}" "$url" 2>/dev/null); then
    status=$(echo "$body" | tail -1)
    body=$(echo "$body" | sed '$d')
  else
    status="000"
    body=""
  fi

  if [ "$status" = "$expected_status" ]; then
    local ok=1
    if [ -n "$must_contain" ] && ! echo "$body" | grep -qF "$must_contain"; then
      ok=0
    fi
    if [ $ok -eq 1 ]; then
      echo -e "  ${GREEN}✓${NC} $path ($status)"
      ((passed++)) || true
      return 0
    fi
  fi

  echo -e "  ${RED}✗${NC} $path (got $status, expected $expected_status)"
  ((failed++)) || true
  return 1
}

wait_for_server() {
  echo "Waiting for server at $BASE_URL (${TIMEOUT}s timeout)..."
  local elapsed=0
  while [ $elapsed -lt $TIMEOUT ]; do
    if curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/" 2>/dev/null | grep -q 200; then
      echo "Server ready."
      return 0
    fi
    sleep 2
    elapsed=$((elapsed + 2))
  done
  echo "Server did not become ready in ${TIMEOUT}s"
  return 1
}

cleanup() {
  if [ -n "$CONTAINER_ID" ] && docker ps -q --no-trunc 2>/dev/null | grep -q "^$CONTAINER_ID$"; then
    echo "Stopping container..."
    docker stop "$CONTAINER_ID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

# Start server if not using explicit BASE_URL from env
if [[ "$BASE_URL" == "http://localhost:"* ]] && ! curl -s -o /dev/null "$BASE_URL/" 2>/dev/null; then
  if ! docker images -q halos | grep -q .; then
    echo "Building halos image..."
    docker build -t halos "$REPO_ROOT"
  fi
  echo "Starting HALOS server in Docker..."
  CONTAINER_ID=$(docker run -d --rm \
    --name "$CONTAINER_NAME" \
    -p "$PORT:3000" \
    -v "$REPO_ROOT:/workspace" \
    halos serve 2>/dev/null) || CONTAINER_ID=$(docker run -d --rm \
    --name "$CONTAINER_NAME" \
    -p "$PORT:3000" \
    halos serve 2>/dev/null)
  [ -n "$CONTAINER_ID" ] || { echo "Failed to start container"; exit 1; }
  wait_for_server || exit 1
fi

echo ""
echo "Running integration tests..."
echo ""

# Main pages (from nav + key docs)
check "/" 200 "HALOS"
check "/spec/spec.html" 200 "HALOS"
check "/vision.html" 200 "HALOS"
check "/principles.html" 200 "HALOS"
check "/governance.html" 200 "HALOS"
check "/everyday-humans.html" 200 "HALOS"
check "/for-agents.html" 200 "HALOS"
check "/help.html" 200 "HALOS"
check "/journal.html" 200 "Journal"
check "/blog.html" 200 "Blog"
check "/2025/03/15/why-halos.html" 200 "Why HALOS"
check "/SYNDICATION.html" 200 "Medium"
check "/agents.html" 200 "HALOS"
check "/agent-discovery.html" 200 "HALOS"
check "/identity.html" 200 "HALOS"
check "/origin.html" 200 "HALOS"

# Spec (JSON)
check "/spec/manifest.json" 200 "version"
check "/spec/core.json" 200 "HALOS-CORE"

# Agent skills
check "/agents/skills/agent-convention-sync/SKILL.html" 200 "agent-convention-sync"
check "/agents/skills/halos-help/SKILL.html" 200 "halos-help"
check "/agents/skills/proposal-assist/SKILL.html" 200 "proposal-assist"
check "/agents/skills/validation-and-build/SKILL.html" 200 "validation-and-build"
check "/agents/skills/spec-explainer/SKILL.html" 200 "spec-explainer"

# Static assets
check "/assets/style.css" 200 ""
check "/identity-assets/selected/halos-halo-ring-institutional-randomized.svg" 200 ""

# 404 check
check "/nonexistent-page-404" 404 ""

echo ""
echo "---"
echo -e "Passed: ${GREEN}$passed${NC}  Failed: ${RED}$failed${NC}"
echo ""

if [ $failed -gt 0 ]; then
  exit 1
fi
exit 0
