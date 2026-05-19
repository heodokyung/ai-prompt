import { els } from './state.js';
import { updateClearButtons } from './ui/clear-buttons.js';

/**
 * showWhen / requiredWhen / data-common-dependent 가 있는 필드의 visible 상태를
 * 현재 source 필드 값 기준으로 동기 갱신한다.
 */
export function syncConditionalFields() {
  document.querySelectorAll('[data-show-when-field]').forEach((wrapper) => {
    const sourceId = wrapper.getAttribute('data-show-when-field');
    const expectedValue = wrapper.getAttribute('data-show-when-value');
    const source = document.getElementById(sourceId);
    const isVisible = !!(source && source.value === expectedValue);
    wrapper.hidden = !isVisible;
    if (!isVisible) clearFieldValue(wrapper);
  });

  document.querySelectorAll('[data-common-dependent]').forEach((wrapper) => {
    const [sourceId, expectedValue] = wrapper.getAttribute('data-common-dependent').split(':');
    const source = document.getElementById(sourceId);
    const isVisible = !!(source && source.value === expectedValue);
    wrapper.hidden = !isVisible;
    if (!isVisible) clearFieldValue(wrapper);
  });

  document.querySelectorAll('[data-required-when-field]').forEach((wrapper) => {
    const sourceId = wrapper.getAttribute('data-required-when-field');
    const expectedValue = wrapper.getAttribute('data-required-when-value');
    const source = document.getElementById(sourceId);
    const isVisible = !!(source && source.value === expectedValue);
    wrapper.hidden = !isVisible;
    if (!isVisible) clearFieldValue(wrapper);
  });

  updateConditionalRequiredVisibility();
  updateClearButtons(els.promptForm);
}

export function updateConditionalRequiredVisibility() {
  if (!els.conditionalRequiredSection || !els.conditionalRequiredFields) return;
  const visibleRequiredFields = Array.from(
    els.conditionalRequiredFields.querySelectorAll('.form-field')
  ).filter((field) => !field.hidden);
  els.conditionalRequiredSection.hidden = visibleRequiredFields.length === 0;
}

export function clearFieldValue(wrapper) {
  const control = wrapper.querySelector('input, textarea, select');
  if (control && control.tagName !== 'SELECT') control.value = '';
  wrapper.classList.remove('has-error');
  const error = wrapper.querySelector('.field-error');
  if (error) error.textContent = '';
}

export function isRequiredByCondition(field) {
  if (!field.requiredWhen) return false;
  const source = document.getElementById(field.requiredWhen.fieldId);
  return !!(source && source.value === field.requiredWhen.value);
}
