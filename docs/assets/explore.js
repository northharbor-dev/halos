/**
 * HALOS Explore — interactive prompt builder
 * Builds a HALOS-seeded prompt and generates deep links to AI chatbots.
 */
(function () {
  "use strict";

  const ROLES = [
    {
      id: "creator-marketplace",
      label: "Creator marketplace (SHRTTY-style)",
      context:
        "A creator-driven platform where human ideas come first and AI assists (e.g., print-on-demand, remix economy, community curation). Human creativity is the scarce resource; AI amplifies creators but never replaces them.",
    },
    {
      id: "developer",
      label: "Developer / Engineer",
      context: "Software development where AI assists with coding, review, and tooling. Human design and architectural decisions remain central.",
    },
    {
      id: "educator",
      label: "Educator",
      context: "Teaching or training where AI may assist with content, feedback, or exploration. Student authorship and learning outcomes are paramount.",
    },
    {
      id: "content-creator",
      label: "Content creator",
      context: "Creating written, visual, or multimedia content with AI assistance. Original ideas and voice stay central.",
    },
    {
      id: "startup-founder",
      label: "Startup founder",
      context: "Building a product or company where AI augments execution. Vision and strategic direction originate from humans.",
    },
    {
      id: "researcher",
      label: "Researcher",
      context: "Research where AI assists with literature, analysis, or synthesis. Attribution and provenance of ideas matter.",
    },
    {
      id: "designer",
      label: "Designer",
      context: "Design work where AI aids ideation or production. Human intent and authorship remain visible.",
    },
  ];

  const QUESTIONS = [
    {
      id: "humans-central",
      label: "How do I keep humans central?",
      question: "How do I ensure human creativity and judgment stay at the center?",
    },
    {
      id: "disclose",
      label: "What should I disclose when AI helps me create?",
      question: "What should I disclose when AI helps me create something?",
    },
    {
      id: "attribution",
      label: "How do I handle attribution and provenance?",
      question: "How do I handle attribution and provenance for human–AI collaboration?",
    },
    {
      id: "adopt",
      label: "How can I adopt HALOS in my project?",
      question: "How can I adopt HALOS in my project?",
    },
    {
      id: "ethical",
      label: "What ethical guardrails should I consider?",
      question: "What ethical guardrails should I consider?",
    },
    {
      id: "innovation",
      label: "How do I balance innovation with accountability?",
      question: "How do I balance innovation with accountability?",
    },
  ];

  const HALOS_BRIEF = `HALOS is an open framework for principled human–AI collaboration. Core ideas: Human primacy (humans are originators; agents assist). Ideas as assets (authorship and lineage matter). Attribution and provenance (contributions traceable; disclose agent involvement). Transparency (AI participation visible). Ethical guardrails (no harmful or deceptive uses; preserve human agency). Evolving standards, stable principles. Governance through proposal. Innovation with accountability. Key behaviors: Propose and suggest; yield when human's direction conflicts. Preserve attribution. Cite sources. Disclose when you contributed. When uncertain, favor human intent and accountability.`;

  const CHAR_LIMIT = 8000;

  const DEEP_LINKS = {
    claude: "https://claude.ai/new?q=",
    chatgpt: "https://chat.openai.com/?q=",
  };

  function $(sel, el) {
    return (el || document).querySelector(sel);
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
    const customWrap = $("#explore-role-custom-wrap");
    const customText = $("#explore-role-custom");

    if (roleSelect.value === "custom") {
      return customText.value.trim();
    }
    const role = ROLES.find((r) => r.id === roleSelect.value);
    return role ? role.context : "";
  }

  function getConcerns() {
    const checks = document.querySelectorAll("#explore-concerns input:checked");
    const custom = $("#explore-concerns-custom").value.trim();
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
    }
    roleSelect.addEventListener("change", toggle);
    toggle();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const context = getContext();
    if (!context) {
      const roleSelect = $("#explore-role");
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
