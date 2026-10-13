// Comportamiento del menú en teléfonos y resaltado de la sección actual.
const botonMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav');
const enlaces = document.querySelectorAll('.nav a');

botonMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('open');
  botonMenu.setAttribute('aria-expanded', String(abierto));
  botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  botonMenu.textContent = abierto ? '✕' : '☰';
});

enlaces.forEach(enlace => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('open');
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.setAttribute('aria-label', 'Abrir menú');
    botonMenu.textContent = '☰';
  });
});

const observer = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (!entrada.isIntersecting) return;
    enlaces.forEach(enlace => enlace.classList.toggle('active', enlace.getAttribute('href') === '#' + entrada.target.id));
  });
}, { rootMargin: '-25% 0px -60% 0px' });
document.querySelectorAll('main section[id]').forEach(seccion => observer.observe(seccion));

document.getElementById('year').textContent = new Date().getFullYear();
