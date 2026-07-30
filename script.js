/* ============ NAV: style change on scroll ============ */
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');

function updateNav(){
  if (window.scrollY > 40){
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNav, { passive:true });
updateNav();

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ============ SIGNATURE: draw the learning path on load, light up stops on scroll ============ */
const pathTrack = document.getElementById('pathTrack');
const pathStops = document.querySelectorAll('.path-stop');

// Draw the path shortly after load
window.addEventListener('load', () => {
  setTimeout(() => pathTrack.classList.add('drawn'), 300);
});

// Light up each stop as it enters the viewport
const stopObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.4 });

pathStops.forEach((stop, i) => {
  // stagger the reveal slightly
  stop.style.transitionDelay = `${i * 0.08}s`;
  stopObserver.observe(stop);
});

/* Fallback: reveal stops immediately if already in view on load (e.g. wide screens) */
window.addEventListener('load', () => {
  pathStops.forEach(stop => {
    const rect = stop.getBoundingClientRect();
    if (rect.top < window.innerHeight) stop.classList.add('active');
  });
});

/* ============ CONTACT FORM: validation ============ */
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');
const contactMsg = document.getElementById('contactMsg');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !isEmailValid || !message){
    contactMsg.textContent = "Please fill in every field with a valid email.";
    contactMsg.classList.add('error');
    return;
  }

  contactMsg.classList.remove('error');
  contactMsg.textContent = `Thanks, ${name} — this is a demo form, so nothing was actually sent yet.`;
  contactForm.reset();
});
