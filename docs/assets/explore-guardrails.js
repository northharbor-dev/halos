/**
 * HALOS Explore — guardrail logic (sanitize, blocklist, validation)
 * Shared by explore.js (browser) and unit tests (Node).
 */
(function (exports) {
  "use strict";

  const CUSTOM_ROLE_MAX = 500;
  const CUSTOM_CONCERNS_MAX = 300;
  const CUSTOM_ROLE_MIN = 15;

  const BLOCKLIST = [
    /\bignore\s+(all\s+)?(previous|prior|above)\s+instructions?\b/i,
    /\bdisregard\s+(your\s+)?(instructions?|rules)\b/i,
    /\bforget\s+(your\s+)?(instructions?|rules)\b/i,
    /\bjailbreak\b/i,
    /\bdo\s+anything\s+now\b/i,
    /\bDAN\s+mode\b/i,
    /\bno\s+(longer\s+)?bound\b/i,
  ];

  function sanitize(text) {
    if (!text || typeof text !== "string") return "";
    return text
      .trim()
      .replace(/\n{3,}/g, "\n\n")
      .replace(/[ \t]+/g, " ");
  }

  function isBlocked(text) {
    if (!text) return false;
    return BLOCKLIST.some((re) => re.test(text));
  }

  function isLowQuality(text, minLen) {
    if (!text || text.length < minLen) return true;
    const withoutSpaces = text.replace(/\s/g, "");
    if (withoutSpaces.length < minLen * 0.5) return true;
    const sameChar = /^(.)\1{10,}$/;
    if (sameChar.test(withoutSpaces)) return true;
    return false;
  }

  Object.assign(exports, {
    sanitize,
    isBlocked,
    isLowQuality,
    CUSTOM_ROLE_MAX,
    CUSTOM_CONCERNS_MAX,
    CUSTOM_ROLE_MIN,
  });
})(
  typeof module !== "undefined" && module.exports
    ? module.exports
    : (typeof window !== "undefined" && (window.HALOS_EXPLORE_GUARDRAILS = {}))
);
