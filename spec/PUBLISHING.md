# HALOS Spec — Publication Checklist

When publishing a new spec version after a proposal is accepted:

1. **Proposal status** — Proposal reaches `under-review`; author updates `spec/core.json` and/or `spec/extensions/` per the accepted proposal.

2. **Manifest** — Update `spec/manifest.json`:
   - Bump `version` (SemVer)
   - Add proposal ID to `proposals` array

3. **Changelog** — Append entry to `spec/changelog.json` with version, date, changes, proposal refs.

4. **Generate** — Run `node scripts/generate-spec.js` from `halos/` to produce `spec/spec.md` and `spec/CHANGELOG.md`.

5. **CI** — Push PR. CI must pass (schema validation, immutability, generate, conformance).

6. **Merge** — Maintainer reviews; if satisfied and CI passes, accepts and merges.

7. **Post-merge** — Tag release (e.g. `git tag v1.0.0`) and update proposal file: set `status: accepted`, add Decision outcome and date.

---

## Spec Immutability

**Published versions cannot be changed.** Once a version appears in `changelog.json`, its spec content (manifest, core, changelog entries) is immutable. Changes require a new SemVer bump.

**Local pre-push check:**

```bash
node scripts/validate-spec-immutability.js origin/main
```

Run before pushing to catch issues early. CI runs this automatically.

---

## SemVer

- **Major** — Breaking changes (e.g. remove/rename requirements)
- **Minor** — Additive changes (new requirements, extensions)
- **Patch** — Fixes, clarifications, non-breaking edits

---

**Validation gate:** No spec change may be merged unless CI passes. See [.github/workflows/spec-validate.yml](../.github/workflows/spec-validate.yml).
