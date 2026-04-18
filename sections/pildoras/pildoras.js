/* ================================================
   SECCIÓN: PÍLDORAS IA
   12 soluciones · Filtros · Carousel mobile
   ================================================ */
window.SECTIONS = window.SECTIONS || {};

/* ── Datos de las píldoras ── */
const PILDORAS_DATA = [
  {
    cat: 'Automatización',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></svg>`,
    title: 'WhatsApp Vendedor 24/7',
    features: ['Bot con precalificación automática','Captura de leads a CRM','Seguimiento 3–7 días','Notificaciones leads calientes'],
    price: '$3,500 – $4,900',
    new: false,
  },
  {
    cat: 'Finanzas',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
    title: 'Cobranza y Seguimiento Automático',
    features: ['Recordatorios WhatsApp & email','Alertas vencimiento 7/3/1 día','Pipeline visual de cobranza','Clasificación clientes morosos'],
    price: '$3,500 – $5,500',
    new: false,
  },
  {
    cat: 'Ventas',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    title: 'Google Maps y Reseñas Automáticas',
    features: ['Optimización Google Business','Flujo automático de reseñas','Respuestas automatizadas','Reporte de visibilidad mensual'],
    price: '$3,500 – $4,500',
    new: true,
  },
  {
    cat: 'Gestión',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    title: 'Asistente Administrativo IA',
    features: ['Seguimiento automático prospectos','Gestión de agenda inteligente','Plantillas de cotización','SOPs personalizados'],
    price: '$3,500 – $6,000',
    new: true,
  },
  {
    cat: 'Finanzas',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    title: 'Asesor Contable Fiscal IA',
    features: ['Asesoría fiscal 24/7','Normatividad SAT actualizada','Alertas de declaración','Reportes de cumplimiento'],
    price: '$2,990 – $4,500',
    new: false,
  },
  {
    cat: 'Seguridad',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Técnico Ciberseguridad IA',
    features: ['Monitoreo de red 24/7','Detección de amenazas','Alertas móvil instantáneas','Análisis de vulnerabilidades'],
    price: '$3,500 – $5,500',
    new: false,
  },
  {
    cat: 'Automatización',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.9 3.45 2 2 0 0 1 3.87 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    title: 'Operadora con IA',
    features: ['Atención telefónica 24/7','Multiidioma automático','Enrutamiento inteligente','Transcripción de llamadas'],
    price: '$2,990 – $4,900',
    new: false,
  },
  {
    cat: 'Ventas',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: 'Recomendadora Inteligente IA',
    features: ['ML de preferencias personalizado','Cross-selling automático','Segmentación dinámica','Campañas personalizadas'],
    price: '$2,990 – $4,500',
    new: false,
  },
  {
    cat: 'Seguridad',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    title: '3 Cámaras Seguridad IA',
    features: ['Detección de movimiento IA','Alertas móvil en tiempo real','Grabación inteligente','Reconocimiento de personas'],
    price: '$2,990 – $4,500',
    new: false,
  },
  {
    cat: 'Seguridad',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    title: 'Lectura de Placas IA',
    features: ['Reconocimiento OCR avanzado','Base de datos integrada','Control de acceso automatizado','Registro de entradas/salidas'],
    price: '$3,500 – $5,000',
    new: false,
  },
  {
    cat: 'Gestión',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M6 8h.01M10 8h.01M14 8h.01"/></svg>`,
    title: 'Operación de Sucursales IA',
    features: ['Dashboard central multi-sucursal','KPIs en tiempo real','Alertas de desempeño','Reportes automatizados'],
    price: '$3,500 – $6,000',
    new: false,
  },
  {
    cat: 'RRHH',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'Asesor Recursos Humanos IA',
    features: ['Gestión de talento IA','Onboarding automatizado','Evaluaciones automáticas','Análisis de retención'],
    price: '$2,990 – $4,500',
    new: false,
  },
];

const CATS = ['Todas', ...new Set(PILDORAS_DATA.map(p => p.cat))];

function buildCard(p, delay = 0) {
  return `
  <div class="pildora-card${delay ? ` reveal reveal--d${delay}` : ' reveal'}" data-cat="${p.cat}">
    ${p.new ? '<span class="pildora-card__new">Nuevo</span>' : ''}
    <div class="pildora-card__head">
      <div class="pildora-card__icon" aria-hidden="true">${p.icon}</div>
      <div class="pildora-card__meta">
        <span class="pildora-card__category">${p.cat}</span>
        <p class="pildora-card__title">${p.title}</p>
      </div>
    </div>
    <ul class="pildora-card__features" aria-label="Características">
      ${p.features.map(f => `<li>${f}</li>`).join('')}
    </ul>
    <div class="pildora-card__footer">
      <div class="pildora-card__price"><span>${p.price}</span>/mes</div>
      <a href="#contacto" class="pildora-card__cta" aria-label="Ver más sobre ${p.title}">
        Ver más
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </div>
  </div>`;
}

window.SECTIONS.pildoras = /* html */`
<section id="pildoras" class="pildoras section--dark">
  <div class="pildoras__glow"     aria-hidden="true"></div>
  <div class="pildoras__glow-top" aria-hidden="true"></div>
  <div class="pildoras__grid-bg"  aria-hidden="true"></div>

  <div class="container">

    <!-- Encabezado -->
    <div class="pildoras__header reveal">
      <span class="tag tag--light">Píldoras IA</span>
      <h2 class="section-title">
        Soluciones que activan<br>tu próximo paso.
      </h2>
      <p class="section-sub">
        Automatización práctica, aplicable y con resultados medibles
        para empresas mexicanas de cualquier tamaño.
      </p>
    </div>

    <!-- Filtros por categoría -->
    <div class="pildoras__filters reveal" role="group" aria-label="Filtrar por categoría">
      ${CATS.map((c, i) => `
        <button class="pildoras__filter-btn${i === 0 ? ' active' : ''}" data-filter="${c}">
          ${c}
        </button>`).join('')}
    </div>

    <!-- Grid desktop -->
    <div class="pildoras__grid" id="pildoras-grid" aria-label="Soluciones disponibles">
      ${PILDORAS_DATA.map((p, i) => buildCard(p, i % 3)).join('')}
    </div>

    <!-- Carousel mobile -->
    <div class="pildoras__carousel" id="pildoras-carousel" aria-label="Soluciones disponibles">
      <div class="pildoras__track-wrap">
        <div class="pildoras__track" id="pildoras-track">
          ${PILDORAS_DATA.map(p => buildCard(p)).join('')}
        </div>
      </div>

      <div class="pildoras__arrows">
        <button class="pildoras__arrow" id="pildoras-prev" aria-label="Anterior">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
        </button>
        <button class="pildoras__arrow" id="pildoras-next" aria-label="Siguiente">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>

      <div class="pildoras__dots" id="pildoras-dots" role="tablist" aria-label="Navegación de carousel"></div>
      <p class="pildoras__count" id="pildoras-count" aria-live="polite"></p>
    </div>

  </div>
</section>
`;

/* ================================================
   LÓGICA: Filtros + Carousel
   ================================================ */
(function initPildoras() {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {

    /* ── Filtros (desktop) ── */
    const filterBtns = document.querySelectorAll('.pildoras__filter-btn');
    const cards      = document.querySelectorAll('#pildoras-grid .pildora-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        cards.forEach(card => {
          const match = filter === 'Todas' || card.dataset.cat === filter;
          card.style.display = match ? '' : 'none';

          if (match) {
            card.style.animation = 'none';
            requestAnimationFrame(() => {
              card.style.animation = '';
            });
          }
        });
      });
    });

    /* ── Carousel (mobile) ── */
    const track    = document.getElementById('pildoras-track');
    const dotsWrap = document.getElementById('pildoras-dots');
    const countEl  = document.getElementById('pildoras-count');
    const btnPrev  = document.getElementById('pildoras-prev');
    const btnNext  = document.getElementById('pildoras-next');

    if (!track) return;

    const items   = track.querySelectorAll('.pildora-card');
    const total   = items.length;
    let current   = 0;
    let startX    = 0;
    let isDragging = false;

    /* Crear dots */
    items.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'pildoras__dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Ir a la píldora ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    function getDots() { return dotsWrap.querySelectorAll('.pildoras__dot'); }

    function goTo(idx) {
      current = Math.max(0, Math.min(idx, total - 1));

      // Calcula el offset sumando anchos reales
      let offset = 0;
      items.forEach((item, i) => {
        if (i < current) {
          offset += item.offsetWidth + 14; // gap: 14px
        }
      });

      // Ajuste para centrar visualmente (padding de 20px)
      track.style.transform = `translateX(${-offset}px)`;

      // Actualizar dots
      getDots().forEach((d, i) => d.classList.toggle('active', i === current));

      // Actualizar contador
      if (countEl) countEl.textContent = `${current + 1} / ${total}`;

      // Botones prev/next
      if (btnPrev) btnPrev.disabled = current === 0;
      if (btnNext) btnNext.disabled = current === total - 1;
    }

    btnPrev && btnPrev.addEventListener('click', () => goTo(current - 1));
    btnNext && btnNext.addEventListener('click', () => goTo(current + 1));

    /* Swipe táctil */
    track.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goTo(diff > 0 ? current + 1 : current - 1);
      }
    }, { passive: true });

    /* Drag con mouse */
    track.addEventListener('mousedown', e => {
      isDragging = true;
      startX = e.clientX;
    });
    document.addEventListener('mouseup', e => {
      if (!isDragging) return;
      isDragging = false;
      const diff = startX - e.clientX;
      if (Math.abs(diff) > 60) {
        goTo(diff > 0 ? current + 1 : current - 1);
      }
    });

    // Init
    goTo(0);

    /* Re-calcular al girar pantalla */
    window.addEventListener('resize', () => goTo(current));
  });
})();