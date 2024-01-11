import * as constants from './Constants';

export const playAudio = (sound:HTMLAudioElement, onEnd?:() => void) => {
  if(onEnd) sound.onended = onEnd;
  sound.play();
}

export const speak = (text:string, onEnd?:() => void) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = speechSynthesis.getVoices()[40];
  if(onEnd) utterance.onend = onEnd;
  speechSynthesis.speak(utterance);
}

export const setState = (state:'example') => {
  switch (state) {
    case 'example':
      document.body.setAttribute(constants.ATTR_EXAMPLE_STATE, '');
      break;
  }
}

export const removeState = (state:'example') => {
  switch (state) {
    case 'example':
      document.body.removeAttribute(constants.ATTR_EXAMPLE_STATE);
      break;
  }
}

export const isState = (state:'example') => {
  switch (state) {
    case 'example':
      return document.body.hasAttribute(constants.ATTR_EXAMPLE_STATE);
  }
}

export const scrollTo = (yDirection:'top'|'bottom'|'none', xDirection:'left'|'right'|'none', containerElement:HTMLElement, relativeElement?:HTMLElement) => {
  switch (yDirection) {
    case 'top':
      if(relativeElement) {
        containerElement.scrollTop = relativeElement.offsetTop;
        break;
      }
      containerElement.scrollTop = 0;
      break;
    case 'bottom':
      if(relativeElement) {
        containerElement.scrollTop = relativeElement.offsetTop + relativeElement.offsetHeight;
        break;
      }
      containerElement.scrollTop = containerElement.scrollHeight;
      break;
    case 'none':
      break;
  }
  
  switch (xDirection) {
    case 'left':
      if(relativeElement) {
        containerElement.scrollLeft = relativeElement.offsetLeft;
        break
      }
      containerElement.scrollLeft = 0;
      break;
    case 'right':
      if(relativeElement) {
        containerElement.scrollLeft = relativeElement.offsetLeft + relativeElement.offsetWidth;
        break
      }
      containerElement.scrollLeft = containerElement.scrollWidth;
      break;
    case 'none':
      break;
  }
}

export const tabFocusTrap = (e:KeyboardEvent) => {
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
    let nextIndexModulo = modulo(tabIndex, tabElements.length);
    if(isShiftTab) nextIndexModulo = modulo(shiftTabIndex, tabElements.length);
    const nextFocusEl = tabElements[nextIndexModulo] as HTMLElement;
    nextFocusEl.focus();
    
    selectTextUponElementFocus(nextFocusEl);

    break;
  }
}

export const selectTextUponElementFocus = (element:HTMLElement) => {
  if(!window.getSelection) return;
  let selection = window.getSelection();        
  let range = document.createRange();
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
}

export const modulo = (n:number, d:number) => {
  return ((n % d) + d) % d;
}
