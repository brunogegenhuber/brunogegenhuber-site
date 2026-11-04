// Cursor-responsive portrait colors, progressive enhancement for pointer devices.
(() => {
  function init() {
    const portrait = document.querySelector('.portrait-frame');
    if (!portrait || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    portrait.addEventListener('pointermove', (event) => {
      const box = portrait.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
      const y = Math.min(1, Math.max(0, (event.clientY - box.top) / box.height));
      const hue = Math.round(12 + x * 210 + y * 32);
      portrait.style.setProperty('--pointer-x', `${Math.round(x * 100)}%`);
      portrait.style.setProperty('--pointer-y', `${Math.round(y * 100)}%`);
      portrait.style.setProperty('--tint-a', `hsl(${hue} 88% 59% / .90)`);
      portrait.style.setProperty('--tint-b', `hsl(${(hue + 120) % 360} 76% 61% / .80)`);
      portrait.style.setProperty('--tint-c', `hsl(${(hue + 220) % 360} 74% 65% / .78)`);
    });

    portrait.addEventListener('pointerleave', () => {
      portrait.style.removeProperty('--pointer-x');
      portrait.style.removeProperty('--pointer-y');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
