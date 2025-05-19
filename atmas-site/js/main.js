// Toggle menú principal
const navToggle = document.querySelector('.nav-toggle');
const navList   = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Toggle submenú en móviles
document.querySelectorAll('.nav-list .has-dropdown > a').forEach(link => {
  link.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // evita salto de ancla
      link.parentElement.classList.toggle('open');
    }
  });
});

// Cerrar menú al hacer click en un enlace (móvil)
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navList.classList.remove('open');
      document.querySelectorAll('.has-dropdown').forEach(li => li.classList.remove('open'));
    }
  });
});

// Smooth scroll para todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Carrusel de Testimonios
const carousel = document.querySelector('.testimonial-carousel');
const prevBtn  = document.querySelector('.testimonial-nav.prev');
const nextBtn  = document.querySelector('.testimonial-nav.next');

const scrollAmount = carousel.querySelector('.testimonial').offsetWidth + parseInt(getComputedStyle(carousel).gap);

// Mover a la izquierda
prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Mover a la derecha
nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
// Lightbox para Galería
const galleryGrid = document.querySelector('.gallery-grid');
if (galleryGrid) {
  // Crear overlay
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox-overlay');
  document.body.appendChild(lightbox);

  // Al hacer click en imagen
  galleryGrid.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
      lightbox.classList.add('open');
    });
  });

  // Cerrar lightbox
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });
}

// Acordeón FAQ
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const expanded = header.getAttribute('aria-expanded') === 'true';
    // Cerrar todos
    document.querySelectorAll('.accordion-header').forEach(h => {
      h.setAttribute('aria-expanded', 'false');
      h.nextElementSibling.style.maxHeight = null;
    });
    if (!expanded) {
      // Abrir este
      header.setAttribute('aria-expanded', 'true');
      const content = header.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
// Revelado al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});

// Smooth scroll para anclas locales
document.querySelectorAll('a[href*="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const url = new URL(link.href);
    if (url.pathname === window.location.pathname) {
      e.preventDefault();
      const target = document.getElementById(url.hash.slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
