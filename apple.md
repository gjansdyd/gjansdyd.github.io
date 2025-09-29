---
layout: page
title: "Apple Developer Document 번역하기"
permalink: /apple/
---

<ul>
  {% assign posts_in_cat = site.categories.apple | sort: "date" | reverse %}
  {% for post in posts_in_cat %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small> — {{ post.date | date: "%Y-%m-%d" }}</small>
    </li>
  {% endfor %}
  {% if posts_in_cat == nil or posts_in_cat.size == 0 %}
    <li>아직 apple 글이 없어요. `_posts`에 `categories: [apple]`으로 글을 추가해보세요.</li>
  {% endif %}
</ul>