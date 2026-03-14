---
title: Journal
deck: Living history of HALOS—decisions, milestones, and progress.
---

<section class="section-card">
  <p>The journal records short updates in the project's voice: what we chose, what we learned, and who helped. For longer reflections, see the <a href="{{ '/blog.html' | relative_url }}">blog</a>.</p>
</section>

<section class="section-card journal-timeline">
  <h2>Entries</h2>
  {% assign sorted = site.journal | sort: 'date' | reverse %}
  {% for entry in sorted %}
  <article class="journal-entry">
    <time class="journal-entry__date" datetime="{{ entry.date | date_to_xmlschema }}">{{ entry.date | date: "%Y-%m-%d" }}</time>
    {% if entry.entry_type %}<span class="journal-entry__type">{{ entry.entry_type }}</span>{% endif %}
    <h3 class="journal-entry__title">{{ entry.title }}</h3>
    <div class="journal-entry__body">
      {{ entry.content }}
    </div>
  </article>
  {% endfor %}
  {% if sorted.size == 0 %}
  <p>No entries yet.</p>
  {% endif %}
</section>
