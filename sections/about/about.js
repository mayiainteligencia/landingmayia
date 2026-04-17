/* ================================================
   SECCIÓN: ABOUT — Quiénes somos
   ================================================ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.about = /* html */`

<!-- ── HERO ──────────────────────────────────── -->
<section id="nosotros" class="about-hero">
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
  <div class="about-hero__glow"  aria-hidden="true"></div>

  <div class="container">
    <div class="about-hero__inner">

      <!-- Columna texto -->
      <div class="about-hero__text">
        <div class="about-hero__eyebrow reveal">
          <img src="assets/flai.png"               alt="FLAI"            class="about-hero__eyebrow-logo about-hero__eyebrow-logo--flai" />
          <span class="about-hero__eyebrow-sep" aria-hidden="true"></span>
          <img src="assets/LOGO-SUPER.png"  alt="EdgeNet"         class="about-hero__eyebrow-logo" />
          <span class="about-hero__eyebrow-sep" aria-hidden="true"></span>
          <img src="assets/hechoMexicoRojo.PNG"    alt="Hecho en México" class="about-hero__eyebrow-logo" />
        </div>

        <h1 class="about-hero__title reveal reveal--d1">
          Inteligencia Artificial<br>
          que <em>transforma</em><br>
          innovación en resultados.
        </h1>

        <p class="about-hero__desc reveal reveal--d2">
          Democratizamos el acceso a la Inteligencia Artificial en México.
          Fabricamos, adaptamos y comercializamos soluciones de IA respaldadas
          por <strong style="color:#fff">FLAI</strong> — nuestra nube soberana mexicana —
          desde los 30 centros de datos <strong style="color:#fff">EdgeNet</strong>,
          con seguridad, gobernanza y acompañamiento integral para empresas y gobiernos.
        </p>

        <div class="about-hero__cta reveal reveal--d3">
          <a href="#contacto" class="btn btn--primary">
            Hablar con un experto →
          </a>
        </div>
      </div>

      <!-- Columna imagen -->
      <div class="about-hero__image reveal reveal--d2">
        <img src="assets/robotMayia.png" alt="Robot Mayia" class="about-hero__robot" />
      </div>

    </div>
  </div>
</section>

<!-- ── QUÉ HACEMOS ────────────────────────────── -->
<section class="about-what">
  <div class="container about-what__inner">

    <!-- Texto -->
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

      <ul class="about-what__list">
        <li class="about-what__item">
          <span>
            <strong>Soberanía de datos</strong> — Tu información permanece
            en suelo mexicano, dentro de los centros EdgeNet.
          </span>
        </li>
        <li class="about-what__item">
          <span>
            <strong>Acompañamiento integral</strong> — Expertos dedicados
            desde el diseño de la solución hasta su operación continua.
          </span>
        </li>
        <li class="about-what__item">
          <span>
            <strong>Resultados medibles</strong> — Implementaciones orientadas
            a reducir costos, automatizar procesos y generar valor real.
          </span>
        </li>
        <li class="about-what__item">
          <span>
            <strong>Presencia nacional</strong> — 14 estados activos y
            expansión continua a lo largo del territorio.
          </span>
        </li>
      </ul>
    </div>

    <!-- Visual de números -->
    <div class="reveal reveal--d2">
      <div class="about-pillars__grid" style="grid-template-columns:1fr 1fr; gap:14px;">
        <div class="pillar-card">
          <p class="pillar-card__num">30</p>
          <p class="pillar-card__title">Centros de datos</p>
          <p class="pillar-card__desc">EdgeNet distribuidos en todo México.</p>
        </div>
        <div class="pillar-card">
          <p class="pillar-card__num">14+</p>
          <p class="pillar-card__title">Estados activos</p>
          <p class="pillar-card__desc">Con operaciones y presencia directa.</p>
        </div>
        <div class="pillar-card">
          <p class="pillar-card__num">FLAI</p>
          <p class="pillar-card__title">Nube soberana</p>
          <p class="pillar-card__desc">100% mexicana, segura y certificada.</p>
        </div>
        <div class="pillar-card">
          <p class="pillar-card__num">IA</p>
          <p class="pillar-card__title">Para todos</p>
          <p class="pillar-card__desc">Empresas, gobiernos y emprendedores.</p>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ── PILARES ────────────────────────────────── -->
<section class="about-pillars">
  <div class="container">
    <div class="about-pillars__header reveal">
      <span class="tag">Nuestros pilares</span>
      <h2 class="section-title">Cómo lo logramos</h2>
      <p class="section-sub">
        Tres capacidades únicas que nos permiten llevar IA real a México.
      </p>
    </div>

    <div class="about-pillars__grid">
      <div class="pillar-card reveal">
        <p class="pillar-card__num">01</p>
        <p class="pillar-card__title">Fabricamos</p>
        <p class="pillar-card__desc">
          Desarrollamos soluciones de IA a la medida de cada industria,
          con modelos entrenados con datos mexicanos y contexto local.
        </p>
      </div>
      <div class="pillar-card reveal reveal--d1">
        <p class="pillar-card__num">02</p>
        <p class="pillar-card__title">Adaptamos</p>
        <p class="pillar-card__desc">
          Integramos tecnologías de IA globales al entorno normativo,
          cultural y operativo de México sin perder rendimiento.
        </p>
      </div>
      <div class="pillar-card reveal reveal--d2">
        <p class="pillar-card__num">03</p>
        <p class="pillar-card__title">Comercializamos</p>
        <p class="pillar-card__desc">
          Hacemos la IA accesible: desde startups hasta dependencias
          de gobierno, con modelos de adopción graduales y sin riesgo.
        </p>
      </div>
    </div>
  </div>
</section>
`;
