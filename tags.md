---
layout: page
title: "Tags"
permalink: /tags/
---

{% assign sorted_tags = site.tags | sort %}
{% if sorted_tags.size == 0 %}
아직 태그가 없어요.
{% endif %}

<ul>
{% for tag in sorted_tags %}
  {% assign tag_name = tag[0] %}
  {% assign posts = tag[1] | sort: "date" | reverse %}
  <li>
    <h3 id="{{ tag_name | slugify }}">#{{ tag_name }}</h3>
    <ul>
      {% for post in posts %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <small> — {{ post.date | date: "%Y-%m-%d" }}</small>
        </li>
      {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>
