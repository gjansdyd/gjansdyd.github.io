---
layout: page
title: "블로그"
permalink: /
---

<ul class="post-list flat">
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
