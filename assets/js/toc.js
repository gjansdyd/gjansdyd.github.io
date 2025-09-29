(function(){
  const container = document.getElementById('toc');
  if (!container) return;
  const headings = document.querySelectorAll('.post-content h2, .post-content h3');
  if (!headings.length) { container.innerHTML = '<p>목차 없음</p>'; return; }
  const ul = document.createElement('ul');
  headings.forEach(h => {
    if (!h.id) {
      h.id = h.textContent.trim().toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
    }
    const li = document.createElement('li');
    if (h.tagName === 'H3') li.style.marginLeft = '1rem';
    li.innerHTML = `<a href="#${h.id}">${h.textContent}</a>`;
    ul.appendChild(li);
  });
  container.appendChild(ul);
})();
