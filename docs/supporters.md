---
title: Supporters
deck: Individuals and organizations who support the HALOS principles for principled human-AI collaboration.
layout: default
---

<section class="section-card supporters-intro">
  <p class="section-card__lead">These signatories have publicly affirmed their support for HALOS. The first 25 are <strong>Founding Supporters</strong>; signatories 26–100 receive the <strong>Early Supporter</strong> designation.</p>
  <p>Want to join? <a href="https://github.com/northharbor-dev/halos/blob/main/signatories/CONTRIBUTING.md">Add yourself via pull request</a>.</p>
  <p><strong>Badges:</strong> <a href="{{ '/identity-assets/badges/halos-founding-supporter.svg' | relative_url }}">Founding Supporter</a> · <a href="{{ '/identity-assets/badges/halos-early-supporter.svg' | relative_url }}">Early Supporter</a> — for use on GitHub profiles, websites, and materials.</p>
</section>

<section class="section-card supporters-section" id="supporters-section">
  <h2>Registry</h2>

  <div class="supporters-filters" role="group" aria-label="Filter signatories">
    <label for="supporters-filter-role">Role</label>
    <select id="supporters-filter-role" class="supporters-filter">
      <option value="">All roles</option>
    </select>
    <label for="supporters-filter-org">Organization</label>
    <select id="supporters-filter-org" class="supporters-filter">
      <option value="">All organizations</option>
    </select>
    <label for="supporters-filter-country">Country</label>
    <select id="supporters-filter-country" class="supporters-filter">
      <option value="">All countries</option>
    </select>
    <label>
      <input type="checkbox" id="supporters-filter-founding"> Founding Supporters only (first 25)
    </label>
  </div>

  <div id="supporters-list-wrap" class="supporters-list-wrap">
    <div class="supporters-table-wrap" role="region" aria-label="Signatories table">
      <table class="supporters-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Badge</th>
            <th scope="col">Role</th>
            <th scope="col">Organization</th>
            <th scope="col">Country</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody id="supporters-list"></tbody>
      </table>
    </div>
    <nav class="supporters-pagination" aria-label="Pagination">
      <button type="button" id="supporters-prev" class="supporters-pagination__btn" disabled aria-label="Previous page">Previous</button>
      <span id="supporters-page-info" class="supporters-pagination__info" aria-live="polite">Page 1 of 1</span>
      <button type="button" id="supporters-next" class="supporters-pagination__btn" disabled aria-label="Next page">Next</button>
    </nav>
  </div>

  <div id="supporters-empty" class="supporters-empty" hidden>
    <p>No signatories match the current filters, or the registry is empty. <a href="https://github.com/northharbor-dev/halos/blob/main/signatories/CONTRIBUTING.md">Be the first to sign</a>.</p>
  </div>
</section>

<script src="{{ '/assets/supporters.js' | relative_url }}" defer></script>
