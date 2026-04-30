/* ===== LOADER ===== */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1500);
});

/* ===== YEAR ===== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ===== NAVBAR SCROLL + ACTIVE SECTION ===== */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);

  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
}, { passive: true });

/* ===== HAMBURGER ===== */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  navLinksEl.classList.toggle('open', open);
});

navLinksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', false);
  navLinksEl.classList.remove('open');
}));

/* ===== THEME TOGGLE ===== */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
themeToggle.querySelector('i').className = savedTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';

themeToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.querySelector('i').className = next === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
});

/* ===== TYPING EFFECT ===== */
const roles = ['Frontend Developer', 'Full Stack Developer', 'AI Enthusiast'];
let roleIdx = 0, charIdx = 0, deleting = false;
const typingEl = document.getElementById('typingText');

function type() {
  const current = roles[roleIdx];
  typingEl.textContent = deleting ? current.slice(0, charIdx--) : current.slice(0, charIdx++);

  if (!deleting && charIdx > current.length) {
    deleting = true;
    setTimeout(type, 1800);
    return;
  }
  if (deleting && charIdx < 0) {
    deleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

/* ===== SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== SKILL BARS ===== */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

/* ===== PARTICLE CANVAS ===== */
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize, { passive: true });

function createParticles() {
  particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.4,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.1,
  }));
}
createParticles();

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  // Draw connecting lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ===== BACK TO TOP ===== */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== CONTACT FORM ===== */
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

function validate() {
  let valid = true;
  const fields = [
    { id: 'fname', errId: 'nameError', msg: 'Name is required.' },
    { id: 'femail', errId: 'emailError', msg: 'Valid email is required.', isEmail: true },
    { id: 'fsubject', errId: 'subjectError', msg: 'Subject is required.' },
    { id: 'fmessage', errId: 'messageError', msg: 'Message is required.' },
  ];
  fields.forEach(({ id, errId, msg, isEmail }) => {
    const el = document.getElementById(id);
    const err = document.getElementById(errId);
    const val = el.value.trim();
    const invalid = !val || (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val));
    err.textContent = invalid ? msg : '';
    if (invalid) valid = false;
  });
  return valid;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!validate()) return;

  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      formStatus.textContent = '✓ Message sent! I\'ll get back to you soon.';
      formStatus.className = 'form-status success';
      form.reset();
    } else {
      throw new Error();
    }
  } catch {
    formStatus.textContent = '✗ Something went wrong. Please email me directly.';
    formStatus.className = 'form-status error';
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
  }
});
