/**
 * SANDIK TECHNOLOGIES — MAIN JS
 * Handles: navigation, scroll effects, mobile menu,
 *          reveal animations, toast notifications
 */

(function () {
  'use strict';

  /* ── HEADER SCROLL EFFECT ─────────────────── */
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── SCROLL-TO-TOP BUTTON ─────────────────── */
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── MOBILE MENU ──────────────────────────── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);

      // Animate hamburger lines
      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity = '';
        });
      }
    });
  }

  /* ── ACTIVE NAV LINK ──────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && href.includes(currentPage)) {
      link.classList.add('active');
    }
  });

  /* ── SCROLL REVEAL ────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show all
    revealEls.forEach(el => el.classList.add('revealed'));
  }

  /* ── COUNTER ANIMATION ────────────────────── */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target || el.textContent);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  const counterEls = document.querySelectorAll('.count-up[data-target]');
  if (counterEls.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterEls.forEach(el => counterObserver.observe(el));
  }

  /* ── TOAST NOTIFICATIONS ──────────────────── */
  window.showToast = function (message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'toast show';
    if (type === 'success') toast.style.borderLeftColor = '#16a34a';
    else if (type === 'error') toast.style.borderLeftColor = '#dc2626';
    else toast.style.borderLeftColor = 'var(--red)';

    setTimeout(() => {
      toast.classList.remove('show');
      toast.style.borderLeftColor = '';
    }, 4500);
  };

  /* ── SMOOTH ANCHOR SCROLL ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── FORM VALIDATION ──────────────────────── */
  window.validateForm = function (formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    let valid = true;
    form.querySelectorAll('[required]').forEach(input => {
      input.style.borderColor = '';
      if (!input.value.trim()) {
        input.style.borderColor = '#dc2626';
        valid = false;
      }
    });

    const emailInputs = form.querySelectorAll('[type="email"]');
    emailInputs.forEach(input => {
      if (input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        input.style.borderColor = '#dc2626';
        valid = false;
      }
    });

    return valid;
  };

  /* ── CONTACT FORM SUBMIT ──────────────────── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm('contactForm')) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }
      // Show success (in real app, send AJAX request)
      const successEl = document.getElementById('contactSuccess');
      if (successEl) successEl.style.display = 'block';
      contactForm.reset();
      showToast('Message sent! We\'ll respond within one business day.', 'success');
      setTimeout(() => { if (successEl) successEl.style.display = 'none'; }, 6000);
    });
  }

  /* ── CAREER FORM SUBMIT ───────────────────── */
  const careerForm = document.getElementById('careerForm');
  if (careerForm) {
    careerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm('careerForm')) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }
      const successEl = document.getElementById('careerSuccess');
      if (successEl) successEl.style.display = 'block';
      careerForm.reset();
      showToast('Application submitted! We\'ll be in touch.', 'success');
      setTimeout(() => { if (successEl) successEl.style.display = 'none'; }, 6000);
    });
  }

  /* ── JOB ACCORDION ────────────────────────── */
  document.querySelectorAll('.job-header').forEach(header => {
    header.addEventListener('click', function () {
      const card = this.closest('.job-card');
      const isActive = card.classList.contains('active');
      document.querySelectorAll('.job-card').forEach(c => c.classList.remove('active'));
      if (!isActive) card.classList.add('active');
    });
  });

  /* ── ENQUIRE PRODUCT ──────────────────────── */
  window.enquireProduct = function (modelName) {
    // Set product value in contact form if on contact page
    const prodSelect = document.getElementById('productInterest');
    if (prodSelect) {
      // Try to match
      const options = prodSelect.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].text.toLowerCase().includes(modelName.toLowerCase().slice(0, 5))) {
          prodSelect.value = options[i].value;
          break;
        }
      }
    }
    // Navigate to contact
    window.location.href = '../html/contact.html';
  };

  /* ── LAZY LOAD IMAGES ─────────────────────── */
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imgObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
  }

  /* ── CURRENT YEAR ─────────────────────────── */
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

})();
