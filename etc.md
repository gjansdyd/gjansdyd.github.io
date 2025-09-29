---
layout: page
title: "기타 등등"
permalink: /etc/
description: "다양한 주제의 흥미로운 글들과 생각들"
---

<div class="page-header">
  <h1 class="page-title">{{ page.title }}</h1>
  <p class="page-description">{{ page.description }}</p>
</div>

<ul class="post-list flat">
  {% assign posts_in_cat = site.posts | where_exp: "p", "p.categories contains 'etc'" | sort: "date" | reverse %}
  {% for post in posts_in_cat %}
    <li class="post-item">
      <a class="post-link" href="{{ post.url | relative_url }}">
        <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        <span class="post-title">{{ post.title }}</span>
      </a>
      {% if post.excerpt %}
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      {% endif %}
    </li>
  {% endfor %}
  {% if posts_in_cat == nil or posts_in_cat.size == 0 %}
    <li class="empty-state">
      <p>아직 기타 글이 없어요. 곧 다양한 주제의 글들을 준비할 예정입니다! ✨</p>
    </li>
  {% endif %}
</ul>
