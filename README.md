# AI 프롬프트 변환기

작업 유형과 핵심 조건을 선택하면 **역할·목표·맥락·입력 자료·기준·금지사항·출력 형식·검토 방식**이 포함된 실행형 프롬프트를 자동으로 생성하는 정적 웹 도구입니다.

- **외부 의존성 0** — 빌드 없이 정적 서버만 있으면 동작
- **GitHub Pages 호환** — ES Modules를 그대로 서빙
- **다중 인격 검토 구조** 내장 — 페르소나·레드팀·자기 검증 루프 옵션
- **14개 작업 유형** — 검색부터 사주/만세력까지

---

## 지원 작업 유형 (14)

| # | 유형 | key | 설명 |
|---|---|---|---|
| 1 | 검색 | `search` | 최신 정보, 비교, 의사결정용 조사 |
| 2 | 코딩 | `coding` | 진단, 수정, 구현, 리팩토링 |
| 3 | 요약 | `summary` | 긴 문서, 회의록, 자료 정리 |
| 4 | 아이디어 | `idea` | 기획, 사업, 콘텐츠 |
| 5 | 글쓰기 | `writing` | 블로그·유튜브 대본·소설·책 원고·SNS |
| 6 | 투자/재테크 | `finance` | 포트폴리오·ETF·부동산 입지·현금흐름 |
| 7 | 마케팅 | `marketing` | 브랜드·상세페이지·광고·전환 전략 |
| 8 | 리서치/분석 | `research` | 시장조사·비교분석·보고서 |
| 9 | 학습/코치·작업 파트너 | `learningPartner` | 학습 진단·맞춤 수업·작업 협업 |
| 10 | 여행/코스 | `travel` | 여행 일정·동선·예산·준비물 |
| 11 | 재미/생활/기타 | `lifeFun` | 운세·타로 재미용, 생활 루틴, 밈·상황극 |
| 12 | **사주/만세력** | `saju` | 사주팔자·만세력 기반 자기성찰형 분석 (운명 단정 금지) |
| 13 | 이미지 생성 | `image` | 이미지 생성/수정 요청 |
| 14 | 건강/증상 | `health` | 증상 분석·진료과 안내·약물 정보 |

> 사주/만세력은 별도 유형으로 분리되어 있습니다. `lifeFun` 의 "운세/타로 - 재미용"은 가벼운 재미용이며, **만세력 기반 정밀 분석은 `saju` 유형을 사용하세요.**

---

## 파일 구조

```text
prompt-main/
├─ index.html                          # 진입점 (ES Module 1줄 로드)
├─ data/
│  └─ prompt-config.js                 # 14 type 설정 + 공통 옵션 (export + window 양쪽 노출)
├─ assets/
│  ├─ styles.css                       # 전체 스타일
│  └─ js/
│     ├─ main.js                       # 엔트리: init + 이벤트 바인딩
│     ├─ state.js                      # 앱 상태 + DOM 캐시
│     ├─ utils.js                      # escapeHtml, cssEscape 등 순수 유틸
│     ├─ render.js                     # type 카드 / 공통 select / 필드 렌더
│     ├─ conditional.js                # showWhen / requiredWhen 동기
│     ├─ validate.js                   # 폼 검증
│     ├─ sample.js                     # 샘플 입력 토글
│     ├─ build-prompt.js               # 프롬프트 빌더 (순수 함수 위주)
│     └─ ui/
│        ├─ custom-select.js           # 커스텀 select UI
│        ├─ clear-buttons.js           # 입력 필드 × 버튼
│        ├─ copy.js                    # 클립보드 복사
│        ├─ toast.js                   # 토스트 메시지
│        └─ floating-actions.js        # 하단 플로팅 액션바
└─ docs/
   ├─ audit-phase2.mjs                 # 정적 검증 (Node 실행)
   └─ audit-runtime.mjs                # jsdom 통합 검증
```

---

## 실행 방법

### 1) 로컬 실행 — 반드시 정적 서버로

ES Modules는 `file://` 프로토콜에서 보안 정책상 동작하지 않습니다. **반드시 정적 서버로 실행하세요.**

```bash
# 옵션 1: npx serve
npx serve .

# 옵션 2: Python 내장 서버
python3 -m http.server 8080

# 옵션 3: VS Code Live Server 확장에서 index.html 열기
```

브라우저에서 표시된 포트로 접속.

### 2) GitHub Pages 배포

별도 빌드 없이 그대로 push 하면 됩니다.

```bash
git add -A
git commit -m "deploy"
git push
```

저장소 Settings → Pages 에서 브랜치(main 또는 docs)와 폴더(`/` 루트)를 지정하면 끝.

> **캐시 주의** — ES Modules는 브라우저 캐시가 강합니다. 갱신 후 사용자에게 `Ctrl+Shift+R` 강제 새로고침을 안내하거나, `index.html` 의 `<script src="./assets/js/main.js?v=YYYYMMDD">` 처럼 쿼리 버전을 부여하세요.

---

## 검증 방법

리포지토리 루트에서 Node 22 이상으로 실행합니다.

```bash
# 정적 검증 — 설정 무결성, 모듈 그래프, sampleValues 매칭
node docs/audit-phase2.mjs

# 런타임 통합 검증 — jsdom 으로 init → 샘플 입력 → 프롬프트 생성까지 (jsdom 필요)
npm install --no-save jsdom
NODE_PATH=./node_modules node docs/audit-runtime.mjs
```

검증 항목:
- 14개 type 로드 / `saju` 신규 type 필드 무결성
- `lifeFun` 에서 사주 키워드 제거 확인
- `sampleValues` 의 모든 select 값이 실제 option value와 일치 (0건 미스매치)
- `recommendedValue` 의 option value 존재 (0건 이슈)
- 모듈 import 그래프 무결성
- jsdom 환경에서 14개 유형 전체 샘플→submit 시나리오 무에러

---

## 데이터 모델 (`data/prompt-config.js`)

각 type은 다음 구조를 따릅니다.

```js
{
  key: 'saju',
  label: '사주/만세력',
  badge: 'Saju',
  description: '...',
  commonDefaults: { clarityLevel, responseDepth, ... },
  role: 'AI에 부여할 역할 문장',
  requiredFields: [ { id, label, type, required, options?, recommendedValue? } ],
  optionalFields: [ ... ],          // showWhen / requiredWhen 으로 조건부 노출 가능
  personas: [ 'A - ...', 'B - ...' ],
  outputFormat: [ '1. ...', '2. ...' ],
  standards: [ '...', '...' ],      // 안전 가드 / 반드시 지킬 기준
  sampleValues: { fieldId: value }, // "샘플 입력" 버튼이 채우는 값
  tip: '마지막 팁'
}
```

### `sampleValues` 작성 시 주의
`select` 타입 필드의 `sampleValues` 값은 **반드시 해당 필드의 옵션 `value` 와 정확히 일치해야** 합니다. 라벨이나 prompt 텍스트가 아닙니다. 불일치는 `audit-phase2.mjs` 가 자동으로 잡아냅니다.

### 조건부 필드 (`showWhen` / `requiredWhen`)
다른 필드의 값에 따라 표시/필수 여부가 바뀌는 필드입니다.

```js
{
  id: 'fortuneStyle',
  showWhen: { fieldId: 'lifeFunMode', value: 'fortune' }
}
```

샘플 입력 시 source 필드(`lifeFunMode`)가 먼저 채워지도록 자동 정렬되므로 작성 순서는 신경 쓰지 않아도 됩니다.

---

## type 추가 / 수정 가이드

1. `data/prompt-config.js` 의 `types: [ ... ]` 배열에 항목 추가
2. 필수 필드(`key`, `label`, `badge`, `description`, `role`, `requiredFields`, `personas`, `outputFormat`, `standards`, `tip`) 모두 작성
3. `sampleValues` 작성 시 위 "주의" 항목 준수
4. `node docs/audit-phase2.mjs` 로 무결성 검증
5. 정적 서버로 띄워 실제 동작 확인

---

## 안전 가드 정책

특정 유형은 사용자에게 직접적인 위험으로 이어질 수 있어 `standards` 에 명시적 가드가 들어 있습니다.

- **`saju`** — 운명 단정 금지 / 두려움 조장 금지 / 의료·투자·법률 직접 권유 금지 / 술가별 견해 차이는 "~로 보는 견해" 형식 / AI 만세력 산출 한계 명시
- **`health`** — 자가 진단 단정 금지 / 응급 상황 즉시 의료기관 안내 / 처방·복용 직접 지시 금지
- **`finance`** — 투자 권유 금지 / 리스크 명시 / 손실 가능성 동반 안내

가드 문구를 임의로 제거하지 마세요. 프롬프트 생성기는 사용자에게 도움이 되어야지, 해가 되어서는 안 됩니다.

---

## 향후 로드맵

- **Phase 3** — Vue 또는 다른 프레임워크 마이그레이션 (배포 환경 변경 필요, 현재 보류)
- 개선 후보: PWA 화(오프라인 사용) / 프롬프트 즐겨찾기·저장 / 다국어(영어) / 결과 프롬프트 히스토리

자세한 결정 배경은 `docs/PHASE2_REFACTOR.md` 참고.

---

## 라이선스 / 책임

- 이 도구는 **프롬프트 생성기**이며 결과 프롬프트를 LLM에 실행해 얻은 답변의 정확성·안전성은 보장하지 않습니다.
- 의료·법률·투자 등 고위험 의사결정은 반드시 전문가 검증을 거치세요.
- 사주/만세력 유형은 자기성찰 목적이며 운명을 단정하지 않습니다.
