import { config, state, els, getCurrentType } from './state.js';
import { escapeHtml } from './utils.js';
import { syncConditionalFields } from './conditional.js';
import { enhanceClearButtons } from './ui/clear-buttons.js';
import { enhanceCustomSelects, refreshCustomSelects } from './ui/custom-select.js';
import { updateSampleButtonState } from './sample.js';

export function renderTypeOptions() {
  els.typeGroup.innerHTML = config.types
    .map(
      (type) => `
        <label class="type-card ${type.key === state.selectedType ? 'is-active' : ''}">
          <input
            type="radio"
            name="promptType"
            value="${escapeHtml(type.key)}"
            ${type.key === state.selectedType ? 'checked' : ''}
          />
          <span class="type-card__badge">${escapeHtml(type.badge)}</span>
          <strong>${escapeHtml(type.label)}</strong>
          <small>${escapeHtml(type.description)}</small>
        </label>
      `
    )
    .join('');
}

export function renderCommonSelects() {
  renderSelectOptions(els.clarityLevel, config.clarityOptions);
  renderSelectOptions(els.responseDepth, config.responseDepthOptions);
  renderSelectOptions(els.promptStrength, config.promptStrengthOptions);
  renderSelectOptions(els.personaMode, config.personaModeOptions);
  renderSelectOptions(els.toneMode, config.toneOptions);
  renderSelectOptions(els.outputFormatMode, config.outputFormatOptions);
  enhanceCustomSelects(els.promptForm);
}

function renderSelectOptions(select, options) {
  if (!select) return;
  select.innerHTML = options
    .map((option) => {
      const attrs = [
        `value="${escapeHtml(option.value)}"`,
        option.prompt ? `data-prompt="${escapeHtml(option.prompt)}"` : '',
        option.recommended ? 'data-recommended="true"' : ''
      ]
        .filter(Boolean)
        .join(' ');
      return `<option ${attrs}>${escapeHtml(option.label)}</option>`;
    })
    .join('');
}

export function applyTypeDefaults(type) {
  const defaults = { ...(config.commonDefaults || {}), ...(type.commonDefaults || {}) };
  setSelectValue(els.clarityLevel, defaults.clarityLevel);
  setSelectValue(els.responseDepth, defaults.responseDepth);
  setSelectValue(els.promptStrength, defaults.promptStrength);
  setSelectValue(els.personaMode, defaults.personaMode);
  setSelectValue(els.toneMode, defaults.toneMode);
  setSelectValue(els.outputFormatMode, defaults.outputFormatMode);
  clearCommonNotes();
  renderRecommendationChips();
  syncConditionalFields();
  refreshCustomSelects(els.promptForm);
}

function setSelectValue(select, value) {
  if (!select || value == null) return;
  const hasValue = Array.from(select.options).some((option) => option.value === value);
  if (hasValue) select.value = value;
}

function renderRecommendationChips() {
  // v10 결정: 타이틀 옆 권장 배지는 노이즈가 커 비활성화한다. 권장 표시는 셀렉트 옵션 내부에만 둔다.
  Object.values(els.recommendedChips || {}).forEach((chip) => {
    if (!chip) return;
    chip.textContent = '';
    chip.hidden = true;
  });
}

function clearCommonNotes() {
  [
    els.customClarity,
    els.customOutputFormat,
    els.clarityNote,
    els.responseDepthNote,
    els.promptStrengthNote,
    els.personaModeNote,
    els.toneModeNote,
    els.outputFormatNote
  ].forEach((input) => {
    if (input) input.value = '';
  });
}

export function renderFields() {
  const type = getCurrentType();
  const conditionalRequiredFields = (type.optionalFields || []).filter((field) => !!field.requiredWhen);
  const optionalFields = (type.optionalFields || []).filter((field) => !field.requiredWhen);

  els.requiredFields.innerHTML = (type.requiredFields || [])
    .map((field) => createFieldHtml(field))
    .join('');

  if (els.conditionalRequiredFields) {
    els.conditionalRequiredFields.innerHTML = conditionalRequiredFields
      .map((field) => createFieldHtml(field))
      .join('');
  }

  els.optionalFields.innerHTML = optionalFields.map((field) => createFieldHtml(field)).join('');
  syncActiveTypeCards();
  enhanceClearButtons(els.promptForm);
  enhanceCustomSelects(els.promptForm);
  syncConditionalFields();
  updateSampleButtonState();
}

function createFieldHtml(field) {
  const requiredMark =
    field.required || field.requiredWhen ? '<span class="required-mark" aria-hidden="true">*</span>' : '';
  const labelStateClass = field.required || field.requiredWhen ? 'is-required' : 'is-optional';
  const describedBy = `${field.id}Error`;
  const showWhenAttr = field.showWhen
    ? `data-show-when-field="${escapeHtml(field.showWhen.fieldId)}" data-show-when-value="${escapeHtml(field.showWhen.value)}" hidden`
    : '';
  const requiredWhenAttr = field.requiredWhen
    ? `data-required-when-field="${escapeHtml(field.requiredWhen.fieldId)}" data-required-when-value="${escapeHtml(field.requiredWhen.value)}" hidden`
    : '';

  let control = '';

  if (field.type === 'textarea') {
    control = `
      <textarea
        id="${escapeHtml(field.id)}"
        name="${escapeHtml(field.id)}"
        rows="${Number(field.rows || 3)}"
        placeholder="${escapeHtml(field.placeholder || '')}"
        ${field.required ? 'required' : ''}
        aria-describedby="${describedBy}"
      ></textarea>
    `;
  } else if (field.type === 'select') {
    control = `
      <select id="${escapeHtml(field.id)}" name="${escapeHtml(field.id)}" ${field.required ? 'required' : ''} aria-describedby="${describedBy}">
        ${(field.options || [])
          .map((option) => {
            const attrs = [
              `value="${escapeHtml(option.value)}"`,
              option.prompt ? `data-prompt="${escapeHtml(option.prompt)}"` : '',
              option.recommended ? 'data-recommended="true"' : ''
            ]
              .filter(Boolean)
              .join(' ');
            return `<option ${attrs}>${escapeHtml(option.label)}</option>`;
          })
          .join('')}
      </select>
    `;
  } else {
    control = `
      <input
        id="${escapeHtml(field.id)}"
        name="${escapeHtml(field.id)}"
        type="text"
        placeholder="${escapeHtml(field.placeholder || '')}"
        ${field.required ? 'required' : ''}
        aria-describedby="${describedBy}"
      />
    `;
  }

  return `
    <div class="form-field" data-field-id="${escapeHtml(field.id)}" ${showWhenAttr} ${requiredWhenAttr}>
      <label class="field-label with-chip ${labelStateClass}" for="${escapeHtml(field.id)}"><span class="field-label-text">${escapeHtml(field.label)} ${requiredMark}</span></label>
      ${control}
      ${field.help ? `<p class="field-help">${escapeHtml(field.help)}</p>` : ''}
      <p class="field-error" id="${describedBy}"></p>
    </div>
  `;
}

function syncActiveTypeCards() {
  const cards = els.typeGroup.querySelectorAll('.type-card');
  cards.forEach((card) => {
    const input = card.querySelector('input[type="radio"]');
    card.classList.toggle('is-active', !!(input && input.value === state.selectedType));
  });
}
