// jsdom으로 DOM을 셋업하고, 우리 모듈 코드를 dynamic import 하여 실제 init 흐름이 깨지지 않는지 확인한다.
import jsdomPkg from 'jsdom';
const { JSDOM } = jsdomPkg;
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

let failed = 0;
const log = (ok, msg, extra) => {
  console.log(`${ok ? '✓' : '✗'} ${msg}${extra ? ' — ' + extra : ''}`);
  if (!ok) failed += 1;
};

// 1. HTML 로드 (script 태그는 jsdom이 모듈 처리 못 하므로 제거하여 자동 실행 방지)
const html = readFileSync(join(root, 'index.html'), 'utf8')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/g, '');
const dom = new JSDOM(html, { url: 'http://localhost/', pretendToBeVisual: true });
const w = dom.window;

// 2. global 패치
const globals = [
  'window', 'document', 'navigator',
  'HTMLElement', 'HTMLInputElement', 'HTMLSelectElement', 'HTMLTextAreaElement',
  'Event', 'CustomEvent', 'KeyboardEvent', 'MouseEvent',
  'getComputedStyle', 'requestAnimationFrame', 'cancelAnimationFrame'
];
for (const k of globals) {
  if (w[k] !== undefined) {
    try {
      globalThis[k] = w[k];
    } catch {
      Object.defineProperty(globalThis, k, { value: w[k], writable: true, configurable: true });
    }
  }
}

// 3. main.js dynamic import → init 자동 트리거
await import('../assets/js/main.js');
await new Promise((r) => setTimeout(r, 100));

const document = w.document;

const typeCards = document.querySelectorAll('.type-card');
log(typeCards.length === 14, `초기 type 카드 14개 렌더 (실제 ${typeCards.length})`);

const sajuRadio = document.querySelector('input[name="promptType"][value="saju"]');
log(!!sajuRadio, 'saju 라디오 옵션 DOM 존재');

sajuRadio.checked = true;
sajuRadio.dispatchEvent(new w.Event('change', { bubbles: true }));
await new Promise((r) => setTimeout(r, 30));

const birthDateInput = document.getElementById('birthDate');
log(!!birthDateInput, 'saju 전환 후 birthDate 필드 렌더');
const birthCalendarSelect = document.getElementById('birthCalendar');
log(!!birthCalendarSelect && birthCalendarSelect.tagName === 'SELECT', 'saju.birthCalendar 셀렉트 렌더');
const sajuScopeSelect = document.getElementById('sajuScope');
log(!!sajuScopeSelect && sajuScopeSelect.tagName === 'SELECT', 'saju.sajuScope 셀렉트 렌더');

const sampleButton = document.getElementById('sampleButton');
log(!!sampleButton && !sampleButton.disabled, '샘플 입력 버튼 활성');
sampleButton.click();
await new Promise((r) => setTimeout(r, 30));

log(birthDateInput.value === '1985-03-15', `birthDate 샘플 적용 (실제: "${birthDateInput.value}")`);
log(birthCalendarSelect.value.startsWith('입력한 날짜는 양력'), `birthCalendar 샘플 적용`);
log(sajuScopeSelect.value.startsWith('사주팔자 8자'), `sajuScope 샘플 적용`);

const birthTimeSelect = document.getElementById('birthTime');
log(birthTimeSelect && birthTimeSelect.value.includes('卯'),
    `birthTime 샘플 적용 (실제: "${birthTimeSelect && birthTimeSelect.value}")`);

const genderSelect = document.getElementById('gender');
log(genderSelect && genderSelect.value === '남성 (건명)',
    `gender 샘플 적용 (실제: "${genderSelect && genderSelect.value}")`);

const form = document.getElementById('promptForm');
form.dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
await new Promise((r) => setTimeout(r, 30));

const generated = document.getElementById('resultPrompt').value;
log(generated.length > 800, `사주 프롬프트 생성 (${generated.length}자)`);
log(generated.includes('[역할]') && generated.includes('만세력'), '프롬프트에 [역할] + 만세력 키워드 포함');
log(generated.includes('1985-03-15'), '프롬프트에 birthDate 입력값 반영');
log(generated.includes('[작업 유형]\n사주/만세력'), '프롬프트에 [작업 유형] 사주/만세력 명시');
log(generated.includes('[자기 검증 루프]'), '프롬프트에 자기 검증 섹션 포함');
log(generated.includes('운명을 단정'), '프롬프트에 안전 가드(운명 단정 금지) 포함');

const lifeFunRadio = document.querySelector('input[name="promptType"][value="lifeFun"]');
lifeFunRadio.checked = true;
lifeFunRadio.dispatchEvent(new w.Event('change', { bubbles: true }));
await new Promise((r) => setTimeout(r, 30));
document.getElementById('sampleButton').click();
await new Promise((r) => setTimeout(r, 30));
const interactionModeSelect = document.getElementById('interactionMode');
log(interactionModeSelect && interactionModeSelect.value.startsWith('질문은 한 번에 하나씩만'),
    `lifeFun.interactionMode 샘플 적용 (회귀 방지)`);

const fortuneStyleField = document.querySelector('[data-field-id="fortuneStyle"]');
log(fortuneStyleField && !fortuneStyleField.hidden, 'lifeFun.fortuneStyle conditional 필드 visible');

const allRadios = Array.from(document.querySelectorAll('input[name="promptType"]'));
let allOk = true;
let lastErrType = '';
for (const radio of allRadios) {
  radio.checked = true;
  radio.dispatchEvent(new w.Event('change', { bubbles: true }));
  await new Promise((r) => setTimeout(r, 10));
  const btn = document.getElementById('sampleButton');
  if (btn && !btn.disabled) {
    btn.click();
    await new Promise((r) => setTimeout(r, 10));
  }
  try {
    form.dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
    await new Promise((r) => setTimeout(r, 10));
    const result = document.getElementById('resultPrompt').value;
    if (!result || result.length < 100) {
      allOk = false;
      lastErrType = radio.value;
      break;
    }
  } catch (e) {
    allOk = false;
    lastErrType = radio.value;
    break;
  }
}
log(allOk, `전체 14개 유형 샘플→submit 시나리오 무에러 ${allOk ? '' : `(실패: ${lastErrType})`}`);

dom.window.close();

console.log('\n' + (failed === 0 ? '✓ jsdom 통합 테스트 통과' : `✗ ${failed}개 실패`));
process.exit(failed === 0 ? 0 : 1);
