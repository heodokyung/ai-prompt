import { state, els, getCurrentType } from './state.js';
import { syncConditionalFields } from './conditional.js';
import { refreshCustomSelects } from './ui/custom-select.js';
import { showToast } from './ui/toast.js';

export function toggleSampleValues() {
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
        console.warn(`[샘플 입력] ${type.key}.${fieldId} 의 sampleValue가 option value와 일치하지 않습니다: "${nextValue}"`);
        skipped.push({ fieldId, reason: 'option-mismatch' });
        return;
      }
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
      // select는 dispatchEvent로 종속 필드 재계산
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      clearedCount += 1;
    }
  });

  resetSampleState();
  syncConditionalFields();
  refreshCustomSelects(els.promptForm);
  updateSampleButtonState();
  showToast(clearedCount ? '샘플 입력값을 지웠습니다.' : '수정된 값은 유지하고 샘플 상태만 해제했습니다.');
}

export function resetSampleState() {
  state.sample = {
    typeKey: null,
    active: false,
    fieldIds: []
  };
  updateSampleButtonState();
}

export function updateSampleButtonState() {
  if (!els.sampleButton) return;
  const type = getCurrentType();
  const hasSample = !!(type.sampleValues && Object.keys(type.sampleValues).length);
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
