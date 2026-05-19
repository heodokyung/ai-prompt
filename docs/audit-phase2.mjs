// Phase 2 통합 검증.
// 1) PROMPT_CONFIG가 ESM export로 정상 파싱되는지
// 2) saju type이 추가되었는지
// 3) lifeFun에서 사주 키워드가 제거되었는지
// 4) sampleValues 미스매치가 없는지 (Phase 1 핫픽스 회귀 방지)
// 5) 모든 모듈 파일 존재 및 상호 import 경로 일관성

import { PROMPT_CONFIG } from '../data/prompt-config.js';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

let failed = 0;
const log = (ok, msg) => {
  console.log(`${ok ? '✓' : '✗'} ${msg}`);
  if (!ok) failed += 1;
};

// 1. 설정 로딩 검증
log(typeof PROMPT_CONFIG === 'object' && PROMPT_CONFIG !== null, 'PROMPT_CONFIG ESM 로드');
log(Array.isArray(PROMPT_CONFIG.types) && PROMPT_CONFIG.types.length >= 13, `types 배열 (${PROMPT_CONFIG.types.length}개)`);

// 2. saju type 검증
const saju = PROMPT_CONFIG.types.find((t) => t.key === 'saju');
log(!!saju, 'saju type 존재');
if (saju) {
  log(saju.label === '사주/만세력', `saju.label = "${saju.label}"`);
  log(saju.requiredFields.some((f) => f.id === 'birthDate'), 'saju.birthDate 필드 존재');
  log(saju.requiredFields.some((f) => f.id === 'birthCalendar'), 'saju.birthCalendar 필드 존재');
  log(saju.requiredFields.some((f) => f.id === 'sajuScope'), 'saju.sajuScope 필드 존재');
  log(saju.optionalFields.some((f) => f.id === 'birthTime'), 'saju.birthTime 옵셔널 필드 존재');
  log(saju.standards.some((s) => s.includes('운명을 단정')), 'saju.standards 안전 가드 포함');
  log(!!saju.sampleValues, 'saju.sampleValues 존재');
}

// 3. lifeFun에서 사주 키워드 제거 확인
const lifeFun = PROMPT_CONFIG.types.find((t) => t.key === 'lifeFun');
log(!!lifeFun, 'lifeFun type 존재');
if (lifeFun) {
  const fortuneOption = lifeFun.requiredFields
    .find((f) => f.id === 'lifeFunMode').options
    .find((o) => o.value === 'fortune');
  log(!fortuneOption.label.includes('사주'), `lifeFun.fortune label에서 사주 제거: "${fortuneOption.label}"`);
  const sajuMentionInStandards = lifeFun.standards.filter((s) => s.includes('사주'));
  // 사주 안내 문구 1개는 있어야 함 (다른 유형으로 안내)
  log(sajuMentionInStandards.length === 1 && sajuMentionInStandards[0].includes('안내'),
    `lifeFun.standards에 사주는 별도 type 안내 문구 1개만 존재`);
}

// 4. sampleValues 미스매치 검사 (Phase 1 회귀 방지)
const mismatches = [];
PROMPT_CONFIG.types.forEach((type) => {
  const allFields = [...(type.requiredFields || []), ...(type.optionalFields || [])];
  const fieldById = new Map(allFields.map((f) => [f.id, f]));
  Object.entries(type.sampleValues || {}).forEach(([fieldId, value]) => {
    const field = fieldById.get(fieldId);
    if (!field) return;
    if (field.type === 'select') {
      const optionValues = (field.options || []).map((o) => o.value);
      if (!optionValues.includes(String(value))) {
        mismatches.push({ type: type.key, fieldId, value });
      }
    }
  });
});
log(mismatches.length === 0, `sampleValues option 매칭 (mismatch ${mismatches.length}건)`);
if (mismatches.length) console.log('  미스매치:', mismatches);

// 5. recommendedValue가 option value에 존재하는지
const recIssues = [];
PROMPT_CONFIG.types.forEach((type) => {
  [...(type.requiredFields || []), ...(type.optionalFields || [])].forEach((field) => {
    if (field.type === 'select' && field.recommendedValue != null) {
      const optionValues = (field.options || []).map((o) => o.value);
      if (!optionValues.includes(field.recommendedValue)) {
        recIssues.push({ type: type.key, fieldId: field.id, recommendedValue: field.recommendedValue });
      }
    }
  });
});
log(recIssues.length === 0, `recommendedValue option 매칭 (issue ${recIssues.length}건)`);
if (recIssues.length) console.log('  이슈:', recIssues);

// 6. 모듈 파일 존재 확인
const requiredModules = [
  'assets/js/main.js',
  'assets/js/state.js',
  'assets/js/utils.js',
  'assets/js/render.js',
  'assets/js/conditional.js',
  'assets/js/validate.js',
  'assets/js/sample.js',
  'assets/js/build-prompt.js',
  'assets/js/ui/custom-select.js',
  'assets/js/ui/clear-buttons.js',
  'assets/js/ui/copy.js',
  'assets/js/ui/toast.js',
  'assets/js/ui/floating-actions.js',
  'data/prompt-config.js',
  'index.html'
];
requiredModules.forEach((rel) => {
  log(existsSync(join(root, rel)), `파일 존재: ${rel}`);
});

// 7. import 경로 일관성 — 모듈 안에서 참조하는 상대 경로가 실제 파일을 가리키는지 정적 검사
function findImports(filePath) {
  const code = readFileSync(filePath, 'utf8');
  const re = /from\s+['"]([^'"]+)['"]/g;
  const imports = [];
  let m;
  while ((m = re.exec(code)) !== null) imports.push(m[1]);
  return imports;
}
const moduleFiles = requiredModules.filter((p) => p.endsWith('.js'));
const brokenImports = [];
moduleFiles.forEach((rel) => {
  const abs = join(root, rel);
  if (!existsSync(abs)) return;
  const imports = findImports(abs);
  imports.forEach((imp) => {
    if (!imp.startsWith('.')) return; // 외부 의존성은 skip (현재 없음)
    const target = join(dirname(abs), imp);
    if (!existsSync(target)) {
      brokenImports.push({ from: rel, imp, expected: target });
    }
  });
});
log(brokenImports.length === 0, `import 경로 무결성 (broken ${brokenImports.length}건)`);
if (brokenImports.length) console.log('  broken:', brokenImports);

// 8. index.html 의 script tag가 ES Module로 변경되었는지
const indexHtml = readFileSync(join(root, 'index.html'), 'utf8');
log(indexHtml.includes('type="module"') && indexHtml.includes('./assets/js/main.js'),
  'index.html 에 type="module" main.js 스크립트 적용');
log(!indexHtml.includes('./assets/app.js'),
  'index.html 에서 기존 단일 app.js 참조 제거');

console.log('\n' + (failed === 0 ? '✓ 모든 검증 통과' : `✗ ${failed}개 검증 실패`));
process.exit(failed === 0 ? 0 : 1);
