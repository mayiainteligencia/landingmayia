/* ================================================
   SECCIÓN: ABOUT — Quiénes somos
   UX mejorado: pillar cards con data-num, badges,
   stat pills flotantes, sticky stats, hover refinado
   ================================================ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.about = /* html */`

<!-- ── HERO ──────────────────────────────────────── -->
<section id="nosotros" class="about-hero">

  <!-- Fondo animado -->
  <div class="about-hero__grid" aria-hidden="true">
    <div class="about-hero__cell" style="top:56px;  left:112px; --delay:0s;   --dur:2.8s"></div>
    <div class="about-hero__cell" style="top:168px; left:336px; --delay:1.2s; --dur:3.5s"></div>
    <div class="about-hero__cell" style="top:0px;   left:504px; --delay:2.4s; --dur:2.5s"></div>
    <div class="about-hero__cell" style="top:112px; left:672px; --delay:0.6s; --dur:4s"></div>
    <div class="about-hero__cell" style="top:224px; left:224px; --delay:3.1s; --dur:3.2s"></div>
    <div class="about-hero__cell" style="top:56px;  left:840px; --delay:1.8s; --dur:2.6s"></div>
    <div class="about-hero__cell" style="top:280px; left:448px; --delay:4s;   --dur:3.8s"></div>
    <div class="about-hero__cell" style="top:168px; left:56px;  --delay:2.9s; --dur:3s"></div>
    <div class="about-hero__cell" style="top:336px; left:280px; --delay:0.4s; --dur:4.2s"></div>
    <div class="about-hero__cell" style="top:224px; left:616px; --delay:3.6s; --dur:2.9s"></div>
    <div class="about-hero__cell" style="top:112px; left:504px; --delay:5s;   --dur:3.4s"></div>
    <div class="about-hero__cell" style="top:392px; left:168px; --delay:1.5s; --dur:3.1s"></div>
  </div>
  <div class="about-hero__glow"   aria-hidden="true"></div>
  <div class="about-hero__glow-2" aria-hidden="true"></div>
  <div class="about-hero__sideline" aria-hidden="true"></div>

  <div class="container">
    <div class="about-hero__inner">

      <!-- ── Columna texto ── -->
      <div class="about-hero__text">

        <!-- Eyebrow con logos en píldora -->
        <div class="about-hero__eyebrow reveal">
          <img src="assets/flai.png"              alt="FLAI"            class="about-hero__eyebrow-logo about-hero__eyebrow-logo--flai" />
          <span class="about-hero__eyebrow-sep"   aria-hidden="true"></span>
          <img src="assets/LOGO-SUPER.png"         alt="EdgeNet"         class="about-hero__eyebrow-logo" />
          <span class="about-hero__eyebrow-sep"   aria-hidden="true"></span>
          <img src="assets/hechoMexicoRojo.PNG"   alt="Hecho en México" class="about-hero__eyebrow-logo" />
        </div>

        <h1 class="about-hero__title reveal reveal--d1">
          Inteligencia Artificial<br>
          que <em>transforma</em><br>
          innovación en resultados.
        </h1>

        <p class="about-hero__desc reveal reveal--d2">
          Democratizamos el acceso a la Inteligencia Artificial en México.
          Fabricamos, adaptamos y comercializamos soluciones respaldadas
          por <strong>FLAI</strong> — nuestra nube soberana —
          desde los 30 centros de datos <strong>EdgeNet</strong>,
          con seguridad, gobernanza y acompañamiento integral.
        </p>

        <div class="about-hero__badges reveal reveal--d2">
          <span class="about-hero__badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Datos en México
          </span>
          <span class="about-hero__badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            30 Centros EdgeNet
          </span>
          <span class="about-hero__badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Nube FLAI Soberana
          </span>
          <span class="about-hero__badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            14+ Estados activos
          </span>
        </div>

        <!-- CTAs -->
        <div class="about-hero__cta reveal reveal--d3">
          <a href="#contacto" class="btn btn--primary">
            Hablar con un experto →
          </a>
          <a href="#servicios" class="btn--ghost">
            Ver soluciones
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

      </div><!-- /about-hero__text -->

      <!-- ── Columna imagen ── -->
      <div class="about-hero__image reveal reveal--d2">

        <!-- Anillos decorativos -->
        <div class="about-hero__ring"   aria-hidden="true"></div>
        <div class="about-hero__ring-2" aria-hidden="true"></div>

        <!-- Píldora flotante 1 -->
        <div class="about-hero__stat-pill about-hero__stat-pill--1" aria-hidden="true">
          <div>
            <div class="stat-pill__num">30</div>
            <div class="stat-pill__label">Centros<br>de datos</div>
          </div>
        </div>

        <img src="assets/robotMayia.png" alt="Robot Mayia — IA soberana" class="about-hero__robot" />

        <!-- Píldora flotante 2 -->
        <div class="about-hero__stat-pill about-hero__stat-pill--2" aria-hidden="true">
          <div>
            <div class="stat-pill__num">14+</div>
            <div class="stat-pill__label">Estados<br>activos</div>
          </div>
        </div>

      </div><!-- /about-hero__image -->

    </div><!-- /about-hero__inner -->
  </div>
</section>

<!-- ── QUÉ HACEMOS ────────────────────────────────── -->
<section class="about-what">
  <div class="container about-what__inner">

    <!-- Columna izquierda: texto + lista -->
    <div class="reveal">
      <span class="tag">Qué hacemos</span>
      <h2 class="section-title">
        IA soberana,<br>hecha en México.
      </h2>
      <p class="section-sub">
        Acompañamos a empresas y gobiernos en cada paso de su adopción de
        Inteligencia Artificial: desde la estrategia hasta la operación diaria,
        con datos que nunca salen del país.
      </p>

      <ul class="about-what__list" role="list">

        <li class="about-what__item">
          <div class="about-what__icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <strong>Soberanía de datos</strong>
            Tu información permanece en suelo mexicano,
            dentro de los centros EdgeNet certificados.
          </div>
        </li>

        <li class="about-what__item">
          <div class="about-what__icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <strong>Acompañamiento integral</strong>
            Expertos dedicados desde el diseño de la solución
            hasta su operación y mejora continua.
          </div>
        </li>

        <li class="about-what__item">
          <div class="about-what__icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
          <div>
            <strong>Resultados medibles</strong>
            Implementaciones orientadas a reducir costos,
            automatizar procesos y generar valor real.
          </div>
        </li>

        <li class="about-what__item">
          <div class="about-what__icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <div>
            <strong>Presencia nacional</strong>
            14 estados activos y expansión continua
            a lo largo del territorio mexicano.
          </div>
        </li>

      </ul>
    </div><!-- /columna izquierda -->

    <!-- Columna derecha: stats cards sticky -->
    <div class="about-what__stats reveal reveal--d2">
      <div class="about-what__stats-grid carousel-snap">

        <div class="stat-card">
          <p class="stat-card__num">30</p>
          <p class="stat-card__title">Centros de datos</p>
          <p class="stat-card__desc">EdgeNet distribuidos en todo México.</p>
        </div>

        <div class="stat-card">
          <p class="stat-card__num">14+</p>
          <p class="stat-card__title">Estados activos</p>
          <p class="stat-card__desc">Con operaciones y presencia directa.</p>
        </div>

        <div class="stat-card">
          <p class="stat-card__num">FLAI</p>
          <p class="stat-card__title">Nube soberana</p>
          <p class="stat-card__desc">100% mexicana, segura y certificada.</p>
        </div>

        <div class="stat-card">
          <p class="stat-card__num">IA</p>
          <p class="stat-card__title">Para todos</p>
          <p class="stat-card__desc">Empresas, gobiernos y emprendedores.</p>
        </div>

      </div>
      <p class="carousel-hint">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        Desliza para ver más
      </p>
    </div>

  </div>
</section>

<!-- ── PILARES ────────────────────────────────────── -->
<section class="about-pillars">
  <div class="container">

    <div class="about-pillars__header reveal">
      <span class="tag">Nuestros pilares</span>
      <h2 class="section-title">Cómo lo logramos</h2>
      <p class="section-sub">
        Tres capacidades únicas que nos permiten llevar IA real a México.
      </p>
    </div>

    <div class="about-pillars__grid carousel-snap">

      <div class="pillar-card reveal" data-num="01">
        <div class="pillar-card__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <p class="pillar-card__num">01</p>
        <p class="pillar-card__title">Fabricamos</p>
        <p class="pillar-card__desc">
          Desarrollamos soluciones de IA a la medida de cada industria,
          con modelos entrenados con datos mexicanos y contexto local.
        </p>
      </div>

      <div class="pillar-card reveal reveal--d1" data-num="02">
        <div class="pillar-card__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
        </div>
        <p class="pillar-card__num">02</p>
        <p class="pillar-card__title">Adaptamos</p>
        <p class="pillar-card__desc">
          Integramos tecnologías de IA globales al entorno normativo,
          cultural y operativo de México sin perder rendimiento.
        </p>
      </div>

      <div class="pillar-card reveal reveal--d2" data-num="03">
        <div class="pillar-card__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </div>
        <p class="pillar-card__num">03</p>
        <p class="pillar-card__title">Comercializamos</p>
        <p class="pillar-card__desc">
          Hacemos la IA accesible: desde startups hasta dependencias
          de gobierno, con modelos de adopción graduales y sin riesgo.
        </p>
      </div>

    </div>
    <p class="carousel-hint">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      Desliza para ver más
    </p>
  </div>
</section>
`;