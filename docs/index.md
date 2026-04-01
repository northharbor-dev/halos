---
title: HALOS
layout: default
---

<section class="hero-provocation">
  <p class="hero-provocation__question">"Who made this?"</p>
  <p class="hero-provocation__body">Every day, AI generates code that ships to production, writes reports that inform decisions, creates content that shapes opinion. Almost none of it carries a record of who was responsible, what the AI contributed, or whether a human reviewed it.</p>
  <div class="hero-provocation__reveal">
    <div class="hero-provocation__mark">
      <img src="identity-assets/selected/halos-halo-ring-institutional-randomized.svg" alt="HALOS identity mark">
    </div>
    <h1>HALOS</h1>
    <p class="hero-provocation__subtitle"><strong>Human–Agent Lineage and Origin Standard</strong></p>
  </div>
</section>

<section class="section-card home-explainer">
  <p class="home-explainer__text">HALOS is an open standard for recording who is responsible when humans and AI work together. It tracks what the AI contributed, whether a human reviewed it, and who is accountable for the result. Two parts: stable <span class="color-halo">Principles</span> that define the ethics, and an evolving <span class="color-accent">Provenance Spec</span> that captures the record.</p>
</section>

<section class="section-card" id="story">
  <h2>What it looks like in practice</h2>
  <p class="section-card__lead">An investigative reporter uses AI to analyze 4,300 regulatory filings. Here's what HALOS records at each step.</p>
  <div class="story-timeline">
    <div class="story-step">
      <div class="story-step__badge">
        <img src="identity-assets/badges/halos-mode-human-ai.svg" width="56" height="56" alt="Human + AI">
      </div>
      <div class="story-step__content">
        <p class="story-step__title">Reporter directs AI to process 12 years of public filings</p>
        <p class="story-step__desc">Carlos feeds 4,300 regulatory documents to an AI analysis tool with structured instructions for categorization and pattern detection.</p>
      </div>
      <div class="story-step__annotation">
        <span class="story-step__tag story-step__tag--ai">human+ai</span>
        Human directed, AI processed
      </div>
    </div>
    <div class="story-step">
      <div class="story-step__badge">
        <img src="identity-assets/badges/halos-mode-ai.svg" width="56" height="56" alt="AI">
      </div>
      <div class="story-step__content">
        <p class="story-step__title">AI surfaces a correlation between violations and health complaints</p>
        <p class="story-step__desc">The AI identifies that violation spikes at a chemical facility align with elevated respiratory complaints in the adjacent neighborhood.</p>
      </div>
      <div class="story-step__annotation">
        <span class="story-step__tag story-step__tag--ai">ai-generated</span>
        AI surfaced the pattern
      </div>
    </div>
    <div class="story-step">
      <div class="story-step__badge">
        <img src="identity-assets/badges/halos-mode-human.svg" width="56" height="56" alt="Human">
      </div>
      <div class="story-step__content">
        <p class="story-step__title">Reporter verifies, interviews 14 residents, consults experts</p>
        <p class="story-step__desc">Carlos spends three weeks on the ground. He checks the AI's work against primary sources — finds a 7% misclassification rate — and corrects the dataset. Two researchers call the correlation "suggestive but not conclusive."</p>
      </div>
      <div class="story-step__annotation">
        <span class="story-step__tag story-step__tag--human">modified</span>
        Human verified and contextualized
      </div>
    </div>
    <div class="story-step">
      <div class="story-step__badge">
        <img src="identity-assets/badges/halos-mode-human.svg" width="56" height="56" alt="Human">
      </div>
      <div class="story-step__content">
        <p class="story-step__title">Article publishes with full AI disclosure and editorial accountability</p>
        <p class="story-step__desc">The published article includes an editor's note disclosing AI use. Every finding was verified by the reporter. The correlation is framed as a question, not an answer.</p>
      </div>
      <div class="story-step__annotation">
        <span class="story-step__tag story-step__tag--human">reviewed</span>
        Transparent and accountable
      </div>
    </div>
  </div>
  <p class="story-cta"><a href="examples.html">See all domain examples — journalism, education, government, music, and more →</a></p>
</section>

<section class="home-explore-frame" id="explore" aria-labelledby="explore-title">
  <h2 class="home-explore-title" id="explore-title">See what HALOS means for your world</h2>
  <div class="home-visual" aria-hidden="true">
    <picture>
      <source srcset="/identity-assets/homepage/halos-community-encompassed.png?v=3" type="image/png">
      <img src="/identity-assets/homepage/halos-community-encompassed.png?v=3" alt="" width="600" height="600" class="home-visual__img">
    </picture>
  </div>
  {% include explore-form-embed.html %}
</section>

<section class="section-card" id="audience">
  <h2>Who is this for?</h2>
  <div class="card-grid card-grid--audience">
    <a class="card card--audience" href="#adopt">
      <h3>Developers & Engineers</h3>
      <p>Add provenance to your AI-assisted code in one command. Copy the adoption prompt and your AI agent handles the rest.</p>
    </a>
    <a class="card card--audience" href="principles.html">
      <h3>Policy & Governance</h3>
      <p>HALOS provides the artifact-level traceability that governance frameworks like NIST AI RMF and ISO 42001 require but don't define.</p>
    </a>
    <a class="card card--audience" href="examples.html">
      <h3>Researchers & Academics</h3>
      <p>Study human-AI collaboration with structured provenance data. Document AI involvement for reproducibility and peer review.</p>
    </a>
    <a class="card card--audience" href="#explore">
      <h3>Everyone</h3>
      <p>Understand what AI accountability means for your work and life. Try the explore tool above to see how HALOS affects you.</p>
    </a>
  </div>
</section>

<section class="section-card" id="framework">
  <h2>The Framework</h2>
  <p class="section-card__lead">Two layers — stable ethics, evolving technical standard.</p>
  <div class="layer-stack">
    <div class="layer layer--provenance">
      <div class="layer__badge">Evolving</div>
      <h3><a class="layer__title-link" href="provenance.html">Provenance Spec — v0.3</a></h3>
      <p>The technical record. Who contributed, what AI did, whether it was reviewed. Graph model with decision provenance and interaction semantics.</p>
    </div>
    <div class="layer layer--principles">
      <div class="layer__badge">Stable</div>
      <h3><a class="layer__title-link" href="principles.html">Principles — v1.0</a></h3>
      <p>The ethical foundation. Human primacy, attribution, transparency of AI involvement, and guardrails.</p>
    </div>
  </div>
</section>

<section class="adopt-callout" id="adopt" aria-label="Adopt HALOS">
  <div class="adopt-callout__inner">
    <div class="adopt-callout__header">
      <p class="adopt-callout__headline">Ready to add provenance to your project?</p>
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
    <div class="adopt-phases">
      <div class="adopt-phase">
        <span class="adopt-phase__number">1</span>
        <div class="adopt-phase__text">
          <strong>Governance</strong> — Create a <code>halos.yaml</code> profile and review against principles. No tooling changes required.
        </div>
      </div>
      <div class="adopt-phase">
        <span class="adopt-phase__number">2</span>
        <div class="adopt-phase__text">
          <strong>Provenance</strong> — When ready, instrument your workflow to produce <code>.halos.json</code> records for significant artifacts.
        </div>
      </div>
    </div>
    <div class="adopt-preview">
      <p class="adopt-preview__label">What gets generated:</p>
<pre class="adopt-preview__code"><code>schema: halos/profile/v1
principles_version: "1.0"
project:
  name: your-project
  governance_model: maintainer-led</code></pre>
    </div>
  </div>
</section>

<section class="section-card social-proof" id="supporters">
  <div class="social-proof__inner">
    <div class="social-proof__badge">
      <img src="identity-assets/badges/halos-founding-supporter.svg" width="80" height="80" alt="Founding Supporter badge">
    </div>
    <div class="social-proof__text">
      <p>HALOS is in its founding phase. The first 25 signatories become <strong>Founding Supporters</strong>.</p>
      <a href="supporters.html" class="social-proof__link">View the registry & add your name →</a>
    </div>
  </div>
</section>

<section class="section-card" id="go-further">
  <h2>Go Further</h2>
  <div class="card-grid card-grid--further">
    <a class="card" href="everyday-humans.html">
      <h3>Understand</h3>
      <p>A plain-language guide to what HALOS means for everyday people — no technical background needed.</p>
    </a>
    <a class="card" href="spec/spec.html">
      <h3>Read the Spec</h3>
      <p>Dive into the Provenance Spec and Principles — the full technical and normative foundation.</p>
    </a>
    <a class="card" href="examples.html">
      <h3>See Examples</h3>
      <p>Real-world scenarios across journalism, education, government, music, humanitarian aid, and more.</p>
    </a>
    <a class="card" href="https://github.com/northharbor-dev/halos" rel="noopener noreferrer">
      <h3>Contribute</h3>
      <p>Propose changes, improve docs, or join the review process. All development happens in public on GitHub.</p>
    </a>
  </div>
</section>

<section class="section-card closing">
  <p>HALOS is an attempt to think carefully about human-AI collaboration before more powerful systems become deeply embedded in how we work, create, and govern. It does not claim to solve every problem. It aims to contribute principles, accountability, and public discussion while the window to shape these norms is still open.</p>
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
    text = text.replace('(GUIDE.md)', '(' + BLOB + 'adopt/GUIDE.md)');
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
<script>
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section-card, .adopt-callout, .home-explore-frame, .social-proof, .hero-provocation__reveal, .story-step').forEach(function (el) {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
})();
</script>
<script src="{{ '/assets/explore-guardrails.js' | relative_url }}"></script>
<script src="{{ '/assets/explore.js' | relative_url }}" defer></script>
