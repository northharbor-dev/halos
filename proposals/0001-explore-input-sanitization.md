---
id: "0001"
status: proposed
type: specification
date: "2026-03-15"
author: "halos"
affects: extensions
---

# 0001 — Strengthen Explore Tool Input Sanitization

**Status:** proposed  
**Type:** specification  
**Date:** 2026-03-15  
**Author:** halos

## Summary

This proposal recommends additional sanitization measures for the HALOS Explore tool’s custom role and concerns inputs. It builds on the existing guardrails (length limits, blocklist, honeypot, low-quality detection) by adding character-set restrictions, Unicode normalization, optional HTML/script stripping, and deployment-level options such as a Web Application Firewall (WAF). The goal is to further reduce abuse, prompt-injection, and confusion attacks while preserving legitimate use.

## Motivation

The Explore tool allows visitors to describe their role and concerns in free text. That openness is valuable but creates surface area for abuse:

1. **Confusion attacks** — Zero-width joiners, homoglyphs, and lookalike Unicode can disguise blocked phrases or evade detection.
2. **Control characters** — Null bytes, newlines in odd places, or other control chars can cause unexpected behavior downstream (e.g., in URLs or when pasted into AI tools).
3. **Script/HTML injection** — Although the tool does not render input as HTML, defense-in-depth suggests stripping markup to prevent future XSS if the architecture changes.
4. **Unicode normalization** — Different representations of the same character (e.g., é as U+00E9 vs. e + combining acute) can be used to evade blocklist checks or create inconsistent behavior.

The current guardrails (blocklist, length limits, honeypot, low-quality checks) already mitigate many abuse patterns. This proposal extends that defense without significantly impacting legitimate use.

## Proposal

### 1. Character-Set Allowlist (Recommended)

Restrict input to a safe subset of Unicode:

- **Letters** — All Unicode letter categories (Ll, Lu, Lt, Lm, Lo) and common scripts (Latin, Cyrillic, CJK, Arabic, etc.)
- **Numbers** — Nd category
- **Punctuation** — Common punctuation (period, comma, apostrophe, hyphen, question mark, exclamation, colon, semicolon, parentheses, brackets, quotes)
- **Whitespace** — Space, tab, newline
- **Exclude** — Control characters (Cc, Cf, Cn in control ranges), zero-width characters (U+200B–U+200D, U+FEFF, U+2060), private-use and surrogate ranges

Implementation: define an allowlist regex or a “strip disallowed” pass that removes or replaces disallowed codepoints before other validation.

### 2. Unicode Normalization (Recommended)

Apply NFC (Canonical Composition) normalization to all user input before sanitize, blocklist checks, and prompt building. This ensures:

- Consistent comparison against blocklist patterns
- Predictable behavior across different input methods (keyboard, paste, IME)
- Reduced homograph/confusion surface

Implementation: `text.normalize('NFC')` at the start of `sanitize` (or equivalent in the target environment).

### 3. HTML/Script Stripping (Optional)

Add a pass that removes or escapes:

- `<script>`, `</script>`, `<iframe>`, `javascript:`, `onclick=`, `onerror=`, etc.
- Angle brackets `<` and `>` if they appear to wrap tags
- Or replace `<` and `>` with harmless equivalents

This is defense-in-depth; the Explore tool currently does not render user input as HTML. Implement if the tool (or its output) is ever used in an HTML context.

### 4. Maximum Line Length (Optional)

Cap each line at a reasonable length (e.g., 200 characters) and truncate or reject lines that exceed it. Reduces risk of overflow or pathological inputs in downstream systems.

### 5. Blocklist Maintainability

- Document the blocklist in a separate, versioned file (e.g., `explore-blocklist.json` or `explore-blocklist.txt`) so patterns can be updated without code changes.
- Add a process for reporting abuse patterns and updating the blocklist through the proposal process or a lightweight review.

### 6. Web Application Firewall (WAF) — Deployment-Level

Protect the site behind a Web Application Firewall at the edge or CDN layer. A WAF inspects requests before they reach the application and can:

- **Block known abuse patterns** — Request bodies containing prompt-injection phrases, script fragments, or suspicious payloads
- **Rate limit** — Throttle requests per IP or per session to limit automated abuse
- **Filter malicious traffic** — Detect and block bots, scrapers, or known bad actors
- **Log and alert** — Surface attempted abuse for analysis and blocklist tuning

**Options:** Cloudflare (free tier includes WAF rules), AWS WAF, Fastly, or similar. HALOS is served as static files (e.g., GitHub Pages, Netlify); placing a WAF/CDN in front adds a layer of defense before any JavaScript executes.

**Note:** WAF rules operate on HTTP requests. Because the Explore form submits client-side (no traditional form POST to a server) and builds prompts/URLs in the browser, a WAF sees only page loads and asset fetches. To benefit from WAF request inspection, the architecture would need to change—e.g., a backend endpoint that receives form data—or the WAF would protect against other threats (DDoS, known-bad paths, bot traffic) rather than form payload abuse. Documenting WAF as an option is still valuable for future architectures (e.g., if Explore gains an API) or for defense-in-depth at the deployment level.

## Alignment with Principles

- **Principle 5 (Ethical Guardrails)** — Stronger sanitization supports “no harmful uses” and helps prevent prompt-injection and deception.
- **Principle 4 (Transparency)** — Sanitization rules should be documented and visible so users understand what is allowed.
- **Principle 8 (Innovation with Accountability)** — These measures balance openness with accountability; they constrain abuse without removing meaningful expression.

## Alternatives Considered

| Alternative | Why Not |
|-------------|---------|
| **Server-side validation only** | Explore is a static site; no server. Client-side guardrails are the primary defense. Server-side could be added if Explore gains a backend. |
| **Strict allowlist (ASCII-only)** | Would exclude legitimate multilingual input (e.g., “Éducateur,” “研究者”). A Unicode letter allowlist preserves accessibility. |
| **No additional sanitization** | Current measures are good but not sufficient against Unicode confusion and control-character edge cases. |
| **ML-based abuse detection** | Overkill for a lightweight tool; adds complexity and potential false positives. Rule-based approaches are clearer and auditable. |
| **WAF as sole defense** | WAF protects at the edge but cannot inspect Explore's client-side form payloads unless there is a backend. WAF is complementary—useful for DDoS, bots, and future API—not a replacement for client-side guardrails. |

## Open Questions

1. **Scope of allowlist** — Should we allow emoji (e.g., “👩‍🏫 Teacher”)? They are rarely necessary for role description but may be used. Recommend: allow common emoji (e.g., Smileys, People) but exclude symbols that could be used for obfuscation.
2. **Logging/reporting** — Should blocked submissions be logged (anonymized) for blocklist improvement? That would require a backend or third-party service.
3. **User feedback** — When input is rejected or altered by sanitization, should we show a specific message (e.g., “Some characters were removed”) or a generic “Please revise your input”?

## References

- Current implementation: [docs/assets/explore-guardrails.js](../docs/assets/explore-guardrails.js)
- Unit tests: [test/explore-guardrails.test.js](../test/explore-guardrails.test.js)
- Unicode normalization: [Unicode Standard Annex #15](https://unicode.org/reports/tr15/)
- OWASP Input Validation: [Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

---

## Decision

**Outcome:** *(pending)*  
**Date:** —  
**Notes:** —
