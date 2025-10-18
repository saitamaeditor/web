// Año del footer
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// 1) Si la URL actual termina en .html, cámbiala por la versión limpia sin recargar
(function() {
  var p = window.location.pathname;
  if (p.endsWith('.html')) {
    var clean = p.replace(/\/?index\.html$/, '/').replace(/\.html$/, '/');
    window.history.replaceState(null, '', clean + window.location.search + window.location.hash);
  }
})();

// 2) Si por despiste queda algún enlace con .html en el HTML, lo arreglamos al vuelo
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href$=".html"]').forEach(function(a){
    a.setAttribute('href', a.getAttribute('href')
      .replace(/\/?index\.html$/, '/')
      .replace(/\.html$/, '/'));
  });
});
