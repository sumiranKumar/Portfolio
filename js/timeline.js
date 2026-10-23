/**
 * Interactive Timeline & Scroll Milestones
 * Author: Sumiran Kumar - Full Stack Developer
 */

(function initTimelineModule() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const trackLine = document.getElementById('timeline-track-line');
  const timelineSection = document.getElementById('timeline');

  if (!timelineItems.length) return;

  // IntersectionObserver for revealing timeline items smoothly
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        const node = entry.target.querySelector('.timeline-node');
        if (node) {
          node.style.borderColor = 'var(--accent-lavender)';
          node.style.boxShadow = '0 0 24px rgba(230, 224, 240, 0.6)';
        }
      }
    });
  }, observerOptions);

  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.12}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`;
    timelineObserver.observe(item);
  });

  // SPA Route Activation Support
  function checkRouteActivation() {
    const route = (window.location.pathname + window.location.hash).toLowerCase();
    if (route.includes('timeline') || route.includes('journey')) {
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
          const node = item.querySelector('.timeline-node');
          if (node) {
            node.style.borderColor = 'var(--accent-lavender)';
            node.style.boxShadow = '0 0 24px rgba(230, 224, 240, 0.6)';
          }
        }, index * 80);
      });
      if (trackLine) {
        trackLine.style.background = 'var(--accent-lavender)';
      }
    }
  }

  window.checkTimelineRoute = checkRouteActivation;
  window.addEventListener('popstate', checkRouteActivation);
  window.addEventListener('hashchange', checkRouteActivation);
  checkRouteActivation();
})();
