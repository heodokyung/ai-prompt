import { els } from '../state.js';
import { showToast } from './toast.js';

export async function copyPrompt() {
  const text = els.resultPrompt.value.trim();

  if (!text) {
    showToast('복사할 프롬프트가 없습니다.');
    return;
  }

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    showToast('클립보드에 복사되었습니다.');
  } catch (_error) {
    fallbackCopy(text);
    showToast('복사되었습니다.');
  }
}

function fallbackCopy(text) {
  const temp = document.createElement('textarea');
  temp.value = text;
  temp.setAttribute('readonly', '');
  temp.style.position = 'fixed';
  temp.style.top = '-9999px';
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
}
