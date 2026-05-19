# Phase 2 — 사주 type 분리 + ES Modules 리팩터링

## 요약

기존 단일 거대 파일(`assets/app.js` 1,176 라인 IIFE + `data/prompt-config.js` 2,610 라인 전역 객체) 구조를 ES Modules 기반의 9개 책임 단위 모듈로 분리하고, `사주/만세력`을 독립 type으로 분리했습니다. **GitHub Pages는 빌드 도구 없이 ES Modules를 그대로 서빙**하므로 배포 파이프라인 변경은 필요 없습니다.

## 결정 사항 (요청에 대한 답)

### 1) (C) 사주 분리 — 반영 완료

- 신규 `saju` type 추가: 13개 → **14개 type**
- `lifeFun`에서 사주 키워드 제거 (운세/타로 재미용만 유지, 정밀 분석은 `saju`로 안내)

### 2) (A) ES Modules vs (B) Vue 마이그레이션 — A를 우선 채택

| 항목 | (A) ES Modules 분리 | (B) Vue 마이그레이션 |
|---|---|---|
| GitHub Pages 호환성 | ✅ 빌드 없이 그대로 동작 | ❌ Vite 빌드 + GitHub Actions 필요 |
| 즉시 유지보수 효과 | ✅ 9개 책임 단위 분리 | ✅ 컴포넌트 단위 |
| 학습/도입 비용 | 거의 0 (이미 알고 있는 JS) | Vue Composition API, SFC, Vite base 설정 |
| 위험 | 매우 낮음 (동작 검증 통과) | 빌드/배포 환경 변경 필요 |
| Phase 3 발판 | 모듈 단위로 점진 Vue화 가능 | 한 번에 전면 전환 |

**결론: (A)를 먼저 적용하고, (B)는 다음 Phase로 분리.** (A) 모듈 분리가 끝나 있어야 (B)도 점진적·안전하게 마이그레이션할 수 있습니다.

> **권장하지 않는 선택지였던 (B) 즉시 도입을 안 한 이유**
> - Vue를 GitHub Pages에 올리려면 `vite build` + `gh-pages` 브랜치 또는 GitHub Actions가 필요합니다.
> - 빌드 산출물의 base path 설정을 잘못하면 정적 자원이 모두 404가 됩니다.
> - 현재 코드 규모(약 1,200 라인 + 설정 2,600 라인)는 ES Modules 분리만으로도 충분히 관리됩니다.
> - Vue로 가더라도 데이터 레이어(`prompt-config.js`)와 빌더 로직(`build-prompt.js`)은 그대로 재사용됩니다.

## 변경 파일 트리

```
prompt-main/
├── index.html                       # ← <script type="module" src="./assets/js/main.js"> 단 1줄
├── data/
│   └── prompt-config.js             # ESM export + 14 types (saju 신규 추가)
├── assets/
│   ├── styles.css                   # 변경 없음
│   └── js/
│       ├── main.js                  # 엔트리: init + bindEvents
│       ├── state.js                 # config / state / els / DOM 캐시
│       ├── utils.js                 # 순수 유틸 (escapeHtml, cssEscape, parseRecommendedOptionLabel)
│       ├── render.js                # type 카드, 공통 select, 필드 렌더링
│       ├── conditional.js           # showWhen / requiredWhen / data-common-dependent 동기
│       ├── validate.js              # 폼 검증 + 에러 표시
│       ├── sample.js                # 샘플 입력 토글 (Phase 1 핫픽스 유지)
│       ├── build-prompt.js          # 프롬프트 빌더
│       └── ui/
│           ├── custom-select.js     # 네이티브 select 위 커스텀 UI
│           ├── clear-buttons.js     # 입력 필드 × 버튼
│           ├── copy.js              # 클립보드
│           ├── toast.js             # 토스트
│           └── floating-actions.js  # 하단 플로팅 액션바
└── docs/
    ├── PHASE2_REFACTOR.md           # 이 문서
    ├── audit-phase2.mjs             # 정적 검증 (Node 실행)
    └── audit-runtime.mjs            # jsdom 통합 검증
```

## 새 사주 type 핵심 사양

```
필수 입력:
  - birthDate            (예: 1985-03-15)
  - birthCalendar        (양력 / 음력 평달 / 음력 윤달)
  - sajuScope            (기본 풀이 / 세운 / 대운 / 커리어 / 관계)

옵셔널 입력:
  - birthTime            (모름 + 13 시진 + "대략 시간대만 안다")
  - birthPlace           (출생지)
  - gender               (건명/곤명 — 대운 순행/역행 산출)
  - sajuTone             (학술톤/코칭톤/마라맛/무당톤 등)
  - sajuFocusQuestion    (구체적 관심 질문)
  - sajuAvoid            (피해야 할 표현/주제)

5인 페르소나:
  A 만세력 산출자 / B 명리학 해석자 / C 자기성찰 코치
  / D 레드팀 검토자 / E 최종 큐레이터

안전 가드 (standards 8개):
  - 운명 단정 금지
  - 두려움 조장 금지 (사망/이혼/질병)
  - 의료/투자/법률 직접 권유 금지
  - 술가별 견해 차이는 단정 대신 "~로 보는 견해" 형식
  - 시간 모를 경우 시주 미상 처리 + 한계 명시
  - 한국 표준시 변경 시기 보정 명시 (1908~1961 동경 127.5도)
  - AI 만세력 산출 한계 명시
```

## 마이그레이션 호환성

- `data/prompt-config.js`는 `export const PROMPT_CONFIG`와 동시에 `window.PROMPT_CONFIG`도 노출합니다. 기존 외부 도구가 전역 참조 중이라면 그대로 작동합니다.
- 기존 `assets/app.js`는 제거하지 않았다면 별도로 삭제하세요. (이번 패키지는 새 구조만 포함합니다.)

## 검증 결과

### 정적 검증 (`docs/audit-phase2.mjs`)
- ✓ PROMPT_CONFIG ESM 로드, 14 types
- ✓ saju type 모든 필수 필드 존재 + 안전 가드 standards 포함
- ✓ lifeFun에서 사주 키워드 제거 + saju 안내 문구 1개만 유지
- ✓ sampleValues option 매칭 0건 미스매치 (Phase 1 회귀 방지)
- ✓ recommendedValue option 매칭 0건 이슈
  - 추가 발견 버그 1건 수정: `research.analysisFramework.recommendedValue: "auto"` → `""`
- ✓ 모듈 13개 파일 존재 + import 경로 무결성
- ✓ index.html `type="module"` 적용

### jsdom 런타임 검증 (`docs/audit-runtime.mjs`)
- ✓ 초기 14개 type 카드 렌더
- ✓ 사주 type 전환 → 필수 필드 정상 렌더
- ✓ 샘플 입력 → 5개 필드(birthDate/birthCalendar/sajuScope/birthTime/gender) 모두 정상 적용
- ✓ 사주 프롬프트 생성 3,398자 + [역할]/만세력/[작업 유형]/[자기 검증 루프]/안전가드 포함
- ✓ lifeFun.interactionMode 샘플 정상 적용 (Phase 1 회귀 방지)
- ✓ lifeFun.fortuneStyle conditional 필드 visible
- ✓ 전체 14개 유형 순회 샘플→submit 시나리오 무에러

## GitHub Pages 배포 체크리스트

1. 기존 저장소 루트에 새 구조를 그대로 덮어쓰기 (`assets/app.js`는 삭제 권장)
2. `git add -A && git commit -m "refactor: ES Modules 분리 + saju type 신설"`
3. push 후 GitHub Pages 빌드 자동 적용 (별도 설정 없음)
4. CSP 헤더에 `script-src 'self'` 기본 정책만 있으면 그대로 동작 (외부 의존성 0)

### 캐시 주의
ES Modules는 브라우저 캐시가 매우 공격적입니다. 첫 배포 시:
- 사용자에게 `Ctrl+Shift+R` (강제 새로고침) 안내
- 또는 `index.html`의 `<script type="module" src="./assets/js/main.js?v=20260519">` 처럼 쿼리 파라미터 버전 부여 권장

## 다음 단계: (B) Vue 마이그레이션 로드맵 — 향후 Phase 3 권장 방향

당장 (B)를 하지 않은 이유는 위에 정리했지만, **장기적으로 Vue 도입은 합리적**입니다. 다음과 같은 점진 전략을 권장합니다.

### Phase 3a: Vite + Vue 셋업 (배포 환경만 먼저)
- `vite.config.js`의 `base: '/<repo-name>/'` 설정 필수 (GitHub Pages 서브패스 대응)
- GitHub Actions workflow 추가: `npm ci && npm run build && deploy to gh-pages`
- 이 단계에서는 `App.vue`가 기존 `index.html`을 그대로 마운트하는 수준

### Phase 3b: 컴포넌트화 (모듈 단위 1:1 매핑)
현재 모듈 → 컴포넌트 매핑:
- `render.js → TypeSelector.vue + FieldRenderer.vue`
- `ui/custom-select.js → CustomSelect.vue` (가장 큰 단순화 효과)
- `sample.js → useSample.ts` (Composable)
- `conditional.js → useConditionalFields.ts` (Composable)
- `build-prompt.js → buildPrompt.ts` (순수 함수, 그대로 재사용)
- `data/prompt-config.js → 그대로 재사용`

### Phase 3c: 상태 관리
- `state.js` → Pinia store로 이전
- 14개 type 카드 전환 시 reactive하게 필드 변경

### 대안: Vue 대신 Web Components / Lit
- 정적 사이트만 운영한다면 Vue보다 학습 비용 더 적음
- 단, 사용자(도경) 가 이미 Vue.js 경험이 있다고 메모리에 있으므로 Vue가 자연스럽습니다

## 다음 Phase 결정에 필요한 질문

1. Phase 3 Vue 마이그레이션이 정말 필요한가? (현재 ES Modules 구조로 1년은 충분히 유지 가능)
2. Vue로 가야 한다면 단순 Vite + Vue SFC vs Nuxt 정적 사이트 중 어느 쪽인가? (SEO/메타 태그가 중요하면 Nuxt)
3. PWA 화 (오프라인 사용) 가 필요한가? (도경의 "나의 디지털 서재" 처럼)
