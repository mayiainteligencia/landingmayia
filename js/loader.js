/* ================================================
   LOADER — Ensambla todas las secciones en orden
   Cada sección es un archivo JS independiente
   que define window.SECTIONS[nombre].
   ================================================ */

(function () {
  'use strict';

  // Orden de las secciones en la página
  const ORDER = ['nav', 'about', 'pildoras', 'hubs', 'academia', 'contacto'];

  // Punto de montaje en el DOM
  const root = document.getElementById('app');
  if (!root) {
    console.error('[Mayia Loader] No se encontró el elemento #app.');
    return;
  }

  // Inyecta cada sección en el orden definido
  ORDER.forEach(function (name) {
    const html = window.SECTIONS && window.SECTIONS[name];
    if (html) {
      root.insertAdjacentHTML('beforeend', html);
    } else {
      console.warn('[Mayia Loader] Sección no encontrada:', name);
    }
  });

  // Dispara el evento de que el DOM de secciones está listo
  document.dispatchEvent(new Event('sections:ready'));
})();
