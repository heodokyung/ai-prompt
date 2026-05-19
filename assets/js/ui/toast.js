import { els } from '../state.js';

let toastTimer = null;

export function showToast(message) {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    els.toast.classList.remove('is-visible');
  }, 2400);
}
