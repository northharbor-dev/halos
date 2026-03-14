/**
 * HALOS Explore — interactive prompt builder
 * Builds a HALOS-seeded prompt and generates deep links to AI chatbots.
 */
(function () {
  "use strict";

  const ROLES = [
    {
      id: "lifelong-learners",
      label: "Lifelong Learners",
      context:
        "People who continuously learn and adapt, using AI to explore, deepen understanding, and stay curious. Human curiosity and discernment guide what and how they learn.",
    },
    {
      id: "everyday-professionals",
      label: "Everyday Professionals",
      context:
        "People working in varied roles—administrative, healthcare, legal, finance—where AI may assist with tasks, drafting, or analysis. Human judgment and responsibility remain central.",
    },
    {
      id: "creators-innovators",
      label: "Creators & Innovators",
      context:
        "Artists, writers, inventors, and entrepreneurs who use AI to extend creativity and execution. Original ideas and human vision stay at the center.",
    },
    {
      id: "leaders-decision-makers",
      label: "Leaders & Decision-Makers",
      context:
        "Executives, managers, and policymakers who rely on AI for insights and support. Human accountability for decisions stays paramount.",
    },
    {
      id: "community-anchors",
      label: "Community Anchors",
      context:
        "Educators, organizers, caregivers, and volunteers who build and hold communities together. AI may assist; human presence and trust remain irreplaceable.",
    },
    {
      id: "tech-builders",
      label: "Tech Builders",
      context:
        "Developers, engineers, and technologists building systems where AI assists with code, design, or operations. Human design and architectural intent stay central.",
    },
    {
      id: "retirees",
      label: "Retirees",
      context:
        "People in or nearing retirement who engage with AI for learning, creativity, connection, or support. Human choice and agency over how AI enters their lives remain key.",
    },
  ];

  const QUESTIONS = [
    {
      id: "ethical-ai-use",
      label: "Ethical AI Use",
      question: "How do I ensure ethical AI use in my context?",
    },
    {
      id: "transparency-trust",
      label: "Transparency & Trust",
      question: "How do I build transparency and trust when AI is involved?",
    },
    {
      id: "human-oversight",
      label: "Human Oversight & Control",
      question: "How do I maintain human oversight and control over AI-assisted outcomes?",
    },
    {
      id: "impact-jobs-creativity",
      label: "Impact on Jobs & Creativity",
      question: "What impact does AI have on jobs and human creativity, and how do I navigate it?",
    },
    {
      id: "fairness-inclusion",
      label: "Fairness & Inclusion",
      question: "How do I promote fairness and inclusion when using AI?",
    },
    {
      id: "power-dynamics",
      label: "Power Dynamics",
      question: "How do power dynamics change with AI, and how do I address them?",
    },
  ];

  const HALOS_BRIEF = `HALOS is an open framework for principled human–AI collaboration. Core ideas: Human primacy (humans are originators; agents assist). Ideas as assets (authorship and lineage matter). Attribution and provenance (contributions traceable; disclose agent involvement). Transparency (AI participation visible). Ethical guardrails (no harmful or deceptive uses; preserve human agency). Evolving standards, stable principles. Governance through proposal. Innovation with accountability. Key behaviors: Propose and suggest; yield when human's direction conflicts. Preserve attribution. Cite sources. Disclose when you contributed. When uncertain, favor human intent and accountability.`;

  const CHAR_LIMIT = 8000;
  const G = typeof window !== "undefined" && window.HALOS_EXPLORE_GUARDRAILS;
  const {
    sanitize: _sanitize,
    isBlocked: _isBlocked,
    isLowQuality: _isLowQuality,
    CUSTOM_ROLE_MAX: _CR_MAX,
    CUSTOM_CONCERNS_MAX: _CC_MAX,
    CUSTOM_ROLE_MIN: _CR_MIN,
  } = G || {};
  const sanitize = _sanitize || ((t) => (t && typeof t === "string" ? t.trim().replace(/\n{3,}/g, "\n\n").replace(/[ \t]+/g, " ") : ""));
  const isBlocked = _isBlocked || (() => false);
  const isLowQuality = _isLowQuality || ((t, m) => !t || t.length < m);
  const CUSTOM_ROLE_MAX = _CR_MAX ?? 500;
  const CUSTOM_CONCERNS_MAX = _CC_MAX ?? 300;
  const CUSTOM_ROLE_MIN = _CR_MIN ?? 15;

  const DEEP_LINKS = {
    claude: "https://claude.ai/new?q=",
    chatgpt: "https://chat.openai.com/?q=",
  };

  function $(sel, el) {
    return (el || document).querySelector(sel);
  }

  function showValidationError(msg, target) {
    const existing = $("#explore-validation-error");
    if (existing) existing.remove();
    const err = document.createElement("p");
    err.id = "explore-validation-error";
    err.className = "explore-guardrail-error";
    err.textContent = msg;
    err.setAttribute("role", "alert");
    const form = $("#explore-form");
    if (form) {
      form.insertBefore(err, form.firstChild);
      if (target) {
        target.focus();
        target.setAttribute("aria-invalid", "true");
      }
    }
    return err;
  }

  function clearValidationError() {
    const err = $("#explore-validation-error");
    if (err) err.remove();
    $("#explore-role-custom")?.removeAttribute("aria-invalid");
    $("#explore-concerns-custom")?.removeAttribute("aria-invalid");
  }

  function buildPrompt(context, concerns) {
    const concernsBlock =
      concerns && concerns.trim()
        ? `## What they want to explore\n${concerns.trim()}`
        : "## What they want to explore\n(General exploration of how HALOS applies to their context)";

    return `You are helping explore how HALOS (Human-Agent Living Operating System) applies to a specific context.

## HALOS in brief
${HALOS_BRIEF}

## User's context
${context.trim()}

${concernsBlock}

## Your task
Help them think through how HALOS principles apply. Ask clarifying questions. Suggest practical applications. Favor choices that preserve human intent and accountability.

## Programmatic reference (for agents/tools)
- Manifest (version, core IDs, related specs): https://halos.northharbor.dev/spec/manifest.json
- Core requirements (id, title, description per principle): https://halos.northharbor.dev/spec/core.json
- Human-readable principles: https://halos.northharbor.dev/principles.html`;
  }

  function getContext() {
    const roleSelect = $("#explore-role");
    const customText = $("#explore-role-custom");

    if (roleSelect.value === "custom") {
      return sanitize(customText?.value || "").slice(0, CUSTOM_ROLE_MAX);
    }
    const role = ROLES.find((r) => r.id === roleSelect.value);
    return role ? role.context : "";
  }

  function getConcerns() {
    const checks = document.querySelectorAll("#explore-concerns input:checked");
    const rawCustom = $("#explore-concerns-custom")?.value || "";
    const custom = sanitize(rawCustom).slice(0, CUSTOM_CONCERNS_MAX);
    const fromChecks = Array.from(checks)
      .map((c) => {
        const q = QUESTIONS.find((x) => x.id === c.value);
        return q ? q.question : null;
      })
      .filter(Boolean);
    const parts = [...fromChecks];
    if (custom) parts.push(custom);
    return parts.join("\n");
  }

  function renderConcerns() {
    const container = $("#explore-concerns");
    if (!container) return;
    container.innerHTML = "";
    QUESTIONS.forEach((q) => {
      const label = document.createElement("label");
      label.className = "explore-option";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "concern";
      input.value = q.id;
      input.id = `explore-concern-${q.id}`;
      const span = document.createElement("span");
      span.textContent = q.label;
      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });
  }

  function setupRoleToggle() {
    const roleSelect = $("#explore-role");
    const customWrap = $("#explore-role-custom-wrap");
    if (!roleSelect || !customWrap) return;

    function toggle() {
      customWrap.hidden = roleSelect.value !== "custom";
      updateCharCount("#explore-role-custom", "#explore-role-count");
    }
    roleSelect.addEventListener("change", toggle);
    toggle();
  }

  function updateCharCount(textareaSel, countSel) {
    const ta = $(textareaSel);
    const el = $(countSel);
    if (!ta || !el || !ta.dataset.max) return;
    const len = ta.value.length;
    const max = parseInt(ta.dataset.max, 10);
    if (len > 0) {
      el.textContent = len + " / " + max;
      el.hidden = false;
    } else {
      el.textContent = "";
      el.hidden = true;
    }
  }

  function setupCharCounts() {
    const roleCustom = $("#explore-role-custom");
    const concernsCustom = $("#explore-concerns-custom");
    ["input", "change"].forEach((ev) => {
      roleCustom?.addEventListener(ev, () => updateCharCount("#explore-role-custom", "#explore-role-count"));
      concernsCustom?.addEventListener(ev, () => updateCharCount("#explore-concerns-custom", "#explore-concerns-count"));
    });
  }

  function setupInputListeners() {
    [$("#explore-role-custom"), $("#explore-concerns-custom")].forEach((el) => {
      el?.addEventListener("input", () => {
        el.removeAttribute("aria-invalid");
        clearValidationError();
      });
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    clearValidationError();

    const honeypot = $("#explore-website");
    if (honeypot && honeypot.value) return;

    const roleSelect = $("#explore-role");
    const customRoleText = $("#explore-role-custom");
    const rawContext =
      roleSelect.value === "custom"
        ? (customRoleText?.value || "").trim()
        : "";

    if (roleSelect.value === "custom") {
      if (rawContext.length < CUSTOM_ROLE_MIN) {
        showValidationError(
          `Please describe your role in at least ${CUSTOM_ROLE_MIN} characters.`,
          customRoleText
        );
        return;
      }
      if (rawContext.length > CUSTOM_ROLE_MAX) {
        showValidationError(
          `Role description must be ${CUSTOM_ROLE_MAX} characters or fewer.`,
          customRoleText
        );
        return;
      }
      if (isBlocked(rawContext)) {
        showValidationError(
          "Your input contains text that can't be used in this tool. Please describe your role and context in your own words.",
          customRoleText
        );
        return;
      }
      if (isLowQuality(rawContext, CUSTOM_ROLE_MIN)) {
        showValidationError(
          "Please provide a brief, meaningful description of your role or context.",
          customRoleText
        );
        return;
      }
    }

    const rawConcerns = ($("#explore-concerns-custom")?.value || "").trim();
    if (rawConcerns.length > CUSTOM_CONCERNS_MAX) {
      showValidationError(
        `Additional concerns must be ${CUSTOM_CONCERNS_MAX} characters or fewer.`,
        $("#explore-concerns-custom")
      );
      return;
    }
    if (rawConcerns && isBlocked(rawConcerns)) {
      showValidationError(
        "Your input contains text that can't be used in this tool. Please phrase your concerns in your own words.",
        $("#explore-concerns-custom")
      );
      return;
    }

    const context = getContext();
    if (!context) {
      roleSelect?.focus();
      roleSelect?.reportValidity?.();
      return;
    }
    const concerns = getConcerns();
    const prompt = buildPrompt(context, concerns);

    if (prompt.length > CHAR_LIMIT) {
      const promptEl = $("#explore-prompt");
      if (promptEl) promptEl.setAttribute("aria-describedby", "explore-char-warning");
      const existing = $("#explore-char-warning");
      if (existing) existing.remove();
      const warn = document.createElement("p");
      warn.id = "explore-char-warning";
      warn.className = "explore-char-warning";
      warn.textContent = `Prompt is ${prompt.length} characters. Some AI tools limit URL length (~10k). Consider shortening your context.`;
      $("#explore-output-section")?.insertBefore(warn, $("#explore-output-content"));
    }

    const promptEl = $("#explore-prompt");
    const outputSection = $("#explore-output-section");
    const linksContainer = $("#explore-links");
    const chatbotSelect = $("#explore-chatbot");

    if (promptEl) promptEl.value = prompt;
    if (outputSection) outputSection.hidden = false;

    if (linksContainer) {
      linksContainer.innerHTML = "";
      const chatbot = chatbotSelect?.value || "copy";
      if (chatbot === "copy") {
        linksContainer.textContent = "";
      } else {
        const base = DEEP_LINKS[chatbot];
        if (base) {
          const url = base + encodeURIComponent(prompt);
          const a = document.createElement("a");
          a.href = url;
          a.className = "explore-link";
          a.rel = "noopener noreferrer";
          a.target = "_blank";
          a.textContent = chatbot === "claude" ? "Open in Claude" : "Open in ChatGPT";
          linksContainer.appendChild(a);
        }
      }
    }

    outputSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function setupCopy() {
    const btn = $("#explore-copy");
    const textarea = $("#explore-prompt");
    if (!btn || !textarea) return;

    btn.addEventListener("click", () => {
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      try {
        navigator.clipboard.writeText(textarea.value);
        btn.textContent = "Copied!";
        btn.setAttribute("aria-label", "Copied to clipboard");
        setTimeout(() => {
          btn.textContent = "Copy prompt";
          btn.removeAttribute("aria-label");
        }, 2000);
      } catch (_) {
        btn.textContent = "Select and copy manually";
        setTimeout(() => {
          btn.textContent = "Copy prompt";
        }, 2000);
      }
    });
  }

  function init() {
    renderConcerns();
    setupRoleToggle();
    setupCharCounts();
    setupInputListeners();
    setupCopy();
    const form = $("#explore-form");
    if (form) form.addEventListener("submit", handleSubmit);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
