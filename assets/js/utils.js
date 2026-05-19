// 순수 유틸 함수 모음. 어떤 모듈에도 의존하지 않는다.

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function cssEscape(value) {
  if (typeof window !== 'undefined' && window.CSS && typeof window.CSS.escape === 'function') {
    return window.CSS.escape(value);
  }
  return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&');
}

/**
 * "균형형 - 권장" 같은 라벨에서 main/reason을 분리한다.
 */
export function parseRecommendedOptionLabel(label) {
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

export function cleanOptionLabel(label) {
  return parseRecommendedOptionLabel(label).main.trim();
}

export function normalizeRecommendationReason(reason) {
  return String(reason || '')
    .replace(/권장/g, '')
    .replace(/기본/g, '기본값')
    .replace(/[()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * 추천 사유 문자열이 현재 type과 관련이 있는지 키워드로 판정.
 */
export function isRecommendationReasonForCurrentType(reason, type) {
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
    lifeFun: ['재미', '생활', '운세', '타로'],
    saju: ['사주', '만세력', '명리'],
    image: ['이미지', '시각'],
    health: ['건강', '증상', '의료']
  };
  const haystack = `${reason} ${type.label || ''}`;
  return (aliases[type.key] || []).some((alias) => haystack.includes(alias));
}
