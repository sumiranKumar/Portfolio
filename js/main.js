/**
 * Main Application Orchestrator
 * Author: Sumiran Kumar - Full Stack Developer
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scroll State
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Mobile Menu Toggle & Backdrop
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navBackdrop = document.getElementById('nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  function closeMobileNav() {
    if (navMenu) navMenu.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('open');
    if (mobileToggle) {
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      if (navBackdrop) navBackdrop.classList.toggle('open', isOpen);
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileNav);
    }

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  // 3. Clean HTML5 History API Router (No /#/)
  const routeMap = {
    '': 'hero',
    '/': 'hero',
    'home': 'hero',
    'hero': 'hero',
    'about': 'about',
    'skills': 'skills',
    'projects': 'projects',
    'terminal': 'terminal',
    'timeline': 'timeline',
    'journey': 'timeline',
    'contact': 'contact',
    'all': 'all'
  };

  const appPages = document.querySelectorAll('.app-page');

  function getCleanRoute() {
    // If user arrived with hash like /#/projects or #projects, clean it
    if (window.location.hash) {
      const hashPart = window.location.hash.replace(/^#\/?/, '').trim();
      if (hashPart) {
        const cleanPath = '/' + hashPart;
        window.history.replaceState(null, '', cleanPath);
        return hashPart.toLowerCase();
      }
    }
    // Standard pathname like /projects -> "projects"
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase().trim();
    return path;
  }

  function renderCurrentRoute() {
    const cleanRoute = getCleanRoute();
    const targetSectionId = routeMap[cleanRoute] || 'hero';

    if (cleanRoute === 'all') {
      document.body.classList.add('view-all-mode');
      appPages.forEach(p => p.classList.add('active'));
    } else {
      document.body.classList.remove('view-all-mode');
      appPages.forEach(p => {
        if (p.id === targetSectionId) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }

    // Highlight active nav item
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      const linkRoute = href.replace(/^#?\/?|\/+$/g, '').toLowerCase().trim();
      if (
        ((cleanRoute === '' || cleanRoute === 'home' || cleanRoute === 'hero') && (linkRoute === '' || linkRoute === 'home')) ||
        (cleanRoute === linkRoute) ||
        (cleanRoute === 'timeline' && linkRoute === 'journey') ||
        (cleanRoute === 'journey' && linkRoute === 'timeline')
      ) {
        link.classList.add('active');
      }
    });

    // Close mobile nav menu
    closeMobileNav();

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Route-specific reactive triggers
    if (targetSectionId === 'terminal') {
      const termInput = document.getElementById('terminal-input') || document.getElementById('term-input');
      if (termInput) setTimeout(() => termInput.focus(), 150);
    }
    if (targetSectionId === 'timeline' && typeof window.checkTimelineRoute === 'function') {
      window.checkTimelineRoute();
    }
  }

  // Handle browser back and forward buttons
  window.addEventListener('popstate', renderCurrentRoute);

  // Global click interceptor for internal routing links (No /#/)
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    // Ignore external links, mailto, tel, target="_blank", or download links
    if (
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      anchor.getAttribute('target') === '_blank' ||
      anchor.hasAttribute('download')
    ) {
      return;
    }

    // Check if it's an internal route link (e.g. "/", "/projects", "/about", or "#/projects")
    const clean = href.replace(/^#?\/?/, '').toLowerCase().trim();
    if (clean in routeMap || href === '/' || href.startsWith('/')) {
      e.preventDefault();
      const targetUrl = href.startsWith('/') ? href : ('/' + clean);
      if (window.location.pathname !== targetUrl) {
        window.history.pushState(null, '', targetUrl);
      }
      renderCurrentRoute();
    }
  });

  // Initial render on page load
  renderCurrentRoute();

  // 4. Hero Dynamic Typewriter Effect
  const typedTextEl = document.getElementById('typed-text');
  if (typedTextEl) {
    const roles = [
      'Full Stack Developer',
      'React & Modern UI Specialist',
      'Node.js & REST API Engineer',
      'Tailwind CSS Craftsman',
      'Software Engineer'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function typeLoop() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typedTextEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
      } else {
        typedTextEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at the end of word
        typingDelay = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 400;
      }

      setTimeout(typeLoop, typingDelay);
    }

    setTimeout(typeLoop, 500);
  }

  // 5. Stat Counter Animation
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsCounted) {
        statsCounted = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'), 10) || 0;
          const duration = 1600; // ms
          const step = Math.max(Math.floor(duration / target), 15);
          let current = 0;

          const timer = setInterval(() => {
            current += Math.ceil(target / (duration / step));
            if (current >= target) {
              stat.textContent = target;
              clearInterval(timer);
            } else {
              stat.textContent = current;
            }
          }, step);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.hero-stats-row');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // 6. Skills Category Filter Interactivity
  const skillTabs = document.querySelectorAll('.filter-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const cat = tab.getAttribute('data-category');

      skillCards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-skill-cat') === cat) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 7. Footer Dynamic Current Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
