export const PROMPT_CONFIG = {
  "appName": "AI 프롬프트 변환기",
  "defaultType": "search",
  "commonDefaults": {
    "clarityLevel": "auto",
    "responseDepth": "balanced",
    "promptStrength": "enhanced",
    "personaMode": "auto",
    "toneMode": "calm",
    "outputFormatMode": "typeDefault"
  },
  "clarityOptions": [
    {
      "value": "auto",
      "label": "자동 판단 - 권장",
      "prompt": "작업 유형, 입력 난이도, 사용자의 목적에 맞춰 설명 수준을 자동 조절해줘. 단, 기본은 한국어로 명확하고 이해하기 쉽게 설명해줘."
    },
    {
      "value": "elementary",
      "label": "초등학생도 이해할 수 있게",
      "prompt": "초등학생도 이해할 수 있게 쉬운 단어와 구체적인 예시로 설명해줘."
    },
    {
      "value": "age5",
      "label": "5살 아이에게 설명하듯이",
      "prompt": "5살 아이에게 설명하듯 아주 쉬운 비유와 짧은 문장으로 설명해줘."
    },
    {
      "value": "age11",
      "label": "11살 아이에게 설명하듯이",
      "prompt": "11살 아이에게 설명하듯 핵심 개념, 쉬운 예시, 단계별 설명을 함께 제공해줘."
    },
    {
      "value": "beginner",
      "label": "비전문가/초보자 수준",
      "prompt": "비전문가 또는 초보자 수준에서 전문 용어를 풀어서 설명해줘."
    },
    {
      "value": "expert",
      "label": "전문가 수준으로 깊이 있게 - 코딩/분석 권장",
      "prompt": "전문가 수준으로 깊이 있게 분석하고 판단 근거, 반례, 리스크까지 제시해줘."
    },
    {
      "value": "simple",
      "label": "심플한 용어(simple terms) - 이미지 권장",
      "prompt": "심플한 용어(simple terms)로 짧고 명확하게 설명해줘."
    },
    {
      "value": "custom",
      "label": "직접 입력",
      "prompt": ""
    }
  ],
  "responseDepthOptions": [
    {
      "value": "balanced",
      "label": "균형형 - 권장",
      "prompt": "핵심 결론, 이유, 실행 순서를 균형 있게 설명해줘."
    },
    {
      "value": "concise",
      "label": "간결형 - 검색/이미지 간단 요청 권장",
      "prompt": "핵심만 간결하게 답하되, 판단에 필요한 근거는 빠뜨리지 마."
    },
    {
      "value": "detailed",
      "label": "상세형 - 검색/요약 권장",
      "prompt": "배경, 대안, 리스크, 검증 방법까지 자세히 설명해줘."
    },
    {
      "value": "actionable",
      "label": "실행형 - 코딩 권장",
      "prompt": "실무자가 바로 적용할 수 있도록 파일/단계/체크리스트 중심으로 매우 구체적으로 작성해줘."
    }
  ],
  "promptStrengthOptions": [
    {
      "value": "enhanced",
      "label": "강화형 - 권장",
      "prompt": "강화형으로 수행해줘. 요구사항 누락 여부를 먼저 점검하고, 모호한 표현은 명확한 기준으로 바꿔줘."
    },
    {
      "value": "standard",
      "label": "표준형",
      "prompt": "표준 수준으로 명확하게 요청을 수행해줘."
    },
    {
      "value": "precision",
      "label": "정밀 검토형 - 고위험/코딩 권장",
      "prompt": "정밀 검토형으로 수행해줘. 답변 전 요구사항의 충돌, 빠진 정보, 실패 가능성, 대안을 검토한 뒤 최종안을 작성해줘."
    }
  ],
  "personaModeOptions": [
    {
      "value": "auto",
      "label": "자동 판단 - 권장",
      "prompt": "작업 난이도와 목적을 먼저 판단해 토론 깊이를 자동 조절해줘. 단순 사실 확인은 짧게 검토하고, 비교/의사결정/코딩/아이디어/글쓰기처럼 품질 검증이 중요한 작업은 인격체별 관점을 명확히 반영해줘."
    },
    {
      "value": "full",
      "label": "항상 다중 인격 토론",
      "prompt": "모든 인격체가 명시적으로 의견을 내고, 최종 결정권자가 토론 결과를 종합해줘."
    },
    {
      "value": "compact",
      "label": "간소화 검토 - 단순 검색/이미지 권장",
      "prompt": "긴 토론문은 줄이고, 각 인격체 관점의 핵심 체크 결과만 반영한 뒤 최종안을 제시해줘."
    }
  ],
  "toneOptions": [
    {
      "value": "calm",
      "label": "차분하고 명확하게 - 기본 권장",
      "prompt": "차분하고 명확한 톤으로 작성해줘."
    },
    {
      "value": "action",
      "label": "친절한 실행형 - 코딩 권장",
      "prompt": "친절하지만 장황하지 않은 실행형 톤으로 작성해줘."
    },
    {
      "value": "redteam",
      "label": "냉정한 레드팀 톤 - 아이디어/투자형 권장",
      "prompt": "냉정한 레드팀 톤으로 장점보다 약점과 리스크를 먼저 짚어줘."
    },
    {
      "value": "report",
      "label": "전문가 보고서형 - 검색/요약 권장",
      "prompt": "전문가 보고서처럼 구조적이고 근거 중심으로 작성해줘."
    },
    {
      "value": "natural",
      "label": "자연스러운 사람 문체 - 글쓰기 권장",
      "prompt": "AI처럼 과하게 매끈한 문장보다 자연스러운 사람 문체로 작성해줘."
    }
  ],
  "outputFormatOptions": [
    {
      "value": "typeDefault",
      "label": "작업 유형 기본 형식 - 권장",
      "prompt": ""
    },
    {
      "value": "decision",
      "label": "결론/근거/위험",
      "prompt": "1. 한 줄 결론\n2. 핵심 근거\n3. 실행 순서\n4. 리스크\n5. 다음 행동"
    },
    {
      "value": "compare",
      "label": "비교표 중심",
      "prompt": "1. 핵심 요약\n2. 표로 비교\n3. 추천안\n4. 선택 기준\n5. 주의사항"
    },
    {
      "value": "troubleshoot",
      "label": "문제 해결형 - 코딩 권장",
      "prompt": "1. 문제 정의\n2. 원인 후보\n3. 검증 방법\n4. 해결 방법\n5. 재발 방지"
    },
    {
      "value": "writing",
      "label": "글쓰기 결과형 - 글쓰기 권장",
      "prompt": "1. 제목 후보\n2. 완성본\n3. 핵심 문장\n4. 수정 의도\n5. 추가 개선점"
    },
    {
      "value": "finance",
      "label": "투자 분석형",
      "prompt": "1. 한 줄 결론\n2. 분석 전제와 필요한 최신 데이터\n3. 현재 상황/대상 자산 요약\n4. 핵심 기회 요인\n5. 핵심 리스크\n6. 시나리오별 판단\n7. 실행/보류/추가 확인 기준\n8. 레드팀 체크\n9. 다음 행동"
    },
    {
      "value": "marketing",
      "label": "마케팅 전략형",
      "prompt": "1. 핵심 전략\n2. 타깃 고객\n3. 메시지/포지셔닝\n4. 채널별 실행안\n5. 카피 예시\n6. 테스트 방법\n7. KPI\n8. 리스크와 개선안"
    },
    {
      "value": "researchAnalysis",
      "label": "리서치/분석형",
      "prompt": "1. 핵심 결론\n2. 분석 질문과 전제\n3. 근거/데이터\n4. 대안별 비교\n5. 반대 가설\n6. 리스크\n7. 최종 판단\n8. 추가 확인 질문"
    },
    {
      "value": "funLife",
      "label": "재미/생활형",
      "prompt": "1. 오늘의 한 줄 결론\n2. 맞춤 해석\n3. 추천 행동\n4. 주의할 점\n5. 재미 요소\n6. 다음 질문 또는 추가 팁"
    },
    {
      "value": "learningPartner",
      "label": "학습/코치·작업 파트너형",
      "prompt": "1. 현재 수준 진단\n2. 목표와 필요한 역량 정의\n3. 단계별 학습/작업 계획\n4. 오늘 바로 할 과제\n5. 피드백 기준과 체크리스트\n6. 예시/연습 문제 또는 공동 작업안\n7. 막히는 지점별 해결법\n8. 다음 질문 또는 다음 세션 과제"
    },
    {
      "value": "travel",
      "label": "여행 일정형",
      "prompt": "1. 한 줄 추천 결론\n2. 여행 전제와 확인 필요 정보\n3. 날짜별/시간대별 타임라인\n4. 이동 동선과 예상 소요 시간\n5. 식비/교통비/입장료 등 예산표\n6. 준비물 체크리스트\n7. 현지 팁/예약 팁/주의사항\n8. 비 오는 날 또는 체력 저하 대안\n9. 최종 추천 코스와 바로 할 일"
    },
    {
      "value": "custom",
      "label": "직접 입력",
      "prompt": ""
    }
  ],
  "commonOpening": [
    "차분히 단계별로 해결해줘. 단계적으로 생각하되(Let's think step by step), 내부 사고 과정 전체를 그대로 노출하지 말고 최종 답변에는 핵심 근거, 판단 단계, 결론만 명확하게 정리해줘.",
    "답변 맨 앞에는 가장 중요한 핵심 요약(TL;DR) 1~3줄을 먼저 보여주고, 그 다음에 세부 내용을 전개해줘.",
    "최적의 답변을 완료한 뒤에는 사용자가 바로 적용할 수 있는 팁을 제공해줘."
  ],
  "commonDefaultInstructions": [
    "별도 언어를 지정하지 않았다면 모든 답변은 한국어로 작성해줘.",
    "별도 국가, 지역, 시장, 법, 가격 기준을 입력하지 않았다면 대한민국 상황을 최우선 기준으로 삼아줘.",
    "한국이 아닌 국가나 시장 조건이 입력되어 있다면 그 입력값을 우선하되, 한국 기준과 다를 수 있는 부분은 구분해줘.",
    "모든 검색·정보 참고·시점 비교는 오늘 날짜를 기준으로 처리해줘. 사용자가 별도 기준 시점을 명시한 경우에만 그 시점을 우선해줘.",
    "오늘 날짜 이후의 변경 가능성이 있는 정보(가격, 정책, 인물, 통계 등)는 '확인 시점'을 함께 표시해줘."
  ],
  "commonGuardrails": [
    "거짓 정보를 진실처럼 만들지 마.",
    "추측이나 불확실한 정보를 사실인 것처럼 꾸미지 마.",
    "편견이나 고정관념에 의존하지 않도록 주의해줘.",
    "모르는 내용은 모른다고 말하고, 확인이 필요한 부분은 확인 필요로 표시해줘.",
    "사실, 추론, 의견을 구분해줘.",
    "사용자가 준 맥락을 무시한 일반론으로 끝내지 마.",
    "중요한 판단은 이유와 근거를 함께 제시해줘.",
    "투자, 건강, 법률처럼 고위험 판단은 단정하지 말고 최신 정보 확인 필요성과 개인 상황에 따른 차이를 명확히 표시해줘."
  ],
  "types": [
    {
      "key": "search",
      "label": "검색",
      "badge": "Search",
      "description": "최신 정보, 비교, 의사결정용 조사 프롬프트",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "detailed",
        "promptStrength": "enhanced",
        "personaMode": "auto",
        "toneMode": "report",
        "outputFormatMode": "decision"
      },
      "role": "너는 최신 정보 검색, 출처 신뢰도 평가, 한국 맥락 해석, 의사결정 지원에 강한 시니어 리서치 애널리스트다. 단순 검색은 짧고 정확하게, 비교·구매·정책·가격·일정처럼 변동 가능성이 큰 주제는 최신성·출처·조건 차이를 분리해서 검증한다.",
      "requiredFields": [
        {
          "id": "topic",
          "label": "검색/조사할 주제",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 국내 인터넷+IPTV 신규 가입 혜택 비교"
        },
        {
          "id": "goal",
          "label": "검색을 통해 얻고 싶은 결론",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 통신사를 이동해야 하는지, 재약정이 나은지 판단하고 싶다."
        },
        {
          "id": "context",
          "label": "현재 상황/맥락",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 현재 LG 사용 중, 재약정 혜택 30만 원 제시, 알뜰폰 결합 가능성 있음"
        }
      ],
      "optionalFields": [
        {
          "id": "audience",
          "label": "읽는 대상/사용자 상황",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 비용 절감이 최우선인 40대 가장"
        },
        {
          "id": "region",
          "label": "한국 외 지역/언어/시장 범위",
          "type": "input",
          "placeholder": "예: 미국, 일본, 전 세계처럼 한국 외 범위가 필요할 때만 입력",
          "help": "비워두면 한국어·대한민국 기준을 기본으로 적용합니다."
        },
        {
          "id": "dateSensitivity",
          "label": "최신성 기준",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "선택 안 함"
            },
            {
              "value": "최신 정보가 중요하므로 최근 자료를 우선 확인하고 날짜를 명확히 표시해줘.",
              "label": "최신 정보 우선"
            },
            {
              "value": "법, 가격, 정책처럼 변동 가능성이 높은 정보는 최신 출처로 검증해줘.",
              "label": "변동 가능 정보 검증"
            },
            {
              "value": "시간이 지나도 변하지 않는 배경 정보와 최신 정보를 구분해줘.",
              "label": "배경/최신 구분"
            }
          ]
        },
        {
          "id": "preferredSources",
          "label": "선호 출처/확인 경로",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 공식 홈페이지, 약관, 정부/기관 자료, 최근 기사 우선"
        },
        {
          "id": "avoid",
          "label": "제외할 정보/방식",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 광고성 블로그만 근거로 삼지 말 것, 커뮤니티 후기만으로 단정 금지"
        },
        {
          "id": "decisionCriteria",
          "label": "판단 기준",
          "type": "textarea",
          "rows": 3,
          "placeholder": "예: 총 혜택, 월 납부액, 약정 기간, 위약금, 가족 결합 가능성 순서로 판단"
        }
      ],
      "personas": [
        "A - 검색 전략가: 사용자의 질문을 검색 가능한 키워드와 검증 질문으로 바꾼다.",
        "B - 정보 수집가: 최신성, 공식 출처, 1차 자료, 비교 가능한 데이터를 우선한다.",
        "C - 팩트체커: 숫자, 날짜, 가격, 조건, 예외사항, 출처 간 충돌을 검증한다.",
        "D - 한국 맥락 분석가: 별도 지정이 없으면 국내 법·가격·시장·관행을 우선 반영한다.",
        "E - 최종 의사결정자: 사용자의 목적에 맞춰 선택지, 리스크, 다음 행동을 정리한다."
      ],
      "outputFormat": [
        "1. 핵심 결론",
        "2. 조사 범위와 전제",
        "3. 주요 사실과 근거",
        "4. 선택지별 장단점",
        "5. 가장 추천하는 선택",
        "6. 확인이 필요한 불확실한 정보",
        "7. 지금 바로 해야 할 행동",
        "8. 마지막 팁"
      ],
      "standards": [
        "최신성이 중요한 정보는 날짜를 명확히 표시해줘.",
        "사실, 추론, 의견을 구분해줘.",
        "가능하면 출처나 확인 경로를 함께 제시해줘.",
        "광고성 주장과 검증된 정보를 구분해줘.",
        "사용자의 결정 목표에 직접 도움이 되는 결론을 먼저 제시해줘.",
        "여러 출처 간 정보가 충돌할 경우 어떤 출처가 더 신뢰할 수 있는지와 그 이유를 명시해줘."
      ],
      "sampleValues": {
        "topic": "국내 인터넷+IPTV 신규 가입과 재약정 혜택 비교",
        "goal": "현재 통신사를 유지하고 재약정하는 것이 나은지, 다른 통신사로 이동하는 것이 나은지 총비용과 혜택 기준으로 판단하고 싶다.",
        "context": "현재 LG 인터넷+IPTV를 사용 중이고 재약정 조건으로 월 5,500원 할인과 30만 원 혜택을 제안받았다. 가족 중 알뜰폰 사용자가 있어 결합 가능성도 확인하고 싶다.",
        "dateSensitivity": "법, 가격, 정책처럼 변동 가능성이 높은 정보는 최신 출처로 검증해줘.",
        "decisionCriteria": "총 혜택, 월 납부액, 약정 기간, 설치비, 위약금, 결합 할인 가능성, 사은품 지급 안정성을 기준으로 비교해줘."
      },
      "tip": "검색형 프롬프트는 “무엇을 알고 싶은지”보다 “무엇을 결정하려는지”를 넣을수록 좋아집니다."
    },
    {
      "key": "coding",
      "label": "코딩",
      "badge": "Code",
      "description": "진단, 수정, 구현, 리팩토링용 프롬프트",
      "commonDefaults": {
        "clarityLevel": "expert",
        "responseDepth": "actionable",
        "promptStrength": "precision",
        "personaMode": "auto",
        "toneMode": "action",
        "outputFormatMode": "troubleshoot"
      },
      "role": "너는 10년 이상의 경력을 가진 시니어 프론트엔드 엔지니어이자 백엔드·네이티브·배포·품질 검증과 테스트까지 책임지는 테크 리드다. 기존 기능을 깨지 않는 안정적인 수정, 실제로 붙여 넣어 적용 가능한 코드, 원인 분석 → 수정 코드 → 테스트 방법 → 배포 전 체크리스트를 최우선으로 한다.",
      "requiredFields": [
        {
          "id": "task",
          "label": "해결할 작업/문제",
          "type": "textarea",
          "rows": 4,
          "required": true,
          "placeholder": "예: Vue 3 앱에서 달력 월 선택이 제대로 반영되지 않는 문제를 수정."
        },
        {
          "id": "stack",
          "label": "기술 스택/환경",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: Vue 3, Vite, Supabase, Cloudflare Pages, Capacitor Android"
        },
        {
          "id": "currentState",
          "label": "현재 상태/에러 메시지",
          "type": "textarea",
          "rows": 4,
          "required": true,
          "placeholder": "예: 월을 클릭하면 팝업 값이 바뀌지 않고 예상치 못한 오류 토스트가 반복됨"
        }
      ],
      "optionalFields": [
        {
          "id": "relatedFiles",
          "label": "관련 파일/코드",
          "type": "textarea",
          "rows": 6,
          "placeholder": "예: CalendarPicker.vue, GoalFormModal.vue 코드 일부 또는 전체"
        },
        {
          "id": "constraints",
          "label": "제약조건/깨지면 안 되는 기능",
          "type": "textarea",
          "rows": 3,
          "placeholder": "예: 기존 저장 로직 유지, 모바일 UX 우선, 외부 라이브러리 추가 금지"
        },
        {
          "id": "edgeCases",
          "label": "엣지케이스/테스트 조건",
          "type": "textarea",
          "rows": 3,
          "placeholder": "예: 빈 값, 과거 날짜, 모바일 키보드, 네트워크 실패, 권한 오류"
        },
        {
          "id": "desiredOutput",
          "label": "원하는 결과물 형태",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "기본 형식"
            },
            {
              "value": "수정 파일 목록과 파일별 교체 코드를 생략 없이 제공해줘.",
              "label": "파일별 교체 코드"
            },
            {
              "value": "원인 분석과 검증 순서를 먼저 제시한 뒤 수정 코드를 제공해줘.",
              "label": "원인 분석 우선"
            },
            {
              "value": "위험도 낮은 수정안과 장기 개선안을 분리해줘.",
              "label": "안전 수정/장기 개선 분리"
            },
            {
              "value": "수정 파일 목록과 파일별 교체 코드를 생략 없이 제공해줘.\n작업 완료 시 결과물은 다음처럼 분리한다.\n1. 수정된 파일 zip: 수정된 파일만 포함하되, 폴더 구조는 원본과 동일하게 유지.\n2. docs 폴더 내 md 문서: 수정 요약, 수정 파일 목록, 파일별 변경 이유, 사용자가 반영해야 할 사항, 빌드/검증 명령, 수동 QA 체크리스트, 남은 리스크/주의사항을 포함.\n사용자가 요청한 단계의 작업을 리스트화해서 현재 진행 중인 단계를 마지막에 알려주고 다음 진행 단계가 무엇인지 알려준다.",
              "label": "파일별 교체 코드 + 수정 zip + docs"
            }
          ]
        },
        {
          "id": "badExample",
          "label": "원하지 않는 답변 예시",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: “설정 문제일 수 있습니다”처럼 애매한 답변 금지"
        }
      ],
      "personas": [
        "A - 아키텍트: 현재 구조를 깨지 않는 설계 방향을 정한다.",
        "B - 구현 엔지니어: 최소 변경으로 동작하는 코드를 제안한다.",
        "C - QA/레드팀 엔지니어: 엣지케이스, 회귀, 빌드 실패 가능성을 찾는다.",
        "D - UX/접근성 엔지니어: 사용 흐름, 모바일 터치, 접근성 문제를 점검한다.",
        "E - 테크 리드: 안정성, 유지보수성, 적용 순서를 기준으로 최종안을 결정한다."
      ],
      "outputFormat": [
        "1. 핵심 원인 요약",
        "2. 원인 후보 우선순위",
        "3. 수정해야 할 파일 목록",
        "4. 파일별 수정 코드",
        "5. 제거할 코드와 추가할 코드",
        "6. 테스트 방법",
        "7. 배포 전 체크리스트",
        "8. 레드팀 관점의 부작용 점검",
        "9. 마지막 팁"
      ],
      "standards": [
        "기존 기능을 깨지 않는 방향을 우선해줘.",
        "수정 위치를 파일명과 함수/섹션 단위로 명확히 알려줘.",
        "가능한 원인을 단정하지 말고 검증 순서를 함께 제시해줘.",
        "코드 일부만 주고 핵심을 생략하지 마.",
        "엣지케이스, 에러 핸들링, 접근성, 모바일 영향까지 점검해줘.",
        "항상 사용자가 전달한 최신 파일을 기준으로만 수정하고, 과거 코드나 기억에 의존해 되돌리지 않아줘.",
        "기존 정상 동작과 UX는 요청이 없으면 유지해줘.",
        "진단 → 수정 포인트 → 교체 코드 또는 변경 파일 → 검증 방법 → 다음 단계 제안 → 검토/체크리스트 순서로 진행해줘.",
        "같은 디자인/기능이 반복되면 공용 CSS 또는 공용 컴포넌트로 정리해줘."
      ],
      "sampleValues": {
        "task": "Vue 3 기반 화면에서 공통 옵션 그리드가 깨지고, 선택값 외에 추가 요청을 입력할 수 없는 문제를 수정하고 싶다.",
        "stack": "Vue 3 또는 순수 HTML/CSS/JS, Vite 배포 가능 구조, 외부 라이브러리 추가는 최소화",
        "currentState": "선택 필드는 보이지만 사용자가 추가 조건을 적을 수 없고, 화면 폭에 따라 좌우 그리드 정렬이 어긋난다.",
        "constraints": "기존 기능을 깨지 말고, 모바일에서도 한 줄로 뭉개지지 않게 해야 한다.",
        "edgeCases": "작은 화면, 긴 옵션 라벨, 직접 입력 필드 노출/숨김, 초기화 후 기본값 복원까지 확인해야 한다."
      },
      "tip": "코딩형 프롬프트는 “관련 파일명, 현재 오류, 깨지면 안 되는 기능”을 넣으면 답변 품질이 크게 올라갑니다."
    },
    {
      "key": "summary",
      "label": "요약",
      "badge": "Summary",
      "description": "긴 문서, 회의록, 자료 정리용 프롬프트",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "detailed",
        "promptStrength": "enhanced",
        "personaMode": "compact",
        "toneMode": "report",
        "outputFormatMode": "typeDefault"
      },
      "role": "너는 긴 문서, 회의록, 보고서, 자료를 읽는 대상과 의사결정 목적에 맞게 압축하는 전략 요약가다. 원문에 없는 해석은 분리하고, 숫자·일정·액션·리스크를 빠뜨리지 않는다.",
      "requiredFields": [
        {
          "id": "sourceText",
          "label": "요약할 원문/자료",
          "type": "textarea",
          "rows": 7,
          "required": true,
          "placeholder": "요약할 문서, 회의록, 기사, 긴 메모를 붙여넣어주세요."
        },
        {
          "id": "summaryPurpose",
          "label": "요약 목적",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 이 내용을 읽지 않은 팀장에게 5분 안에 보고하기 위한 요약"
        },
        {
          "id": "targetReader",
          "label": "읽는 대상",
          "type": "input",
          "required": true,
          "placeholder": "예: 팀장, 초보자, 투자자, 앱 사용자, 초등학생"
        }
      ],
      "optionalFields": [
        {
          "id": "sourceType",
          "label": "원문 유형",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "자동 판단"
            },
            {
              "value": "회의록/미팅 노트를 요약해줘. 참석자, 결정사항, 액션 아이템, 미결 이슈를 우선 정리해줘.",
              "label": "회의록/미팅 노트"
            },
            {
              "value": "보고서/논문을 요약해줘. 핵심 주장, 근거, 방법론, 결론, 한계를 구분해줘.",
              "label": "보고서/논문/리포트"
            },
            {
              "value": "뉴스 기사/기사 모음을 요약해줘. 핵심 팩트, 인용, 관련 맥락, 다른 시각을 분리해줘.",
              "label": "뉴스 기사/기사 모음"
            },
            {
              "value": "영상/팟캐스트 스크립트를 요약해줘. 타임라인 기준으로 핵심 내용을 정리해줘.",
              "label": "영상/팟캐스트 스크립트"
            },
            {
              "value": "책/긴 문서를 챕터별로 요약해줘. 전체 흐름과 챕터별 핵심을 분리해줘.",
              "label": "책/긴 문서 (챕터별)"
            },
            {
              "value": "이메일 스레드/대화 내용을 요약해줘. 요청사항, 결정사항, 미결 이슈를 우선 정리해줘.",
              "label": "이메일 스레드/대화"
            }
          ]
        },
        {
          "id": "depth",
          "label": "요약 깊이",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "기본"
            },
            {
              "value": "핵심만 아주 짧게 요약해줘.",
              "label": "짧게"
            },
            {
              "value": "핵심과 근거를 균형 있게 요약해줘.",
              "label": "보통"
            },
            {
              "value": "논리 구조, 숫자, 리스크까지 자세히 요약해줘.",
              "label": "자세히"
            }
          ]
        },
        {
          "id": "summaryFormat",
          "label": "요약 결과 형식",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "기본 형식"
            },
            {
              "value": "한 줄 결론 + 3~5줄 핵심 요약으로 압축해줘.",
              "label": "원페이저/한 줄 요약"
            },
            {
              "value": "슬랙/메신저에 바로 붙여넣을 수 있는 짧은 형식으로 요약해줘. 이모지 가능.",
              "label": "슬랙/메신저 공유용"
            },
            {
              "value": "상사/의사결정권자에게 보고할 수 있는 구조화된 형식으로 요약해줘.",
              "label": "보고서/브리핑용"
            },
            {
              "value": "글머리표 중심으로 스캔하기 쉬운 형식으로 요약해줘.",
              "label": "글머리표 스캔형"
            }
          ]
        },
        {
          "id": "summaryLanguage",
          "label": "요약 언어 변환",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "원문과 같은 언어"
            },
            {
              "value": "원문이 영어라도 한국어로 요약해줘.",
              "label": "영문 원문 → 한국어 요약"
            },
            {
              "value": "원문이 한국어라도 영어로 요약해줘.",
              "label": "한국어 원문 → 영어 요약"
            },
            {
              "value": "원문이 일본어/중국어라도 한국어로 요약해줘.",
              "label": "기타 외국어 → 한국어 요약"
            }
          ]
        },
        {
          "id": "mustInclude",
          "label": "반드시 포함할 관점/키워드",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 비용, 일정, 리스크, 액션 아이템은 반드시 포함"
        },
        {
          "id": "lengthLimit",
          "label": "요약 분량 제한",
          "type": "input",
          "placeholder": "예: 5줄 이내, 200자, A4 반 페이지, 슬랙 한 메시지"
        },
        {
          "id": "excludeInterpretation",
          "label": "해석 제한",
          "type": "select",
          "options": [
            {
              "value": "원문에 없는 해석이나 추측은 추가하지 말고, 필요한 경우 “추론”으로 표시해줘.",
              "label": "원문에 없는 해석 금지"
            },
            {
              "value": "원문 기반 요약과 네 판단을 분리해서 작성해줘.",
              "label": "요약/판단 분리"
            }
          ]
        },
        {
          "id": "actionNeed",
          "label": "액션 아이템 필요 여부",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "기본"
            },
            {
              "value": "액션 아이템이 있으면 반드시 번호 목록으로 정리해줘.",
              "label": "액션 아이템 번호화"
            },
            {
              "value": "액션 아이템이 없다면 “확정된 액션 아이템 없음”이라고 표시해줘.",
              "label": "없음도 명시"
            }
          ]
        }
      ],
      "personas": [
        "A - 핵심 추출가: 결론과 주장을 빠르게 뽑는다.",
        "B - 구조 요약가: 원문의 논리 흐름, 원인·결과, 항목 간 관계를 정리한다.",
        "C - 데이터 감시자: 숫자, 날짜, 일정, 조건, 고유명사를 놓치지 않는다.",
        "D - 리스크 감시자: 의사결정자가 놓치면 문제가 되는 위험과 불확실성을 찾는다.",
        "E - 최종 편집자: 읽는 대상에게 필요한 깊이와 형식으로 요약을 완성한다."
      ],
      "outputFormat": [
        "1. 핵심 결론 (2~3줄)",
        "2. 주요 데이터/숫자 (있는 경우만)",
        "3. 액션 아이템 (있으면 번호로)",
        "4. 놓치면 안 되는 리스크 1가지",
        "5. 추가로 확인하면 좋은 질문",
        "6. 마지막 팁"
      ],
      "standards": [
        "원문에 없는 내용을 사실처럼 추가하지 마.",
        "수치, 날짜, 조건이 있으면 우선적으로 보존해줘.",
        "읽는 대상의 사전지식 수준에 맞춰 표현해줘.",
        "중복 내용은 합치고 중요도 순으로 정리해줘.",
        "핵심 결론, 주요 데이터/숫자, 액션 아이템, 리스크를 우선적으로 분리해줘.",
        "원문이 외국어이고 요약 언어 변환이 지정된 경우, 번역하면서 동시에 요약해줘. 단순 번역 후 요약이 아니라 핵심을 추출하면서 대상 언어로 옮겨줘.",
        "요약 분량 제한이 지정된 경우 반드시 해당 분량 내에서 완성해줘."
      ],
      "sampleValues": {
        "sourceText": "여기에 긴 회의록, 보고서, 기사, 메모를 붙여넣는다고 가정합니다. 핵심 결론, 숫자, 액션 아이템, 리스크를 중심으로 요약해야 합니다.",
        "summaryPurpose": "원문을 다 읽지 않은 팀장에게 5분 안에 핵심을 보고하기 위한 요약이 필요하다.",
        "targetReader": "의사결정권자 또는 팀장",
        "mustInclude": "핵심 결론, 중요한 숫자, 결정해야 할 사항, 놓치면 안 되는 리스크"
      },
      "tip": "요약형 프롬프트는 “읽는 대상”과 “무엇을 결정하려는 요약인지”를 넣어야 결과가 달라집니다."
    },
    {
      "key": "idea",
      "label": "아이디어",
      "badge": "Idea",
      "description": "기획, 사업, 콘텐츠 아이디어용 프롬프트",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "balanced",
        "promptStrength": "enhanced",
        "personaMode": "auto",
        "toneMode": "redteam",
        "outputFormatMode": "decision"
      },
      "role": "너는 발산형 아이디어를 현실적인 실행안과 검증 가능한 실험으로 바꾸는 전략 기획자다. 아이디어를 많이 내는 데서 끝내지 않고, 사용자 가치·차별성·실행 난이도·검증 방법을 함께 설계한다.",
      "requiredFields": [
        {
          "id": "theme",
          "label": "아이디어 주제",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: AI 프롬프트 변환기를 내 앱의 생산성 도구로 확장하는 아이디어"
        },
        {
          "id": "goal",
          "label": "최종 목표",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 사용자가 복잡한 프롬프트를 몰라도 좋은 요청문을 만들게 하고 싶다."
        },
        {
          "id": "targetUser",
          "label": "대상 사용자/독자",
          "type": "textarea",
          "rows": 2,
          "required": true,
          "placeholder": "예: AI 사용이 익숙하지 않은 일반 사용자, 개발자, 블로그 작성자"
        },
        {
          "id": "ideaCount",
          "label": "아이디어 개수/범위",
          "type": "select",
          "required": true,
          "options": [
            {
              "value": "아이디어 10개를 만들어줘. 양과 질의 균형을 맞추고, 중복되는 아이디어는 제거해줘.",
              "label": "10개 - 권장"
            },
            {
              "value": "아이디어 5개를 만들어줘. 수는 적어도 가장 가능성 높은 것만 엄선해줘.",
              "label": "5개 - 엄선형"
            },
            {
              "value": "아이디어 20개를 만들어줘. 카테고리별로 묶고, 중복되는 방향은 통합해줘.",
              "label": "20개 - 확장형"
            },
            {
              "value": "가능한 한 많은 아이디어를 만들어줘. 단, 품질이 낮은 나열이 되지 않도록 카테고리화하고 상위 추천안을 따로 골라줘.",
              "label": "최대한 많이"
            },
            {
              "value": "custom",
              "label": "직접 입력"
            }
          ],
          "recommendedValue": "아이디어 10개를 만들어줘. 양과 질의 균형을 맞추고, 중복되는 아이디어는 제거해줘."
        },
        {
          "id": "customIdeaCount",
          "label": "아이디어 개수 직접 입력",
          "type": "input",
          "requiredWhen": {
            "fieldId": "ideaCount",
            "value": "custom"
          },
          "showWhen": {
            "fieldId": "ideaCount",
            "value": "custom"
          },
          "placeholder": "예: 아이디어 7개, 또는 아이디어 30개를 카테고리별로"
        }
      ],
      "optionalFields": [
        {
          "id": "resources",
          "label": "현재 가진 자원/제약",
          "type": "textarea",
          "rows": 3,
          "placeholder": "예: 혼자 개발, 무료 도구 우선, 2주 안에 MVP 필요"
        },
        {
          "id": "categories",
          "label": "원하는 카테고리/방향",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 빠른 실행, 수익화, 브랜딩, 앱 기능, 콘텐츠 확장"
        },
        {
          "id": "evaluationCriteria",
          "label": "아이디어 평가 기준",
          "type": "textarea",
          "rows": 3,
          "placeholder": "예: 실행 난이도, 비용, 시간, 차별성, 수익화 가능성, 지속 가능성"
        },
        {
          "id": "avoid",
          "label": "피하고 싶은 아이디어",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 돈이 많이 드는 것, 너무 뻔한 기능, 1인 개발자가 유지하기 어려운 것"
        },
        {
          "id": "badExample",
          "label": "나쁜 아이디어/나쁜 답변 예시",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: “열심히 홍보하세요”처럼 실행법 없는 추상적 아이디어 금지"
        }
      ],
      "personas": [
        "A - 창의 전략가: 새롭고 다양한 가능성을 최대한 넓게 제안한다.",
        "B - 사용자 가치 분석가: 실제 사용자의 문제, 욕구, 지불 의사, 사용 맥락을 검토한다.",
        "C - 레드팀 비평가: 실패 가능성, 착각, 비용, 경쟁, 과한 낙관을 공격적으로 점검한다.",
        "D - 실행 설계자: 가장 작은 실험, MVP, 검증 지표, 실행 순서를 만든다.",
        "E - 최종 큐레이터: 창의성·현실성·검증 가능성을 기준으로 우선순위를 정한다."
      ],
      "outputFormat": [
        "1. 한 줄 결론",
        "2. 요청한 개수의 아이디어 목록",
        "3. 각 아이디어의 강점과 약점",
        "4. 실행 난이도/비용/효과 비교",
        "5. 레드팀 관점의 실패 가능성",
        "6. 최종 추천 TOP 3",
        "7. 최소 비용으로 검증하는 방법",
        "8. 지금 당장 실행할 3가지",
        "9. 마지막 팁"
      ],
      "standards": [
        "무조건 긍정하지 말고 실패 가능성이 높은 지점을 먼저 확인해줘.",
        "아이디어는 실행 난이도, 비용, 시간, 지속 가능성을 함께 평가해줘.",
        "요청한 개수보다 품질이 중요할 경우 중복 아이디어를 통합하고 그 이유를 설명해줘.",
        "추상적인 동기부여 문구보다 테스트 가능한 행동으로 바꿔줘."
      ],
      "sampleValues": {
        "theme": "AI 프롬프트 변환기를 개인 생산성 앱의 핵심 기능으로 확장하는 아이디어",
        "goal": "사용자가 복잡한 프롬프트 작성법을 몰라도 목적에 맞는 고품질 요청문을 만들게 하고 싶다.",
        "targetUser": "AI 사용이 익숙하지 않은 일반 사용자, 블로그 작성자, 개발자, 기획자",
        "ideaCount": "아이디어 10개를 만들어줘. 양과 질의 균형을 맞추고, 중복되는 아이디어는 제거해줘.",
        "resources": "1인 개발, 무료 도구 우선, 우선은 정적 HTML/CSS/JS로 구현 가능해야 함",
        "evaluationCriteria": "실행 난이도, 사용자 가치, 유지보수 비용, 차별성, 수익화 가능성, 장기 확장성"
      },
      "tip": "아이디어형 프롬프트는 “몇 개를 원하는지, 누구를 위한 아이디어인지, 어떤 기준으로 고를지”가 핵심입니다."
    },
    {
      "key": "writing",
      "label": "글쓰기",
      "badge": "Write",
      "description": "일반 글, 블로그, 유튜브 대본, 짧은 소설, 책 원고, SNS 글쓰기 프롬프트",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "balanced",
        "promptStrength": "enhanced",
        "personaMode": "auto",
        "toneMode": "natural",
        "outputFormatMode": "writing"
      },
      "role": "너는 사용자의 목적과 문체를 보존하면서 일반 글, 블로그, 유튜브 스크립트, 짧은 소설, 책 원고, SNS 콘텐츠를 채널별로 설계하는 시니어 콘텐츠 디렉터이자 편집자다. 허위 경험담을 만들지 않고, 주어진 단어와 문장을 바탕으로 자연스럽게 전개한다.",
      "requiredFields": [
        {
          "id": "writingTask",
          "label": "글쓰기 세부 유형",
          "type": "select",
          "required": true,
          "recommendedValue": "general",
          "options": [
            {
              "value": "general",
              "label": "일반 글쓰기/문장 작성",
              "prompt": "주제와 목적에 맞춰 자연스럽고 명확한 글을 작성해줘.",
              "recommended": true
            },
            {
              "value": "blog",
              "label": "블로그 글/후기/정보글",
              "prompt": "검색 노출, 독자 체류, 자연스러운 경험 묘사, 제목/소제목/해시태그까지 고려해 블로그 글로 구성해줘."
            },
            {
              "value": "youtube",
              "label": "유튜브 스크립트",
              "prompt": "영상 길이, 오프닝 훅, 타임라인, 장면 전환, 시청자 참여, CTA, 태그를 고려해 대본을 설계해줘."
            },
            {
              "value": "shortNovel",
              "label": "짧은 소설/웹소설 플롯",
              "prompt": "장르, 갈등, 사건, 인물, 반전, 세계관을 바탕으로 짧은 소설 또는 플롯을 설계해줘."
            },
            {
              "value": "edit",
              "label": "문장 수정/교정/윤문",
              "prompt": "사용자의 문체와 핵심 의도를 유지하면서 흐름, 명확성, 중복, 어색한 표현을 다듬어줘."
            },
            {
              "value": "book",
              "label": "책 원고/챕터",
              "prompt": "책의 메시지, 장 구조, 독자 질문, 문단 흐름을 고려해 원고 또는 챕터로 확장해줘."
            },
            {
              "value": "sns",
              "label": "SNS 게시글/스레드",
              "prompt": "짧고 인상적인 훅, 본문 흐름, 댓글 유도, 해시태그를 고려해 작성해줘."
            },
            {
              "value": "custom",
              "label": "기타/직접 정의",
              "prompt": "사용자가 입력한 글쓰기 목적에 맞춰 별도 형식으로 작성해줘."
            }
          ]
        },
        {
          "id": "writingGoal",
          "label": "글의 목표",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 독자에게 정보를 전달하고, 마지막에는 자연스럽게 행동을 유도하고 싶다."
        },
        {
          "id": "sourceText",
          "label": "초안/자료/주어진 단어 또는 문장",
          "type": "textarea",
          "rows": 5,
          "required": true,
          "placeholder": "초안, 키워드, 소재, 메모, 반드시 포함할 문장 등을 붙여넣어주세요."
        },
        {
          "id": "targetReader",
          "label": "독자/대상",
          "type": "input",
          "required": true,
          "placeholder": "예: 30~40대 직장인, 여행 정보를 찾는 초보 여행자, 내 유튜브 구독자"
        }
      ],
      "optionalFields": [
        {
          "id": "writingCustomType",
          "label": "기타 글쓰기 유형 설명",
          "type": "input",
          "showWhen": {
            "fieldId": "writingTask",
            "value": "custom"
          },
          "requiredWhen": {
            "fieldId": "writingTask",
            "value": "custom"
          },
          "placeholder": "예: 강연 원고, 인터뷰 질문지, 상세페이지 스토리텔링"
        },
        {
          "id": "blogIntent",
          "label": "블로그 목적/검색 의도",
          "type": "textarea",
          "rows": 2,
          "showWhen": {
            "fieldId": "writingTask",
            "value": "blog"
          },
          "requiredWhen": {
            "fieldId": "writingTask",
            "value": "blog"
          },
          "placeholder": "예: 여행 후기처럼 자연스럽게, 정보성 검색 유입도 고려, 광고글처럼 보이지 않게"
        },
        {
          "id": "blogMeta",
          "label": "블로그 필수 정보",
          "type": "textarea",
          "rows": 3,
          "showWhen": {
            "fieldId": "writingTask",
            "value": "blog"
          },
          "requiredWhen": {
            "fieldId": "writingTask",
            "value": "blog"
          },
          "placeholder": "예: 장소, 방문일, 일정, 숙소, 대표 스팟, 비용, 장단점, 해시태그 필요 여부"
        },
        {
          "id": "youtubeLength",
          "label": "영상 길이/분량",
          "type": "input",
          "showWhen": {
            "fieldId": "writingTask",
            "value": "youtube"
          },
          "requiredWhen": {
            "fieldId": "writingTask",
            "value": "youtube"
          },
          "placeholder": "예: 5분, 8분, 쇼츠 60초, 10분 내외"
        },
        {
          "id": "youtubeStyle",
          "label": "유튜브 구성 방향",
          "type": "textarea",
          "rows": 3,
          "showWhen": {
            "fieldId": "writingTask",
            "value": "youtube"
          },
          "requiredWhen": {
            "fieldId": "writingTask",
            "value": "youtube"
          },
          "placeholder": "예: 오프닝 훅, 장면별 타임라인, 반전 포인트, CTA, 태그, 편집 팁 포함"
        },
        {
          "id": "novelGenre",
          "label": "소설 장르/분위기",
          "type": "input",
          "showWhen": {
            "fieldId": "writingTask",
            "value": "shortNovel"
          },
          "requiredWhen": {
            "fieldId": "writingTask",
            "value": "shortNovel"
          },
          "placeholder": "예: 판타지, 미스터리, 로맨스, SF, 힐링, 블랙코미디"
        },
        {
          "id": "novelPlotNeeds",
          "label": "소설 플롯 조건",
          "type": "textarea",
          "rows": 3,
          "showWhen": {
            "fieldId": "writingTask",
            "value": "shortNovel"
          },
          "requiredWhen": {
            "fieldId": "writingTask",
            "value": "shortNovel"
          },
          "placeholder": "예: 큰 사건 5개 이상, 주인공 성장, 반전 1개, 열린 결말, 3막 구조"
        },
        {
          "id": "editFocus",
          "label": "문장 수정 기준",
          "type": "textarea",
          "rows": 2,
          "showWhen": {
            "fieldId": "writingTask",
            "value": "edit"
          },
          "requiredWhen": {
            "fieldId": "writingTask",
            "value": "edit"
          },
          "placeholder": "예: 문체 유지, 중복 제거, 문장 흐름 개선, AI스러운 표현 줄이기"
        },
        {
          "id": "bookScope",
          "label": "책 원고/챕터 범위",
          "type": "textarea",
          "rows": 2,
          "showWhen": {
            "fieldId": "writingTask",
            "value": "book"
          },
          "requiredWhen": {
            "fieldId": "writingTask",
            "value": "book"
          },
          "placeholder": "예: 1부 1장 초안, 특정 장 확장, 목차 재구성, A4 5장 이상"
        },
        {
          "id": "snsPlatform",
          "label": "SNS 플랫폼/게시 목적",
          "type": "input",
          "showWhen": {
            "fieldId": "writingTask",
            "value": "sns"
          },
          "requiredWhen": {
            "fieldId": "writingTask",
            "value": "sns"
          },
          "placeholder": "예: 인스타그램, 스레드, 블로그 요약, 댓글 유도용"
        },
        {
          "id": "tone",
          "label": "원하는 톤/문체",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 차분하고 진정성 있게, 너무 가르치려 들지 않게, 자연스러운 사람 문체"
        },
        {
          "id": "length",
          "label": "분량/문장 수",
          "type": "input",
          "placeholder": "예: 2,000자 내외, A4 2장, 5분 낭독 분량, 짧은 문장 중심"
        },
        {
          "id": "structure",
          "label": "원하는 구조",
          "type": "textarea",
          "rows": 3,
          "placeholder": "예: 훅 → 문제 제기 → 경험/근거 → 해결책 → 여운 있는 마무리"
        },
        {
          "id": "preserveStyle",
          "label": "유지할 문체/표현",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 내 말투, 질문형 전개, 담백한 표현, 특정 문장"
        },
        {
          "id": "avoid",
          "label": "피해야 할 표현/방향",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 과장, 설교조, 뻔한 자기계발 문구, 클릭베이트 과다, 허위 경험담"
        },
        {
          "id": "quotes",
          "label": "인용문 사용 기준",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 출처가 명확한 실제 인용만 사용, 불확실하면 사용하지 않기"
        },
        {
          "id": "badExample",
          "label": "나쁜 문장 예시",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: AI처럼 매끈하지만 공허한 문장, 지나치게 자극적인 제목"
        }
      ],
      "personas": [
        "A - 콘텐츠 전략가: 목적, 독자, 채널, 메시지, 전환 목표를 먼저 정리한다.",
        "B - 구조 편집자: 훅, 전개, 문단 흐름, 장면 전환, 마무리의 설계를 다듬는다.",
        "C - 문체 보존가: 사용자의 말투, 정서, 표현 습관, 생각의 깊이를 지킨다.",
        "D - 채널 전문가: 블로그, 유튜브, 소설, SNS, 책 원고 등 세부 유형에 맞는 형식을 적용한다.",
        "E - 레드팀 독자: 뻔한 문장, 허위 경험담, 과장, AI스러운 표현, 클릭베이트 과다를 찾아낸다.",
        "F - 최종 작가: 전략·구조·문체·채널 조건을 종합해 완성본을 작성한다."
      ],
      "outputFormat": [
        "1. 제목 후보",
        "2. 완성된 본문 또는 수정본",
        "3. 핵심 문장",
        "4. 수정 의도",
        "5. 더 다듬으면 좋은 부분",
        "6. 마지막 팁"
      ],
      "standards": [
        "선택한 글쓰기 세부 유형에 맞춰 구조, 톤, 출력 형식을 다르게 설계해줘.",
        "주어진 단어나 문장이 있다면 그것을 중심으로 글을 전개해줘.",
        "사용자의 문체와 의도를 유지하되 문장 흐름, 밀도, 명확성을 높여줘.",
        "블로그는 실제 경험처럼 꾸며내지 말고, 사용자가 제공한 경험과 확인 가능한 정보만 바탕으로 자연스럽게 작성해줘.",
        "유튜브 스크립트는 영상 길이, 오프닝 훅, 장면 전환, CTA를 고려하되 과도한 클릭베이트는 피하게 해줘.",
        "소설/플롯은 장르 문법, 갈등, 사건 전개, 반전, 인물 동기를 구체화해줘.",
        "독자를 가르치려 들지 말고 질문을 던지며 스스로 생각하게 해줘.",
        "인용문을 사용할 경우 출처가 명확한 실제 인용만 사용하고, 불확실하면 사용하지 마."
      ],
      "sampleValues": {
        "writingTask": "blog",
        "writingGoal": "여행 경험을 정보성과 개인적인 감상이 균형 잡힌 블로그 글로 정리하고 싶다.",
        "sourceText": "여행지, 일정, 숙소, 대표 스팟, 기억에 남는 장면, 좋았던 점과 아쉬웠던 점을 메모 형태로 붙여넣는다고 가정합니다.",
        "targetReader": "처음 해당 여행지를 알아보는 초보 여행자",
        "blogIntent": "검색 유입을 고려하되 광고글처럼 보이지 않게, 직접 경험을 바탕으로 자연스럽게",
        "tone": "친근하지만 과장되지 않게, 정보는 명확하게",
        "avoid": "허위 경험담, 과도한 이모티콘, 검증되지 않은 맛집 단정, 너무 자극적인 제목"
      },
      "tip": "글쓰기형 프롬프트는 “독자, 톤, 구조, 피해야 할 문장, 유지할 문체”를 넣을수록 결과가 좋아집니다."
    },
    {
      "key": "finance",
      "label": "투자/재테크",
      "badge": "Finance",
      "description": "포트폴리오, 주식/ETF, 부동산 입지, 현금흐름 분석",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "detailed",
        "promptStrength": "precision",
        "personaMode": "auto",
        "toneMode": "redteam",
        "outputFormatMode": "finance"
      },
      "role": "너는 투자 권유자가 아니라 사용자의 재무 상황, 현금흐름, 리스크 허용도, 장기 목표를 기준으로 냉정하게 분석하는 레드팀 재무·투자 분석가다. 포트폴리오 분석, 신규 주식/ETF 분석, 부동산 입지 분석, 현금흐름·절세 설계를 구분하고 최신 데이터 확인 필요성을 명확히 표시한다.",
      "requiredFields": [
        {
          "id": "financeMode",
          "label": "분석 유형",
          "type": "select",
          "required": true,
          "options": [
            {
              "value": "portfolio",
              "label": "현재 내 투자현황/포트폴리오 분석"
            },
            {
              "value": "stock",
              "label": "신규 주식/ETF/종목 개별 분석"
            },
            {
              "value": "realEstate",
              "label": "신규 부동산/입지 분석"
            },
            {
              "value": "cashPlan",
              "label": "현금흐름/연금/절세/자산배분 계획"
            }
          ],
          "recommendedValue": "portfolio"
        },
        {
          "id": "financeGoal",
          "label": "분석 목표",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 장기적으로 시간의 자유를 얻기 위해 현재 포트폴리오 비중이 적절한지 냉정히 판단하고 싶다."
        },
        {
          "id": "financeContext",
          "label": "현재 상황/기본 정보",
          "type": "textarea",
          "rows": 4,
          "required": true,
          "placeholder": "예: 나이, 가족 상황, 소득 안정성, 월 투자 가능 금액, 목표 자산, 투자 기간, 위험 성향 등"
        }
      ],
      "optionalFields": [
        {
          "id": "portfolioAssets",
          "label": "보유 자산/종목 현황",
          "type": "textarea",
          "rows": 5,
          "showWhen": {
            "fieldId": "financeMode",
            "value": "portfolio"
          },
          "requiredWhen": {
            "fieldId": "financeMode",
            "value": "portfolio"
          },
          "placeholder": "예: QQQM 40%, SCHD 20%, 국내 반도체 ETF 20%, 현금 20% / 월 추가 투자금 000원"
        },
        {
          "id": "targetSecurity",
          "label": "분석할 주식/ETF/펀드",
          "type": "input",
          "showWhen": {
            "fieldId": "financeMode",
            "value": "stock"
          },
          "requiredWhen": {
            "fieldId": "financeMode",
            "value": "stock"
          },
          "placeholder": "예: 카카오(035720), 삼성전자, QQQM, SCHD, KODEX 미국나스닥100"
        },
        {
          "id": "realEstateTarget",
          "label": "분석할 부동산/입지",
          "type": "textarea",
          "rows": 3,
          "showWhen": {
            "fieldId": "financeMode",
            "value": "realEstate"
          },
          "requiredWhen": {
            "fieldId": "financeMode",
            "value": "realEstate"
          },
          "placeholder": "예: 지역, 단지명, 예산, 실거주/투자 목적, 출퇴근/학군/교통 조건"
        },
        {
          "id": "cashPlanInfo",
          "label": "현금흐름/연금/절세 정보",
          "type": "textarea",
          "rows": 3,
          "showWhen": {
            "fieldId": "financeMode",
            "value": "cashPlan"
          },
          "requiredWhen": {
            "fieldId": "financeMode",
            "value": "cashPlan"
          },
          "placeholder": "예: 월 소득, 생활비, 비상금, 연금저축/IRP/ISA, 대출, 예정 지출"
        },
        {
          "id": "riskProfile",
          "label": "위험 성향/감내 가능한 손실",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: MDD -30%까지는 가능하지만 가족 생활비에 영향이 생기면 안 됨"
        },
        {
          "id": "timeHorizon",
          "label": "투자 기간/의사결정 시점",
          "type": "input",
          "placeholder": "예: 3년, 2029년까지, 10년 이상, 이번 달 안에 판단"
        },
        {
          "id": "decisionCriteria",
          "label": "판단 기준",
          "type": "textarea",
          "rows": 3,
          "placeholder": "예: 생존 가능성, 현금흐름, MDD, 환율, 집중도, 세금, 수수료, 가족 리스크 우선"
        },
        {
          "id": "dataNeeds",
          "label": "반드시 확인할 데이터",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 현재 주가, PER/PBR, 실적 전망, 금리, 거래량, 입지 실거래가, 전세가율, 공급량"
        },
        {
          "id": "avoidFinance",
          "label": "피해야 할 답변",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 장기적으로 우상향합니다 같은 일반론, 근거 없는 매수 추천, 과거 수익률만 보고 판단 금지"
        }
      ],
      "personas": [
        "A - 포트폴리오 리스크 관리자: 집중도, MDD, 환율, 현금 비중, 생존 가능성을 먼저 본다.",
        "B - 시장/종목 애널리스트: 실적, 밸류에이션, 차트, 뉴스, 수급 등 최신 확인이 필요한 데이터를 구분한다.",
        "C - 부동산 입지 분석가: 교통, 일자리, 학군, 공급, 전세가율, 실거주 가치와 투자 가치를 분리한다.",
        "D - 세금·현금흐름 설계자: ISA, 연금, 세금, 대출, 비상금, 가족 지출 리스크를 점검한다.",
        "E - 레드팀 최종 결정권자: 사용자가 과신하는 지점과 실패 시나리오를 먼저 제시하고 실행/보류 기준을 정한다."
      ],
      "outputFormat": [
        "1. 한 줄 결론",
        "2. 분석 전제와 확인 필요한 최신 데이터",
        "3. 현재 상황 또는 대상 자산 요약",
        "4. 기회 요인",
        "5. 가장 큰 리스크와 실패 시나리오",
        "6. 포트폴리오/종목/입지별 핵심 분석",
        "7. 유지/축소/추가/보류 판단",
        "8. 실행 기준과 중단 기준",
        "9. 지금 당장 확인할 것 3가지",
        "10. 마지막 팁"
      ],
      "standards": [
        "투자는 매수·매도 지시가 아니라 사용자의 판단을 돕는 분석으로 제공해줘.",
        "현재 포트폴리오 분석과 신규 투자 대상 분석을 섞지 말고, 선택한 분석 유형에 맞춰 평가 기준을 다르게 적용해줘.",
        "개별 종목/ETF는 최신 가격, 실적, 밸류에이션, 뉴스, 환율, 수급 등 확인이 필요한 정보를 “확인 필요”로 표시해줘.",
        "부동산/입지는 교통, 일자리, 학군, 공급, 전세가율, 실거주 가치와 투자 가치를 분리해서 봐줘.",
        "가족 생계, 비상금, 현금흐름, MDD, 환율, 대출, 세금, 투자 기간을 반드시 고려해줘.",
        "듣기 좋은 낙관론보다 실패 시나리오와 손실 감내 가능성을 먼저 점검해줘."
      ],
      "sampleValues": {
        "financeMode": "portfolio",
        "financeGoal": "장기적으로 시간의 자유를 얻기 위해 현재 투자 비중이 과도하게 공격적인지, 유지해도 되는지 냉정히 판단하고 싶다.",
        "financeContext": "40대, 가족이 있고 월 투자 가능 금액은 약 000만 원이다. 장기 투자 목적이지만 큰 하락장에서 버틸 수 있는 구조가 중요하다.",
        "portfolioAssets": "미국 나스닥 ETF 40%, 배당 ETF 20%, 반도체 ETF 20%, 현금 20%\n월 추가 투자금: 000원\n목표 자산: 00억 원",
        "riskProfile": "단기 수익률보다 생존 가능성과 현금흐름 안정성을 우선한다.",
        "decisionCriteria": "MDD, 집중도, 환율, 세금, 현금 비중, 가족 생활비 리스크를 우선 기준으로 분석해줘."
      },
      "tip": "투자형 프롬프트는 “무엇을 살까?”보다 “내 상황에서 감당 가능한가?”와 “실패 시나리오가 무엇인가?”를 넣어야 품질이 올라갑니다."
    },
    {
      "key": "marketing",
      "label": "마케팅",
      "badge": "Marketing",
      "description": "브랜드, 상세페이지, 광고, 콘텐츠, 전환 전략 프롬프트",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "actionable",
        "promptStrength": "enhanced",
        "personaMode": "auto",
        "toneMode": "action",
        "outputFormatMode": "marketing"
      },
      "role": "너는 특정 업종의 고객 심리, 포지셔닝, 오퍼 설계, 카피라이팅, 퍼포먼스 테스트, 브랜드 리스크를 함께 보는 시니어 마케팅 전략가다. 예쁜 문구보다 실제 고객 행동과 전환 가능성을 우선한다.",
      "requiredFields": [
        {
          "id": "marketingGoal",
          "label": "마케팅 목표",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 신규 앱 랜딩페이지에서 회원가입 전환율을 높이고 싶다."
        },
        {
          "id": "productInfo",
          "label": "상품/서비스/콘텐츠 설명",
          "type": "textarea",
          "rows": 4,
          "required": true,
          "placeholder": "예: 목표·버킷리스트·가족 일정·푸시 알림을 관리하는 개인 생산성 앱"
        },
        {
          "id": "targetCustomer",
          "label": "타깃 고객",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 가족 일정과 개인 목표를 함께 관리하고 싶은 30~40대 직장인/부모"
        }
      ],
      "optionalFields": [
        {
          "id": "marketingChannel",
          "label": "주요 채널",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "선택 안 함"
            },
            {
              "value": "랜딩페이지, 상세페이지, 앱스토어 소개문 중심으로 제안해줘.",
              "label": "랜딩/상세페이지"
            },
            {
              "value": "인스타그램, 스레드, 블로그, 유튜브 쇼츠 콘텐츠 중심으로 제안해줘.",
              "label": "SNS/콘텐츠"
            },
            {
              "value": "검색광고, 메타광고, 네이버광고 등 퍼포먼스 광고 중심으로 제안해줘.",
              "label": "광고/퍼포먼스"
            },
            {
              "value": "브랜드 메시지, 슬로건, 톤앤매너 중심으로 제안해줘.",
              "label": "브랜드/메시지"
            }
          ],
          "recommendedValue": ""
        },
        {
          "id": "customerPain",
          "label": "고객의 문제/욕망",
          "type": "textarea",
          "rows": 3,
          "placeholder": "예: 계획은 많은데 지속하지 못함, 가족과 약속을 놓침, 목표가 흩어져 있음"
        },
        {
          "id": "offer",
          "label": "제안/혜택/CTA",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 무료 체험, 가족 공유 기능, 하루 5분 루틴 만들기"
        },
        {
          "id": "brandTone",
          "label": "브랜드 톤",
          "type": "input",
          "placeholder": "예: 차분함, 신뢰감, 가족 친화적, 너무 자극적이지 않게"
        },
        {
          "id": "competitors",
          "label": "경쟁자/비교 대상",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: Notion, Todoist, 네이버 캘린더, 가족 일정 앱"
        },
        {
          "id": "kpi",
          "label": "성공 지표/KPI",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 클릭률, 가입 전환율, 앱 설치, 재방문, 구매 전환"
        },
        {
          "id": "marketingConstraints",
          "label": "제약/금지 표현",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 과장 광고 금지, 공포 마케팅 금지, 허위 후기 금지"
        }
      ],
      "personas": [
        "A - 시장/고객 분석가: 타깃 고객, 구매 상황, 경쟁 대안, 미충족 욕구를 찾는다.",
        "B - 포지셔닝 전략가: 왜 이 제품/서비스를 선택해야 하는지 한 문장으로 정리한다.",
        "C - 오퍼 설계자: 혜택, 보장, 가격, 패키지, 구매 장벽 제거 방법을 설계한다.",
        "D - 카피라이터: 훅, 헤드라인, CTA, 상세 문구, 광고 문안을 만든다.",
        "E - 퍼포먼스 마케터: 채널, A/B 테스트, KPI, 측정/개선 루프를 설계한다.",
        "F - 브랜드/윤리 검토자: 과장, 허위, 불쾌감, 브랜드 훼손 리스크를 점검한다."
      ],
      "outputFormat": [
        "1. 핵심 마케팅 전략",
        "2. 타깃 고객 정의",
        "3. 고객 문제와 욕망",
        "4. 핵심 메시지/포지셔닝",
        "5. 채널별 실행안",
        "6. 카피 예시",
        "7. A/B 테스트 아이디어",
        "8. KPI와 검증 방법",
        "9. 피해야 할 표현과 리스크",
        "10. 마지막 팁"
      ],
      "standards": [
        "고객이 왜 관심을 가져야 하는지부터 설명해줘.",
        "추상적인 브랜딩 조언보다 실제 문구, CTA, 테스트 방법을 제시해줘.",
        "과장 광고, 허위 후기, 검증되지 않은 수치 사용은 피하도록 점검해줘.",
        "채널별로 메시지 길이와 톤을 다르게 제안해줘."
      ],
      "sampleValues": {
        "marketingGoal": "개인 생산성 앱의 첫 방문자에게 핵심 가치를 빠르게 전달하고 회원가입 전환율을 높이고 싶다.",
        "productInfo": "목표, 버킷리스트, 가족 일정, 미래 편지, 푸시 알림을 한 곳에서 관리하는 라이프 플래너 앱이다.",
        "targetCustomer": "가족과 개인 목표를 함께 챙기고 싶은 30~40대 직장인/부모",
        "customerPain": "계획은 많지만 계속 미루고, 가족 일정과 개인 목표가 여러 앱에 흩어져 있다.",
        "kpi": "회원가입 전환율, 첫 목표 생성률, 7일 재방문율"
      },
      "tip": "마케팅형 프롬프트는 상품 설명보다 “누구의 어떤 문제를 해결하는가?”가 더 중요합니다."
    },
    {
      "key": "research",
      "label": "리서치/분석",
      "badge": "Analysis",
      "description": "시장조사, 비교분석, 보고서, 의사결정 분석 프롬프트",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "detailed",
        "promptStrength": "precision",
        "personaMode": "auto",
        "toneMode": "report",
        "outputFormatMode": "researchAnalysis"
      },
      "role": "너는 문제를 구조화하고 가설, 데이터, 반대 근거, 결론을 분리해서 분석하는 시니어 리서치·전략 분석가다. 자료를 나열하지 않고 의사결정에 필요한 기준·대안·리스크·추가 확인 질문을 만든다.",
      "requiredFields": [
        {
          "id": "researchQuestion",
          "label": "분석 질문",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: Cloudflare Pages를 계속 쓸지 다른 서버로 옮길지 판단하고 싶다."
        },
        {
          "id": "researchGoal",
          "label": "이 분석으로 결정하려는 것",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 비용, 안정성, 확장성 기준으로 현재 구조 유지/변경 여부를 결정"
        },
        {
          "id": "researchContext",
          "label": "현재 상황/자료",
          "type": "textarea",
          "rows": 4,
          "required": true,
          "placeholder": "예: 현재 사용하는 기술, 비용, 문제 상황, 이미 시도한 것, 비교 대상"
        }
      ],
      "optionalFields": [
        {
          "id": "analysisFramework",
          "label": "분석 프레임워크",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "자동 선택"
            },
            {
              "value": "비용, 시간, 리스크, 유지보수성, 확장성 기준으로 비교해줘.",
              "label": "비용/리스크/확장성"
            },
            {
              "value": "시장성, 경쟁자, 고객 니즈, 수익화 가능성을 기준으로 분석해줘.",
              "label": "시장/사업성"
            },
            {
              "value": "장점, 단점, 반대 근거, 실패 시나리오를 기준으로 레드팀 분석해줘.",
              "label": "레드팀 분석"
            },
            {
              "value": "정량 데이터와 정성 판단을 분리해 분석해줘.",
              "label": "정량/정성 분리"
            }
          ],
          "recommendedValue": ""
        },
        {
          "id": "sourcesNeeded",
          "label": "필요한 출처/데이터",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 공식 문서, 가격표, 통계, 논문, 사용자 후기, 로그 데이터"
        },
        {
          "id": "alternatives",
          "label": "비교 대상/대안",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: A안 유지, B안 이전, C안 일부 기능만 변경"
        },
        {
          "id": "constraints",
          "label": "제약조건",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 무료 우선, 기존 기능 유지, 1인 개발, 유지보수 부담 최소화"
        },
        {
          "id": "decisionCriteriaResearch",
          "label": "판단 기준",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 장기 유지보수성, 비용, 실패 리스크, 사용자 영향 순서"
        }
      ],
      "personas": [
        "A - 문제 구조화 전문가: 질문을 의사결정 가능한 단위로 나눈다.",
        "B - 데이터 분석가: 필요한 데이터, 수치, 비교 기준을 정리한다.",
        "C - 팩트체커: 출처 신뢰도와 확인 필요한 정보를 구분한다.",
        "D - 반대 가설 검토자: 주장의 약점과 다른 해석 가능성을 찾는다.",
        "E - 전략 의사결정자: 대안별 비용/리스크/효과를 종합해 결론을 낸다."
      ],
      "outputFormat": [
        "1. 핵심 결론",
        "2. 분석 질문 재정의",
        "3. 현재 상황 요약",
        "4. 근거와 데이터",
        "5. 대안별 비교",
        "6. 반대 가설과 리스크",
        "7. 최종 추천안",
        "8. 추가로 확인할 질문",
        "9. 마지막 팁"
      ],
      "standards": [
        "사실, 가정, 추론, 의견을 명확히 분리해줘.",
        "분석 질문이 넓으면 먼저 하위 질문으로 쪼개줘.",
        "최신 데이터가 필요한 경우 확인 필요로 표시해줘.",
        "결론은 애매하게 끝내지 말고 조건부 판단까지 제시해줘."
      ],
      "sampleValues": {
        "researchQuestion": "현재 사용하는 서버/DB/푸시 구조를 유지해야 할지, 일부를 변경해야 할지 분석하고 싶다.",
        "researchGoal": "무료 모델을 최우선으로 하되, 유료 전환이 필요한 조건이 있는지 판단하고 싶다.",
        "researchContext": "Cloudflare Pages, Supabase, OneSignal을 사용 중이고, 1인 개발자가 유지보수한다. 안정성과 비용이 중요하다.",
        "analysisFramework": "비용, 시간, 리스크, 유지보수성, 확장성 기준으로 비교해줘.",
        "constraints": "무료 모델 우선, 기존 기능을 깨지 않는 보수적 변경 우선"
      },
      "tip": "리서치/분석형 프롬프트는 “자료 조사”보다 “어떤 결정을 하려는가?”가 명확해야 좋은 결론이 나옵니다."
    },
    {
      "key": "learningPartner",
      "label": "학습/코치·작업 파트너",
      "badge": "Coach",
      "description": "학습 진단, 맞춤 수업, 연습·피드백, 작업 협업용 프롬프트",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "actionable",
        "promptStrength": "enhanced",
        "personaMode": "auto",
        "toneMode": "action",
        "outputFormatMode": "learningPartner"
      },
      "role": "너는 단순히 사용자의 문장을 프롬프트로 바꾸는 사람이 아니라, 사용자의 현재 수준을 진단하고 목표 달성까지 함께 가는 맞춤형 학습 설계자·소크라테스식 교사·실무 작업 파트너다. 영어, 타로카드, 자격증, 일반 학습, 업무 문서, 기획, 코드/아이디어 협업처럼 반복 피드백이 필요한 작업에서 진단 → 목표 쪼개기 → 쉬운 설명 → 예시 → 연습 → 피드백 → 다음 과제 순서로 사용자가 실제로 성장하거나 결과물을 완성하도록 돕는다.",
      "requiredFields": [
        {
          "id": "learningMode",
          "label": "도움받을 방식",
          "type": "select",
          "required": true,
          "options": [
            {
              "value": "learningCoach",
              "label": "학습 코치/교사 - 권장",
              "recommended": true,
              "prompt": "학습 코치/교사 모드로 진행해줘. 먼저 현재 수준과 목표를 진단하고, 사용자가 이해할 수 있는 설명 → 예시 → 짧은 연습 → 피드백 기준 → 다음 과제 흐름으로 가르쳐줘. 모르는 부분을 한 번에 몰아치지 말고 작은 단위로 나눠줘."
            },
            {
              "value": "languageCoach",
              "label": "영어/외국어 코치",
              "prompt": "언어 학습 코치 모드로 진행해줘. 회화 상황, 표현 패턴, 발음/억양, 문법 오류, 자연스러운 대체 표현, 롤플레이, 반복 연습, 교정 피드백을 포함해줘. 한국어 설명을 기본으로 하되 실제 연습 문장은 학습 언어로 제공해줘."
            },
            {
              "value": "certStudy",
              "label": "자격증/시험 공부",
              "prompt": "자격증/시험 코치 모드로 진행해줘. 시험 범위, 남은 기간, 현재 수준, 기출/빈출 개념, 공부 가능 시간을 기준으로 우선순위, 주차별 계획, 오늘 할 과제, 복습 루프, 오답 관리 전략을 설계해줘."
            },
            {
              "value": "tarotStudy",
              "label": "타로카드/상징 학습",
              "prompt": "타로카드 학습 코치 모드로 진행해줘. 타로를 미래 단정이 아니라 상징 해석과 자기성찰 도구로 다루고, 카드 의미·키워드·질문법·배열법·해석 연습·오해하기 쉬운 점을 단계별로 설명해줘."
            },
            {
              "value": "workPartner",
              "label": "작업 동료/협업 파트너",
              "prompt": "작업 동료 모드로 진행해줘. 사용자의 초안/아이디어/문제 상황을 같이 분석하고, 단순 대필이 아니라 목표 정리, 구조 개선, 빠진 조건 발견, 대안 제시, 실행 순서 정리까지 함께해줘."
            },
            {
              "value": "reviewPartner",
              "label": "피드백/검토 파트너",
              "prompt": "피드백/검토 파트너 모드로 진행해줘. 결과물을 냉정하게 검토하고 장점, 문제점, 수정 우선순위, 구체적 수정 예시, 다음 개선 과제를 제시해줘."
            }
          ],
          "recommendedValue": "learningCoach"
        },
        {
          "id": "learningGoal",
          "label": "배우거나 함께 해결할 목표",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 영어 회화를 매일 20분씩 연습하고 싶다 / 타로 메이저 아르카나를 이해하고 싶다 / 제안서 초안을 같이 다듬고 싶다"
        },
        {
          "id": "currentLevel",
          "label": "현재 수준/상황",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 영어는 문법은 조금 알지만 말하기가 약함 / 타로는 카드 이름만 아는 입문자 / 초안은 있는데 구조가 약함"
        }
      ],
      "optionalFields": [
        {
          "id": "learningMaterial",
          "label": "학습할 자료/개념/질문",
          "type": "textarea",
          "rows": 4,
          "requiredWhen": {
            "fieldId": "learningMode",
            "value": "learningCoach"
          },
          "placeholder": "예: 배우고 싶은 개념, 교재 내용, 질문, 헷갈리는 부분, 수업받고 싶은 주제를 붙여넣어주세요."
        },
        {
          "id": "workMaterial",
          "label": "함께 작업할 자료/초안/문제",
          "type": "textarea",
          "rows": 5,
          "requiredWhen": {
            "fieldId": "learningMode",
            "value": "workPartner"
          },
          "placeholder": "예: 같이 다듬을 글, 기획안, 코드, 아이디어, 회의 메모, 문제 상황을 붙여넣어주세요."
        },
        {
          "id": "reviewMaterial",
          "label": "검토받을 결과물",
          "type": "textarea",
          "rows": 5,
          "requiredWhen": {
            "fieldId": "learningMode",
            "value": "reviewPartner"
          },
          "placeholder": "예: 피드백받고 싶은 글, 코드, 발표 자료, 공부 계획, 결과물을 붙여넣어주세요."
        },
        {
          "id": "examInfo",
          "label": "시험/자격증 정보",
          "type": "textarea",
          "rows": 3,
          "requiredWhen": {
            "fieldId": "learningMode",
            "value": "certStudy"
          },
          "placeholder": "예: 전기기사 필기, 시험까지 8주 남음, 평일 1시간/주말 3시간 가능, 과년도 문제 중심"
        },
        {
          "id": "languageInfo",
          "label": "언어 학습 정보",
          "type": "textarea",
          "rows": 3,
          "requiredWhen": {
            "fieldId": "learningMode",
            "value": "languageCoach"
          },
          "placeholder": "예: 영어 회화, 여행 상황 표현, 발음 교정, 하루 20분, 한국어 설명 선호"
        },
        {
          "id": "tarotScope",
          "label": "타로 학습 범위",
          "type": "textarea",
          "rows": 3,
          "requiredWhen": {
            "fieldId": "learningMode",
            "value": "tarotStudy"
          },
          "placeholder": "예: 메이저 아르카나 22장 의미, 카드별 키워드, 질문법, 3카드 배열 연습"
        },
        {
          "id": "availableTime",
          "label": "사용 가능한 시간/기간",
          "type": "input",
          "placeholder": "예: 하루 20분, 주 3회, 시험까지 2개월, 오늘 1시간 안에 초안 완성"
        },
        {
          "id": "preferredTeachingStyle",
          "label": "선호하는 수업/협업 방식",
          "type": "select",
          "options": [
            {
              "value": "진단 질문 1~3개를 먼저 한 뒤, 수준에 맞춰 설명과 과제를 제시해줘.",
              "label": "진단 후 맞춤 진행 - 권장",
              "recommended": true
            },
            {
              "value": "설명은 짧게 하고 예시와 연습 문제를 많이 제공해줘.",
              "label": "예시/연습 중심"
            },
            {
              "value": "개념을 먼저 깊이 설명한 뒤 적용 예시로 연결해줘.",
              "label": "개념 설명 중심"
            },
            {
              "value": "작업 동료처럼 초안을 함께 고치고, 더 나은 대안을 바로 제시해줘.",
              "label": "협업/수정 중심"
            },
            {
              "value": "냉정하게 피드백하되, 개선 순서를 명확히 알려줘.",
              "label": "냉정한 피드백 중심"
            }
          ],
          "recommendedValue": "진단 질문 1~3개를 먼저 한 뒤, 수준에 맞춰 설명과 과제를 제시해줘."
        },
        {
          "id": "feedbackLevel",
          "label": "피드백 강도",
          "type": "select",
          "options": [
            {
              "value": "부담 없는 친절한 피드백으로 진행해줘.",
              "label": "친절하게"
            },
            {
              "value": "틀린 부분은 명확히 짚고, 왜 틀렸는지와 고치는 방법을 알려줘.",
              "label": "정확하게 - 권장",
              "recommended": true
            },
            {
              "value": "레드팀처럼 약점과 허점을 먼저 지적하고 개선안을 제시해줘.",
              "label": "냉정한 레드팀"
            }
          ],
          "recommendedValue": "틀린 부분은 명확히 짚고, 왜 틀렸는지와 고치는 방법을 알려줘."
        },
        {
          "id": "learningConstraints",
          "label": "제약조건/피하고 싶은 방식",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 너무 이론만 길게 설명하지 말 것, 한 번에 많은 숙제 금지, 영어 예문에는 한국어 해석 포함"
        },
        {
          "id": "successCriteria",
          "label": "성공 기준/완료 기준",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 4주 후 자기소개를 영어로 말하기 / 메이저 카드 22장 키워드 암기 / 오늘 안에 제안서 목차 확정"
        }
      ],
      "personas": [
        "A - 진단 교사: 현재 수준, 오해, 막히는 이유, 필요한 추가 질문을 먼저 파악한다.",
        "B - 커리큘럼 설계자: 목표를 작은 단계로 쪼개고 오늘 할 것과 나중에 할 것을 나눈다.",
        "C - 설명 전문가: 초보자가 이해할 수 있는 비유, 예시, 순서로 개념을 설명한다.",
        "D - 연습/피드백 코치: 짧은 연습 문제, 롤플레이, 체크리스트, 오답 피드백 루프를 만든다.",
        "E - 작업 동료/레드팀: 초안·아이디어·계획의 약점과 더 나은 대안을 구체적으로 제안한다.",
        "F - 최종 멘토: 지금 바로 할 다음 행동, 다음 세션 과제, 복습 기록을 정리한다."
      ],
      "outputFormat": [
        "1. 현재 수준/상황 진단",
        "2. 부족한 정보가 있다면 우선 질문할 것",
        "3. 목표를 이루기 위한 핵심 단계",
        "4. 오늘 바로 할 학습/작업 과제",
        "5. 쉬운 설명과 예시",
        "6. 연습 문제/롤플레이/체크리스트/공동 작업안",
        "7. 피드백 기준과 자주 틀리는 지점",
        "8. 다음 세션에서 이어갈 기록 또는 숙제",
        "9. 마지막 팁"
      ],
      "standards": [
        "학습/코치형은 사용자의 문장을 단순히 좋은 프롬프트로 바꾸는 데서 끝내지 말고, 실제 수업이나 협업이 가능하도록 진단·설명·연습·피드백 구조를 만들어줘.",
        "학습 요청은 현재 수준을 먼저 반영하고, 사용자가 이해하지 못할 가능성이 높은 용어는 쉬운 말로 풀어줘.",
        "교사 역할일 때는 설명 → 예시 → 짧은 연습 → 피드백 기준 → 다음 과제 흐름을 유지해줘.",
        "언어 학습은 표현 암기만 시키지 말고 상황별 롤플레이, 교정표, 자연스러운 대체 표현, 반복 연습을 포함해줘.",
        "자격증/시험 공부는 남은 기간, 빈출도, 약점, 오답 루프, 공부 가능 시간을 기준으로 현실적인 계획을 세워줘.",
        "타로 학습은 미래 단정이 아니라 카드 상징, 질문법, 해석 연습, 자기성찰 도구로 다뤄줘.",
        "작업 동료 역할일 때는 무조건 칭찬하지 말고, 개선 우선순위·수정안·대안·다음 작업을 구체적으로 제시해줘.",
        "한 번에 너무 많은 과제를 주지 말고, 오늘 바로 할 수 있는 작은 과제부터 제시해줘.",
        "지속형 학습/작업은 다음 세션에서 이어갈 수 있도록 복습 기록, 다음 질문, 다음 과제를 남겨줘.",
        "사용자가 이전 세션 내용을 붙여넣거나 언급하면 그 맥락을 이어받아 진도를 연결해줘. 같은 내용을 반복 설명하지 마."
      ],
      "sampleValues": {
        "learningMode": "learningCoach",
        "learningGoal": "영어 회화를 매일 20분씩 연습해서 여행 상황에서 기본 대화를 할 수 있게 되고 싶다.",
        "currentLevel": "문법은 조금 알지만 말하기가 막히고, 단어를 알아도 문장으로 바로 나오지 않는다.",
        "learningMaterial": "공항, 호텔, 식당에서 자주 쓰는 표현을 상황별로 배우고 싶다.",
        "availableTime": "평일 하루 20분, 주말 40분 정도 가능",
        "preferredTeachingStyle": "진단 질문 1~3개를 먼저 한 뒤, 수준에 맞춰 설명과 과제를 제시해줘.",
        "feedbackLevel": "틀린 부분은 명확히 짚고, 왜 틀렸는지와 고치는 방법을 알려줘.",
        "successCriteria": "4주 뒤 공항, 호텔, 식당에서 필요한 기본 표현을 말할 수 있으면 성공"
      },
      "tip": "학습/코치·작업 파트너형은 “무엇을 배우고 싶은지”보다 “현재 수준, 성공 기준, 연습 방식, 피드백 방식”을 함께 넣어야 실제 코치처럼 작동합니다."
    },
    {
      "key": "travel",
      "label": "여행/코스",
      "badge": "Travel",
      "description": "여행 일정, 가족 나들이, 데이트 코스, 동선·예산·준비물 설계 프롬프트",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "detailed",
        "promptStrength": "precision",
        "personaMode": "auto",
        "toneMode": "action",
        "outputFormatMode": "travel"
      },
      "role": "너는 20년 경력의 베테랑 여행 코디네이터이자 동선 설계 전문가다. 사용자의 여행 목적, 동행자, 예산, 체력, 계절, 이동수단을 바탕으로 단순 관광지 나열이 아니라 실행 가능한 일정·동선·예산·준비물·대안까지 설계한다.",
      "requiredFields": [
        {
          "id": "travelDestination",
          "label": "목적지/출발지",
          "type": "textarea",
          "rows": 2,
          "required": true,
          "placeholder": "예: 일본 홋카이도 / 서울 출발 / 서울 근교 / 제주도 동쪽"
        },
        {
          "id": "travelPeriod",
          "label": "여행 날짜/체류 시간",
          "type": "textarea",
          "rows": 2,
          "required": true,
          "placeholder": "예: 2026.06.01~06.04, 순수 현지 체류 3일, 토요일 오전 출발"
        },
        {
          "id": "travelPurpose",
          "label": "여행 목적/컨셉",
          "type": "textarea",
          "rows": 2,
          "required": true,
          "placeholder": "예: 아이들과 체험 중심, 부모님 모시고 여유롭게, 미식/온천/쇼핑/자연 중심"
        },
        {
          "id": "travelCompanions",
          "label": "동행자 정보",
          "type": "textarea",
          "rows": 2,
          "required": true,
          "placeholder": "예: 성인 2명, 6세/7세 아이, 부모님 동행, 유모차/휠체어 필요 여부"
        }
      ],
      "optionalFields": [
        {
          "id": "travelBudget",
          "label": "예산/소비 성향",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 1인당 50만 원, 가성비 우선, 숙소는 중급, 식사는 1끼만 특별하게"
        },
        {
          "id": "travelTransport",
          "label": "숙소/이동 선호도",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 대중교통 중심, 렌터카 가능, 택시 최소화, 숙소는 역 근처"
        },
        {
          "id": "travelPace",
          "label": "동선 최적화 전략",
          "type": "select",
          "recommendedValue": "balanced",
          "options": [
            {
              "value": "",
              "label": "선택 안 함"
            },
            {
              "value": "relaxed",
              "label": "여유롭게 1~2곳"
            },
            {
              "value": "balanced",
              "label": "균형형 - 권장",
              "prompt": "이동 피로와 만족도를 균형 있게 고려해 오전/오후/저녁을 클러스터링해줘.",
              "recommended": true
            },
            {
              "value": "packed",
              "label": "알차게 다수 방문"
            },
            {
              "value": "base",
              "label": "거점형: 숙소 한 곳 유지"
            },
            {
              "value": "moving",
              "label": "이동형: 도시 이동 포함"
            }
          ]
        },
        {
          "id": "mustVisit",
          "label": "필수 장소/음식/경험",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 꼭 가고 싶은 장소, 먹고 싶은 음식, 아이 체험, 사진 스팟"
        },
        {
          "id": "avoidTravel",
          "label": "피하고 싶은 환경/제약",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 긴 대기, 계단 많은 곳, 너무 비싼 코스, 과도한 이동, 알레르기"
        },
        {
          "id": "weatherAlternative",
          "label": "날씨/비상 대안",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 비 오는 날 실내 대안, 아이가 피곤할 때 단축 코스, 예약 실패 시 대안"
        },
        {
          "id": "travelOutputNeed",
          "label": "특별히 원하는 결과물",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 시간대별 일정표, 지도 동선 기준, 예산표, 준비물 체크리스트, 맛집 후보 비교"
        }
      ],
      "personas": [
        "A - 동선 설계자: 이동 시간을 줄이도록 지역을 오전/오후/저녁 단위로 묶는다.",
        "B - 예산 관리자: 교통비, 식비, 입장료, 예약비 등 현실 비용을 점검한다.",
        "C - 동행자 배려 전문가: 아이, 부모님, 체력, 알레르기, 취향 차이를 반영한다.",
        "D - 현지 경험 큐레이터: 계절, 날씨, 예약, 대기, 현지 팁을 고려한다.",
        "E - 레드팀 여행자: 무리한 일정, 과도한 이동, 광고성 추천, 확인 안 된 정보를 걸러낸다.",
        "F - 최종 여행 코디네이터: 실행 가능한 최종 일정과 대안을 정리한다."
      ],
      "standards": [
        "여행지는 사용자가 입력한 조건을 우선하고, 입력이 부족하면 핵심 질문부터 해줘.",
        "단순 장소 나열이 아니라 시간대별 동선, 이동수단, 예상 소요 시간, 예산을 함께 제시해줘.",
        "가족/아이/부모님 동행처럼 동행자 조건이 있으면 체력과 이동 피로를 우선 고려해줘.",
        "맛집, 운영시간, 가격, 교통편처럼 변동 가능한 정보는 최신 확인 필요로 표시해줘.",
        "무리한 코스는 레드팀 관점에서 줄이고, 대체 코스를 함께 제시해줘."
      ],
      "outputFormat": [
        "한 줄 추천 결론",
        "여행 전제와 확인 필요 정보",
        "날짜별/시간대별 타임라인",
        "이동 동선과 예상 소요 시간",
        "예산표",
        "준비물 체크리스트",
        "현지 팁/주의사항",
        "날씨/체력 저하/예약 실패 대안",
        "바로 실행할 예약·검색 체크리스트"
      ],
      "tip": "여행 프롬프트는 목적지보다 동행자, 체력, 예산, 이동수단, 피하고 싶은 조건이 결과 품질을 크게 좌우한다.",
      "sampleValues": {
        "travelDestination": "서울 출발, 아이들과 갈 수 있는 서울 근교 당일치기 코스",
        "travelPeriod": "이번 주 토요일 오전 출발, 저녁 전 귀가 희망",
        "travelPurpose": "6세/7세 아이가 지루해하지 않는 체험 + 산책 + 점심 코스",
        "travelCompanions": "성인 2명, 아이 2명, 자가용 이동. 너무 오래 걷거나 줄 서는 곳은 피하고 싶다.",
        "travelBudget": "총 15만 원 이내면 좋고, 입장료가 너무 비싼 곳은 제외",
        "travelPace": "balanced",
        "mustVisit": "아이 체험 또는 자연 산책 요소가 하나는 있었으면 좋다.",
        "weatherAlternative": "비가 오면 갈 수 있는 실내 대안도 같이 제시해줘."
      }
    },
    {
      "key": "lifeFun",
      "label": "재미/생활/기타",
      "badge": "Life",
      "description": "운세·타로형 재미, 생활 루틴, 밈·상황극, 기타 요청 프롬프트 (사주는 별도 유형 사용)",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "balanced",
        "promptStrength": "enhanced",
        "personaMode": "compact",
        "toneMode": "natural",
        "outputFormatMode": "funLife"
      },
      "role": "너는 생활 플래너, 유머 작가, 몰입형 대화 설계자, 자기성찰형 엔터테인먼트 진행자를 겸하는 크리에이티브 어시스턴트다. 운세·타로형 요청은 실제 미래 예언이 아니라 재미와 자기성찰용 콘텐츠로 안전하게 구성하고, 필요한 경우 한 번에 하나씩 질문한다. 사주/만세력 분석이 필요한 요청은 본 유형에서 다루지 말고 사주/만세력 유형으로 안내해줘.",
      "requiredFields": [
        {
          "id": "lifeFunMode",
          "label": "요청 유형",
          "type": "select",
          "required": true,
          "options": [
            {
              "value": "fortune",
              "label": "운세/타로 - 재미용",
              "prompt": "재미와 자기성찰용으로만 다루고 실제 미래를 단정하지 않게 구성해줘. 사주/만세력 기반 정밀 분석이 필요한 요청은 '사주/만세력' 유형으로 안내해줘.",
              "recommended": true
            },
            {
              "value": "daily",
              "label": "생활 아이디어/루틴/취미",
              "prompt": "사용자의 생활 조건을 바탕으로 부담 없이 실행 가능한 루틴이나 취미 아이디어를 제안해줘."
            },
            {
              "value": "fun",
              "label": "재미/밈/게임/상황극",
              "prompt": "유머와 몰입감을 살리되 사용자를 모욕하거나 불안하게 만들지 않게 구성해줘."
            },
            {
              "value": "custom",
              "label": "기타",
              "prompt": "사용자가 입력한 기타 요청에 맞춰 재미와 실용성의 균형을 잡아줘."
            }
          ],
          "recommendedValue": "fortune"
        },
        {
          "id": "lifeFunTopic",
          "label": "주제/질문",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 이번 주말 아이들과 갈 만한 서울 근교 나들이 코스 / 올해 내 운세를 재미있게 봐줘"
        },
        {
          "id": "lifeFunContext",
          "label": "사용자 상황",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 가족 구성, 출발지, 예산, 취향, 원하는 분위기, 현재 고민 등"
        }
      ],
      "optionalFields": [
        {
          "id": "interactionMode",
          "label": "진행 방식",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "자동 선택"
            },
            {
              "value": "질문은 한 번에 하나씩만 하고, 사용자가 답하기 전에는 다음 질문으로 넘어가지 마.",
              "label": "대화형: 한 번에 한 질문"
            },
            {
              "value": "추가 질문 없이 현재 정보로 바로 결과물을 만들어줘.",
              "label": "즉시 결과 생성"
            },
            {
              "value": "먼저 핵심 질문 3개만 묻고 이후 결과물을 만들어줘.",
              "label": "핵심 질문 3개 후 생성"
            }
          ]
        },
        {
          "id": "mood",
          "label": "원하는 분위기/톤",
          "type": "input",
          "placeholder": "예: 유쾌하게, 감성적으로, 마라맛 팩폭, 따뜻한 츤데레, 현실적"
        },
        {
          "id": "fortuneStyle",
          "label": "운세/타로 스타일",
          "type": "textarea",
          "rows": 2,
          "showWhen": {
            "fieldId": "lifeFunMode",
            "value": "fortune"
          },
          "placeholder": "예: 마라맛 팩폭, 무당톤, 따뜻한 조언, 올해의 운/연애운/금전운 중심"
        },
        {
          "id": "avoidLifeFun",
          "label": "피해야 할 것",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 실제 미래를 단정하지 말 것, 너무 무섭게 말하지 말 것, 비용 큰 코스 제외"
        }
      ],
      "personas": [
        "A - 생활 플래너: 현실적인 조건, 비용, 동선을 점검한다.",
        "B - 재미 작가: 유머, 몰입감, 캐릭터성을 살린다.",
        "C - 안전/현실 검토자: 과장, 불안 조장, 비현실적 조언을 걸러낸다.",
        "D - 대화 설계자: 필요한 경우 질문을 한 번에 하나씩 진행해 몰입감을 만든다.",
        "E - 최종 큐레이터: 재미와 실용성의 균형을 맞춰 결과를 정리한다."
      ],
      "outputFormat": [
        "1. 오늘의 한 줄 결론",
        "2. 사용자 상황 반영 해석",
        "3. 추천 플랜 또는 결과",
        "4. 재미 요소/몰입 요소",
        "5. 현실적인 주의사항",
        "6. 바로 할 수 있는 행동 1가지",
        "7. 마지막 팁"
      ],
      "standards": [
        "운세/타로형 요청은 재미와 자기성찰용으로만 다루고 실제 미래나 운명을 단정하지 마.",
        "사주/만세력 기반 분석이 필요한 요청은 본 유형이 아니라 '사주/만세력' 유형으로 안내해줘.",
        "생활/루틴 요청은 비용, 시간, 가족/일정 제약을 고려해 현실적으로 제안해줘.",
        "대화형 요청에서는 한 번에 여러 질문을 몰아서 하지 말고 진행 방식을 지켜줘.",
        "유머를 쓰더라도 사용자를 모욕하거나 불안하게 만들지 않도록 조절해줘.",
        "건강, 투자, 법률처럼 고위험 판단으로 이어질 수 있는 내용은 전문가 상담 또는 최신 확인 필요를 표시해줘."
      ],
      "sampleValues": {
        "lifeFunMode": "fortune",
        "lifeFunTopic": "올해의 흐름을 재미있게 보고 싶다. 단, 실제 미래를 단정하지 말고 자기성찰용으로 해줘.",
        "lifeFunContext": "요즘 일과 돈, 인간관계에 대한 고민이 있다. 가볍지만 생각할 거리가 있는 방식이면 좋겠다.",
        "interactionMode": "질문은 한 번에 하나씩만 하고, 사용자가 답하기 전에는 다음 질문으로 넘어가지 마.",
        "mood": "유머러스하지만 따뜻하게, 너무 불안하게 만들지 않게",
        "fortuneStyle": "타로/운세 느낌은 살리되 현실적인 조언과 실천 미션을 포함"
      },
      "tip": "재미/생활형 프롬프트는 “조건”과 “원하는 분위기”를 같이 넣으면 실용성과 재미가 함께 살아납니다. 사주/만세력 기반 정밀 분석은 별도 '사주/만세력' 유형을 사용하세요."
    },
    {
      "key": "saju",
      "label": "사주/만세력",
      "badge": "Saju",
      "description": "사주팔자·만세력 기반 자기성찰형 분석 프롬프트 (운명 단정 금지)",
      "commonDefaults": {
        "clarityLevel": "expert",
        "responseDepth": "detailed",
        "promptStrength": "precision",
        "personaMode": "full",
        "toneMode": "calm",
        "outputFormatMode": "typeDefault"
      },
      "role": "너는 만세력에 기반해 사주팔자를 풀어주는 자기성찰형 가이드다. 사주는 운명을 단정하기 위한 예언이 아니라 사용자가 자신을 이해하고 의사결정 시 참고할 자료로 다룬다. 양력/음력 변환과 24절기 절입 시점, 한국 표준시 보정은 정확한 만세력 데이터를 기준으로 처리하되, 운명을 단정하거나 두려움을 조장하지 않는다. 술가별 견해 차이가 큰 부분은 단정하지 말고 '~로 보는 견해가 있다' 형식으로 표현한다.",
      "requiredFields": [
        {
          "id": "birthDate",
          "label": "생년월일",
          "type": "input",
          "required": true,
          "placeholder": "예: 1985-03-15"
        },
        {
          "id": "birthCalendar",
          "label": "양력/음력 구분",
          "type": "select",
          "required": true,
          "options": [
            {
              "value": "입력한 날짜는 양력 기준이다.",
              "label": "양력 - 권장"
            },
            {
              "value": "입력한 날짜는 음력 평달 기준이다. 만세력 변환 시 양력으로 환산해 사주 4주를 산출해줘.",
              "label": "음력(평달)"
            },
            {
              "value": "입력한 날짜는 음력 윤달 기준이다. 만세력 변환 시 양력으로 환산해 사주 4주를 산출해줘.",
              "label": "음력(윤달)"
            }
          ],
          "recommendedValue": "입력한 날짜는 양력 기준이다."
        },
        {
          "id": "sajuScope",
          "label": "분석 범위",
          "type": "select",
          "required": true,
          "options": [
            {
              "value": "사주팔자 8자(연주·월주·일주·시주)를 먼저 산출하고, 천간·지지·오행·십성 분포를 표로 정리한 뒤, 일간 강약과 격국·용신 후보까지 풀이해줘.",
              "label": "사주팔자 기본 풀이 - 권장"
            },
            {
              "value": "올해의 운(세운)을 중심으로, 본명 사주와의 합·충·형·해 관계를 정리해줘. 단, 특정 사건을 단정하지 마.",
              "label": "올해의 운(세운)"
            },
            {
              "value": "현재부터 10년 단위 대운을 정리하고, 각 대운의 키워드·강점·주의점을 표로 보여줘. 운명을 단정하지 말고 자기성찰 가이드로 작성해줘.",
              "label": "10년 단위 대운"
            },
            {
              "value": "커리어·재물 관점에서 사주의 강약·용신·재성·관성을 정리해줘. 투자 권유나 직업 단정은 금지하고 참고 자료로만 다뤄줘.",
              "label": "커리어/재물 중심"
            },
            {
              "value": "관계/대인 관점에서 사주의 합·충·형·해와 배우자 궁(일지) 해석을 정리해줘. 특정 인물에 대한 단정은 금지.",
              "label": "관계/대인 중심"
            }
          ],
          "recommendedValue": "사주팔자 8자(연주·월주·일주·시주)를 먼저 산출하고, 천간·지지·오행·십성 분포를 표로 정리한 뒤, 일간 강약과 격국·용신 후보까지 풀이해줘."
        }
      ],
      "optionalFields": [
        {
          "id": "birthTime",
          "label": "출생시간",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "모름 - 시주 생략"
            },
            {
              "value": "23:30~01:30 (子時 자시)",
              "label": "23:30~01:30 자시(子)"
            },
            {
              "value": "01:30~03:30 (丑時 축시)",
              "label": "01:30~03:30 축시(丑)"
            },
            {
              "value": "03:30~05:30 (寅時 인시)",
              "label": "03:30~05:30 인시(寅)"
            },
            {
              "value": "05:30~07:30 (卯時 묘시)",
              "label": "05:30~07:30 묘시(卯)"
            },
            {
              "value": "07:30~09:30 (辰時 진시)",
              "label": "07:30~09:30 진시(辰)"
            },
            {
              "value": "09:30~11:30 (巳時 사시)",
              "label": "09:30~11:30 사시(巳)"
            },
            {
              "value": "11:30~13:30 (午時 오시)",
              "label": "11:30~13:30 오시(午)"
            },
            {
              "value": "13:30~15:30 (未時 미시)",
              "label": "13:30~15:30 미시(未)"
            },
            {
              "value": "15:30~17:30 (申時 신시)",
              "label": "15:30~17:30 신시(申)"
            },
            {
              "value": "17:30~19:30 (酉時 유시)",
              "label": "17:30~19:30 유시(酉)"
            },
            {
              "value": "19:30~21:30 (戌時 술시)",
              "label": "19:30~21:30 술시(戌)"
            },
            {
              "value": "21:30~23:30 (亥時 해시)",
              "label": "21:30~23:30 해시(亥)"
            },
            {
              "value": "정확한 시각은 모르지만 새벽/오전/오후/저녁 중 하나는 안다. 가능 범위를 묻고 시주를 추정해줘.",
              "label": "대략적인 시간대만 안다"
            }
          ],
          "help": "한국 표준시 기준. 1908~1961년의 동경 127.5도 표준시 등 표준시 변경 시점은 만세력에서 자동 보정 필요."
        },
        {
          "id": "birthPlace",
          "label": "출생지",
          "type": "input",
          "placeholder": "예: 서울특별시, 부산광역시 해운대구, 일본 도쿄"
        },
        {
          "id": "gender",
          "label": "성별",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "선택 안 함"
            },
            {
              "value": "남성 (건명)",
              "label": "남성 (건명)"
            },
            {
              "value": "여성 (곤명)",
              "label": "여성 (곤명)"
            }
          ],
          "help": "남녀에 따라 대운 흐름(순행/역행) 산출 방식이 달라집니다."
        },
        {
          "id": "sajuTone",
          "label": "톤/스타일",
          "type": "input",
          "placeholder": "예: 차분한 학술톤, 따뜻한 코칭톤, 마라맛 팩폭, 무당톤"
        },
        {
          "id": "sajuFocusQuestion",
          "label": "구체적 질문/관심사",
          "type": "textarea",
          "rows": 3,
          "placeholder": "예: 2026년에 이직을 고민 중이다. 사주상 어떤 시기가 유리한지 참고하고 싶다."
        },
        {
          "id": "sajuAvoid",
          "label": "피해야 할 표현/주제",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 사망/이혼 등 두려움 조장 금지, 특정 종교 권유 금지, 의료·투자·법률 직접 권유 금지"
        }
      ],
      "personas": [
        "A - 만세력 산출자: 양력/음력 변환, 24절기 절입, 한국 표준시 보정을 정확히 처리해 사주 4주(연주·월주·일주·시주)와 천간·지지·오행·십성 분포를 산출한다.",
        "B - 명리학 해석자: 일간 강약, 격국, 용신/희신, 합·충·형·해, 십이운성, 신살을 종합해 본명의 특성을 설명한다.",
        "C - 자기성찰 코치: 사주를 운명 단정이 아니라 자기 이해와 의사결정 보조 자료로 환원해 실용적 조언을 만든다.",
        "D - 레드팀 검토자: 두려움 조장, 미래 단정, 의료·투자·법률 직접 권유, 술가 간 견해 차이를 단일 결론으로 단정하는 부분을 차단한다.",
        "E - 최종 큐레이터: 만세력 정확성과 자기성찰적 활용 사이의 균형을 맞춰 결과를 정리한다."
      ],
      "outputFormat": [
        "1. 사주팔자 산출 결과 (연주·월주·일주·시주 표 + 천간·지지·오행·십성 분포)",
        "2. 만세력 변환 근거 한 줄 (양력/음력, 절기 절입, 표준시 보정 여부)",
        "3. 일간과 신강·신약 판정 근거",
        "4. 격국·용신/희신 후보 (단정 금지, '~로 보는 견해' 형식)",
        "5. 본명 핵심 키워드 (강점 / 주의)",
        "6. 사용자가 요청한 범위에 맞춘 해석 (세운/대운/커리어/관계 중 해당)",
        "7. 자기성찰용 질문 3개와 이번 달에 실천할 미션 1가지",
        "8. 본 해석의 한계와 확인 필요 사항",
        "9. 마지막 팁"
      ],
      "standards": [
        "양력/음력 변환과 24절기 절입 시점은 정확한 만세력 데이터를 기준으로 계산하고, 계산 근거를 한 줄로 명시해줘.",
        "한국 표준시 보정이 필요한 시기(예: 1908~1961년 동경 127.5도)는 자동 적용하고 보정 여부를 명시해줘.",
        "출생시간을 모를 경우 시주는 산출하지 말고 '시주 미상' 으로 처리하고, 시주 미상으로 인한 해석 한계를 명시해줘.",
        "사주는 운명을 단정하기 위한 예언이 아니라 자기 이해와 의사결정 보조 자료임을 결과 처음과 끝에 명시해줘.",
        "특정 연도·사건을 단정하거나 사망·이혼·질병 등 두려움을 조장하는 표현은 금지.",
        "용신·신살·격국 등 술가별 견해 차이가 큰 부분은 '~로 보는 견해가 있다' 형식으로 표현해줘.",
        "의료·투자·법률 판단은 직접 권유하지 말고 전문가 상담 필요성을 표시해줘.",
        "AI는 만세력 산출까지는 정확히 처리할 수 있으나, '정점기 점수' 같은 수치화 예측은 술가별 해석이 다르므로 단정하지 마."
      ],
      "sampleValues": {
        "birthDate": "1985-03-15",
        "birthCalendar": "입력한 날짜는 양력 기준이다.",
        "sajuScope": "사주팔자 8자(연주·월주·일주·시주)를 먼저 산출하고, 천간·지지·오행·십성 분포를 표로 정리한 뒤, 일간 강약과 격국·용신 후보까지 풀이해줘.",
        "birthTime": "05:30~07:30 (卯時 묘시)",
        "birthPlace": "서울특별시",
        "gender": "남성 (건명)",
        "sajuTone": "차분한 학술톤. 운명을 단정하기보다 자기 이해를 돕는 어조로.",
        "sajuFocusQuestion": "현재 커리어 방향성을 점검 중이다. 사주 본명에서 보이는 강점과 보완점을 자기성찰 자료로 정리해줘."
      },
      "tip": "사주 프롬프트는 \"양력/음력, 출생시간 정확도, 분석 범위(기본 풀이/세운/대운/커리어/관계)\"를 명시할수록 만세력 산출 정확도와 해석 깊이가 함께 올라갑니다. 단, 본 도구는 AI 프롬프트 생성기이며, 만세력 정확도와 명리 해석은 도메인 전문가 검증이 필요합니다."
    },
    {
      "key": "image",
      "label": "이미지 생성",
      "badge": "Image",
      "description": "이미지 생성/수정 요청용 프롬프트",
      "commonDefaults": {
        "clarityLevel": "simple",
        "responseDepth": "concise",
        "promptStrength": "enhanced",
        "personaMode": "compact",
        "toneMode": "calm",
        "outputFormatMode": "typeDefault"
      },
      "role": "너는 시각 연출, 구도, 조명, 스타일, 카메라 앵글, 배제 요소, 네거티브 프롬프트 설계에 능한 AI 이미지 프롬프트 디렉터다. 추상적인 형용사를 구체적인 시각 정보로 바꾸고, 사용자가 원할 경우 한국어 프롬프트를 이미지 생성 모델에 최적화된 영어 프롬프트로 번역한다. 대상 모델(DALL-E, Midjourney, Stable Diffusion 등)의 문법 차이를 반영해 생성 품질을 높인다.",
      "requiredFields": [
        {
          "id": "subject",
          "label": "이미지 주제/대상",
          "type": "textarea",
          "rows": 3,
          "required": true,
          "placeholder": "예: 네이비와 코발트 블루를 기반으로 한 P 형태의 앱 아이콘"
        },
        {
          "id": "purpose",
          "label": "사용 목적",
          "type": "textarea",
          "rows": 2,
          "required": true,
          "placeholder": "예: Android 앱 런처 아이콘과 푸시 알림 아이콘 브랜딩에 사용"
        },
        {
          "id": "style",
          "label": "스타일/레퍼런스",
          "type": "textarea",
          "rows": 2,
          "required": true,
          "placeholder": "예: 미니멀, 둥근 모서리, 프리미엄 생산성 앱 느낌"
        }
      ],
      "optionalFields": [
        {
          "id": "outputLanguage",
          "label": "프롬프트 출력 언어",
          "type": "select",
          "options": [
            {
              "value": "english",
              "label": "영어 프롬프트 - 권장",
              "prompt": "최종 이미지 프롬프트와 네거티브 프롬프트를 영어로 작성해줘. 이미지 생성 모델은 영어 프롬프트에서 가장 높은 품질을 낸다.",
              "recommended": true
            },
            {
              "value": "bilingual",
              "label": "한국어 설명 + 영어 프롬프트",
              "prompt": "설명과 구조 분석은 한국어로, 최종 이미지 프롬프트와 네거티브 프롬프트는 영어로 작성해줘."
            },
            {
              "value": "korean",
              "label": "한국어만",
              "prompt": "모든 내용을 한국어로 작성해줘."
            }
          ],
          "recommendedValue": "english"
        },
        {
          "id": "targetModel",
          "label": "대상 이미지 생성 모델",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "범용 (모델 무관)"
            },
            {
              "value": "DALL-E / ChatGPT 이미지 생성에 최적화된 자연어 서술형 프롬프트로 작성해줘.",
              "label": "DALL-E / ChatGPT"
            },
            {
              "value": "Midjourney에 최적화해줘. --ar, --style, --v 등 Midjourney 파라미터를 포함하고, 쉼표로 구분된 키워드 나열형으로 작성해줘.",
              "label": "Midjourney"
            },
            {
              "value": "Stable Diffusion / SDXL에 최적화해줘. 품질 태그(masterpiece, best quality 등), 가중치 괄호 (keyword:1.2), 네거티브 프롬프트를 분리해서 작성해줘.",
              "label": "Stable Diffusion / SDXL"
            },
            {
              "value": "Flux 모델에 최적화된 자연어 서술형 프롬프트로 작성해줘. 구체적이고 상세하게 작성해줘.",
              "label": "Flux"
            },
            {
              "value": "Claude 이미지 생성에 최적화된 자연어 서술형 프롬프트로 작성해줘.",
              "label": "Claude 이미지 생성"
            }
          ]
        },
        {
          "id": "imageAction",
          "label": "작업 유형",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "새로 생성 (기본)"
            },
            {
              "value": "기존 이미지를 수정/인페인팅하는 프롬프트를 만들어줘. 유지할 부분과 바꿀 부분을 명확히 분리해줘.",
              "label": "수정 / 인페인팅"
            },
            {
              "value": "기존 이미지의 스타일이나 분위기만 바꾸는 프롬프트를 만들어줘. 구도와 구성은 유지해줘.",
              "label": "스타일 변환"
            },
            {
              "value": "기존 이미지를 기반으로 변형/확장하는 프롬프트를 만들어줘.",
              "label": "변형 / 아웃페인팅"
            }
          ]
        },
        {
          "id": "composition",
          "label": "구도/카메라/레이아웃",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 중앙 배치, 여백 충분히, 1:1 정사각형, 작은 크기에서도 인식 가능"
        },
        {
          "id": "lighting",
          "label": "조명/색감/분위기",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 네이비 + 코발트 블루, 민트 #00e1c6 아주 소량, 고급스럽고 차분한 분위기"
        },
        {
          "id": "keepElements",
          "label": "유지할 요소",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 기존 P 형태, 둥근 아이콘 느낌, 배경 구도"
        },
        {
          "id": "excludeElements",
          "label": "배제할 요소",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 복잡한 배경, 작은 텍스트, 과한 그림자, 사람 얼굴"
        },
        {
          "id": "ratio",
          "label": "비율/크기",
          "type": "input",
          "placeholder": "예: 1:1, 16:9, 앱 아이콘용 1024x1024"
        },
        {
          "id": "negativePrompt",
          "label": "네거티브 프롬프트",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: blurry, distorted, extra text, low quality, over-detailed"
        }
      ],
      "personas": [
        "A - 비주얼 디렉터: 주제와 분위기를 시각적으로 선명하게 만든다.",
        "B - 프롬프트 엔지니어: 생성 모델이 이해하기 쉬운 단어와 구조로 바꾼다.",
        "C - 구도 전문가: 레이아웃, 비율, 시선 흐름을 점검한다.",
        "D - 품질 감시자: 왜곡, 텍스트 오류, 과한 디테일, 정체성 훼손을 막는다.",
        "E - 최종 프롬프트 디렉터: 최종 이미지 프롬프트와 네거티브 프롬프트를 정리한다."
      ],
      "outputFormat": [
        "1. 최종 이미지 프롬프트 (출력 언어 설정에 따라 영어 또는 한국어)",
        "2. 네거티브 프롬프트",
        "3. 대상 모델 파라미터 (지정된 경우)",
        "4. 유지할 요소",
        "5. 배제할 요소",
        "6. 스타일/구도/조명 요약",
        "7. 재생성 시 조정 팁",
        "8. 마지막 팁"
      ],
      "standards": [
        "주제, 스타일, 구도, 조명, 분위기, 배제 요소를 구체적으로 분리해줘.",
        "“멋진”, “예쁜” 같은 추상적 표현보다 구체적인 시각 정보를 사용해줘.",
        "이미지 수정 요청이라면 유지할 부분과 바꿀 부분을 명확히 분리해줘.",
        "텍스트, 손, 얼굴, 로고처럼 오류가 잦은 요소는 주의 문구를 넣어줘.",
        "프롬프트 출력 언어가 영어로 설정된 경우, 한국어 입력을 이미지 생성 모델에 최적화된 영어 프롬프트로 번역해줘. 단순 직역이 아니라 모델이 잘 이해하는 시각적 서술어로 바꿔줘.",
        "대상 모델이 지정된 경우 해당 모델의 문법과 파라미터 형식에 맞춰 프롬프트를 작성해줘."
      ],
      "sampleValues": {
        "subject": "네이비와 코발트 블루를 기반으로 한 P 형태의 앱 아이콘",
        "purpose": "Android 앱 런처 아이콘과 푸시 알림 아이콘 브랜딩에 사용",
        "style": "미니멀하고 프리미엄 생산성 앱 느낌. 둥근 모서리, 작은 크기에서도 잘 보이는 단순한 형태.",
        "composition": "중앙 배치, 충분한 여백, 1:1 정사각형, 작은 크기에서도 식별 가능",
        "lighting": "네이비 + 코발트 블루 중심, 필요하면 민트 #00e1c6를 아주 소량 포인트로 사용",
        "outputLanguage": "english",
        "excludeElements": "복잡한 배경, 작은 텍스트, 과한 그림자, 너무 많은 디테일"
      },
      "tip": "이미지형 프롬프트는 “무엇을 유지하고 무엇을 바꿀지”를 분리하고, 영어 출력 + 대상 모델을 지정하면 결과 품질이 크게 올라갑니다."
    },
    {
      "key": "health",
      "label": "건강/증상",
      "badge": "Health",
      "description": "증상 분석, 진료과 안내, 약물 정보, 건강 관리 프롬프트",
      "commonDefaults": {
        "clarityLevel": "auto",
        "responseDepth": "detailed",
        "promptStrength": "precision",
        "personaMode": "compact",
        "toneMode": "calm",
        "outputFormatMode": "typeDefault"
      },
      "role": "너는 의료 정보 분석가이자 건강 가이드다. 사용자의 증상, 상황, 병력을 바탕으로 가능한 원인과 관련 정보를 정리하되, 의료 진단이 아닌 정보 제공임을 명확히 한다. 응급 증상은 즉시 안내하고, 전문의 상담 필요성을 항상 표시하며, 검증되지 않은 민간요법은 추천하지 않는다.",
      "requiredFields": [
        {
          "id": "healthMode",
          "label": "상담 유형",
          "type": "select",
          "required": true,
          "options": [
            {
              "value": "symptom",
              "label": "증상 분석 / 가능한 원인 확인",
              "prompt": "사용자의 증상을 바탕으로 가능한 원인을 우선순위별로 정리해줘. 각 원인의 특징, 감별 포인트, 병원 방문 기준을 함께 제시해줘. 단, 진단이 아닌 정보 제공임을 명시해줘.",
              "recommended": true
            },
            {
              "value": "childHealth",
              "label": "아이/소아 건강 상담",
              "prompt": "부모 관점에서 아이의 증상을 분석해줘. 소아에서 흔한 원인, 즉시 병원에 가야 하는 위험 신호, 가정에서 관찰할 포인트, 소아과/응급실 방문 기준을 정리해줘."
            },
            {
              "value": "hospital",
              "label": "어떤 병원/진료과에 가야 하나",
              "prompt": "증상을 바탕으로 어떤 진료과를 가야 하는지, 동네 의원과 대학병원 중 어디가 적절한지, 진료 전 준비할 것을 정리해줘."
            },
            {
              "value": "medication",
              "label": "약물/영양제 정보",
              "prompt": "해당 약물이나 영양제의 효과, 부작용, 복용 주의사항, 상호작용, 복용 중단 시 주의점을 정리해줘. 반드시 약사/의사 상담 필요성을 표시해줘."
            },
            {
              "value": "prevention",
              "label": "예방/건강관리/생활습관",
              "prompt": "사용자의 상황에 맞는 예방법, 생활습관 개선, 정기검진 항목, 주의해야 할 위험 요인을 정리해줘."
            }
          ],
          "recommendedValue": "symptom"
        },
        {
          "id": "symptomDescription",
          "label": "증상/질문 설명",
          "type": "textarea",
          "rows": 5,
          "required": true,
          "placeholder": "예: 3일 전부터 오른쪽 아랫배가 콕콕 쑤시듯 아프고, 누르면 더 아프다. 열은 없지만 식욕이 떨어졌다."
        },
        {
          "id": "personInfo",
          "label": "기본 정보 (나이/성별)",
          "type": "input",
          "required": true,
          "placeholder": "예: 40대 남성, 7세 여아, 70대 어머니"
        }
      ],
      "optionalFields": [
        {
          "id": "duration",
          "label": "증상 시작 시점/기간",
          "type": "input",
          "placeholder": "예: 3일 전부터, 2주째, 오늘 갑자기, 6개월 이상 반복"
        },
        {
          "id": "symptomLocation",
          "label": "증상 위치/범위",
          "type": "input",
          "placeholder": "예: 오른쪽 아랫배, 왼쪽 어깨에서 팔까지, 양쪽 무릎, 머리 전체"
        },
        {
          "id": "severity",
          "label": "심각도/강도",
          "type": "select",
          "options": [
            {
              "value": "",
              "label": "선택 안 함"
            },
            {
              "value": "일상생활에 지장 없는 가벼운 수준이다.",
              "label": "가벼움 - 일상 지장 없음"
            },
            {
              "value": "불편하지만 생활은 가능한 중간 수준이다.",
              "label": "중간 - 불편하지만 생활 가능"
            },
            {
              "value": "일상생활이 어려울 정도로 심하다.",
              "label": "심함 - 일상 어려움"
            },
            {
              "value": "참기 어렵거나 갑자기 시작된 극심한 수준이다.",
              "label": "극심 - 즉시 병원 고려"
            }
          ]
        },
        {
          "id": "aggravating",
          "label": "악화 요인 (이럴 때 더 아프다)",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 식후에 더 아프다, 움직이면 심해진다, 밤에 더 심하다, 스트레스받으면 악화"
        },
        {
          "id": "relieving",
          "label": "완화 요인 (이럴 때 나아진다)",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 쉬면 좀 나아진다, 진통제 먹으면 일시적으로 줄어든다, 온찜질하면 완화"
        },
        {
          "id": "accompaniedSymptoms",
          "label": "동반 증상",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 열, 구토, 설사, 두통, 어지러움, 체중 변화, 피로, 수면 문제"
        },
        {
          "id": "medicalHistory",
          "label": "기존 병력/수술력",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 고혈압 약 복용 중, 2년 전 맹장 수술, 가족력(당뇨), 알레르기"
        },
        {
          "id": "currentMedication",
          "label": "현재 복용 약물/영양제",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 혈압약(아침), 종합비타민, 최근 처방받은 항생제, 진통제 복용 여부"
        },
        {
          "id": "triedSoFar",
          "label": "이미 시도한 것",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 진통제 복용했으나 효과 없음, 동네 의원에서 위염 진단받았으나 호전 안 됨"
        },
        {
          "id": "healthConcern",
          "label": "가장 걱정되는 점",
          "type": "textarea",
          "rows": 2,
          "placeholder": "예: 큰 병은 아닌지, 병원에 가야 하는 수준인지, 아이에게 옮는 건 아닌지"
        }
      ],
      "personas": [
        "A - 증상 분석가: 증상의 위치, 양상, 기간, 동반 증상을 기반으로 가능한 원인을 우선순위로 정리한다.",
        "B - 감별 진단 가이드: 비슷한 증상의 다른 원인을 구분하는 핵심 포인트를 짚는다.",
        "C - 응급/위험 감시자: 즉시 병원에 가야 하는 위험 신호를 놓치지 않는다.",
        "D - 실용 안내자: 어떤 진료과에 가야 하는지, 진료 전 준비할 것, 의사에게 말해야 할 것을 정리한다.",
        "E - 안전 검토자: 진단이 아닌 정보 제공임을 확인하고, 전문의 상담 필요성과 면책 문구를 포함시킨다."
      ],
      "outputFormat": [
        "1. 가장 가능성 높은 원인 요약",
        "2. 가능한 원인 목록 (가능성 높은 순서)",
        "3. 각 원인의 특징과 감별 포인트",
        "4. 즉시 병원에 가야 하는 위험 신호",
        "5. 권장 진료과와 진료 전 준비사항",
        "6. 가정에서 할 수 있는 것과 하면 안 되는 것",
        "7. 의사에게 전달할 정보 체크리스트",
        "8. 전문의 상담 필요성 안내"
      ],
      "standards": [
        "이것은 의료 진단이 아니라 정보 제공이며, 반드시 전문의 상담이 필요하다는 것을 응답 처음과 끝에 명시해줘.",
        "가능한 원인을 가능성 높은 순서로 나열하되 하나로 단정하지 마. '~일 수 있습니다' 형식을 사용해줘.",
        "즉시 병원(응급실)에 가야 하는 위험 신호가 있다면 가장 먼저 안내해줘.",
        "검증되지 않은 민간요법, 자가 처방, 무허가 건강식품을 추천하지 마.",
        "아이/소아 증상은 성인과 다를 수 있으므로 소아 기준을 별도로 적용해줘.",
        "약물 정보는 일반적인 정보만 제공하고, 용량 조절이나 처방 변경은 반드시 의사/약사와 상의하라고 안내해줘.",
        "증상 설명이 부족하면 더 정확한 정보를 위해 필요한 추가 질문을 먼저 해줘."
      ],
      "sampleValues": {
        "healthMode": "symptom",
        "symptomDescription": "3일 전부터 오른쪽 아랫배가 콕콕 쑤시듯 아프다. 누르면 더 아프고, 걸을 때도 불편하다. 열은 37.5도 정도이고 식욕이 떨어졌다.",
        "personInfo": "40대 남성",
        "duration": "3일 전 갑자기 시작",
        "symptomLocation": "오른쪽 아랫배 (배꼽 오른쪽 아래)",
        "severity": "불편하지만 생활은 가능한 중간 수준이다.",
        "accompaniedSymptoms": "미열(37.5도), 식욕 저하, 약간의 메스꺼움",
        "healthConcern": "맹장염은 아닌지 걱정된다. 병원에 바로 가야 하는지 판단하고 싶다."
      },
      "tip": "건강/증상 프롬프트는 \"증상 위치, 기간, 강도, 동반 증상, 악화/완화 요인\"을 구체적으로 넣을수록 가능한 원인 분석의 품질이 크게 올라갑니다. 단, AI는 진단이 아닌 정보 제공이므로 반드시 전문의 상담을 병행하세요."
    }
  ]
};

// 호환성: 모듈을 쓰지 않는 환경에서도 동작하도록 전역 노출
if (typeof window !== 'undefined') {
  window.PROMPT_CONFIG = PROMPT_CONFIG;
}
