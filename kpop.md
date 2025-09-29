---
layout: page
permalink: /kpop/
description: "K-pop 가사를 철학적 관점에서 분석하고 해석하는 글들"
---

<section class="page-header">
  <h1 class="page__title">{{ page.title }}</h1>
  <p class="page__description">{{ page.description }}</p>
</section>

<ul class="post-list">
  {% assign posts_in_cat = site.posts | where_exp: "p", "p.categories contains 'kpop'" | sort: "date" | reverse %}
  {% for post in posts_in_cat %}
    <li class="post-item">
      <a class="post__link" href="{{ post.url | relative_url }}">
        <time class="post__date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        <span class="post__title">{{ post.title }}</span>
      </a>
      {% if post.excerpt %}
      <p class="post__excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      {% endif %}
    </li>
  {% endfor %}
  {% if posts_in_cat == nil or posts_in_cat.size == 0 %}
    <li class="empty-state">
      <p>아직 K-pop 글이 없어요. 곧 흥미로운 글들을 준비할 예정입니다! 🎵</p>
    </li>
  {% endif %}
</ul>
