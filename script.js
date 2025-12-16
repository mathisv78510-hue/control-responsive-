(function(){
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('site-nav');
  if(!btn || !nav) return;

  const closeOnEscape = (e) => {
    if(e.key === 'Escape') {
      btn.classList.remove('is-open');
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  };

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    const next = !open;
    btn.setAttribute('aria-expanded', String(next));
    btn.classList.toggle('is-open', next);
    nav.classList.toggle('is-open', next);
  });

  // ferme le menu quand il est cliqué 
  nav.addEventListener('click', (e) => {
    const target = e.target;
    if(target && target.classList && target.classList.contains('nav-link')){
      btn.classList.remove('is-open');
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  
  document.addEventListener('keydown', closeOnEscape);
})();
