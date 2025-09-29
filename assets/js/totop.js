(function(){
  const btn = document.createElement('button');
  btn.textContent = '↑ Top';
  btn.style.cssText = 'position:fixed;right:16px;bottom:16px;padding:8px 10px;border:1px solid #ccc;border-radius:8px;background:#fff;cursor:pointer;opacity:0.8;z-index:9999';
  btn.onclick = () => window.scrollTo({top:0, behavior:'smooth'});
  document.body.appendChild(btn);
})();
