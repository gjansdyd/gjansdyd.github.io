---
layout: page
title: "Search"
permalink: /search/
---

<input id="search-input" type="search" placeholder="검색어를 입력하세요" style="width:100%;padding:10px;margin:8px 0;border:1px solid #ccc;border-radius:8px;">
<ul id="search-results"></ul>

<script>
(async function(){
  const res = await fetch('{{ "/search.json" | relative_url }}');
  const data = await res.json();
  const $in = document.getElementById('search-input');
  const $out = document.getElementById('search-results');

  function r(item, q){
    const t = (item.title||'') + ' ' + (item.excerpt||'') + ' ' + (item.categories||[]).join(' ') + ' ' + (item.tags||[]).join(' ');
    return t.toLowerCase().includes(q.toLowerCase());
  }

  function render(list){
    if (!list.length) { $out.innerHTML = '<li>검색 결과가 없습니다.</li>'; return; }
    $out.innerHTML = list.map(p => `
      <li style="margin:6px 0;">
        <a href="${p.url}">${p.title}</a>
        <small> — ${p.date}</small>
      </li>
    `).join('');
  }

  $in.addEventListener('input', () => {
    const q = $in.value.trim();
    if (!q) { $out.innerHTML = ''; return; }
    render(data.filter(d => r(d, q)).slice(0, 50));
  });
})();
</script>
