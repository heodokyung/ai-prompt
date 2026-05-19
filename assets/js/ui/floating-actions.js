import { els } from '../state.js';

export function setupFloatingActionBar() {
  if (!els.controlPanel || !els.formActionRow) return;

  const update = () => {
    if (window.innerWidth <= 760) {
      document.documentElement.style.removeProperty('--floating-actions-left');
      document.documentElement.style.removeProperty('--floating-actions-width');
      return;
    }

    const panelRect = els.controlPanel.getBoundingClientRect();
    const computed = window.getComputedStyle(els.controlPanel);
    const paddingLeft = parseFloat(computed.paddingLeft) || 0;
    const paddingRight = parseFloat(computed.paddingRight) || 0;
    const innerLeft = Math.max(16, panelRect.left + paddingLeft);
    const innerWidth = Math.max(320, panelRect.width - paddingLeft - paddingRight);

    document.documentElement.style.setProperty('--floating-actions-left', `${innerLeft}px`);
    document.documentElement.style.setProperty('--floating-actions-width', `${innerWidth}px`);
  };

  update();
  window.addEventListener('resize', update, { passive: true });
  window.addEventListener('orientationchange', update, { passive: true });
  window.addEventListener('load', update, { once: true });
  requestAnimationFrame(update);
}
