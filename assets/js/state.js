import { PROMPT_CONFIG } from '../../data/prompt-config.js';

export const config = PROMPT_CONFIG;

export const state = {
  selectedType: config.defaultType,
  lastPrompt: '',
  sample: {
    typeKey: null,
    active: false,
    fieldIds: []
  }
};

/**
 * DOM 요소 캐시. main.js의 init() 시점에 채워진다.
 * 초기 export 시 빈 객체 → setupDomCache()로 한번에 주입.
 */
export const els = {};

export function setupDomCache() {
  const ids = [
    'promptTypeGroup', 'promptForm',
    'requiredFields', 'conditionalRequiredSection', 'conditionalRequiredFields', 'optionalFields',
    'clarityLevel', 'customClarity', 'responseDepth', 'promptStrength',
    'personaMode', 'toneMode', 'outputFormatMode', 'customOutputFormat',
    'clarityNote', 'responseDepthNote', 'promptStrengthNote',
    'personaModeNote', 'toneModeNote', 'outputFormatNote',
    'clarityLevelRecommended', 'responseDepthRecommended', 'promptStrengthRecommended',
    'personaModeRecommended', 'toneModeRecommended', 'outputFormatModeRecommended',
    'redTeamMode', 'askMoreQuestions', 'includeSelfReview',
    'splitIfLong', 'includeExamples', 'requireEvidence',
    'resultPrompt', 'copyButton', 'selectButton', 'resetButton',
    'sampleButton', 'promptMeta', 'toast'
  ];

  const aliasMap = {
    typeGroup: 'promptTypeGroup'
  };

  ids.forEach((id) => {
    els[id] = document.getElementById(id);
  });

  Object.entries(aliasMap).forEach(([alias, id]) => {
    els[alias] = els[id];
  });

  // 그룹화: recommended chip 모음 (커스텀 셀렉트의 권장 표시는 여기서 일괄 OFF 처리)
  els.recommendedChips = {
    clarityLevel: els.clarityLevelRecommended,
    responseDepth: els.responseDepthRecommended,
    promptStrength: els.promptStrengthRecommended,
    personaMode: els.personaModeRecommended,
    toneMode: els.toneModeRecommended,
    outputFormatMode: els.outputFormatModeRecommended
  };

  els.controlPanel = document.querySelector('.control-panel');
  els.formActionRow = document.querySelector('.prompt-form > .button-row');
}

export function getCurrentType() {
  return config.types.find((type) => type.key === state.selectedType) || config.types[0];
}
