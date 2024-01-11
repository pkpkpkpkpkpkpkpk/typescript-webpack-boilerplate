import mainElement from './elements/MainElement';
import * as events from './tools/Events';

// Generate HTML DOM elements
document.body.appendChild(mainElement());

// After DOM is loaded, run scripts
document.addEventListener('DOMContentLoaded', () => {
  events.init();

  
});
