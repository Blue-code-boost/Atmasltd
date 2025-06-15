
// Script de envío y validación 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const feedback = form.querySelector('.form-feedback');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Limpiar mensajes anteriores
    form.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    feedback.textContent = '';

    // Validación básica
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    if (!name) {
      document.getElementById('error-name').textContent = 'Name is required.';
      valid = false;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('error-email').textContent = 'Please enter a valid email.';
      valid = false;
    }

    if (!message) {
      document.getElementById('error-message').textContent = 'Message cannot be empty.';
      valid = false;
    }

    if (!valid) return;

    // Enviar a EmailJS
    emailjs.sendForm('service_4oxdhey', 'template_69aumqo', form)
      .then(() => {
        feedback.textContent = 'Message sent successfully!';
        feedback.style.color = 'green';
        form.reset();
      }, (error) => {
        console.error('EmailJS Error:', error);
        feedback.textContent = 'Error sending message. Please try again later.';
        feedback.style.color = 'red';
      });
  });
});