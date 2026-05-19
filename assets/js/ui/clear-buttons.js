/**
 * input/textarea 옆에 'x' 클리어 버튼을 자동으로 부착한다.
 */
export function enhanceClearButtons(root) {
  const container = root || document;
  const controls = container.querySelectorAll(
    'input:not([type="checkbox"]):not([type="radio"]):not([type="hidden"]), textarea'
  );

  controls.forEach((control) => {
    if (control.id === 'resultPrompt') return;
    if (control.closest('.field-control')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'field-control';
    control.parentNode.insertBefore(wrapper, control);
    wrapper.appendChild(control);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'field-clear-button';
    button.setAttribute(
      'aria-label',
      `${control.getAttribute('aria-label') || control.getAttribute('name') || '입력값'} 지우기`
    );
    button.textContent = '×';
    button.addEventListener('click', () => {
      control.value = '';
      control.focus();
      control.dispatchEvent(new Event('input', { bubbles: true }));
      control.dispatchEvent(new Event('change', { bubbles: true }));
      updateClearButtons(container);
    });
    wrapper.appendChild(button);
  });

  updateClearButtons(container);
}

export function updateClearButtons(root) {
  const container = root || document;
  container.querySelectorAll('.field-control').forEach((wrapper) => {
    const control = wrapper.querySelector('input, textarea');
    const button = wrapper.querySelector('.field-clear-button');
    if (!control || !button) return;

    const fieldWrapper = wrapper.closest('.form-field');
    const hasValue = !!(control.value && control.value.trim());
    const isHidden = !!(fieldWrapper && fieldWrapper.hidden);
    button.hidden = !hasValue || isHidden;
    wrapper.classList.toggle('has-value', hasValue && !isHidden);
  });
}
