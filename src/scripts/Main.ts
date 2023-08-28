import generateDomElements from './GenerateDomElements';

const onDOMContentLoaded = () => {
  
}

document.body.appendChild(generateDomElements());
document.addEventListener('DOMContentLoaded', () => onDOMContentLoaded());
