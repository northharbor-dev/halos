---
title: Blog
deck: Longer updates and reflections on HALOS.
---

<section class="section-card">
  <p>Longer pieces for major moments, deeper narrative, and syndication. For the chronological timeline, see the <a href="{{ '/journal.html' | relative_url }}">journal</a>. For cross-posting to Medium, Dev.to, or LinkedIn, see <a href="{{ '/SYNDICATION.html' | relative_url }}">syndication</a>.</p>
</section>

<section class="section-card">
  <h2>Posts</h2>
  <div class="card-grid">
    {% for post in site.posts %}
    <a class="card" href="{{ post.url | relative_url }}">
      <h3>{{ post.title }}</h3>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
      {% if post.excerpt %}
      <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
      {% endif %}
    </a>
    {% endfor %}
  </div>
  {% if site.posts.size == 0 %}
  <p>No posts yet.</p>
  {% endif %}
</section>
