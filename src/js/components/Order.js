import {select, templates} from './../settings.js';
import {utils} from './../utils.js';

export class Home {
  constructor() {
    const thisHome = this; 
    thisHome.render();
  }

  render() {
    const thisOrder = this;
    const generatedHTML = templates.orderSite(); // generate HTML based on template 
    thisOrder.element = utils.createDOMFromHTML(generatedHTML); // create element using utils.createElementFromHTML
    const homeContainer = document.querySelector(select.containerOf.order);// find menu container 
    homeContainer.appendChild(thisOrder.element); // add element to menu 
  }
  
  
}

export default Home;