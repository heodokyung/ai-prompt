(function () {
  'use strict';

  const config = window.PROMPT_CONFIG;

  const state = {
    selectedType: config.defaultType,
    lastPrompt: '',
    sample: {
      typeKey: null,
      active: false,
      fieldIds: []
    }
  };

  const els = {
    typeGroup: document.getElementById('promptTypeGroup'),
    promptForm: document.getElementById('promptForm'),
    requiredFields: document.getElementById('requiredFields'),
    conditionalRequiredSection: document.getElementById('conditionalRequiredSection'),
    conditionalRequiredFields: document.getElementById('conditionalRequiredFields'),
    optionalFields: document.getElementById('optionalFields'),
    clarityLevel: document.getElementById('clarityLevel'),
    customClarity: document.getElementById('customClarity'),
    responseDepth: document.getElementById('responseDepth'),
    promptStrength: document.getElementById('promptStrength'),
    personaMode: document.getElementById('personaMode'),
    toneMode: document.getElementById('toneMode'),
    outputFormatMode: document.getElementById('outputFormatMode'),
    customOutputFormat: document.getElementById('customOutputFormat'),
    clarityNote: document.getElementById('clarityNote'),
    responseDepthNote: document.getElementById('responseDepthNote'),
    promptStrengthNote: document.getElementById('promptStrengthNote'),
    personaModeNote: document.getElementById('personaModeNote'),
    toneModeNote: document.getElementById('toneModeNote'),
    outputFormatNote: document.getElementById('outputFormatNote'),
    recommendedChips: {
      clarityLevel: document.getElementById('clarityLevelRecommended'),
      responseDepth: document.getElementById('responseDepthRecommended'),
      promptStrength: document.getElementById('promptStrengthRecommended'),
      personaMode: document.getElementById('personaModeRecommended'),
      toneMode: document.getElementById('toneModeRecommended'),
      outputFormatMode: document.getElementById('outputFormatModeRecommended')
    },
    redTeamMode: document.getElementById('redTeamMode'),
    askMoreQuestions: document.getElementById('askMoreQuestions'),
    includeSelfReview: document.getElementById('includeSelfReview'),
    splitIfLong: document.getElementById('splitIfLong'),
    includeExamples: document.getElementById('includeExamples'),
    requireEvidence: document.getElementById('requireEvidence'),
    resultPrompt: document.getElementById('resultPrompt'),
    copyButton: document.getElementById('copyButton'),
    selectButton: document.getElementById('selectButton'),
    resetButton: document.getElementById('resetButton'),
    sampleButton: document.getElementById('sampleButton'),
    promptMeta: document.getElementById('promptMeta'),
    toast: document.getElementById('toast'),
    controlPanel: document.querySelector('.control-panel'),
    formActionRow: document.querySelector('.prompt-form > .button-row')
  };

  function init() {
    renderTypeOptions();
    renderCommonSelects();
    applyTypeDefaults(getCurrentType());
    renderFields();
    enhanceClearButtons(els.promptForm);
    enhanceCustomSelects(els.promptForm);
    bindEvents();
    setupFloatingActionBar();
    syncConditionalFields();
    updateSampleButtonState();
  }

  function getCurrentType() {
    return config.types.find((type) => type.key === state.selectedType) || config.types[0];
  }

  function renderTypeOptions() {
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

  function renderCommonSelects() {
    renderSelectOptions(els.clarityLevel, config.clarityOptions);
    renderSelectOptions(els.responseDepth, config.responseDepthOptions);
    renderSelectOptions(els.promptStrength, config.promptStrengthOptions);
    renderSelectOptions(els.personaMode, config.personaModeOptions);
    renderSelectOptions(els.toneMode, config.toneOptions);
    renderSelectOptions(els.outputFormatMode, config.outputFormatOptions);
    enhanceCustomSelects(els.promptForm);
  }

  function renderSelectOptions(select, options) {
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

  function applyTypeDefaults(type) {
    const defaults = { ...(config.commonDefaults || {}), ...(type.commonDefaults || {}) };
    setSelectValue(els.clarityLevel, defaults.clarityLevel);
    setSelectValue(els.responseDepth, defaults.responseDepth);
    setSelectValue(els.promptStrength, defaults.promptStrength);
    setSelectValue(els.personaMode, defaults.personaMode);
    setSelectValue(els.toneMode, defaults.toneMode);
    setSelectValue(els.outputFormatMode, defaults.outputFormatMode);
    clearCommonNotes();
    renderRecommendationChips(type, defaults);
    syncConditionalFields();
    refreshCustomSelects(els.promptForm);
  }

  function setSelectValue(select, value) {
    if (!select || value == null) return;
    const hasValue = Array.from(select.options).some((option) => option.value === value);
    if (hasValue) select.value = value;
  }

  function renderRecommendationChips(type, defaults) {
    // v10: 타이틀 옆 권장 배지는 과하게 보이므로 숨기고, 권장은 셀렉트 옵션 내부에서만 표시한다.
    Object.values(els.recommendedChips || {}).forEach((chip) => {
      if (!chip) return;
      chip.textContent = '';
      chip.hidden = true;
    });
  }

  function getSelectedLabelByValue(select, value) {
    if (!select || value == null) return '';
    const option = Array.from(select.options).find((item) => item.value === value);
    return option ? option.textContent : '';
  }

  function cleanOptionLabel(label) {
    return parseRecommendedOptionLabel(label).main.trim();
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

  function renderFields() {
    const type = getCurrentType();
    const conditionalRequiredFields = (type.optionalFields || []).filter((field) => Boolean(field.requiredWhen));
    const optionalFields = (type.optionalFields || []).filter((field) => !field.requiredWhen);

    els.requiredFields.innerHTML = (type.requiredFields || []).map((field) => createFieldHtml(field)).join('');

    if (els.conditionalRequiredFields) {
      els.conditionalRequiredFields.innerHTML = conditionalRequiredFields.map((field) => createFieldHtml(field)).join('');
    }

    els.optionalFields.innerHTML = optionalFields.map((field) => createFieldHtml(field)).join('');
    syncActiveTypeCards();
    enhanceClearButtons(els.promptForm);
    enhanceCustomSelects(els.promptForm);
    syncConditionalFields();
    updateSampleButtonState();
  }

  function createFieldHtml(field) {
    const requiredMark = field.required || field.requiredWhen ? '<span class="required-mark" aria-hidden="true">*</span>' : '';
    const labelStateClass = field.required || field.requiredWhen ? 'is-required' : 'is-optional';
    const recommendedLabel = getRecommendedFieldOptionLabel(field);
    const recommendedChip = ''; // v10: 필드 제목 옆 권장 표시 제거
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
        <label class="field-label with-chip ${labelStateClass}" for="${escapeHtml(field.id)}"><span class="field-label-text">${escapeHtml(field.label)} ${requiredMark}</span>${recommendedChip}</label>
        ${control}
        ${field.help ? `<p class="field-help">${escapeHtml(field.help)}</p>` : ''}
        <p class="field-error" id="${describedBy}"></p>
      </div>
    `;
  }

  function getRecommendedFieldOptionLabel(field) {
    if (!field || field.type !== 'select' || !Array.isArray(field.options)) return '';
    const recommended =
      field.options.find((option) => option.value === field.recommendedValue) ||
      field.options.find((option) => option.recommended);
    return recommended ? recommended.label : '';
  }


  function setupFloatingActionBar() {
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

  function bindEvents() {
    els.typeGroup.addEventListener('change', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      state.selectedType = target.value;
      resetSampleState();
      renderFields();
      applyTypeDefaults(getCurrentType());
      els.promptMeta.textContent = `${getCurrentType().label} 유형 선택됨 · 권장 기본값 적용`;
    });

    els.promptForm.addEventListener('input', () => {
      syncConditionalFields();
      updateClearButtons(els.promptForm);
    });
    els.promptForm.addEventListener('change', () => {
      syncConditionalFields();
      updateClearButtons(els.promptForm);
      refreshCustomSelects(els.promptForm);
    });

    els.promptForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const validation = validateFields();

      if (!validation.isValid) {
        showToast(validation.message || '필수 입력값을 먼저 채워주세요.');
        return;
      }

      const prompt = buildPrompt();
      state.lastPrompt = prompt;
      els.resultPrompt.value = prompt;
      els.promptMeta.textContent = `${getCurrentType().label} 프롬프트 · ${prompt.length.toLocaleString()}자`;
      showToast('프롬프트가 생성되었습니다.');
    });

    if (els.sampleButton) {
      els.sampleButton.addEventListener('click', toggleSampleValues);
    }

    els.copyButton.addEventListener('click', copyPrompt);

    els.selectButton.addEventListener('click', () => {
      els.resultPrompt.focus();
      els.resultPrompt.select();
      showToast('전체 선택되었습니다.');
    });

    els.resetButton.addEventListener('click', () => {
      els.promptForm.reset();
      state.selectedType = config.defaultType;
      renderTypeOptions();
      renderCommonSelects();
      applyTypeDefaults(getCurrentType());
      renderFields();
      els.redTeamMode.checked = false;
      els.askMoreQuestions.checked = true;
      els.includeSelfReview.checked = true;
      els.splitIfLong.checked = true;
      els.includeExamples.checked = true;
      els.requireEvidence.checked = true;
      els.resultPrompt.value = '';
      state.lastPrompt = '';
      resetSampleState();
      els.promptMeta.textContent = '초기화 완료';
      clearErrors();
      syncConditionalFields();
      refreshCustomSelects(els.promptForm);
      showToast('입력값을 초기화했습니다.');
    });
  }

  function syncActiveTypeCards() {
    const cards = els.typeGroup.querySelectorAll('.type-card');
    cards.forEach((card) => {
      const input = card.querySelector('input[type="radio"]');
      card.classList.toggle('is-active', input && input.value === state.selectedType);
    });
  }

  function syncConditionalFields() {
    document.querySelectorAll('[data-show-when-field]').forEach((wrapper) => {
      const sourceId = wrapper.getAttribute('data-show-when-field');
      const expectedValue = wrapper.getAttribute('data-show-when-value');
      const source = document.getElementById(sourceId);
      const isVisible = source && source.value === expectedValue;
      wrapper.hidden = !isVisible;
      if (!isVisible) clearFieldValue(wrapper);
    });

    document.querySelectorAll('[data-common-dependent]').forEach((wrapper) => {
      const [sourceId, expectedValue] = wrapper.getAttribute('data-common-dependent').split(':');
      const source = document.getElementById(sourceId);
      const isVisible = source && source.value === expectedValue;
      wrapper.hidden = !isVisible;
      if (!isVisible) clearFieldValue(wrapper);
    });

    document.querySelectorAll('[data-required-when-field]').forEach((wrapper) => {
      const sourceId = wrapper.getAttribute('data-required-when-field');
      const expectedValue = wrapper.getAttribute('data-required-when-value');
      const source = document.getElementById(sourceId);
      const isVisible = Boolean(source && source.value === expectedValue);
      wrapper.hidden = !isVisible;
      if (!isVisible) clearFieldValue(wrapper);
    });

    updateConditionalRequiredVisibility();
    updateClearButtons(els.promptForm);
  }

  function updateConditionalRequiredVisibility() {
    if (!els.conditionalRequiredSection || !els.conditionalRequiredFields) return;
    const visibleRequiredFields = Array.from(els.conditionalRequiredFields.querySelectorAll('.form-field')).filter((field) => !field.hidden);
    els.conditionalRequiredSection.hidden = visibleRequiredFields.length === 0;
  }

  function clearFieldValue(wrapper) {
    const control = wrapper.querySelector('input, textarea, select');
    if (control && control.tagName !== 'SELECT') control.value = '';
    wrapper.classList.remove('has-error');
    const error = wrapper.querySelector('.field-error');
    if (error) error.textContent = '';
  }

  function validateFields() {
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

  function isRequiredByCondition(field) {
    if (!field.requiredWhen) return false;
    const source = document.getElementById(field.requiredWhen.fieldId);
    return Boolean(source && source.value === field.requiredWhen.value);
  }

  function setFieldError(fieldId, message) {
    const wrapper = document.querySelector(`[data-field-id="${cssEscape(fieldId)}"]`);
    const error = document.getElementById(`${fieldId}Error`);
    if (wrapper) wrapper.classList.add('has-error');
    if (error) error.textContent = message;
  }

  function clearErrors() {
    document.querySelectorAll('.form-field').forEach((field) => field.classList.remove('has-error'));
    document.querySelectorAll('.field-error').forEach((error) => {
      error.textContent = '';
    });
  }

  function buildPrompt() {
    const type = getCurrentType();
    const values = collectValues(type);
    const commonOptions = collectCommonOptions();
    const promptSections = [];

    promptSections.push(config.commonOpening.join('\n'));
    promptSections.push(`[역할]\n${type.role}`);
    promptSections.push(buildGoalAndContextSection(type, values));
    promptSections.push(buildDefaultContextSection());
    promptSections.push(buildPersonaSection(type, commonOptions));
    promptSections.push(buildDiscussionRulesSection(commonOptions));
    promptSections.push(buildInputSection(values));
    promptSections.push(buildStandardsSection(type, commonOptions));
    promptSections.push(buildOutputFormatSection(type, commonOptions));
    promptSections.push(buildGuardrailsSection(commonOptions));
    promptSections.push(buildSelfReviewSection(commonOptions));
    promptSections.push(buildClosingSection(type));

    return promptSections.filter(Boolean).join('\n\n');
  }

  function collectValues(type) {
    const allFields = [...type.requiredFields, ...type.optionalFields];
    return allFields.reduce((acc, field) => {
      const wrapper = document.querySelector(`[data-field-id="${cssEscape(field.id)}"]`);
      if (wrapper && wrapper.hidden) return acc;
      const input = document.getElementById(field.id);
      const rawValue = input ? getFieldDisplayValue(input) : '';
      if (rawValue) {
        acc[field.id] = {
          label: field.label,
          value: rawValue
        };
      }
      return acc;
    }, {});
  }

  function getFieldDisplayValue(input) {
    if (!input) return '';

    if (input.tagName === 'SELECT') {
      const selected = input.options[input.selectedIndex];
      const value = input.value.trim();
      if (!value) return '';

      const label = selected ? cleanOptionLabel(selected.textContent.trim()) : '';
      const prompt = selected && selected.dataset ? selected.dataset.prompt : '';

      if (prompt) return label ? `${label}\n${prompt}` : prompt;
      if (!label || value === label) return value;
      if (/^[a-zA-Z0-9_-]+$/.test(value)) return label;
      return `${label}\n${value}`;
    }

    return input.value.trim();
  }

  function collectCommonOptions() {
    const clarityRaw = els.clarityLevel.value.trim();
    const clarity = clarityRaw === 'custom' ? els.customClarity.value.trim() : getOptionPrompt(els.clarityLevel, config.clarityOptions);
    const outputRaw = els.outputFormatMode.value.trim();
    const outputFormat = outputRaw === 'custom' ? els.customOutputFormat.value.trim() : getOptionPrompt(els.outputFormatMode, config.outputFormatOptions);

    return {
      clarity,
      responseDepth: getOptionPrompt(els.responseDepth, config.responseDepthOptions),
      promptStrength: getOptionPrompt(els.promptStrength, config.promptStrengthOptions),
      personaMode: els.personaMode.value.trim(),
      personaModeInstruction: getOptionPrompt(els.personaMode, config.personaModeOptions),
      toneMode: getOptionPrompt(els.toneMode, config.toneOptions),
      outputFormat,
      clarityNote: getTextValue(els.clarityNote),
      responseDepthNote: getTextValue(els.responseDepthNote),
      promptStrengthNote: getTextValue(els.promptStrengthNote),
      personaModeNote: getTextValue(els.personaModeNote),
      toneModeNote: getTextValue(els.toneModeNote),
      outputFormatNote: getTextValue(els.outputFormatNote),
      redTeamMode: els.redTeamMode.checked,
      askMoreQuestions: els.askMoreQuestions.checked,
      includeSelfReview: els.includeSelfReview.checked,
      splitIfLong: els.splitIfLong.checked,
      includeExamples: els.includeExamples.checked,
      requireEvidence: els.requireEvidence.checked
    };
  }

  function getOptionPrompt(select, options) {
    if (!select) return '';
    const match = options.find((option) => option.value === select.value);
    return (match && (match.prompt || match.value)) || '';
  }

  function getTextValue(input) {
    return input ? input.value.trim() : '';
  }

  function buildDefaultContextSection() {
    if (!Array.isArray(config.commonDefaultInstructions) || !config.commonDefaultInstructions.length) return '';
    return ['[기본 언어/지역 기준]', ...config.commonDefaultInstructions.map((item) => `- ${item}`)].join('\n');
  }

  function buildGoalAndContextSection(type, values) {
    const mainGoal =
      values.goal?.value ||
      values.task?.value ||
      values.topic?.value ||
      values.summaryPurpose?.value ||
      values.purpose?.value ||
      values.theme?.value ||
      values.writingGoal?.value ||
      values.financeGoal?.value ||
      values.marketingGoal?.value ||
      values.researchGoal?.value ||
      values.learningGoal?.value ||
      values.lifeFunTopic?.value;

    return [
      '[목표와 맥락]',
      mainGoal ? `내 목표는 다음과 같다.\n${mainGoal}` : '내 목표는 사용자의 입력을 바탕으로 가장 적합한 결과물을 얻는 것이다.',
      '',
      `[작업 유형]\n${type.label}`,
      '아래 입력 자료와 조건을 바탕으로 답변하되, AI가 임의로 추측해야 하는 부분은 질문하거나 “확인 필요”로 표시해줘.'
    ].join('\n');
  }

  function buildPersonaSection(type, commonOptions) {
    const lines = [
      '[다중 인격 검토 구조]',
      '아래 인격체를 시뮬레이션해서 서로 다른 관점으로 검토해줘.',
      `[토론 방식] ${commonOptions.personaModeInstruction}`,
      ...type.personas.map((persona) => `- ${persona}`)
    ];

    if (commonOptions.personaModeNote) {
      lines.push(`[토론 방식 추가 요청] ${commonOptions.personaModeNote}`);
    }

    return lines.join('\n');
  }

  function buildDiscussionRulesSection(commonOptions) {
    const rules = ['[토론 및 판단 규칙]'];

    if (commonOptions.personaMode === 'full') {
      rules.push('1. 각 인격체는 돌아가면서 의견을 내고, 다른 인격체의 주장에 대해 최소 1개의 구체적 반론 또는 보완점을 제시해줘.');
      rules.push('2. 추상적인 동의는 금지하고, 동의한다면 근거 또는 보강 논리를 추가해줘.');
    } else if (commonOptions.personaMode === 'compact') {
      rules.push('1. 각 인격체의 관점은 반영하되 긴 토론 라운드는 생략하고 핵심 체크 결과만 보여줘.');
      rules.push('2. 필요한 반론은 1~2개만 압축해서 제시해줘.');
    } else {
      rules.push('1. 먼저 이 작업이 명시적 다중 인격 토론이 필요한지 판단해줘.');
      rules.push('2. 단순 정보 확인이면 토론을 길게 쓰지 말고, 비교/의사결정/리스크/코딩/아이디어/글쓰기 작업이면 인격체별 의견과 반론을 짧게 반영해줘.');
    }

    rules.push('3. 최종 결정권자는 모든 의견을 종합해 가장 현실적이고 실행 가능한 답을 정해줘.');
    rules.push('4. 답변은 단계적으로 구성하되, 내부 사고 과정 전체가 아니라 핵심 판단 근거와 검토 결과만 보여줘.');
    rules.push(`5. ${commonOptions.promptStrength}`);
    rules.push(`6. ${commonOptions.toneMode}`);
    rules.push(`7. ${commonOptions.responseDepth}`);

    if (commonOptions.promptStrengthNote) rules.push(`8. 프롬프트 강도 추가 요청: ${commonOptions.promptStrengthNote}`);
    if (commonOptions.toneModeNote) rules.push(`9. 답변 톤/태도 추가 요청: ${commonOptions.toneModeNote}`);
    if (commonOptions.responseDepthNote) rules.push(`10. 답변 깊이 추가 요청: ${commonOptions.responseDepthNote}`);

    if (commonOptions.redTeamMode) {
      rules.push('레드팀 옵션이 켜져 있으므로, 사용자의 요구 자체가 합당한지 먼저 검토하고 약점, 위험, 더 나은 요청 방식, 개선안과 해결방법을 우선 제시해줘.');
    }

    return rules.join('\n');
  }

  function buildInputSection(values) {
    const fieldLines = Object.values(values).map((item) => `## ${item.label}\n${item.value}`);
    if (!fieldLines.length) return '';
    return ['[입력 자료]', ...fieldLines].join('\n\n');
  }

  function buildStandardsSection(type, commonOptions) {
    const standards = [
      '[반드시 지킬 기준]',
      ...type.standards.map((standard) => `- ${standard}`)
    ];

    if (commonOptions.clarity) standards.push(`- ${commonOptions.clarity}`);
    if (commonOptions.clarityNote) standards.push(`- 설명 수준 추가 요청: ${commonOptions.clarityNote}`);

    if (commonOptions.askMoreQuestions) {
      standards.push('- 필수 정보가 부족하다면 충분한 정보를 얻을 때까지 필요한 질문을 먼저 해줘. 단, 답변 가능한 부분은 우선 진행하고 질문은 중요도 순으로 최소화해줘.');
    }

    if (commonOptions.splitIfLong) {
      standards.push('- 한 번에 모든 작업이 어렵다면 단계를 나누어 진행하고, 현재 완료한 단계와 이후 남은 단계를 리스트로 알려줘.');
    }

    if (commonOptions.includeExamples) {
      standards.push('- 필요한 경우 좋은 예시와 나쁜 예시를 함께 제시해 품질 기준을 명확히 해줘.');
    }

    if (commonOptions.requireEvidence) {
      standards.push('- 사실 기반 답변이 필요한 경우 근거, 출처, 확인 방법을 함께 제시해줘. 확인하지 못한 정보는 단정하지 마.');
    }

    return standards.join('\n');
  }

  function buildOutputFormatSection(type, commonOptions) {
    const lines = [];
    if (commonOptions.outputFormat) {
      lines.push('[출력 형식 - 사용자 지정]', commonOptions.outputFormat);
    } else {
      lines.push('[출력 형식]', ...type.outputFormat.map((item) => `- ${item}`));
    }

    if (commonOptions.outputFormatNote) {
      lines.push('', `[출력 형식 추가 요청] ${commonOptions.outputFormatNote}`);
    }

    return lines.join('\n');
  }

  function buildGuardrailsSection(commonOptions) {
    const guardrails = ['[하지 말 것]', ...config.commonGuardrails.map((item) => `- ${item}`)];

    if (commonOptions.redTeamMode) {
      guardrails.push('- 사용자의 요구를 무조건 긍정하지 말고, 요구 자체의 문제점과 대안을 함께 제시해줘.');
    }

    return guardrails.join('\n');
  }

  function buildSelfReviewSection(commonOptions) {
    if (!commonOptions.includeSelfReview) return '';

    return [
      '[자기 검증 루프]',
      '답변을 마치기 전에 스스로 검토해줘.',
      '- 빠진 조건은 없는가?',
      '- 논리적으로 모순되는 부분은 없는가?',
      '- 실행했을 때 문제가 생길 수 있는 부분은 없는가?',
      '- 더 안전하거나 더 나은 대안은 없는가?',
      '- 사용자가 요청한 출력 형식과 금지사항을 모두 지켰는가?',
      '미달 항목이 있으면 수정본을 다시 제시해줘.'
    ].join('\n');
  }

  function buildClosingSection(type) {
    return [
      '[마무리 요청]',
      '마지막에는 핵심 결론, 바로 실행할 다음 행동, 추가 팁을 정리해줘.',
      `작업 팁: ${type.tip}`
    ].join('\n');
  }

  function toggleSampleValues() {
    const type = getCurrentType();

    if (state.sample.active && state.sample.typeKey === type.key) {
      clearSampleValues(type);
      return;
    }

    fillSampleValues(type);
  }

  function fillSampleValues(type) {
    const samples = type.sampleValues || {};
    const entries = Object.entries(samples);

    if (!entries.length) {
      showToast('이 유형에는 샘플 입력이 없습니다.');
      return;
    }

    const allFields = [...(type.requiredFields || []), ...(type.optionalFields || [])];
    const fieldMap = new Map(allFields.map((f) => [f.id, f]));

    // conditional 필드(showWhen/requiredWhen)는 source가 먼저 채워져야 visible 상태가 되므로 후순위로 정렬한다.
    const sortedEntries = entries.slice().sort((a, b) => {
      const fa = fieldMap.get(a[0]);
      const fb = fieldMap.get(b[0]);
      const ah = fa && (fa.showWhen || fa.requiredWhen) ? 1 : 0;
      const bh = fb && (fb.showWhen || fb.requiredWhen) ? 1 : 0;
      return ah - bh;
    });

    const filledFieldIds = [];
    const skipped = [];

    sortedEntries.forEach(([fieldId, value]) => {
      const input = document.getElementById(fieldId);
      if (!input) {
        skipped.push({ fieldId, reason: 'no-input' });
        return;
      }

      const nextValue = String(value);
      const currentValue = (input.value || '').trim();

      if (input.tagName === 'SELECT') {
        const optionExists = Array.from(input.options).some((opt) => opt.value === nextValue);
        if (!optionExists) {
          // 잘못된 sampleValues(label을 value로 넣은 케이스 등) → 콘솔 경고만 남기고 건너뜀
          console.warn(`[샘플 입력] ${type.key}.${fieldId} 의 sampleValue가 option value와 일치하지 않습니다: "${nextValue}"`);
          skipped.push({ fieldId, reason: 'option-mismatch' });
          return;
        }
        // 사용자 입력 보존: 빈 값이거나 동일 값일 때만 덮어쓴다
        if (currentValue && currentValue !== nextValue) return;
        input.value = nextValue;
      } else {
        if (currentValue && currentValue !== nextValue) return;
        input.value = nextValue;
      }

      // change 이벤트로 다음 conditional 필드의 visible 상태를 동기 갱신
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      filledFieldIds.push(fieldId);
    });

    state.sample = {
      typeKey: type.key,
      active: filledFieldIds.length > 0,
      fieldIds: filledFieldIds
    };

    syncConditionalFields();
    refreshCustomSelects(els.promptForm);
    updateSampleButtonState();

    if (filledFieldIds.length) {
      const skippedMsg = skipped.length ? ` (${skipped.length}개 필드는 건너뜀)` : '';
      showToast(`${type.label} 샘플을 입력했습니다.${skippedMsg} 다시 누르면 샘플값만 지웁니다.`);
    } else {
      showToast('빈 필드가 없어 샘플을 넣지 않았습니다. 기존 입력값은 유지했습니다.');
    }
  }

  function clearSampleValues(type) {
    const samples = type.sampleValues || {};
    let clearedCount = 0;

    state.sample.fieldIds.forEach((fieldId) => {
      const input = document.getElementById(fieldId);
      if (!input) return;
      const sampleValue = String(samples[fieldId] ?? '');

      if (input.value.trim() === sampleValue.trim()) {
        input.value = '';
        clearedCount += 1;
      }
    });

    resetSampleState();
    syncConditionalFields();
    refreshCustomSelects(els.promptForm);
    updateSampleButtonState();
    showToast(clearedCount ? '샘플 입력값을 지웠습니다.' : '수정된 값은 유지하고 샘플 상태만 해제했습니다.');
  }

  function resetSampleState() {
    state.sample = {
      typeKey: null,
      active: false,
      fieldIds: []
    };
    updateSampleButtonState();
  }

  function updateSampleButtonState() {
    if (!els.sampleButton) return;
    const type = getCurrentType();
    const hasSample = Boolean(type.sampleValues && Object.keys(type.sampleValues).length);
    const isActive = hasSample && state.sample.active && state.sample.typeKey === type.key;

    els.sampleButton.textContent = isActive ? '샘플 지우기' : '샘플 입력';
    els.sampleButton.classList.toggle('is-active', isActive);
    els.sampleButton.disabled = !hasSample;
    els.sampleButton.title = hasSample
      ? isActive
        ? '현재 유형에 입력한 샘플값만 지웁니다. 사용자가 수정한 값은 유지합니다.'
        : '현재 작업 유형의 필수값과 핵심 보조 필드를 예시로 채웁니다.'
      : '이 유형에는 샘플 입력이 없습니다.';
  }


  function enhanceCustomSelects(root) {
    const container = root || document;
    const selects = container.querySelectorAll('select');

    selects.forEach((select) => {
      ensureCustomSelect(select);
      renderCustomSelect(select);
    });
  }

  function refreshCustomSelects(root) {
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
    const selectedLabel = selectedOption ? parseRecommendedOptionLabel(selectedOption.textContent || '') : { main: '선택', reason: '' };
    const selectedRecommend = selectedOption ? getSelectRecommendationMeta(select, selectedOption, selectedLabel) : { recommended: false, reason: '' };

    button.disabled = select.disabled;
    const selectedBadgeHtml = selectedRecommend.recommended
      ? `<span class="custom-select__meta">${
          selectedRecommend.reason ? `<small class="custom-select__reason">${escapeHtml(selectedRecommend.reason)}</small><em class="select-recommend-badge">권장</em>` : ''
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

  function normalizeRecommendationReason(reason) {
    return String(reason || '')
      .replace(/권장/g, '')
      .replace(/기본/g, '기본값')
      .replace(/[()]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function isRecommendationReasonForCurrentType(reason, type) {
    if (!reason || !type) return false;
    const aliases = {
      search: ['검색', '조사'],
      coding: ['코딩', '개발', '문제 해결'],
      summary: ['요약'],
      idea: ['아이디어', '기획'],
      writing: ['글쓰기', '문장', '콘텐츠'],
      finance: ['투자', '재테크', '고위험'],
      marketing: ['마케팅', '전환', '브랜딩'],
      research: ['분석', '리서치', '전략'],
      learningPartner: ['학습', '교사', '코치', '멘토', '작업', '협업'],
      travel: ['여행', '코스'],
      lifeFun: ['재미', '생활', '운세', '타로', '사주'],
      image: ['이미지', '시각']
    };
    const haystack = `${reason} ${type.label || ''}`;
    return (aliases[type.key] || []).some((alias) => haystack.includes(alias));
  }

  function parseRecommendedOptionLabel(label) {
    const raw = String(label || '').trim();
    const parts = raw.split(/\s+-\s+/);
    const tail = parts.length > 1 ? parts[parts.length - 1] : '';

    if (!tail.includes('권장')) {
      return { main: raw, reason: '' };
    }

    const main = parts.slice(0, -1).join(' - ').trim();
    const reason = tail.replace(/권장/g, '').replace(/[()]/g, '').trim();
    return {
      main: main || raw.replace(/\s+-\s*.*권장\s*$/, '').trim(),
      reason: reason || ''
    };
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

  document.addEventListener('click', () => closeAllCustomSelects());

  function enhanceClearButtons(root) {
    const container = root || document;
    const controls = container.querySelectorAll('input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"]), textarea');

    controls.forEach((control) => {
      if (control.id === 'resultPrompt') return;
      if (control.closest('.field-control')) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'field-control';
      control.parentNode.insertBefore(wrapper, control);
      wrapper.appendChild(control);

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'field-clear-button';
      button.setAttribute('aria-label', `${control.getAttribute('aria-label') || control.getAttribute('name') || '입력값'} 지우기`);
      button.textContent = '×';
      button.addEventListener('click', () => {
        control.value = '';
        control.focus();
        control.dispatchEvent(new Event('input', { bubbles: true }));
        control.dispatchEvent(new Event('change', { bubbles: true }));
        updateClearButtons(container);
      });
      wrapper.appendChild(button);
    });

    updateClearButtons(container);
  }

  function updateClearButtons(root) {
    const container = root || document;
    container.querySelectorAll('.field-control').forEach((wrapper) => {
      const control = wrapper.querySelector('input, textarea');
      const button = wrapper.querySelector('.field-clear-button');
      if (!control || !button) return;

      const fieldWrapper = wrapper.closest('.form-field');
      const hasValue = Boolean(control.value && control.value.trim());
      const isHidden = Boolean(fieldWrapper && fieldWrapper.hidden);
      button.hidden = !hasValue || isHidden;
      wrapper.classList.toggle('has-value', hasValue && !isHidden);
    });
  }

  async function copyPrompt() {
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
    } catch (error) {
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

  let toastTimer = null;

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      els.toast.classList.remove('is-visible');
    }, 2400);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(value);
    return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&');
  }

  if (!config) {
    throw new Error('PROMPT_CONFIG를 찾을 수 없습니다. data/prompt-config.js를 먼저 로드해주세요.');
  }

  init();
})();
