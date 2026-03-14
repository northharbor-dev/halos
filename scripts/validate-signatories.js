#!/usr/bin/env node
"use strict";

/**
 * Validates signatories/signatories.json per proposal 0003.
 * Exit code 0 = valid, non-zero = invalid (message to stderr).
 */
const fs = require("fs");
const path = require("path");

const SIGNATORIES_PATH = path.join(__dirname, "..", "signatories", "signatories.json");

function fail(msg) {
  console.error("signatories validation failed:", msg);
  process.exit(1);
}

function main() {
  let raw;
  try {
    raw = fs.readFileSync(SIGNATORIES_PATH, "utf8");
  } catch (e) {
    fail(`Cannot read ${SIGNATORIES_PATH}: ${e.message}`);
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    fail(`Invalid JSON: ${e.message}`);
  }

  if (!data.signatories || !Array.isArray(data.signatories)) {
    fail("Missing or invalid 'signatories' array");
  }

  const seen = new Set();
  const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
  const URL_RE = /^https?:\/\//i;

  for (let i = 0; i < data.signatories.length; i++) {
    const s = data.signatories[i];
    const prefix = `signatories[${i}]`;

    if (!s.name || typeof s.name !== "string") {
      fail(`${prefix}: 'name' is required and must be a string`);
    }
    if (s.name.length > 120) {
      fail(`${prefix}: 'name' exceeds 120 characters`);
    }
    if (/<|>/.test(s.name)) {
      fail(`${prefix}: 'name' may not contain < or >`);
    }
    if (URL_RE.test(s.name)) {
      fail(`${prefix}: 'name' may not be a URL`);
    }

    if (!s.date_signed || typeof s.date_signed !== "string") {
      fail(`${prefix}: 'date_signed' is required and must be YYYY-MM-DD`);
    }
    if (!DATE_RE.test(s.date_signed)) {
      fail(`${prefix}: 'date_signed' must be YYYY-MM-DD`);
    }

    if (s.github !== undefined && s.github !== null) {
      const gh = String(s.github).trim();
      if (gh) {
        const key = gh.toLowerCase();
        if (seen.has(key)) {
          fail(`${prefix}: duplicate github '${s.github}' (case-insensitive)`);
        }
        seen.add(key);
        if (gh.length > 40) fail(`${prefix}: 'github' exceeds 40 characters`);
        if (!/^[a-zA-Z0-9_-]+$/.test(gh)) {
          fail(`${prefix}: 'github' must be alphanumeric, hyphens, underscores only`);
        }
      }
    }

    if (s.role !== undefined && String(s.role).length > 80) {
      fail(`${prefix}: 'role' exceeds 80 characters`);
    }
    if (s.organization !== undefined && String(s.organization).length > 120) {
      fail(`${prefix}: 'organization' exceeds 120 characters`);
    }
    if (s.country !== undefined && String(s.country).length > 60) {
      fail(`${prefix}: 'country' exceeds 60 characters`);
    }
    if (s.statement !== undefined && String(s.statement).length > 300) {
      fail(`${prefix}: 'statement' exceeds 300 characters`);
    }
    if (s.website !== undefined && String(s.website).length > 200) {
      fail(`${prefix}: 'website' exceeds 200 characters`);
    }
  }

  console.log(`Validated ${data.signatories.length} signatory(ies).`);
}

main();
