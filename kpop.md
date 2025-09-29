---
layout: page
title: "Kpop 가사 철학적으로 읽기"
permalink: /kpop/
---

<ul>
  {% assign posts_in_cat = site.categories.kpop | sort: "date" | reverse %}
  {% for post in posts_in_cat %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
    </li>
  {% endfor %}
  {% if posts_in_cat == nil or posts_in_cat.size == 0 %}
    <li>아직 kpop 글이 없어요. `_posts`에 `categories: [kpop]`으로 글을 하나 추가해보세요.</li>
  {% endif %}
</ul>
