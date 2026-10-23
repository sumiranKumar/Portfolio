/**
 * Interactive Background Particle & Constellation Canvas
 * Responsive to cursor movement with dynamic proximity physics
 * Tailored with lavender (#e6e0f0) and platinum (#e5e4e2) particles
 */

(function initConstellationCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Mouse interaction state
  const mouse = {
    x: null,
    y: null,
    radius: 140, // Proximity detection radius
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Handle window resizing
  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();
  }

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 150);
  });

  // Particle Class
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 2 + 0.8;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.alpha = Math.random() * 0.5 + 0.25;
      
      // Color variety between soft lavender (#e6e0f0) and platinum (#e5e4e2)
      this.color = Math.random() > 0.4 ? '230, 224, 240' : '229, 228, 226';
    }

    update() {
      // Natural float
      this.x += this.vx;
      this.y += this.vy;

      // Bounce on edges
      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse proximity interaction (smooth repel & return)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = (dx / distance) * force * 4.5;
          const directionY = (dy / distance) * force * 4.5;
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${this.color}, 0.5)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // Particle pool
  let particles = [];
  function initParticles() {
    particles = [];
    // Adjust density based on screen resolution
    const particleCount = Math.floor((width * height) / 14000);
    const count = Math.min(Math.max(particleCount, 40), 95);

    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  // Draw connecting constellation lines
  function connectParticles() {
    const maxDistance = 115;
    const maxDistanceSq = maxDistance * maxDistance;

    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistanceSq) {
          const dist = Math.sqrt(distSq);
          const opacity = (1 - dist / maxDistance) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(230, 224, 240, ${opacity})`;
          ctx.lineWidth = 0.85;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }

      // Connect particle to mouse if within proximity
      if (mouse.x !== null && mouse.y !== null) {
        const dx = particles[a].x - mouse.x;
        const dy = particles[a].y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const opacity = (1 - dist / mouse.radius) * 0.28;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(230, 224, 240, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    connectParticles();
    animationFrameId = requestAnimationFrame(animate);
  }

  // Initialize and run
  initParticles();
  animate();

  // Performance pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate();
    }
  });
})();
