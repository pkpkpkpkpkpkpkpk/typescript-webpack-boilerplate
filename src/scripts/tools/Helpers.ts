import * as constants from './Constants';

let loaderEl:HTMLDivElement;
let startSound:HTMLAudioElement;
let endSound:HTMLAudioElement;
let successSound:HTMLAudioElement;

let isLoading = false;

export const init = () => {
  initLoader();
  initSounds();
}

export const initLoader = () => {
  loaderEl = document.querySelector('[data-loader]');
}

export const initSounds = () => {
  startSound = new Audio('sounds/start.wav');
  endSound = new Audio('sounds/end.wav');
  successSound = new Audio('sounds/success.wav');
}

export const toggleLoader = () => {
  if(!isLoading) {
    loaderEl.classList.remove(constants.CLASS_HIDDEN);
    isLoading = true;
  } else {
    loaderEl.classList.add(constants.CLASS_HIDDEN);
    isLoading = false;
  }
}

export const playSound = (sound:'start'|'end'|'success', onEnd?:() => void) => {
  let soundEl:HTMLAudioElement;
  const soundName = `${sound}Sound`;
  soundEl = eval(soundName);

  if(onEnd) soundEl.onended = onEnd;

  soundEl.play();
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

export const scrollToTopOfElement = (element:HTMLElement) => {
  element.scrollTop = 0;
}

export const scrollToBottomOfElement = (element:HTMLElement) => {
  element.scrollTop = element.scrollHeight;
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
