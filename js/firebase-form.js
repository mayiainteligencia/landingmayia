import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

/* ── Helpers ─────────────────────────────────────────── */

function toUpperLive(input) {
  input.addEventListener('input', () => {
    const pos = input.selectionStart;
    input.value = input.value.toUpperCase();
    input.setSelectionRange(pos, pos);
  });
}

function digitsOnly(input) {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '').slice(0, 10);
  });
}

function feedback(el, msg, isError) {
  el.textContent = msg;
  el.className = 'form-feedback ' + (isError ? 'form-feedback--error' : 'form-feedback--ok');
}

function validate(d) {
  if (!d.Nombre)                    return 'El nombre es requerido.';
  if (!d.Correo)                    return 'El correo es requerido.';
  if (!d.Correo.includes('@'))      return 'El correo debe incluir @.';
  if (!d.Empresa)                   return 'La empresa es requerida.';
  if (!d.Evento)                    return 'El evento es requerido.';
  if (!d.Telefono)                  return 'El teléfono es requerido.';
  if (d.Telefono.length !== 10)     return 'El teléfono debe tener exactamente 10 dígitos.';
  return null;
}

/* ── Inicialización del formulario ───────────────────── */

const form      = document.getElementById('contacto-form');
const fbEl      = document.getElementById('form-feedback');
const submitBtn = form?.querySelector('.contacto__submit-btn');

if (form) {
  toUpperLive(document.getElementById('f-nombre'));
  toUpperLive(document.getElementById('f-empresa'));
  digitsOnly(document.getElementById('f-telefono'));

  const eventoSelect = document.getElementById('f-evento');
  eventoSelect.addEventListener('change', () => {
    eventoSelect.classList.toggle('select--chosen', eventoSelect.value !== '');
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      Nombre:   document.getElementById('f-nombre').value.trim(),
      Correo:   document.getElementById('f-correo').value.trim(),
      Empresa:  document.getElementById('f-empresa').value.trim(),
      Evento:   document.getElementById('f-evento').value.trim(),
      Telefono: document.getElementById('f-telefono').value.trim(),
    };

    const err = validate(data);
    if (err) { feedback(fbEl, err, true); return; }

    submitBtn.disabled    = true;
    submitBtn.textContent = 'Enviando…';

    try {
      await addDoc(collection(db, 'formClaude'), {
        ...data,
        creadoEn: serverTimestamp(),
      });
      feedback(fbEl, '¡Mensaje enviado! Te contactaremos pronto.', false);
      form.reset();
    } catch (ex) {
      feedback(fbEl, 'Ocurrió un error al enviar. Intenta de nuevo.', true);
      console.error(ex);
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Enviar mensaje';
    }
  });
}
