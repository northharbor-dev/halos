/**
 * HALOS Supporters — pageable signatory registry
 * Loads signatories.json, renders paginated list (25 per page), filters.
 */
(function () {
  "use strict";

  const PAGE_SIZE = 25;
  const DEFAULT_STATEMENT = "I support the HALOS principles for transparent and ethical human-AI collaboration.";
  const FOUNDING_COUNT = 25;
  const EARLY_COUNT = 100;

  let allSignatories = [];
  let filtered = [];
  let currentPage = 1;

  function getBadgeTier(index) {
    if (index < 1) return null;
    if (index <= FOUNDING_COUNT) return "founding";
    if (index <= EARLY_COUNT) return "early";
    return null;
  }

  function renderSignatory(s, index) {
    const tier = getBadgeTier(index);
    const statement = s.statement || DEFAULT_STATEMENT;
    const tierLabel = tier === "founding" ? "Founding Supporter" : tier === "early" ? "Early Supporter" : null;

    let html = '<article class="supporters-card" role="listitem">';
    html += '<div class="supporters-card__header">';
    html += `<strong class="supporters-card__name">${escapeHtml(s.name)}</strong>`;
    if (tierLabel) {
      html += `<span class="supporters-card__badge supporters-card__badge--${tier}">${escapeHtml(tierLabel)}</span>`;
    }
    html += "</div>";
    if (s.role) html += `<p class="supporters-card__role">${escapeHtml(s.role)}</p>`;
    if (s.organization) html += `<p class="supporters-card__org">${escapeHtml(s.organization)}</p>`;
    if (s.country) html += `<p class="supporters-card__country">${escapeHtml(s.country)}</p>`;
    html += `<p class="supporters-card__statement">${escapeHtml(statement)}</p>`;
    html += '<div class="supporters-card__links">';
    if (s.github) html += `<a href="https://github.com/${escapeHtml(s.github)}" rel="noopener noreferrer">GitHub</a>`;
    if (s.website) html += ` <a href="${escapeHtml(s.website)}" rel="noopener noreferrer">Website</a>`;
    html += "</div>";
    html += "</article>";

    return html;
  }

  function escapeHtml(s) {
    if (!s) return "";
    const div = document.createElement("div");
    div.textContent = s;
    return div.innerHTML;
  }

  function applyFilters() {
    const roleFilter = document.getElementById("supporters-filter-role")?.value || "";
    const orgFilter = document.getElementById("supporters-filter-org")?.value || "";
    const countryFilter = document.getElementById("supporters-filter-country")?.value || "";
    const foundingOnly = document.getElementById("supporters-filter-founding")?.checked ?? false;

    filtered = allSignatories.filter((s, i) => {
      const index = i + 1;
      if (foundingOnly && index > FOUNDING_COUNT) return false;
      if (roleFilter && (s.role || "").toLowerCase() !== roleFilter.toLowerCase()) return false;
      if (orgFilter && (s.organization || "").toLowerCase() !== orgFilter.toLowerCase()) return false;
      if (countryFilter && (s.country || "").toLowerCase() !== countryFilter.toLowerCase()) return false;
      return true;
    });

    currentPage = 1;
    render();
  }

  function render() {
    const listEl = document.getElementById("supporters-list");
    const prevBtn = document.getElementById("supporters-prev");
    const nextBtn = document.getElementById("supporters-next");
    const pageInfo = document.getElementById("supporters-page-info");
    const featuredWrap = document.getElementById("supporters-featured");
    const featuredList = document.getElementById("supporters-featured-list");
    const listWrap = document.getElementById("supporters-list-wrap");
    const emptyEl = document.getElementById("supporters-empty");

    if (!listEl) return;

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    if (filtered.length === 0) {
      listWrap?.classList.add("hidden");
      emptyEl?.classList.remove("hidden");
      return;
    }

    listWrap?.classList.remove("hidden");
    emptyEl?.classList.add("hidden");

    listEl.innerHTML = pageItems.map((s, i) => renderSignatory(s, start + i + 1)).join("");

    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = currentPage >= totalPages;
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    if (featuredWrap && featuredList) {
      const showFeatured = !document.getElementById("supporters-filter-founding")?.checked && allSignatories.length > 0;
      featuredWrap.hidden = !showFeatured || allSignatories.length === 0;
      if (showFeatured && allSignatories.length > 0) {
        const featured = allSignatories.slice(0, Math.min(100, allSignatories.length));
        featuredList.innerHTML = featured.map((s, i) => renderSignatory(s, i + 1)).join("");
      }
    }
  }

  function populateFilterOptions() {
    const roles = new Set();
    const orgs = new Set();
    const countries = new Set();
    allSignatories.forEach((s) => {
      if (s.role) roles.add(s.role);
      if (s.organization) orgs.add(s.organization);
      if (s.country) countries.add(s.country);
    });

    function addOptions(selId, values) {
      const sel = document.getElementById(selId);
      if (!sel) return;
      const current = sel.value;
      sel.innerHTML = '<option value="">All</option>';
      [...values].sort().forEach((v) => {
        const opt = document.createElement("option");
        opt.value = v;
        opt.textContent = v;
        if (v === current) opt.selected = true;
        sel.appendChild(opt);
      });
    }

    addOptions("supporters-filter-role", roles);
    addOptions("supporters-filter-org", orgs);
    addOptions("supporters-filter-country", countries);
  }

  function init() {
    fetch("/signatories/signatories.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("Failed to load signatories"))))
      .then((data) => {
        allSignatories = (data.signatories || []).filter((s) => s.visibility !== "hidden");
        filtered = [...allSignatories];
        populateFilterOptions();
        applyFilters();

        document.querySelectorAll(".supporters-filter").forEach((el) => {
          el.addEventListener("change", applyFilters);
        });
        document.getElementById("supporters-filter-founding")?.addEventListener("change", applyFilters);
        document.getElementById("supporters-prev")?.addEventListener("click", () => {
          currentPage = Math.max(1, currentPage - 1);
          render();
        });
        document.getElementById("supporters-next")?.addEventListener("click", () => {
          currentPage = Math.min(Math.ceil(filtered.length / PAGE_SIZE), currentPage + 1);
          render();
        });
      })
      .catch((err) => {
        const wrap = document.getElementById("supporters-list-wrap");
        const empty = document.getElementById("supporters-empty");
        if (wrap) wrap.classList.add("hidden");
        if (empty) {
          empty.querySelector("p").textContent = "Could not load signatories. " + (err.message || "");
          empty.classList.remove("hidden");
        }
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
