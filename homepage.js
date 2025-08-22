// ===== Mobile Navbar Toggle =====
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

navbarToggle.addEventListener('click', function() {
  navbarLinks.classList.toggle('open');
  navbarToggle.setAttribute('aria-expanded', navbarLinks.classList.contains('open'));
});

Array.from(navbarLinks.getElementsByTagName('a')).forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 700) {
      navbarLinks.classList.remove('open');
      navbarToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ===== Smooth Scroll for Anchors =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }
  });
});

// ===== Section Reveal on Scroll =====
function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('resize', revealSections);
document.addEventListener('DOMContentLoaded', function() {
  revealSections();
  setTimeout(revealSections, 250);
});

// ===== Fix body width on resize =====
window.addEventListener('resize', function() {
  document.body.style.width = '100vw';
  document.documentElement.style.width = '100vw';
});

// ===== Modal Elements =====
const modal = document.getElementById('authModal');
const closeModalBtn = document.getElementById('closeModal');

// Open modal on Search button
document.querySelectorAll('#search-form button').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
  });
});

// Close modal on close button
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ===== AI Tool Buttons Alert =====
document.querySelectorAll('.featured-tools .btn-primary').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Final product coming soon');
  });
});

// ===== Search Form Alert (Optional for testing) =====
document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const value = this.querySelector('input').value.trim();
  if (value) {
    alert('Searching for: ' + value);
  }
});
