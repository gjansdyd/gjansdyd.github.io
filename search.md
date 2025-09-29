---
layout: page
title: "검색"
permalink: /search/
description: "블로그의 모든 글을 검색해보세요"
---

<div class="page-header">
  <h1 class="page-title">{{ page.title }}</h1>
  <p class="page-description">{{ page.description }}</p>
</div>

<div class="search-container">
  <input id="search-input" 
         type="search" 
         placeholder="검색어를 입력하세요..." 
         class="search-input"
         aria-label="검색어 입력">
  <div id="search-status" class="search-status" aria-live="polite"></div>
  <ul id="search-results" class="search-results"></ul>
</div>

<script>
(async function(){
  const res = await fetch('{{ "/search.json" | relative_url }}');
  const data = await res.json();
  const $in = document.getElementById('search-input');
  const $out = document.getElementById('search-results');
  const $status = document.getElementById('search-status');

  function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
  }

  function searchItems(items, query) {
    const t = (item.title||'') + ' ' + (item.excerpt||'') + ' ' + (item.categories||[]).join(' ') + ' ' + (item.tags||[]).join(' ');
    return t.toLowerCase().includes(query.toLowerCase());
  }

  function renderResults(results, query) {
    if (!query.trim()) { 
      $out.innerHTML = ''; 
      $status.textContent = '';
      return; 
    }
    
    if (!results.length) { 
      $out.innerHTML = '<li class="empty-state"><p>검색 결과가 없습니다. 다른 검색어를 시도해보세요.</p></li>'; 
      $status.textContent = '검색 결과 없음';
      return; 
    }
    
    $status.textContent = `${results.length}개의 결과를 찾았습니다`;
    $out.innerHTML = results.map(post => `
      <li class="search-result">
        <a href="${post.url}">${highlightText(post.title, query)}</a>
        <div class="meta">
          <time datetime="${post.date}">${new Date(post.date).toLocaleDateString('ko-KR')}</time>
          ${post.categories ? `<span class="category">${post.categories[0]}</span>` : ''}
        </div>
        <div class="excerpt">${highlightText(post.excerpt || '', query)}</div>
        ${post.tags ? `<div class="tags">${post.tags.map(tag => `<span class="tag-chip">${tag}</span>`).join('')}</div>` : ''}
      </li>
    `).join('');
  }

  $in.addEventListener('input', () => {
    const query = $in.value.trim();
    if (!query) { 
      $out.innerHTML = ''; 
      $status.textContent = '';
      return; 
    }
    const results = data.filter(item => searchItems(item, query)).slice(0, 50);
    renderResults(results, query);
  });

  // 엔터키로 검색 실행
  $in.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = $in.value.trim();
      if (query) {
        const results = data.filter(item => searchItems(item, query)).slice(0, 50);
        renderResults(results, query);
      }
    }
  });
})();
</script>
