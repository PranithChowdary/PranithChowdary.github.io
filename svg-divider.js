// animations/svg-divider.js
// Animated draw-on SVG rule with dot accent
// Usage: import { mountAll } from './animations/svg-divider.js'; mountAll();

export function mountDivider(el) {
  if (!el) return;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 860 20');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.style.cssText = 'width:100%;height:20px;overflow:visible;display:block;';

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', '12'); line.setAttribute('y1', '10');
  line.setAttribute('x2', '848'); line.setAttribute('y2', '10');
  line.classList.add('divider-line');

  const dot1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot1.setAttribute('cx', '6'); dot1.setAttribute('cy', '10'); dot1.setAttribute('r', '3');
  dot1.classList.add('divider-dot');

  const dot2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot2.setAttribute('cx', '854'); dot2.setAttribute('cy', '10'); dot2.setAttribute('r', '3');
  dot2.classList.add('divider-dot');

  svg.appendChild(line);
  svg.appendChild(dot1);
  svg.appendChild(dot2);
  el.appendChild(svg);

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      line.style.animation = 'none';
      line.getBoundingClientRect();
      line.style.animation = '';
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  observer.observe(el);
}

export function mountAll() {
  document.querySelectorAll('[data-divider]').forEach(mountDivider);
}
