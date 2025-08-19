// Limon.website — script.js
// Interacciones: cursor personalizado, scroll suave, animaciones de aparición y envío de formulario.

(function () {
  const $cursor = document.getElementById('cursor');
  const interactiveSelectors = 'a, button, input, textarea, select, [data-cursor]';
  let mouseX = 0;
  let mouseY = 0;
  let rafId = null;

  // Mover cursor personalizado
  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!rafId) rafId = requestAnimationFrame(updateCursor);
  }

  function updateCursor() {
    $cursor.style.left = mouseX + 'px';
    $cursor.style.top = mouseY + 'px';
    rafId = null;
  }

  function bindInteractiveHover() {
    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener('mouseenter', () => $cursor.classList.add('is-active'));
      el.addEventListener('mouseleave', () => $cursor.classList.remove('is-active'));
    });
  }

  function bindCursorVisibility() {
    document.addEventListener('mouseleave', () => $cursor.classList.add('is-hidden'));
    document.addEventListener('mouseenter', () => $cursor.classList.remove('is-hidden'));
  }

  // Scroll suave para anclas internas
  function bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId.length > 1) {
          const $target = document.querySelector(targetId);
          if ($target) {
            e.preventDefault();
            $target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  // Animaciones de aparición con IntersectionObserver
  function bindReveals() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  // Actualizar año del footer
  function setYear() {
    const y = new Date().getFullYear();
    const $y = document.getElementById('year');
    if ($y) $y.textContent = String(y);
  }

  // Configurar CTA de WhatsApp a partir del data attribute si se cambia el número
  function bindWhatsappCtas() {
    const links = [
      document.getElementById('cta-whatsapp'),
      document.getElementById('cta-whatsapp-2')
    ].filter(Boolean);
    links.forEach(($link) => {
      const href = $link.getAttribute('href') || '';
      if (href.includes('TU_NUMERO_DE_TELEFONO')) {
        // Mantener placeholder hasta que se edite tras el despliegue
      }
    });
  }

  // Envío del formulario sin recargar, usando endpoint (Formspark/Formbold)
  function bindForm() {
    const $form = document.getElementById('contact-form');
    if (!$form) return;
    const $status = document.getElementById('form-status');

    $form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const action = $form.getAttribute('action') || '';
      if (!action || action.includes('TU_ENDPOINT_AQUI')) {
        $status.textContent = 'Configura el endpoint del formulario en el atributo action del formulario.';
        return;
      }

      const formData = new FormData($form);
      $status.textContent = 'Enviando…';

      try {
        const res = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          window.location.href = './gracias.html';
        } else {
          const text = await res.text();
          throw new Error(text || 'Error desconocido');
        }
      } catch (err) {
        console.error(err);
        $status.textContent = 'No se pudo enviar. Intenta nuevamente o escríbenos por WhatsApp.';
      }
    });
  }

  // Inicialización
  function init() {
    window.addEventListener('mousemove', onMouseMove);
    bindInteractiveHover();
    bindCursorVisibility();
    bindSmoothScroll();
    bindReveals();
    bindForm();
    bindWhatsappCtas();
    setYear();
  }

  document.addEventListener('DOMContentLoaded', init);
})();


