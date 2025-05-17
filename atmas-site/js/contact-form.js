document.addEventListener('DOMContentLoaded', () => {
  const form      = document.getElementById('contact-form');
  const feedback  = form.querySelector('.form-feedback');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Limpiar errores previos
    form.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    feedback.textContent = '';

    // Validación simple
    let valid = true;
    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name) {
      document.getElementById('error-name').textContent = 'El nombre es obligatorio.';
      valid = false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('error-email').textContent = 'Ingresa un email válido.';
      valid = false;
    }
    if (!message) {
      document.getElementById('error-message').textContent = 'El mensaje no puede quedar vacío.';
      valid = false;
    }

    if (!valid) return;

    // Simular envío
    try {
      // Aquí podrías usar fetch() a un endpoint real
      await new Promise(res => setTimeout(res, 1000));
      feedback.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
      form.reset();
    } catch (err) {
      feedback.textContent = 'Error al enviar. Intenta nuevamente más tarde.';
    }
  });
});
