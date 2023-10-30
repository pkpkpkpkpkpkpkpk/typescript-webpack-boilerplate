import * as helpers from './../tools/Helpers';

export const init = () => {
  document.body.onkeyup = e => {
    if(e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 13) start();
    else if (e.key === 'Tab' || e.code === 'Tab' || e.keyCode === 9) tabFocusTrap(e);
  }

  document.body.onkeydown = e => {
    if(e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 13) e.preventDefault();
    else if (e.key === 'Tab' || e.code === 'Tab' || e.keyCode === 9) e.preventDefault();
  }
}

const start = () => {
  window.alert('You pressed enter.');
}

const tabFocusTrap = (e:KeyboardEvent) => {
  const tabElements = document.querySelectorAll('[tabindex="0"]:not(.is-hidden), [contenteditable]');
  if(!tabElements.length) return;
  
  if(!Array.from(tabElements).includes(document.activeElement)) {
    (tabElements[0] as HTMLElement).focus();
    return;
  }
  
  const isShiftTab = e.shiftKey;
  
  for (let i = 0; i < tabElements.length; i++) {
    if(document.activeElement != tabElements[i]) continue;
    const tabIndex = i + 1;
    const shiftTabIndex = i - 1;
    let nextIndexModulo = helpers.modulo(tabIndex, tabElements.length);
    if(isShiftTab) nextIndexModulo = helpers.modulo(shiftTabIndex, tabElements.length);
    const nextFocusEl = tabElements[nextIndexModulo] as HTMLElement;
    nextFocusEl.focus();
    
    helpers.selectTextUponElementFocus(nextFocusEl);

    break;
  }
}
