import generateDomElements from './elements/GenerateDomElements';
// import * as helpers from './tools/Helpers';
// import * as events from './components/Events';

const onDOMContentLoaded = () => {
  // helpers.init();
  // events.init();

  
}

document.body.appendChild(generateDomElements());
document.addEventListener('DOMContentLoaded', () => onDOMContentLoaded());
