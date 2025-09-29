---
layout: page
title: "Kpop 가사 철학적으로 읽기"
permalink: /kpop/
---

<ul class="cards">
  {% assign posts_in_cat = site.posts | where_exp: "p", "p.categories contains 'kpop'" | sort: "date" | reverse %}
  {% for post in posts_in_cat %}
    <li class="card">
      <a href="{{ post.url | relative_url }}">
        <h3>{{ post.title }}</h3>
        <p class="meta">{{ post.date | date: "%Y-%m-%d" }}</p>
        <p class="excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      </a>
    </li>
  {% endfor %}
  {% if posts_in_cat == nil or posts_in_cat.size == 0 %}
    <li>아직 kpop 글이 없어요.</li>
  {% endif %}
</ul>
