import generateDomElements from './GenerateDomElements';
import * as events from './tools/Events';
import * as helpers from './tools/Helpers';

const onDOMContentLoaded = () => {
  // events.init();
  // helpers.init();

  
}

document.body.appendChild(generateDomElements());
document.addEventListener('DOMContentLoaded', () => onDOMContentLoaded());
