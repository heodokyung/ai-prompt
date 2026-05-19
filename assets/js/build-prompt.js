import { config, els, getCurrentType } from './state.js';
import { cssEscape, cleanOptionLabel } from './utils.js';

export function buildPrompt() {
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
    values.lifeFunTopic?.value ||
    values.sajuFocusQuestion?.value ||
    values.symptomDescription?.value;

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
