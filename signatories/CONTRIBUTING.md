# Contributing to the HALOS Signatory Registry

Become a HALOS signatory and show your support for principled human-AI collaboration.

## How to Add Yourself

1. **Fork** the [HALOS repository](https://github.com/northharbor-dev/halos).
2. **Edit** `signatories/signatories.json` and add your entry to the `signatories` array.
3. **Open a Pull Request**.
4. A maintainer will review and merge. Once merged, you are a HALOS signatory.

## Entry Format

**Required:**
- `name` — Your name
- `date_signed` — Date in `YYYY-MM-DD` format (use today's date)

**Optional:**
- `github` — Your GitHub username (for verification; must be unique)
- `role` — Profession or role (e.g. Software Engineer, Teacher)
- `organization` — Company, institution, or "Independent" (freeform)
- `country` — Country
- `website` — Your website URL
- `statement` — Custom statement of support. If omitted, the default is used: *"I support the HALOS principles for transparent and ethical human-AI collaboration."* You may customize to reflect your support in your own words.

## Example Entry (minimal)

```json
{
  "name": "Jane Doe",
  "date_signed": "2026-03-14",
  "github": "janedoe"
}
```

## Example Entry (with optional fields)

```json
{
  "name": "Jane Doe",
  "role": "Software Engineer",
  "organization": "Independent",
  "country": "USA",
  "github": "janedoe",
  "statement": "I support the HALOS principles for transparent and ethical human-AI collaboration.",
  "date_signed": "2026-03-14"
}
```

## Duplicate Policy

Entries are **rejected** if the `github` username (case-insensitive) already exists in the registry. Each GitHub handle may appear only once. If you do not provide `github`, this check does not apply.

## Requesting Removal

To remove your entry from the registry, open a Pull Request that deletes your entry from `signatories/signatories.json`. A maintainer will review and merge.

## Questions

Contact [halos@northharbor.dev](mailto:halos@northharbor.dev) with questions.
