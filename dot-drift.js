// animations/dot-drift.js
// Drifting dot field for hero background
// Usage: import { mount } from './animations/dot-drift.js'; mount(canvas);

export function mount(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, dots, raf;
  const COUNT = 60;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeDot() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.5 + 0.15,
    };
  }

  function init() {
    resize();
    dots = Array.from({ length: COUNT }, makeDot);
  }

  function getAccent() {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--accent').trim() || '#1a9e75';
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const color = getAccent();
    dots.forEach(d => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = d.opacity;
      ctx.fill();

      if (!prefersReduced.matches) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -10) d.x = W + 10;
        if (d.x > W + 10) d.x = -10;
        if (d.y < -10) d.y = H + 10;
        if (d.y > H + 10) d.y = -10;
      }
    });
    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(draw);
  }

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { if (!raf) draw(); }
    else { cancelAnimationFrame(raf); raf = null; }
  });
  observer.observe(canvas);

  window.addEventListener('resize', () => { resize(); });
  init();
  draw();

  return () => { cancelAnimationFrame(raf); observer.disconnect(); };
}
