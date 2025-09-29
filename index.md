---
layout: page
permalink: /
description: "iOS 개발, Apple 문서 번역, 기술 관련 글들"
---

<section class="page-header">
  <h1 class="page__title">{{ page.title }}</h1>
  <p class="page__description">{{ page.description }}</p>
</section>

<ul class="post-list">
  {% assign posts = site.posts | sort: "date" | reverse %}
  {% for post in posts %}
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
</ul>
