import { select, templates } from '../settings.js';
import utils from '../utils.js';


export class Discover {
  constructor() {
    const thisDiscover = this;
    thisDiscover.render();
  }
  
 
  render() {
    const thisDiscover = this;
    const generatedHTML = templates.discoverSite();
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const discoverContainer = document.querySelector(select.containerOf.discover);
    discoverContainer.appendChild(thisDiscover.element);  
  }

  
}

export default Discover;