---
layout: page
title: "기술 블로그"
permalink: /
description: "iOS 개발, Apple 문서 번역, 기술 관련 글들"
---

<div class="container">
  <div class="page-header">
    <h1 class="page-title">{{ page.title }}</h1>
    <p class="page-description">{{ page.description }}</p>
  </div>

  <ul class="post-list">
    {% assign posts = site.posts | sort: "date" | reverse %}
    {% for post in posts %}
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
  </ul>
</div>
