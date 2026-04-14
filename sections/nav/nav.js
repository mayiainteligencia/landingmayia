/* ================================================
   SECCIÓN: NAV
   Barra de navegación fija
   ================================================ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.nav = /* html */`
<header>
  <nav class="nav" aria-label="Navegación principal">
    <div class="container nav__inner">

      <!-- Logo -->
      <a href="#nosotros" class="nav__logo" aria-label="Mayia — Inicio">
        <img
          src="assets/mayiaLogo.png"
          alt="Mayia"
          onerror="this.style.display='none'"
        />
        <span class="nav__logo-text">mayia<span>.</span></span>
      </a>

      <!-- Links desktop -->
      <ul class="nav__links" role="list">
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#pildoras">Píldoras IA</a></li>
        <li><a href="#hubs">Hub Digitales</a></li>
        <li><a href="#academia">Academia</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

      <!-- CTA desktop -->
      <div class="nav__cta">
        <a href="#contacto" class="btn btn--primary">Contáctanos</a>
      </div>

      <!-- Hamburger mobile -->
      <button
        class="nav__hamburger"
        aria-label="Abrir menú"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </nav>

  <!-- Menú mobile desplegable -->
  <nav class="nav__mobile" aria-label="Menú móvil">
    <a href="#nosotros">Nosotros</a>
    <a href="#pildoras">Píldoras IA</a>
    <a href="#hubs">Hub Digitales</a>
    <a href="#academia">Academia</a>
    <a href="#contacto">Contacto</a>
    <a href="#contacto" class="btn btn--primary" style="margin-top:12px">Contáctanos</a>
  </nav>
</header>
`;
