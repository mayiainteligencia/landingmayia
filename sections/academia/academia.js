/* ================================================
   SECCIÓN: ACADEMIA MAYIA
   ================================================ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.academia = /* html */`
<section id="academia" class="academia">
  <div class="academia__accent-line" aria-hidden="true"></div>

  <div class="container">

    <!-- Encabezado -->
    <div class="academia__header reveal">
      <span class="tag">Academia Mayia</span>
      <h2 class="section-title">
        Forma al equipo que liderará<br>la IA en México.
      </h2>
      <p class="section-sub">
        Aceleramos la adopción de la Inteligencia Artificial formando talento
        para empresas y programadores. Convierte el potencial de la IA
        en resultados concretos.
      </p>
    </div>

    <!-- Filtros por categoría -->
    <div class="academia__filters reveal">
      <button class="academia__filter-btn academia__filter-btn--active" data-filter="todos">Todos</button>
      <button class="academia__filter-btn" data-filter="gestion">Gestión</button>
      <button class="academia__filter-btn" data-filter="desarrollo">Desarrollo</button>
      <button class="academia__filter-btn" data-filter="datos">Datos</button>
      <button class="academia__filter-btn" data-filter="ml">ML &amp; AI</button>
      <button class="academia__filter-btn" data-filter="soft">Soft Skills</button>
    </div>

    <!-- Grid de cursos -->
    <div class="academia__grid" id="academia-grid">

      <!-- ── Gestión ── -->
      <div class="course-card" data-cat="gestion">
        <div class="course-card__top">
          <span class="course-card__level level--beginner">Principiante</span>
          <span class="course-card__cat">Gestión</span>
        </div>
        <h3 class="course-card__title">Fundamentos del Prompting</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">4 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="gestion">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">Gestión</span>
        </div>
        <h3 class="course-card__title">IA para Trabajo Inteligente</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">25 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="gestion">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">Gestión</span>
        </div>
        <h3 class="course-card__title">Comunicación Efectiva en Equipo</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">10 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="gestion">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">Gestión</span>
        </div>
        <h3 class="course-card__title">Priorización y Delegación</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">10 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="gestion">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">Gestión</span>
        </div>
        <h3 class="course-card__title">IA para Gerentes</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">30 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="gestion">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">Gestión</span>
        </div>
        <h3 class="course-card__title">Gestión del Cambio</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">20 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="gestion">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">Gestión</span>
        </div>
        <h3 class="course-card__title">Toma de Decisiones Estratégicas</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">15 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="gestion">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">Gestión</span>
        </div>
        <h3 class="course-card__title">Optimización de Procesos</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">25 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="gestion">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">Gestión</span>
        </div>
        <h3 class="course-card__title">Desarrollo de Talento Humano</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">20 h</span>
        </div>
      </div>

      <!-- ── Desarrollo ── -->
      <div class="course-card" data-cat="desarrollo">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">Desarrollo</span>
        </div>
        <h3 class="course-card__title">Programación Asistida por IA</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">30 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="desarrollo">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">Desarrollo</span>
        </div>
        <h3 class="course-card__title">Django REST Framework</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">40 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="desarrollo">
        <div class="course-card__top">
          <span class="course-card__level level--beginner">Principiante</span>
          <span class="course-card__cat">Desarrollo</span>
        </div>
        <h3 class="course-card__title">Python Fundamentos</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">35 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="desarrollo">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">Desarrollo</span>
        </div>
        <h3 class="course-card__title">Django Web Development</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">45 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="desarrollo">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">Desarrollo</span>
        </div>
        <h3 class="course-card__title">Docker para Python</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">20 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="desarrollo">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">Desarrollo</span>
        </div>
        <h3 class="course-card__title">Fundamentos de LLMs</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">50 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="desarrollo">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">Desarrollo</span>
        </div>
        <h3 class="course-card__title">Flask Web Apps</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">30 h</span>
        </div>
      </div>

      <!-- ── Datos ── -->
      <div class="course-card" data-cat="datos">
        <div class="course-card__top">
          <span class="course-card__level level--beginner">Principiante</span>
          <span class="course-card__cat">Datos</span>
        </div>
        <h3 class="course-card__title">SQL Básico</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">15 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="datos">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">Datos</span>
        </div>
        <h3 class="course-card__title">SQL Avanzado</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">25 h</span>
        </div>
      </div>

      <!-- ── ML & AI ── -->
      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Machine Learning Fundamentos</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">40 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Computer Vision</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">45 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Tableau Visualización</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">20 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Data Wrangling</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">25 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Álgebra Lineal</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">30 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">ML para Textos</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">35 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">ML para Negocios</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">30 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Métodos Numéricos en ML</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">40 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--intermediate">Intermedio</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Análisis Estadístico</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">30 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Aprendizaje Supervisado</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">45 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--beginner">Principiante</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Python para Análisis</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">25 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Series Temporales</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">35 h</span>
        </div>
      </div>

      <div class="course-card" data-cat="ml">
        <div class="course-card__top">
          <span class="course-card__level level--advanced">Avanzado</span>
          <span class="course-card__cat">ML &amp; AI</span>
        </div>
        <h3 class="course-card__title">Aprendizaje No Supervisado</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">40 h</span>
        </div>
      </div>

      <!-- ── Soft Skills ── -->
      <div class="course-card" data-cat="soft">
        <div class="course-card__top">
          <span class="course-card__level level--beginner">Principiante</span>
          <span class="course-card__cat">Soft Skills</span>
        </div>
        <h3 class="course-card__title">Habilidades Blandas</h3>
        <div class="course-card__footer">
          <span class="course-card__duration">15 h</span>
        </div>
      </div>

    </div>

    <!-- CTA -->
    <div class="academia__cta reveal">
      <p class="academia__cta-title">
        ¿Listo para capacitar<br>
        <span>a tu equipo con IA?</span>
      </p>
      <a href="#contacto" class="btn btn--primary">
        Hablar con un experto →
      </a>
    </div>

  </div>
</section>
`;
