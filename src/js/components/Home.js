import {select, templates} from './../settings.js';
import {utils} from './../utils.js';

export class Home {
  constructor(data) {
    const thisHome = this; 
    thisHome.render(data);
  }

  render(data) {
    const thisHome = this;
    // console.log(':::::', data);
    const generatedHTML = templates.homeSite({slides: data}); // generate HTML based on template 
    thisHome.element = utils.createDOMFromHTML(generatedHTML); // create element using utils.createElementFromHTML
    console.log(thisHome.element);
    // console.log('thisHome.element', thisHome.element);
    const homeContainer = document.querySelector(select.containerOf.home);// find menu container 
    homeContainer.appendChild(thisHome.element); // add element to menu 
  }

}

export default Home;