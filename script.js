/* Brew Haven — interactions */

// 1. Navbar scroll effect + sticky order button
const navbar = document.getElementById('navbar');
const stickyOrder = document.querySelector('.sticky-order');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    stickyOrder.classList.add('show');
  } else {
    navbar.classList.remove('scrolled');
    stickyOrder.classList.remove('show');
  }
});

// 2. Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// 3. Scroll-reveal animations using IntersectionObserver
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // small staggered delay for sibling items
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => observer.observe(el));

// 4. Add-to-cart micro-interaction
document.querySelectorAll('.card .btn-primary').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const original = btn.textContent;
    btn.textContent = '✓ Added';
    btn.style.background = '#005c3a';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
    }, 1400);
  });
});
const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const subscribeBtn = document.getElementById('subscribeBtn');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (email === '') {
      alert('Please enter your email!');
      return;
    }

    alert(`Subscribed with: ${email}`);

    subscribeBtn.textContent = '✓ Subscribed';
    subscribeBtn.style.background = '#005c3a';

    emailInput.value = '';
  });
}
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});