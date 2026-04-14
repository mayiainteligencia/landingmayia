/* ================================================
   MAIN — Interacciones globales
   Se ejecuta después de que el loader inyecta
   todas las secciones en el DOM.
   ================================================ */

(function () {
  'use strict';

  function init() {

    /* ── Nav: efecto al hacer scroll ─────────── */
    const nav = document.querySelector('.nav');
    if (nav) {
      const onScroll = function () {
        nav.classList.toggle('scrolled', window.scrollY > 40);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* ── Nav: menú mobile ────────────────────── */
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileNav = document.querySelector('.nav__mobile');

    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function () {
        const open = hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
      });

      // Cierra al hacer click en un link del menú mobile
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          hamburger.classList.remove('open');
          mobileNav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    /* ── Reveal on scroll (IntersectionObserver) ─ */
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
      );
      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      // Fallback: muestra todo si no hay soporte
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ── Nav: resaltado de sección activa ──────── */
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav__links a[href^="#"]');

    if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
      const sectionObs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              navLinks.forEach(function (link) {
                const active = link.getAttribute('href') === '#' + id;
                link.style.color = active ? 'var(--clr-accent)' : '';
              });
            }
          });
        },
        { threshold: 0.45 }
      );
      sections.forEach(function (s) { sectionObs.observe(s); });
    }

  }

  /* ── El loader ya inyectó todo de forma síncrona,
        así que llamamos init() directamente ─────────── */
  init();

})();
