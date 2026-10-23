
(function initProjectsModule() {
  const projectsData = [
    {
      id: 'dhanu',
      title: 'Dhanu - React E-Commerce & Inventory Platform',
      category: 'react',
      categoryLabel: 'E-Commerce App',

      shortDesc: 'React-based e-commerce and inventory management platform featuring dynamic product catalogs, shopping cart functionality, product variants, and persistent browser storage using IndexedDB.',

      fullDesc: 'Dhanu is a personal e-commerce and inventory management web application built with React.js to provide an interactive shopping experience and efficient product management. The application uses reusable React components and dynamic state management to handle product listings, product details, shopping cart operations, and inventory-related functionality. IndexedDB serves as the browser-based database for storing and managing application data persistently, including product inventory and sales records where implemented. The project focuses on responsive UI design, structured data management, and practical implementation of modern frontend development concepts without requiring a traditional server-side database.',

      tags: [
        'React.js',
        'JavaScript',
        'HTML5',
        'CSS3',
        'IndexedDB',
        'Inventory Management',
        'E-Commerce',
        'Responsive Design'
      ],

      image: 'images/dhanu-icon.jpg',
      previewImage: 'images/dhanu-preview.jpg',

      iconSvg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>`,

      features: [
        'Component-based architecture using React.js and reusable UI components',
        'Dynamic product catalog with product details and browsing functionality',
        'Shopping cart management for handling selected products',
        'IndexedDB integration for persistent client-side data storage',
        'Inventory management for maintaining product quantities, colors, and sizes',
        'Structured database operations for adding, updating, retrieving, and removing records',
        'Separate inventory and sales data management using IndexedDB',
        'Responsive user interface for desktop, tablet, and mobile devices',
        'Dynamic state updates to keep product and shopping interfaces interactive',
        'Scalable frontend structure for extending e-commerce functionality'
      ],
      githubUrl: 'https://github.com/sumiranKumar/Dhanu-page',
      demoUrl: 'https://sumirankumar.github.io/Dhanu-page'
    },

    {
      id: 'taskflow',
      title: 'TaskFlow - To-Do List Application',
      category: 'FrontEnd',
      categoryLabel: 'Front End App',

      shortDesc: 'Interactive task management application with an intuitive user interface, dynamic task operations, and a responsive design for organizing daily activities efficiently.',

      fullDesc: 'TaskFlow is a modern To-Do List web application designed to simplify daily task management and improve productivity. Built using HTML, CSS, and JavaScript, it allows users to manage their tasks through a clean and interactive interface. The application focuses on usability, responsive layouts, and efficient task handling, providing a simple way to organize daily activities and track tasks.',

      tags: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Responsive Design',
        'DOM Manipulation'
      ],

      image: 'images/taskflow-icon.jpg',
      previewImage: 'images/taskflow-preview.jpg',

      iconSvg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3"></rect>
    <path d="m8 12 2 2 4-4"></path>
    <path d="M8 7h8"></path>
    <path d="M8 17h5"></path>
  </svg>`,

      features: [
        'Add and manage daily tasks through an interactive interface',
        'Mark tasks as completed and track task progress',
        'Delete tasks when they are no longer needed',
        'Responsive layout for desktop, tablet, and mobile devices',
        'Dynamic UI updates using JavaScript DOM manipulation',
        'Simple and intuitive task management experience'
      ],
      githubUrl: 'https://github.com/sumiranKumar/To-Do',
      demoUrl: 'https://sumirankumar.github.io/To-Do/'
    },
    // {
    //   id: 'aurasync',
    //   title: 'AuraSync - Atmospheric Metrics & Weather Dashboard',
    //   category: 'react',
    //   categoryLabel: 'React & APIs',
    //   shortDesc: 'An interactive climate and forecasting application displaying real-time weather analytics, 7-day outlooks, and radar metrics.',
    //   fullDesc: 'AuraSync provides users with detailed meteorological insights through clean, responsive visualizations. It interfaces with external RESTful weather APIs, dynamically calculates hourly trends, and visually renders UV indexes, humidity levels, and wind metrics with elegant glassmorphic components.',
    //   tags: ['React.js', 'Tailwind CSS', 'REST API', 'JavaScript', 'Async Fetch'],
    //   iconSvg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`,
    //   features: [
    //     'Live weather queries with debounced location search inputs',
    //     'Animated atmospheric condition indicators and weather icons',
    //     'Graceful error handling for offline status or invalid search queries',
    //     'Smooth responsive layout adapting seamlessly from phone to widescreen'
    //   ],
    //   githubUrl: 'https://github.com',
    //   demoUrl: 'https://example.com'
    // },
    // {
    //   id: 'apisentinel',
    //   title: 'API Sentinel - Microservices Health & Telemetry Monitor',
    //   category: 'node',
    //   categoryLabel: 'Node.js & APIs',
    //   shortDesc: 'A lightweight backend service monitoring API uptime, response latencies, and payload integrity with structured metric logging.',
    //   fullDesc: 'API Sentinel is a Node.js-powered monitoring suite designed to periodically probe external REST endpoints. It tracks response status codes, calculates rolling latency averages, and outputs telemetry data in clean JSON formats ready for dashboard consumption.',
    //   tags: ['Node.js', 'Express', 'REST APIs', 'Asynchronous JS', 'Monitoring'],
    //   iconSvg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`,
    //   features: [
    //     'Asynchronous health probe scheduler with configurable heartbeat intervals',
    //     'Automatic failure categorization (4xx client errors, 5xx server downtime)',
    //     'RESTful metric endpoints serving uptime records and latency logs',
    //     'Robust error handling and memory-efficient streaming pipelines'
    //   ],
    //   githubUrl: 'https://github.com',
    //   demoUrl: 'https://example.com'
    // },
    // {
    //   id: 'codestream',
    //   title: 'CodeStream - Real-Time Collaborative Code Sandbox',
    //   category: 'fullstack',
    //   categoryLabel: 'Full Stack App',
    //   shortDesc: 'Collaborative in-browser code editor allowing developers to write, inspect, and execute code snippets together in real time.',
    //   fullDesc: 'CodeStream pairs an intuitive React frontend with a Node.js event-driven backend. It features live multi-user editing synchronization, syntax highlighting for HTML/CSS/JS, an in-browser console preview, and one-click shareable code links.',
    //   tags: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'WebSockets'],
    //   iconSvg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    //   features: [
    //     'Real-time multi-user document synchronization with low latency',
    //     'Syntax-highlighted code editor with line numbering and indentation',
    //     'Safe client-side evaluation iframe sandbox for previewing scripts',
    //     'Shareable unique URL generator for project bookmarking'
    //   ],
    //   githubUrl: 'https://github.com',
    //   demoUrl: 'https://example.com'
    // },
    // {
    //   id: 'kineticon',
    //   title: 'Kinetic UI - Modern Luxe Design System & Components',
    //   category: 'react',
    //   categoryLabel: 'Frontend System',
    //   shortDesc: 'A rich library of accessible, performant UI components engineered with React, Tailwind CSS, and polished micro-animations.',
    //   fullDesc: 'Kinetic UI is a developer-centric design system featuring high-polish UI building blocks: modals, animated drawer menus, interactive toast dispatchers, form controls, and glowing cards. Designed with WAI-ARIA standards and seamless keyboard navigation.',
    //   tags: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Accessibility'],
    //   iconSvg: `<svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    //   features: [
    //     '100% accessible keyboard navigation and screen-reader tested components',
    //     'Pure Tailwind CSS styling without external runtime CSS bloat',
    //     'Configurable light/dark and custom luxury theme tokens',
    //     'Smooth CSS transform and cubic-bezier micro-interactions'
    //   ],
    //   githubUrl: 'https://github.com',
    //   demoUrl: 'https://example.com'
    // }
  ];

  const gridContainer = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.project-tab');
  const modalBackdrop = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  if (!gridContainer) return;

  // Render Projects Grid
  function renderProjects(filter = 'all') {
    gridContainer.innerHTML = '';

    const filtered = filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category.toLowerCase() === filter.toLowerCase());

    filtered.forEach((project) => {
      const cardWrapper = document.createElement('div');
      cardWrapper.className = 'project-card-wrapper';
      cardWrapper.dataset.id = project.id;

      cardWrapper.innerHTML = `
        <article class="project-card">
          <div class="project-thumb">
            <span class="project-badge-float">${project.categoryLabel}</span>
            ${project.previewImage || project.image ? `
              <div class="project-thumb-cover">
                <img src="${project.previewImage || project.image}" alt="${project.title}" class="project-card-cover-img" />
                <div class="project-thumb-overlay"></div>
                ${project.image ? `
                  <div class="project-icon-badge">
                    <img src="${project.image}" alt="${project.title} icon" />
                  </div>
                ` : ''}
              </div>
            ` : `
              <div class="project-thumb-preview">
                <div class="preview-bar">
                  <div class="preview-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span class="preview-chip">${project.tags[0]}</span>
                </div>
                <div class="preview-graphic">
                  ${project.iconSvg || ''}
                </div>
              </div>
            `}
          </div>

          <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDesc}</p>

            <div class="project-tags">
              ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>

            <div class="project-card-footer">
              <div class="project-links">
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" aria-label="View source code on GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" aria-label="View live project demo">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
              <button class="btn-details" data-open-modal="${project.id}">
                <span>Deep Dive</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </article>
      `;

      gridContainer.appendChild(cardWrapper);
      setup3DTilt(cardWrapper.querySelector('.project-card'));
    });

    // Attach modal open buttons
    gridContainer.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-open-modal');
        openProjectModal(id);
      });
    });
  }

  // 3D Perspective Tilt Effect
  function setup3DTilt(card) {
    if (!card) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angle (-8 to +8 degrees)
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // Open Project Modal
  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modalBackdrop || !modalContent) return;

    modalContent.innerHTML = `
      <span class="modal-category-tag">${project.categoryLabel}</span>
      <h2 class="modal-title">${project.title}</h2>

      <div class="modal-preview-box">
        ${project.previewImage || project.image
        ? `<img src="${project.previewImage || project.image}" alt="${project.title}" style="max-height: 180px; max-width: 90%; object-fit: contain; border-radius: var(--radius-md); box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid rgba(230, 224, 240, 0.25);">`
        : `<div style="color: var(--accent-lavender); transform: scale(1.6);">${project.iconSvg || ''}</div>`
      }
      </div>

      <h3 class="modal-section-title">Overview &amp; Architecture</h3>
      <p class="modal-text">${project.fullDesc}</p>

      <h3 class="modal-section-title">Key Engineering Highlights</h3>
      <ul class="modal-features-list">
        ${project.features.map(f => `<li>${f}</li>`).join('')}
      </ul>

      <h3 class="modal-section-title">Technology Stack</h3>
      <div class="modal-tags">
        ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span>View GitHub Repository</span>
        </a>
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span>Launch Live Demo</span>
        </a>
      </div>
    `;

    modalBackdrop.classList.add('active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Close Project Modal
  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Filter Event Listeners
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      e.currentTarget.classList.add('active');
      e.currentTarget.setAttribute('aria-selected', 'true');

      const filterVal = e.currentTarget.getAttribute('data-filter');
      renderProjects(filterVal);
    });
  });

  // Initial render
  renderProjects('all');
})();
