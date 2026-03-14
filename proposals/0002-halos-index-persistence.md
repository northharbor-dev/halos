---
id: "0002"
status: proposed
type: specification
date: "2026-03-15"
author: "halos"
affects: extensions
---

# 0002 — HALOS Index: Persist Anonymized Roles and Concerns

**Status:** proposed  
**Type:** specification  
**Date:** 2026-03-15  
**Author:** halos

## Summary

This proposal specifies persisting anonymized roles and concerns from the HALOS Explore tool to a persistent data store. The data will power trend analysis over time—understanding what different communities and personas feel about AI-related topics. Data integrity is paramount. All reasonable anti-gaming measures will be applied so HALOS remains a forum of openness and trust. The collected data will be publicly available as the **HALOS Index** via interactive charts, downloadable datasets, and an event-based pub/sub stream.

## Motivation

HALOS Explore already captures valuable signal: users choose roles (Lifelong Learners, Tech Builders, etc.) and concerns (Ethical AI Use, Impact on Jobs, etc.). Today that signal is ephemeral—used only to generate a prompt. By persisting it in anonymized form, we can:

1. **Understand the landscape** — What concerns matter most to educators vs. developers vs. retirees? How does that shift over time?
2. **Inform the framework** — Community sentiment can guide principle refinement, new prompts, and documentation priorities.
3. **Build trust through transparency** — Making the data public demonstrates HALOS’s commitment to openness. The Index is not a black box; it is a shared resource.
4. **Enable research** — Downloadable datasets and streams allow academics, journalists, and practitioners to study AI attitudes across populations.

To serve these goals, data must be trustworthy. Gaming (bots, automated influence campaigns, spam) would poison the Index and undermine trust. This proposal balances openness with rigor.

## Proposal

### 1. Data Model (Anonymized)

Each submission is a **record** with:

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Opaque record ID (no correlation to user) |
| `ts` | ISO 8601 | Submission timestamp (UTC) |
| `role` | enum or normalized string | Preset role ID (e.g. `lifelong-learners`) or normalized custom role (after sanitization per [0001](../proposals/0001-explore-input-sanitization.md)) |
| `concerns` | array | Preset concern IDs + normalized custom concern strings |
| `geo_bucket` | optional | Coarse region only (e.g. country or `unknown`) — never precise location |
| `consent` | boolean | User explicitly opted in to contribute to the Index |

**Excluded:** No IP addresses in analyzable storage. No cookies, fingerprint, or session ID that could re-identify. No free-form text beyond sanitized role/concern snippets.

### 2. Data Integrity

- **Schema enforcement** — Strict validation at ingest; reject malformed or out-of-range data.
- **Sanitization** — All text passes through the guardrails from [0001](../proposals/0001-explore-input-sanitization.md) (allowlist, Unicode NFC, blocklist, length limits) before persistence.
- **Immutable append** — Records are append-only. No updates or deletes (except for legal/compliance requirements, which would be documented).
- **Integrity checks** — Periodic validation (checksums, row counts, anomaly detection) to detect corruption or tampering.

### 3. Anti-Gaming and Bot Mitigation

| Measure | Purpose |
|---------|---------|
| **Rate limiting** | Cap submissions per IP (or per session) within a time window. Prevents bulk injection. |
| **Honeypot** | Already in Explore form; reject submissions that fill it. |
| **Blocklist** | Per 0001; reject prompt-injection and known-abuse phrases. |
| **Low-quality detection** | Per 0001; reject gibberish, repeated chars, too-short custom text. |
| **CAPTCHA / Turnstile** | Optional challenge for suspicious patterns (e.g. high rate, failed honeypot). Use privacy-preserving options (e.g. Cloudflare Turnstile, hCaptcha). |
| **Proof of work** | Optional: require a light client-side computation before submit to slow automated scripts. |
| **WAF / DDoS protection** | Per 0001 §6; protect ingestion endpoint from floods and known-bad traffic. |
| **Audit and anomaly review** | Monitor for statistical anomalies (e.g. sudden spike of one role from one geo bucket); flag for human review. |

Implementation should apply all **reasonable** measures; some (e.g. CAPTCHA) may be reserved for high-abuse scenarios to preserve UX.

### 4. Consent and Transparency

- **Explicit opt-in** — Users must actively consent (e.g. checkbox) before their submission is included in the Index. No silent collection.
- **Clear disclosure** — Before consent: explain what is collected (anonymized role + concerns + coarse region + timestamp), how it is used (trend analysis, public Index), and where it is published.
- **Withdrawal** — Define a process for users to request removal of their contribution (e.g. by record ID if they saved it, or by approximate timestamp + role/concerns if we can support it without re-identification). Document limitations.

### 5. HALOS Index — Public Data Access

The Index is **public by design**. Access modes:

| Mode | Description |
|------|-------------|
| **Interactive charts** | Web-based visualizations: role × concern heatmaps, time series, geographic distribution, trend lines. Filters by date range, role, concern. |
| **Downloadable datasets** | Aggregated or anonymized record-level data as CSV/JSON/Parquet. Versioned snapshots (e.g. monthly). Clear schema and license (e.g. CC-BY). |
| **Event-based pub/sub stream** | Real-time stream of new submissions (anonymized) for subscribers. Options: Webhooks, MQTT, Server-Sent Events, or similar. Useful for dashboards, research pipelines, third-party analysis. |

All access methods must return only anonymized, aggregated, or otherwise de-identified data. No re-identification possible from published outputs.

### 6. Architecture Implications

- **Backend required** — Explore is currently static; persistence requires an ingestion API (e.g. serverless function, small backend service). Proposes a minimal API: `POST /api/index/contribute` with JSON body, returns record ID and confirmation.
- **Storage** — Persistent store: PostgreSQL, SQLite (e.g. via LiteFS or sync), or managed DB (PlanetScale, Supabase, etc.). Choice should prioritize integrity, availability, and operational simplicity.
- **Static site integration** — Explore form calls the ingestion API after successful client-side validation and consent. Non-blocking (fire-and-forget or async) so prompt generation is not delayed.

## Alignment with Principles

- **Principle 3 (Attribution and Provenance)** — Submissions are anonymized for aggregate analysis, but the Index itself has clear provenance: data source, collection method, and update frequency are documented.
- **Principle 4 (Transparency)** — Collection is disclosed. Data is public. No hidden tracking.
- **Principle 5 (Ethical Guardrails)** — Consent, anonymization, and anti-gaming ensure the Index is not used to harm, deceive, or manipulate. Human agency is preserved; we do not collect without clear purpose and consent.
- **Principle 8 (Innovation with Accountability)** — The Index is an innovation in understanding AI sentiment. Accountability comes from transparent methods, public data, and documented integrity measures.

## Alternatives Considered

| Alternative | Why Not |
|-------------|---------|
| **Third-party analytics only** | Google Analytics, etc. lock data behind proprietary tools, lack the semantic structure (roles, concerns), and raise privacy concerns. We want ownership and openness. |
| **No persistence** | Preserves simplicity but loses the opportunity to understand community sentiment and to demonstrate transparency through public data. |
| **Identified submissions** | Would enable richer analysis but violates anonymization and increases re-identification risk. Not aligned with "forum of openness and trust." |
| **Aggregates only, no record-level** | Simplifies storage but limits research flexibility and stream use cases. Anonymized record-level with strict access controls can support both aggregates and downloads. |
| **Deferred until backend exists** | Valid staging option. This proposal defines the spec so that when a backend is added, the contract is clear. |

## Open Questions

1. **Geo granularity** — Country-level? Region? Or omit entirely to maximize anonymity? Recommendation: country or `unknown` only; document tradeoff.
2. **Retention** — How long are records kept? Indefinite supports long-term trend analysis; limited retention reduces liability. Propose 5-year default with documented extension.
3. **CAPTCHA threshold** — When to trigger? After N failed honeypots? After rate limit? Avoid degrading UX for legitimate users.
4. **Stream auth** — Pub/sub: open or authenticated? Rate limits for stream consumers?
5. **Withdrawal UX** — How does a user who consented later request removal? Save a withdraw token at submit? Document limitations (e.g. cannot withdraw from historical aggregates already published).
6. **Licensing** — CC-BY, ODC-BY, or public domain for downloaded datasets? Align with HALOS’s open stance.

## References

- [0001 — Strengthen Explore Tool Input Sanitization](0001-explore-input-sanitization.md)
- Current Explore implementation: [docs/assets/explore.js](../docs/assets/explore.js), [docs/assets/explore-guardrails.js](../docs/assets/explore-guardrails.js)
- HALOS Principles: [docs/principles.md](../docs/principles.md)
- OWASP: [Data Protection Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Data_Protection_Cheat_Sheet.html)

---

## Decision

**Outcome:** *(pending)*  
**Date:** —  
**Notes:** —
