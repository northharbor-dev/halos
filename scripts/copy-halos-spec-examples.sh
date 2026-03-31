#!/usr/bin/env bash
# Copy domain example narratives from halos-spec into the Jekyll _examples collection.
# Called during CI after halos-spec is checked out alongside this repo.
#
# Usage: ./scripts/copy-halos-spec-examples.sh <halos-spec-dir>
#
# Each .md file in halos-spec/examples/ (excluding README and GENERATE-EXAMPLE)
# is copied into docs/_examples/ with Jekyll frontmatter injected from its
# first heading and content.

set -euo pipefail

SPEC_DIR="${1:?Usage: $0 <halos-spec-dir>}"
EXAMPLES_SRC="$SPEC_DIR/examples"
EXAMPLES_DST="docs/_examples"

mkdir -p "$EXAMPLES_DST"

# Metadata for each domain example — slug, domain label, lead name, lead role, key decision
# This is maintained here rather than parsed from content to keep the script simple.
declare -A DOMAINS=(
  [education-student-learning]="Education / Student Learning|Mateo Rivera|Undergraduate biochemistry student|Rejected AI-fabricated citation after verification failure"
  [enterprise-software-development]="Enterprise Software Development|Tomoko Hayashi|Senior platform engineer|Rejected AI-recommended CQRS; rewrote state machine from scratch"
  [government-policy-legal]="Government / Policy / Legal|Fatima Al-Rashid|Senior policy analyst|Chose how to frame politically consequential housing supply finding"
  [journalism-news-media]="Journalism / News Media|Carlos Medina|Investigative reporter|Corrected AI-generated violation dataset before publication"
  [music-creative-production]="Music / Creative Production|Maya Reeves|Film composer|Rejected AI harmonic sketch, kept only structural idea"
  [nonprofit-humanitarian]="Nonprofit / Humanitarian|Amara Diallo|Field coordinator|Overrode AI priority ranking based on ground-truth field report"
  [realtime-critical-systems]="Real-time Critical Systems|Luis Herrera, PE|Control systems engineer|Reduced AI-proposed dosing reduction, added safety logic AI omitted"
  [scientific-research]="Scientific Research|Dr. Nkechi Okonkwo|Computational epidemiologist|Excluded confounded feature the AI ranked as highly predictive"
)

for slug in "${!DOMAINS[@]}"; do
  src="$EXAMPLES_SRC/$slug.md"
  dst="$EXAMPLES_DST/$slug.md"

  if [ ! -f "$src" ]; then
    echo "Warning: $src not found, skipping"
    continue
  fi

  IFS='|' read -r domain lead lead_role key_decision <<< "${DOMAINS[$slug]}"

  # Extract the title from the first H1 heading (e.g., "# HALOS Example: Education / Student Learning")
  title=$(head -5 "$src" | grep -m1 '^# ' | sed 's/^# //')

  # Write frontmatter + original content (skip the first H1 line since Jekyll renders page.title)
  {
    echo "---"
    echo "title: \"$title\""
    echo "domain: \"$domain\""
    echo "lead: \"$lead\""
    echo "lead_role: \"$lead_role\""
    echo "key_decision: \"$key_decision\""
    echo "source_repo: halos-spec"
    echo "---"
    echo ""
    # Skip the first heading line (already in frontmatter as title).
    # Rewrite relative .halos.json links to GitHub URLs — these files are
    # not served on the site, they live in halos-spec.
    # Use awk instead of sed for macOS/GNU compatibility.
    awk -v slug="$slug" '
      NR==1 && /^# / { next }
      {
        gsub(/\]\([^)]*\.halos\.json\)/, "](https://github.com/northharbor-dev/halos-spec/blob/main/examples/" slug ".halos.json)")
        print
      }
    ' "$src"
  } > "$dst"

  echo "Copied: $slug"
done

echo "Done — $(ls "$EXAMPLES_DST"/*.md 2>/dev/null | wc -l | tr -d ' ') examples copied to $EXAMPLES_DST"
