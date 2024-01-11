import * as helpers from './Helpers';

export const init = () => {
  document.body.onkeyup = e => {
    if(e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 13) onEnterPressed(e);
    else if (e.key === 'Tab' || e.code === 'Tab' || e.keyCode === 9) onTabPressed(e);
  }

  document.body.onkeydown = e => {
    if(e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 13) e.preventDefault();
    else if (e.key === 'Tab' || e.code === 'Tab' || e.keyCode === 9) e.preventDefault();
  }
}

const onEnterPressed = (e:KeyboardEvent) => {
  console.log('You pressed ENTER');
}

const onTabPressed = (e:KeyboardEvent) => {
  helpers.tabFocusTrap(e);
}
