#!/usr/bin/env node
/**
 * Generate human-readable spec (spec.md, CHANGELOG.md) from JSON.
 * Run from halos/ directory: node scripts/generate-spec.js
 */
const fs = require('fs');
const path = require('path');

const SPEC_DIR = path.join(__dirname, '..', 'spec');

function loadJSON(name) {
  const p = path.join(SPEC_DIR, name);
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function writeFile(name, content) {
  fs.writeFileSync(path.join(SPEC_DIR, name), content, 'utf8');
}

function generateSpecMd(manifest, core, extensions) {
  let md = `---
layout: default
title: Specification
deck: Machine-readable Core and Extensions for HALOS alignment
---

# HALOS Specification v${manifest.version}\n\n`;
  md += `*Machine-readable source: [manifest.json](manifest.json), [core.json](core.json)*\n\n`;
  md += `---\n\n`;

  md += `## Core (Required)\n\n`;
  md += `Projects implementing HALOS must adopt all core requirements.\n\n`;
  for (const r of core.requirements) {
    md += `### ${r.id} — ${r.title}\n\n`;
    md += `${r.description}\n\n`;
    if (r.source) md += `*Source: [${r.source}](${r.source})*\n\n`;
  }

  if (extensions.length > 0) {
    md += `---\n\n## Extensions (Optional)\n\n`;
    md += `Projects may implement zero or more extensions.\n\n`;
    for (const ext of extensions) {
      md += `### ${ext.id} — ${ext.title}\n\n`;
      md += `${ext.description}\n\n`;
      if (ext.requirements?.length) {
        for (const r of ext.requirements) {
          md += `- **${r.id}:** ${r.description}\n`;
        }
        md += `\n`;
      }
    }
  }

  md += `---\n\n*For ecosystem context and future mappings, see [Related Specs](RELATED_SPECS.md).*\n`;

  return md;
}

function generateChangelogMd(changelog) {
  let md = `# HALOS Specification Changelog\n\n`;
  md += `*Machine-readable: [changelog.json](changelog.json)*\n\n`;
  md += `---\n\n`;

  for (const v of changelog.versions) {
    md += `## ${v.version} (${v.date})\n\n`;
    for (const c of v.changes) {
      md += `- ${c}\n`;
    }
    if (v.proposals?.length) {
      md += `\n*Proposals: ${v.proposals.join(', ')}*\n`;
    }
    md += `\n`;
  }

  return md;
}

function main() {
  const manifest = loadJSON('manifest.json');
  const core = loadJSON('core.json');
  const changelog = loadJSON('changelog.json');

  const extensions = [];
  const extDir = path.join(SPEC_DIR, 'extensions');
  if (fs.existsSync(extDir)) {
    for (const f of fs.readdirSync(extDir)) {
      if (f.endsWith('.json')) {
        extensions.push(loadJSON(path.join('extensions', f)));
      }
    }
  }

  const specMd = generateSpecMd(manifest, core, extensions);
  const changelogMd = generateChangelogMd(changelog);

  writeFile('spec.md', specMd);
  writeFile('CHANGELOG.md', changelogMd);

  console.log('Generated spec/spec.md and spec/CHANGELOG.md');
}

main();
