/* ================================================
   SECCIÓN: CONTACTO + REDES SOCIALES
   Firebase Firestore → colección: formClaude
   ================================================ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.contacto = /* html */`
<section id="contacto" class="contacto">

  <!-- Fondo decorativo -->
  <div class="contacto__bg" aria-hidden="true">
    <div class="contacto__orb contacto__orb--1"></div>
    <div class="contacto__orb contacto__orb--2"></div>
    <div class="contacto__grid-lines"></div>
  </div>

  <div class="container">

    <!-- Encabezado -->
    <div class="contacto__header reveal">
      <span class="tag tag--light">Contacto</span>
      <h2 class="contacto__title">
        ¿Listo para transformar<br>tu empresa con <span>IA soberana</span>?
      </h2>
      <p class="contacto__sub">
        Cuéntanos sobre tu proyecto y te contactamos en menos de 24 horas.
      </p>
    </div>

    <!-- Tarjeta del formulario -->
    <div class="contacto__card reveal">

      <!-- Indicador de pasos -->
      <div class="form-steps" aria-hidden="true">
        <div class="form-step form-step--active" data-step="1">
          <div class="form-step__dot"><span>1</span></div>
          <div class="form-step__label">Tus datos</div>
        </div>
        <div class="form-step__line"></div>
        <div class="form-step" data-step="2">
          <div class="form-step__dot"><span>2</span></div>
          <div class="form-step__label">Evento</div>
        </div>
        <div class="form-step__line"></div>
        <div class="form-step" data-step="3">
          <div class="form-step__dot"><span>✓</span></div>
          <div class="form-step__label">Listo</div>
        </div>
      </div>

      <form id="contacto-form" class="contacto__form" novalidate>

        <!-- PASO 1 -->
        <div class="form-page form-page--active" data-page="1">
          <div class="form-row">
            <div class="form-group">
              <label for="f-nombre">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                Nombre
              </label>
              <input type="text" id="f-nombre" name="Nombre" placeholder="Tu nombre completo" autocomplete="name" />
            </div>
            <div class="form-group">
              <label for="f-correo">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Correo
              </label>
              <input type="email" id="f-correo" name="Correo" placeholder="tu@correo.com" autocomplete="email" inputmode="email" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="f-empresa">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                Empresa
              </label>
              <input type="text" id="f-empresa" name="Empresa" placeholder="Tu empresa" />
            </div>
            <div class="form-group">
              <label for="f-telefono">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.9 3.45 2 2 0 0 1 3.87 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Teléfono
              </label>
              <input type="tel" id="f-telefono" name="Telefono" placeholder="10 dígitos" inputmode="numeric" maxlength="10" />
            </div>
          </div>
          <div class="form-nav">
            <button type="button" class="btn-next" id="btn-next-1">
              Siguiente
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <!-- PASO 2 -->
        <div class="form-page" data-page="2">
          <div class="form-group form-group--full">
            <label for="f-evento">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Evento de interés
            </label>
            <select id="f-evento" name="Evento">
              <option value="" disabled selected>Selecciona un evento</option>
              <option value="MEXICO CITY | CLAUDE IMPACT LAB">Mexico City | Claude Impact Lab</option>
            </select>
          </div>

          <!-- Tarjeta de vista previa del evento -->
          <div class="evento-card" id="evento-preview" style="display:none">
            <div class="evento-card__badge">Próximo evento</div>
            <div class="evento-card__title">Claude Impact Lab</div>
            <div class="evento-card__loc">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Mexico City, MX
            </div>
          </div>

          <div class="form-nav form-nav--double">
            <button type="button" class="btn-back" id="btn-back-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
              Atrás
            </button>
            <button type="submit" class="btn-submit" id="btn-submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9l20-7z"/></svg>
              Enviar
            </button>
          </div>
        </div>

        <!-- PASO 3: Éxito -->
        <div class="form-page form-page--success" data-page="3">
          <div class="success-anim">
            <div class="success-circle">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 class="success-title">¡Mensaje enviado!</h3>
            <p class="success-msg">Te contactaremos en menos de 24 horas.<br>¡Gracias por tu interés en Mayia!</p>
          </div>
        </div>

        <p class="form-feedback" id="form-feedback" aria-live="polite"></p>
      </form>
    </div>

    <!-- Separador -->
    <div class="contacto__divider" aria-hidden="true">
      <span>Síguenos</span>
    </div>

    <!-- Redes sociales -->
    <nav class="contacto__socials reveal" aria-label="Redes sociales de Mayia">

      <a href="https://mayia.mx" class="social-card" aria-label="Visita el sitio web de Mayia" target="_blank" rel="noopener noreferrer">
        <div class="social-card__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <span class="social-card__name">mayia.mx</span>
        <span class="social-card__arrow">↗</span>
      </a>

      <a href="https://www.instagram.com/mayia.inteligencia.artificial/" class="social-card" aria-label="Síguenos en Instagram" target="_blank" rel="noopener noreferrer">
        <div class="social-card__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </div>
        <span class="social-card__name">Instagram</span>
        <span class="social-card__arrow">↗</span>
      </a>

      <a href="https://www.facebook.com/MAYiaInteligenciaArtificial/" class="social-card" aria-label="Síguenos en Facebook" target="_blank" rel="noopener noreferrer">
        <div class="social-card__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </div>
        <span class="social-card__name">Facebook</span>
        <span class="social-card__arrow">↗</span>
      </a>

      <a href="https://www.linkedin.com/company/mayia-edgenet/posts/?feedView=all" class="social-card" aria-label="Síguenos en LinkedIn" target="_blank" rel="noopener noreferrer">
        <div class="social-card__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </div>
        <span class="social-card__name">LinkedIn</span>
        <span class="social-card__arrow">↗</span>
      </a>

    </nav>

    <!-- Footer strip -->
    <div class="contacto__footer-strip">
      <img src="assets/mayiaLogoBlanco.png" alt="Mayia" class="contacto__footer-logo" />
      <p class="contacto__copy">© 2026 MAYIA · Todos los derechos reservados</p>
    </div>

  </div>
</section>
`;

/* ================================================
   LÓGICA: Firebase + validación + pasos
   ================================================ */
(function initContacto() {
  // ── Espera a que el DOM esté listo ──────────────
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {

    /* ---------- Firebase ---------- */
    // Importa desde CDN modular
    const firebaseScripts = [
      'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
      'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'
    ];

    let firebaseApp, db;

    Promise.all(firebaseScripts.map(src => {
      return import(src);
    })).then(([{ initializeApp }, { getFirestore, collection, addDoc, serverTimestamp }]) => {

      const firebaseConfig = {
        apiKey: "AIzaSyCrERyyEK1Z_6Brr51K4DDq5biM8lb_9C0",
        authDomain: "mayialandingpage.firebaseapp.com",
        projectId: "mayialandingpage",
        storageBucket: "mayialandingpage.firebasestorage.app",
        messagingSenderId: "254360878383",
        appId: "1:254360878383:web:cc9e7e69e5a4855c1db5da",
        measurementId: "G-FV40WWD05P"
      };

      firebaseApp = initializeApp(firebaseConfig);
      db = getFirestore(firebaseApp);

      /* ---------- Referencias DOM ---------- */
      const form      = document.getElementById('contacto-form');
      const feedback  = document.getElementById('form-feedback');
      const btnNext1  = document.getElementById('btn-next-1');
      const btnBack2  = document.getElementById('btn-back-2');
      const btnSubmit = document.getElementById('btn-submit');
      const selectEvento = document.getElementById('f-evento');
      const eventoPreview = document.getElementById('evento-preview');
      const pages     = document.querySelectorAll('.form-page');
      const steps     = document.querySelectorAll('.form-step');

      let currentPage = 1;

      /* ---------- Navegación entre pasos ---------- */
      function goToPage(n) {
        pages.forEach(p => p.classList.remove('form-page--active'));
        document.querySelector(`.form-page[data-page="${n}"]`).classList.add('form-page--active');

        steps.forEach((s, i) => {
          s.classList.toggle('form-step--active', i + 1 === n);
          s.classList.toggle('form-step--done', i + 1 < n);
        });

        currentPage = n;
      }

      /* ---------- Validación paso 1 ---------- */
      function validatePage1() {
        const nombre  = document.getElementById('f-nombre').value.trim();
        const correo  = document.getElementById('f-correo').value.trim();
        const empresa = document.getElementById('f-empresa').value.trim();
        const tel     = document.getElementById('f-telefono').value.trim();

        if (!nombre)  return showError('Por favor ingresa tu nombre.');
        if (!correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo))
          return showError('Ingresa un correo válido.');
        if (!empresa) return showError('Por favor ingresa tu empresa.');
        if (!tel || tel.length !== 10) return showError('El teléfono debe tener 10 dígitos.');

        clearFeedback();
        return true;
      }

      /* ---------- Evento preview ---------- */
      selectEvento.addEventListener('change', () => {
        if (selectEvento.value) {
          selectEvento.classList.add('select--chosen');
          eventoPreview.style.display = 'block';
          eventoPreview.classList.add('evento-card--visible');
        }
      });

      /* ---------- Botones de navegación ---------- */
      btnNext1.addEventListener('click', () => {
        if (validatePage1()) goToPage(2);
      });

      btnBack2.addEventListener('click', () => goToPage(1));

      /* ---------- Envío del formulario ---------- */
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const evento = selectEvento.value;
        if (!evento) return showError('Selecciona un evento.');

        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `<span class="spinner"></span> Enviando…`;

        try {
          await addDoc(collection(db, 'formClaude'), {
            Nombre:    document.getElementById('f-nombre').value.trim(),
            Correo:    document.getElementById('f-correo').value.trim(),
            Empresa:   document.getElementById('f-empresa').value.trim(),
            Telefono:  document.getElementById('f-telefono').value.trim(),
            Evento:    evento,
            timestamp: serverTimestamp()
          });

          goToPage(3); // Mostrar pantalla de éxito

        } catch (err) {
          console.error('Firebase error:', err);
          showError('Hubo un error al enviar. Inténtalo de nuevo.');
          btnSubmit.disabled = false;
          btnSubmit.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9l20-7z"/></svg> Enviar`;
        }
      });

      /* ---------- Helpers ---------- */
      function showError(msg) {
        feedback.textContent = msg;
        feedback.className = 'form-feedback form-feedback--error';
      }
      function clearFeedback() {
        feedback.textContent = '';
        feedback.className = 'form-feedback';
      }

    }).catch(err => {
      console.error('Error cargando Firebase:', err);
    });

  });
})();