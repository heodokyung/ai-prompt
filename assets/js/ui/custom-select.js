import { escapeHtml, parseRecommendedOptionLabel, normalizeRecommendationReason, isRecommendationReasonForCurrentType } from '../utils.js';
import { config, getCurrentType } from '../state.js';

/**
 * 컨테이너 내 모든 select에 커스텀 셀렉트 UI를 부착하고, 표시를 동기화한다.
 */
export function enhanceCustomSelects(root) {
  const container = root || document;
  container.querySelectorAll('select').forEach((select) => {
    ensureCustomSelect(select);
    renderCustomSelect(select);
  });
}

export function refreshCustomSelects(root) {
  const container = root || document;
  container.querySelectorAll('select').forEach((select) => {
    renderCustomSelect(select);
  });
}

function ensureCustomSelect(select) {
  if (!select || select.dataset.customSelectEnhanced === 'true') return;

  select.dataset.customSelectEnhanced = 'true';
  select.classList.add('native-select-hidden');

  const custom = document.createElement('div');
  custom.className = 'custom-select';
  custom.dataset.selectId = select.id || '';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'custom-select__button';
  button.setAttribute('aria-haspopup', 'listbox');
  button.setAttribute('aria-expanded', 'false');

  const menu = document.createElement('div');
  menu.className = 'custom-select__menu';
  menu.setAttribute('role', 'listbox');
  menu.hidden = true;

  custom.appendChild(button);
  custom.appendChild(menu);
  select.insertAdjacentElement('afterend', custom);

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    if (select.disabled) return;
    const shouldOpen = menu.hidden;
    closeAllCustomSelects(custom);
    setCustomSelectOpen(custom, shouldOpen);
  });

  select.addEventListener('change', () => renderCustomSelect(select));

  custom.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setCustomSelectOpen(custom, false);
      button.focus();
    }
  });
}

function renderCustomSelect(select) {
  const custom = getCustomSelect(select);
  if (!custom) return;

  const button = custom.querySelector('.custom-select__button');
  const menu = custom.querySelector('.custom-select__menu');
  if (!button || !menu) return;

  const selectedOption = select.options[select.selectedIndex] || select.options[0];
  const selectedLabel = selectedOption
    ? parseRecommendedOptionLabel(selectedOption.textContent || '')
    : { main: '선택', reason: '' };
  const selectedRecommend = selectedOption
    ? getSelectRecommendationMeta(select, selectedOption, selectedLabel)
    : { recommended: false, reason: '' };

  button.disabled = select.disabled;
  const selectedBadgeHtml = selectedRecommend.recommended
    ? `<span class="custom-select__meta">${
        selectedRecommend.reason
          ? `<small class="custom-select__reason">${escapeHtml(selectedRecommend.reason)}</small><em class="select-recommend-badge">권장</em>`
          : ''
      }</span>`
    : '';

  button.innerHTML = `
    <span class="custom-select__selected">
      <span class="custom-select__main">${escapeHtml(selectedLabel.main || '선택')}</span>
      ${selectedBadgeHtml}
    </span>
    <span class="custom-select__arrow" aria-hidden="true">
      <svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M5.5 7.5 10 12l4.5-4.5" /></svg>
    </span>
  `;

  menu.innerHTML = Array.from(select.options)
    .map((option, index) => {
      const parsed = parseRecommendedOptionLabel(option.textContent || '');
      const isSelected = option.value === select.value;
      const recommend = getSelectRecommendationMeta(select, option, parsed);
      const isRecommended = recommend.recommended;
      return `
        <button
          type="button"
          class="custom-select__option ${isSelected ? 'is-selected' : ''} ${isRecommended ? 'is-recommended' : ''}"
          role="option"
          aria-selected="${isSelected ? 'true' : 'false'}"
          data-value="${escapeHtml(option.value)}"
          data-index="${index}"
        >
          <span class="custom-select__option-text">${escapeHtml(parsed.main || option.textContent || '')}</span>
          ${isRecommended ? '<em class="select-recommend-badge">권장</em>' : ''}
          ${recommend.reason ? `<small class="custom-select__option-reason">${escapeHtml(recommend.reason)}</small>` : ''}
        </button>
      `;
    })
    .join('');

  menu.querySelectorAll('.custom-select__option').forEach((optionButton) => {
    optionButton.addEventListener('click', () => {
      const nextValue = optionButton.dataset.value || '';
      select.value = nextValue;
      select.dispatchEvent(new Event('input', { bubbles: true }));
      select.dispatchEvent(new Event('change', { bubbles: true }));
      renderCustomSelect(select);
      setCustomSelectOpen(custom, false);
      button.focus();
    });
  });
}

function getSelectRecommendationMeta(select, option, parsed) {
  if (!select || !option) return { recommended: false, reason: '' };
  const type = getCurrentType();
  const defaults = { ...(config.commonDefaults || {}), ...((type && type.commonDefaults) || {}) };
  const optionValue = option.value;
  const selectId = select.id || '';
  const reason = normalizeRecommendationReason(parsed && parsed.reason ? parsed.reason : '');

  if (defaults[selectId] != null && defaults[selectId] === optionValue) {
    return { recommended: true, reason: reason || `${type.label} 기본값` };
  }

  const field = findFieldConfigById(selectId);
  if (field) {
    if (field.recommendedValue != null && field.recommendedValue === optionValue) {
      return { recommended: true, reason: reason || `${type.label} 기본값` };
    }
    if (option.dataset.recommended === 'true') {
      return { recommended: true, reason: reason || '기본값' };
    }
  }

  if (reason && isRecommendationReasonForCurrentType(reason, type)) {
    return { recommended: true, reason };
  }

  return { recommended: false, reason: '' };
}

function findFieldConfigById(fieldId) {
  const type = getCurrentType();
  const fields = [...(type.requiredFields || []), ...(type.optionalFields || [])];
  return fields.find((field) => field.id === fieldId) || null;
}

function getCustomSelect(select) {
  const next = select ? select.nextElementSibling : null;
  return next && next.classList.contains('custom-select') ? next : null;
}

function setCustomSelectOpen(custom, isOpen) {
  const button = custom.querySelector('.custom-select__button');
  const menu = custom.querySelector('.custom-select__menu');
  if (!button || !menu) return;

  custom.classList.toggle('is-open', isOpen);
  button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  menu.hidden = !isOpen;
}

function closeAllCustomSelects(except) {
  document.querySelectorAll('.custom-select.is-open').forEach((custom) => {
    if (custom !== except) setCustomSelectOpen(custom, false);
  });
}

// 화면 어디든 클릭 시 열린 셀렉트 닫기
if (typeof document !== 'undefined') {
  document.addEventListener('click', () => closeAllCustomSelects());
}
