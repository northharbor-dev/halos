---
title: HALOS
layout: default
---

<section class="hero">
  <div class="hero__mark">
    <img src="identity-assets/selected/halos-halo-ring-institutional-randomized.svg" alt="HALOS identity mark">
  </div>
  <div>
    <span class="hero__eyebrow">Open Framework</span>
    <h1>HALOS</h1>
    <p><strong>Human–Agent Lineage and Origin Standard</strong></p>
    <p>AI without clear rules risks harm. HALOS helps shape a better path—humans central, AI visible, governance before it's too late.</p>
  </div>
</section>

<section class="adopt-callout" id="adopt" aria-label="Adopt HALOS">
  <div class="adopt-callout__inner">
    <div class="adopt-callout__header">
      <p class="adopt-callout__headline">Adopt HALOS in your project</p>
      <p class="adopt-callout__desc">Copy the agent prompt and paste it into Claude Code, Cursor, or Copilot — your AI agent generates <code>halos.yaml</code> and adoption docs automatically.</p>
    </div>
    <div class="adopt-callout__action">
      <button class="adopt-btn" id="adopt-btn" type="button">
        <svg class="adopt-btn__icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="4.5" y="1" width="8" height="10" rx="1.5" stroke="currentColor" stroke-width="1.25"/>
          <rect x="1" y="3.5" width="8" height="10" rx="1.5" stroke="currentColor" stroke-width="1.25" fill="var(--bg)"/>
        </svg>
        Copy adoption prompt
      </button>
      <a class="adopt-callout__guide-link" href="https://github.com/northharbor-dev/halos-spec/blob/main/adopt/GUIDE.md" rel="noopener noreferrer">Read the guide →</a>
    </div>
  </div>
</section>

<section class="section-card home-intro">
  <p>AI is reshaping how we work, create, and make decisions. Without clear rules and accountability, that change risks confusion, harm, and loss of human agency. HALOS exists to help shape a better path: humans remain central, AI involvement is visible, and governance happens before damage is harder to undo.</p>
  <p>We have both the right and the responsibility to define how AI participates in our work. HALOS recognizes and supports the full spectrum of human-AI collaboration — and provides a framework for making that involvement visible and accountable, regardless of where on that spectrum a project sits.</p>
  <div class="home-intro-modes" aria-label="HALOS collaboration modes">
    <div class="home-intro-mode">
      <img src="identity-assets/badges/halos-mode-human.svg" width="72" height="72" alt="Human only">
      <div class="home-intro-mode__text">
        <span class="home-intro-mode__label">Human</span>
        <span class="home-intro-mode__desc">You write and decide</span>
      </div>
    </div>
    <div class="home-intro-mode">
      <img src="identity-assets/badges/halos-mode-human-ai.svg" width="72" height="72" alt="Human + AI">
      <div class="home-intro-mode__text">
        <span class="home-intro-mode__label">Human + AI</span>
        <span class="home-intro-mode__desc">You direct, AI assists</span>
      </div>
    </div>
    <div class="home-intro-mode">
      <img src="identity-assets/badges/halos-mode-ai.svg" width="72" height="72" alt="AI">
      <div class="home-intro-mode__text">
        <span class="home-intro-mode__label">AI</span>
        <span class="home-intro-mode__desc">AI acts, you review</span>
      </div>
    </div>
  </div>
</section>

<section class="section-card" id="framework">
  <h2>The Framework</h2>
  <p class="section-card__lead">HALOS is organized in two layers — stable principles and an evolving provenance specification.</p>
  <div class="layer-stack">
    <div class="layer layer--provenance">
      <div class="layer__badge">Evolving</div>
      <h3><a class="layer__title-link" href="provenance.html">Provenance Spec — v0.3, Active</a></h3>
      <p>The technical standard for recording how an artifact was created: who the accountable human is, what AI contributed, and whether a human reviewed it. Graph model with decision provenance, human–AI interaction semantics, and multi-policy governance.</p>
      <a class="layer__github" href="https://github.com/northharbor-dev/halos-spec/blob/main/spec/provenance/v0.3.md" rel="noopener noreferrer" aria-label="View Provenance Spec on GitHub">
        <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        GitHub
      </a>
    </div>
    <div class="layer layer--principles">
      <div class="layer__badge">Stable</div>
      <h3><a class="layer__title-link" href="principles.html">HALOS Principles — v1.0</a></h3>
      <p>The normative foundation: human primacy, attribution, transparency of AI involvement, and ethical guardrails. The principles anchor everything else.</p>
      <a class="layer__github" href="https://github.com/northharbor-dev/halos-spec/blob/main/spec/principles/v1.0.md" rel="noopener noreferrer" aria-label="View Principles on GitHub">
        <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        GitHub
      </a>
    </div>
  </div>
</section>

<section class="section-card">
  <h2>Where HALOS Fits</h2>
  <p class="section-card__lead">HALOS is the human-centered provenance and accountability layer — complementary to, not competing with, adjacent standards.</p>
  <div class="card-grid">
    <div class="card">
      <h3>vs. CycloneDX / SBOM</h3>
      <p>CycloneDX answers "what is in this software?" HALOS adds "who was responsible and what AI contributed." HALOS provenance can embed directly as <code>component.evidence</code>.</p>
    </div>
    <div class="card">
      <h3>vs. SLSA</h3>
      <p>SLSA answers "how was it built?" HALOS adds "what decisions were made and by whom." HALOS provenance supplements SLSA attestations with human-authorship and AI-disclosure data.</p>
    </div>
    <div class="card">
      <h3>vs. W3C PROV</h3>
      <p>The v0.3 graph model is conceptually aligned with W3C PROV (Entities, Activities, Agents) but uses plain JSON and simplified typing — no RDF required.</p>
    </div>
    <div class="card">
      <h3>vs. NIST AI RMF / ISO 42001</h3>
      <p>Governance frameworks define policy. HALOS operates at the artifact level inside those processes — providing the traceability records that demonstrate compliance.</p>
    </div>
  </div>
  <p><a href="https://github.com/northharbor-dev/halos-spec/blob/main/mappings/cyclonedx-slsa.md" rel="noopener noreferrer">Integration details and embedding guide →</a></p>
</section>

<section class="home-explore-frame" id="explore" aria-labelledby="explore-title">
  <h2 class="home-explore-title" id="explore-title">See how HALOS affects you</h2>
  <div class="home-visual" aria-hidden="true">
    <picture>
      <source srcset="/identity-assets/homepage/halos-community-encompassed.png?v=3" type="image/png">
      <img src="/identity-assets/homepage/halos-community-encompassed.png?v=3" alt="" width="600" height="600" class="home-visual__img">
    </picture>
  </div>
  {% include explore-form-embed.html %}
</section>

<section class="section-card" id="go-further">
  <h2>Go Further</h2>
  <p class="section-card__lead">Learn more about the framework or get involved.</p>
  <h3 style="margin-top:1.5rem; font-size:0.85rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-soft); font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">Learn</h3>
  <div class="card-grid">
    <a class="card" href="vision.html">
      <h3>Vision</h3>
      <p>Philosophy, motivation, and long-term direction.</p>
    </a>
    <a class="card" href="whitepaper.html">
      <h3>Whitepaper</h3>
      <p>How HALOS integrates with supply chain standards for verifiable human–AI collaboration.</p>
    </a>
    <a class="card" href="for-agents.html">
      <h3>For AI Agents</h3>
      <p>How agents discover and adopt HALOS when working in this repository.</p>
    </a>
    <a class="card" href="faq.html">
      <h3>FAQ</h3>
      <p>Common questions about extensibility, versioning, adoption, and how HALOS fits with other standards.</p>
    </a>
    <a class="card" href="origin.html">
      <h3>About the Author</h3>
      <p>Origin, authorship, and the public development context for HALOS.</p>
    </a>
  </div>
  <h3 style="margin-top:2rem; font-size:0.85rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-soft); font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">Participate</h3>
  <div class="card-grid">
    <a class="card" href="https://github.com/northharbor-dev/halos-spec" rel="noopener noreferrer">
      <h3>Spec Repository</h3>
      <p>The canonical source for schemas, adoption toolkit, and principles. Contribute via pull request.</p>
    </a>
    <a class="card" href="supporters.html">
      <h3>Become a Signatory</h3>
      <p>Publicly affirm your support for the principles. Add yourself via pull request.</p>
    </a>
    <a class="card" href="https://github.com/northharbor-dev/halos" rel="noopener noreferrer">
      <h3>Contribute</h3>
      <p>Propose governance changes, improve docs, or join the review process. All via GitHub.</p>
    </a>
    <a class="card" href="https://www.linkedin.com/company/northharbor" rel="noopener noreferrer">
      <h3>Follow Updates</h3>
      <p>Stay connected for milestones, announcements, and discussion.</p>
    </a>
  </div>
</section>

<section class="section-card">
  <h2>Why This Exists</h2>
  <p>HALOS is an attempt to think carefully about human-AI collaboration before more powerful systems become more deeply embedded in society. It does not claim to solve every problem, but it aims to contribute principles, governance, and public discussion that may help shape a more responsible path.</p>
  <p>Questions, concerns, or thoughtful feedback are welcome at <a href="mailto:halos@northharbor.dev">halos@northharbor.dev</a>.</p>
</section>

<script>
(function () {
  var btn = document.getElementById('adopt-btn');
  if (!btn) return;
  var PROMPT_URL = 'https://raw.githubusercontent.com/northharbor-dev/halos-spec/main/adopt/AGENT-PROMPT.md';
  var RAW  = 'https://raw.githubusercontent.com/northharbor-dev/halos-spec/main/';
  var BLOB = 'https://github.com/northharbor-dev/halos-spec/blob/main/';

  function rewriteLinks(text) {
    // Markdown hyperlink: (GUIDE.md) is relative to adopt/ in the source repo
    text = text.replace('(GUIDE.md)', '(' + BLOB + 'adopt/GUIDE.md)');
    // Backtick file/directory references agents need to fetch
    text = text.replace('`PRINCIPLES/halos-principles-v1.0.md`', '`' + RAW + 'PRINCIPLES/halos-principles-v1.0.md`');
    text = text.replace('`spec/schema/halos-profile.schema.json`', '`' + RAW + 'spec/schema/halos-profile.schema.json`');
    text = text.replace('`adopt/templates/`', '`' + BLOB + 'adopt/templates/`');
    text = text.replace(/`adopt\/templates\/halos\.yaml`/g, '`' + RAW + 'adopt/templates/halos.yaml`');
    text = text.replace('`adopt/templates/HALOS-ADOPTION.md`', '`' + RAW + 'adopt/templates/HALOS-ADOPTION.md`');
    text = text.replace('`PROVENANCE/halos-provenance-spec-v0.1.md`', '`' + RAW + 'PROVENANCE/halos-provenance-spec-v0.1.md`');
    text = text.replace('`profiles/`', '`' + BLOB + 'profiles/`');
    return text;
  }

  btn.addEventListener('click', function () {
    btn.disabled = true;
    fetch(PROMPT_URL)
      .then(function (r) { return r.text(); })
      .then(function (text) { return navigator.clipboard.writeText(rewriteLinks(text)); })
      .then(function () {
        btn.textContent = 'Copied!';
        btn.classList.add('adopt-btn--copied');
        setTimeout(function () {
          btn.textContent = 'Copy adoption prompt';
          btn.classList.remove('adopt-btn--copied');
          btn.disabled = false;
        }, 2000);
      })
      .catch(function () {
        btn.disabled = false;
        window.open(PROMPT_URL, '_blank');
      });
  });
})();
</script>
<script src="{{ '/assets/explore-guardrails.js' | relative_url }}"></script>
<script src="{{ '/assets/explore.js' | relative_url }}" defer></script>
