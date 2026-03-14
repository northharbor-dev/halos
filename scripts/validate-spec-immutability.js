#!/usr/bin/env node
/**
 * Validate spec immutability: published versions cannot be changed.
 * Run before pushing. CI runs this in spec-validate workflow.
 *
 * Usage:
 *   node scripts/validate-spec-immutability.js [base-ref]
 *   # e.g. node scripts/validate-spec-immutability.js origin/main
 *
 * If base-ref omitted, uses BASE_REF env or infers from CI (merge-base / HEAD~1).
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SPEC_DIR = path.join(__dirname, '..', 'spec');

function loadJson(file) {
  const p = path.join(SPEC_DIR, file);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function getBaseRef() {
  const arg = process.argv[2];
  if (arg) return arg;

  const env = process.env.BASE_REF;
  if (env) return env;

  if (process.env.GITHUB_EVENT_NAME === 'pull_request' && process.env.GITHUB_BASE_REF) {
    return `origin/${process.env.GITHUB_BASE_REF}`;
  }

  return 'HEAD~1';
}

function revExists(ref) {
  try {
    execSync(`git rev-parse --verify ${ref}`, { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

function getBaseCommit(baseRef) {
  if (!revExists(baseRef)) return null;
  try {
    if (process.env.GITHUB_EVENT_NAME === 'pull_request' && process.env.GITHUB_BASE_REF) {
      return execSync(`git merge-base ${baseRef} HEAD`, { encoding: 'utf8' }).trim();
    }
    return execSync(`git rev-parse ${baseRef}`, { encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

function getFileAtRef(ref, file) {
  try {
    const out = execSync(`git show ${ref}:${file}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    return JSON.parse(out);
  } catch {
    return null;
  }
}

function jsonEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function run() {
  const baseRef = getBaseRef();
  const baseCommit = getBaseCommit(baseRef);

  if (!baseCommit) {
    console.log('Spec immutability: No base ref to compare (first commit or no git history). Skipping.');
    return;
  }

  const baseManifest = getFileAtRef(baseCommit, 'spec/manifest.json');
  const baseChangelog = getFileAtRef(baseCommit, 'spec/changelog.json');

  const headManifest = loadJson('manifest.json');
  const headChangelog = loadJson('changelog.json');

  if (!headManifest || !headChangelog) {
    console.error('Error: spec/manifest.json or spec/changelog.json not found.');
    process.exit(1);
  }

  const headVersion = headManifest.version;
  const baseVersion = baseManifest?.version;

  if (!baseChangelog || !baseManifest) {
    console.log('Spec immutability: No spec at base (new repo). Skipping.');
    return;
  }

  const publishedVersions = new Set((baseChangelog.versions || []).map((v) => v.version));

  for (const baseEntry of baseChangelog.versions || []) {
    const headEntry = (headChangelog.versions || []).find((v) => v.version === baseEntry.version);
    if (!headEntry) {
      console.error(`Error: Published version ${baseEntry.version} was removed from changelog.`);
      process.exit(1);
    }
    if (!jsonEqual(baseEntry, headEntry)) {
      console.error(`Error: Cannot modify changelog entry for published version ${baseEntry.version}.`);
      process.exit(1);
    }
  }

  if (baseVersion === headVersion) {
    const specFiles = ['spec/manifest.json', 'spec/core.json', 'spec/changelog.json'];
    for (const file of specFiles) {
      try {
        const baseContent = execSync(`git show ${baseCommit}:${file}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
        const headContent = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
        if (baseContent.trim() !== headContent.trim()) {
          console.error(`Error: Version ${headVersion} is published. You modified ${file} without bumping version.`);
          console.error('Bump the version in manifest.json and changelog.json to make changes.');
          process.exit(1);
        }
      } catch (e) {
        if (e.status !== 0 && !e.message?.includes('does not exist')) throw e;
      }
    }

    const extDir = path.join(SPEC_DIR, 'extensions');
    if (fs.existsSync(extDir)) {
      const files = fs.readdirSync(extDir).filter((f) => f.endsWith('.json'));
      for (const f of files) {
        const rel = `spec/extensions/${f}`;
        try {
          const baseContent = execSync(`git show ${baseCommit}:${rel}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
          const headContent = fs.readFileSync(path.join(SPEC_DIR, 'extensions', f), 'utf8');
          if (baseContent.trim() !== headContent.trim()) {
            console.error(`Error: Version ${headVersion} is published. You modified ${rel} without bumping version.`);
            process.exit(1);
          }
        } catch (e) {
          if (e.status !== 0) throw e;
        }
      }
    }
  } else {
    const latestChangelogVersion = headChangelog.versions?.[0]?.version;
    if (latestChangelogVersion !== headVersion) {
      console.error(`Error: manifest.version (${headVersion}) must match the latest changelog entry (${latestChangelogVersion}).`);
      process.exit(1);
    }
  }

  console.log('Spec immutability: OK');
}

run();
