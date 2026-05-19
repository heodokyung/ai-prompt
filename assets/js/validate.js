import { els, getCurrentType } from './state.js';
import { cssEscape } from './utils.js';
import { isRequiredByCondition } from './conditional.js';

export function validateFields() {
  clearErrors();
  const type = getCurrentType();
  const allFields = [...type.requiredFields, ...type.optionalFields];
  let isValid = true;
  let firstMessage = '';

  allFields.forEach((field) => {
    const wrapper = document.querySelector(`[data-field-id="${cssEscape(field.id)}"]`);
    if (!wrapper || wrapper.hidden) return;
    const input = document.getElementById(field.id);
    const value = input ? input.value.trim() : '';
    const requiredByCondition = isRequiredByCondition(field);

    if ((field.required || requiredByCondition) && !value) {
      isValid = false;
      setFieldError(field.id, `${field.label} 항목은 필수입니다.`);
      if (!firstMessage) firstMessage = `${field.label} 항목을 입력해주세요.`;
    }
  });

  if (els.clarityLevel.value === 'custom' && !els.customClarity.value.trim()) {
    isValid = false;
    setFieldError('customClarity', '직접 입력할 설명 수준을 적어주세요.');
    if (!firstMessage) firstMessage = '직접 입력할 설명 수준을 적어주세요.';
  }

  if (els.outputFormatMode.value === 'custom' && !els.customOutputFormat.value.trim()) {
    isValid = false;
    setFieldError('customOutputFormat', '직접 입력할 최종 답변 형식을 적어주세요.');
    if (!firstMessage) firstMessage = '직접 입력할 최종 답변 형식을 적어주세요.';
  }

  return { isValid, message: firstMessage };
}

export function setFieldError(fieldId, message) {
  const wrapper = document.querySelector(`[data-field-id="${cssEscape(fieldId)}"]`);
  const error = document.getElementById(`${fieldId}Error`);
  if (wrapper) wrapper.classList.add('has-error');
  if (error) error.textContent = message;
}

export function clearErrors() {
  document.querySelectorAll('.form-field').forEach((field) => field.classList.remove('has-error'));
  document.querySelectorAll('.field-error').forEach((error) => {
    error.textContent = '';
  });
}
