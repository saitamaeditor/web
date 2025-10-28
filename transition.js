// Aplica fade-in al cargar y fade-out al navegar
(function () {
  const body = document.body;

  // Mostrar suavemente cuando la página está lista
  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => body.classList.add('is-visible'));
  });

  // Interceptar enlaces internos marcados con data-transition
  function shouldTransition(a) {
    if (!a) return false;
    const url = new URL(a.href, location.href);
    // Solo para la misma origen y enlaces .html
    return url.origin === location.origin &&
           /\.html?$/.test(url.pathname) &&
           !a.hasAttribute('target');
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-transition]');
    if (!a || !shouldTransition(a)) return;

    e.preventDefault();
    // Inicia fade-out y navega cuando termina
    body.classList.add('is-exiting');
    const navigate = () => (window.location.href = a.href);

    const onEnd = (ev) => {
      if (ev.target === body) {
        body.removeEventListener('transitionend', onEnd);
        navigate();
      }
    };

    // Si no hay transición (reduced motion), navega directo
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) navigate();
    else body.addEventListener('transitionend', onEnd);
  });
})();
