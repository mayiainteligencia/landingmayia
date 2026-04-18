/* ================================================
   SECCIÓN: ACADEMIA MAYIA
   ================================================ */
window.SECTIONS = window.SECTIONS || {};

/* SVG icons por categoría */
const CAT_ICONS = {
  gestion:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  desarrollo: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  datos:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  ml:         `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  soft:       `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
};

const COURSES = [
  // Gestión
  { cat:'gestion', level:'beginner',     label:'Principiante', title:'Fundamentos del Prompting',          dur:'4 h'  },
  { cat:'gestion', level:'intermediate', label:'Intermedio',   title:'IA para Trabajo Inteligente',        dur:'25 h' },
  { cat:'gestion', level:'intermediate', label:'Intermedio',   title:'Comunicación Efectiva en Equipo',    dur:'10 h' },
  { cat:'gestion', level:'intermediate', label:'Intermedio',   title:'Priorización y Delegación',          dur:'10 h' },
  { cat:'gestion', level:'advanced',     label:'Avanzado',     title:'IA para Gerentes',                   dur:'30 h' },
  { cat:'gestion', level:'advanced',     label:'Avanzado',     title:'Gestión del Cambio',                 dur:'20 h' },
  { cat:'gestion', level:'advanced',     label:'Avanzado',     title:'Toma de Decisiones Estratégicas',    dur:'15 h' },
  { cat:'gestion', level:'advanced',     label:'Avanzado',     title:'Optimización de Procesos',           dur:'25 h' },
  { cat:'gestion', level:'advanced',     label:'Avanzado',     title:'Desarrollo de Talento Humano',       dur:'20 h' },
  // Desarrollo
  { cat:'desarrollo', level:'beginner',     label:'Principiante', title:'Python Fundamentos',              dur:'35 h' },
  { cat:'desarrollo', level:'intermediate', label:'Intermedio',   title:'Programación Asistida por IA',    dur:'30 h' },
  { cat:'desarrollo', level:'intermediate', label:'Intermedio',   title:'Django Web Development',          dur:'45 h' },
  { cat:'desarrollo', level:'intermediate', label:'Intermedio',   title:'Docker para Python',              dur:'20 h' },
  { cat:'desarrollo', level:'intermediate', label:'Intermedio',   title:'Flask Web Apps',                  dur:'30 h' },
  { cat:'desarrollo', level:'advanced',     label:'Avanzado',     title:'Django REST Framework',           dur:'40 h' },
  { cat:'desarrollo', level:'advanced',     label:'Avanzado',     title:'Fundamentos de LLMs',             dur:'50 h' },
  // Datos
  { cat:'datos', level:'beginner', label:'Principiante', title:'SQL Básico',    dur:'15 h' },
  { cat:'datos', level:'advanced', label:'Avanzado',     title:'SQL Avanzado',  dur:'25 h' },
  // ML & AI
  { cat:'ml', level:'beginner',     label:'Principiante', title:'Python para Análisis',          dur:'25 h' },
  { cat:'ml', level:'intermediate', label:'Intermedio',   title:'Machine Learning Fundamentos',  dur:'40 h' },
  { cat:'ml', level:'intermediate', label:'Intermedio',   title:'Tableau Visualización',         dur:'20 h' },
  { cat:'ml', level:'intermediate', label:'Intermedio',   title:'Data Wrangling',                dur:'25 h' },
  { cat:'ml', level:'intermediate', label:'Intermedio',   title:'Análisis Estadístico',          dur:'30 h' },
  { cat:'ml', level:'advanced',     label:'Avanzado',     title:'Computer Vision',               dur:'45 h' },
  { cat:'ml', level:'advanced',     label:'Avanzado',     title:'Álgebra Lineal',                dur:'30 h' },
  { cat:'ml', level:'advanced',     label:'Avanzado',     title:'ML para Textos',                dur:'35 h' },
  { cat:'ml', level:'advanced',     label:'Avanzado',     title:'ML para Negocios',              dur:'30 h' },
  { cat:'ml', level:'advanced',     label:'Avanzado',     title:'Métodos Numéricos en ML',       dur:'40 h' },
  { cat:'ml', level:'advanced',     label:'Avanzado',     title:'Aprendizaje Supervisado',       dur:'45 h' },
  { cat:'ml', level:'advanced',     label:'Avanzado',     title:'Series Temporales',             dur:'35 h' },
  { cat:'ml', level:'advanced',     label:'Avanzado',     title:'Aprendizaje No Supervisado',    dur:'40 h' },
  // Soft Skills
  { cat:'soft', level:'beginner', label:'Principiante', title:'Habilidades Blandas', dur:'15 h' },
];

const CAT_LABELS = { gestion:'Gestión', desarrollo:'Desarrollo', datos:'Datos', ml:'ML & AI', soft:'Soft Skills' };

function card(c) {
  const icon = CAT_ICONS[c.cat] || CAT_ICONS.ml;
  return `
  <div class="course-card" data-cat="${c.cat}">
    <div class="course-card__top">
      <span class="course-card__level level--${c.level}">${c.label}</span>
      <span class="course-card__cat">${CAT_LABELS[c.cat]}</span>
    </div>
    <div class="course-card__icon" aria-hidden="true">${icon}</div>
    <h3 class="course-card__title">${c.title}</h3>
    <div class="course-card__footer">
      <span class="course-card__duration">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        ${c.dur}
      </span>
      <span class="course-card__arrow" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </span>
    </div>
  </div>`;
}

const totalHours = COURSES.reduce((acc, c) => acc + parseInt(c.dur), 0);

window.SECTIONS.academia = /* html */`
<section id="academia" class="academia">
  <div class="academia__accent-line" aria-hidden="true"></div>
  <div class="academia__bg"   aria-hidden="true"></div>
  <div class="academia__glow" aria-hidden="true"></div>

  <div class="container">

    <!-- Encabezado -->
    <div class="academia__header reveal">
      <span class="tag">Academia Mayia</span>
      <h2 class="section-title">
        Forma al equipo que liderará<br>la IA en México.
      </h2>
      <p class="section-sub">
        Aceleramos la adopción de IA formando talento para empresas y
        programadores. Convierte el potencial de la IA en resultados concretos.
      </p>
      <div class="academia__stats">
        <div class="academia__stat">
          <span class="academia__stat-num">${COURSES.length}</span>
          <span class="academia__stat-label">Cursos disponibles</span>
        </div>
        <div class="academia__stat">
          <span class="academia__stat-num">${totalHours}+</span>
          <span class="academia__stat-label">Horas de contenido</span>
        </div>
        <div class="academia__stat">
          <span class="academia__stat-num">5</span>
          <span class="academia__stat-label">Categorías</span>
        </div>
      </div>
    </div>

    <!-- Filtros -->
    <div class="academia__filters reveal" role="group" aria-label="Filtrar cursos">
      <button class="academia__filter-btn academia__filter-btn--active" data-filter="todos">Todos</button>
      <button class="academia__filter-btn" data-filter="gestion">Gestión</button>
      <button class="academia__filter-btn" data-filter="desarrollo">Desarrollo</button>
      <button class="academia__filter-btn" data-filter="datos">Datos</button>
      <button class="academia__filter-btn" data-filter="ml">ML &amp; AI</button>
      <button class="academia__filter-btn" data-filter="soft">Soft Skills</button>
    </div>

    <p class="academia__count" id="academia-count" aria-live="polite">
      Mostrando <span>${COURSES.length}</span> cursos
    </p>

    <!-- Grid -->
    <div class="academia__grid" id="academia-grid" aria-label="Cursos disponibles">
      ${COURSES.map(card).join('')}
    </div>

    <!-- CTA -->
    <div class="academia__cta reveal">
      <div class="academia__cta-text">
        <p class="academia__cta-label">Capacitación empresarial</p>
        <p class="academia__cta-title">
          ¿Listo para capacitar<br>
          <span>a tu equipo con IA?</span>
        </p>
      </div>
      <a href="#contacto" class="btn btn--primary">Hablar con un experto →</a>
    </div>

  </div>
</section>
`;

/* ── Lógica de filtros ── */
(function initAcademia() {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(() => {
    const btns    = document.querySelectorAll('.academia__filter-btn');
    const cards   = document.querySelectorAll('#academia-grid .course-card');
    const countEl = document.getElementById('academia-count');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('academia__filter-btn--active'));
        btn.classList.add('academia__filter-btn--active');

        const filter = btn.dataset.filter;
        let visible = 0;

        cards.forEach(card => {
          const match = filter === 'todos' || card.dataset.cat === filter;
          card.classList.toggle('course-card--hidden', !match);
          if (match) visible++;
        });

        if (countEl) {
          countEl.innerHTML = `Mostrando <span>${visible}</span> curso${visible !== 1 ? 's' : ''}`;
        }
      });
    });
  });
})();