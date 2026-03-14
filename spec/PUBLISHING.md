# HALOS Spec — Publication Checklist

When publishing a new spec version after a proposal is accepted:

1. **Proposal status** — Proposal reaches `under-review`; author updates `spec/core.json` and/or `spec/extensions/` per the accepted proposal.

2. **Manifest** — Update `spec/manifest.json`:
   - Bump `version` (SemVer)
   - Add proposal ID to `proposals` array

3. **Changelog** — Append entry to `spec/changelog.json` with version, date, changes, proposal refs.

4. **Generate** — Run `node scripts/generate-spec.js` from `halos/` to produce `spec/spec.md` and `spec/CHANGELOG.md`.

5. **CI** — Push PR. CI must pass (schema validation, generate, conformance).

6. **Merge** — Maintainer reviews; if satisfied and CI passes, accepts and merges.

7. **Post-merge** — Tag release (e.g. `git tag v1.0.0`) and update proposal file: set `status: accepted`, add Decision outcome and date.

---

**Validation gate:** No spec change may be merged unless CI passes. See [.github/workflows/spec-validate.yml](../.github/workflows/spec-validate.yml).
