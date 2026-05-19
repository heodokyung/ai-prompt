import { config, state, els, setupDomCache, getCurrentType } from './state.js';
import { renderTypeOptions, renderCommonSelects, applyTypeDefaults, renderFields } from './render.js';
import { syncConditionalFields } from './conditional.js';
import { enhanceClearButtons, updateClearButtons } from './ui/clear-buttons.js';
import { enhanceCustomSelects, refreshCustomSelects } from './ui/custom-select.js';
import { setupFloatingActionBar } from './ui/floating-actions.js';
import { showToast } from './ui/toast.js';
import { copyPrompt } from './ui/copy.js';
import { validateFields, clearErrors } from './validate.js';
import { toggleSampleValues, resetSampleState, updateSampleButtonState } from './sample.js';
import { buildPrompt } from './build-prompt.js';

if (!config) {
  throw new Error('PROMPT_CONFIG를 찾을 수 없습니다. data/prompt-config.js 가 정상 로드되었는지 확인하세요.');
}

function init() {
  setupDomCache();
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

// DOM 준비 후 init 실행 — type=module 스크립트는 기본 defer라 DOMContentLoaded 이후 실행되지만,
// 명시적으로 한 번 더 가드해 어떤 위치/순서에서 로드돼도 안전하게 동작하도록 보장한다.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
