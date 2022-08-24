import {select, templates} from './../settings.js';
import {utils} from './../utils.js';
import Plugin from './Plugin.js';
//import GreenAudioPlayer from './green-audio-player.js';

export class Home {
  constructor(data) {
    const thisHome = this; 
    thisHome.render();
    //thisHome.initPlugin();
    const pluginWrapper = document.querySelector('.home-wrapper');
    new Plugin(data, pluginWrapper);
    thisHome.initElements(); 
  }

  onCategoryClick() {
    const thisHome = this;
    event.preventDefault();
    //const allLinks = thisHome.pluginWrapper.querySelectorAll('.category');
    //const clickedElement = this;
    //const attribute = clickedElement.getAttribute('attr');
    //console.log('attribute', attribute);
    //const categories = document.querySelectorAll('.category');

    // for(let category of categories) {
    //   //console.log(category.getAttribute('attr'));
    //   if(category.getAttribute('attr') !== clickedElement.getAttribute('attr')) {
    //     console.log('dziala');
    //     category.classList.add('playerHidden');
    //   }
    // }

  }
  initElements() {
    const thisHome = this;
    const allLinks = thisHome.element.querySelectorAll('.category');
    console.log(allLinks);
    for (let link of allLinks) {
      link.addEventListener('click', thisHome.onCategoryClick);
    }
  }

  render() {
    const thisHome = this;
    const generatedHTML = templates.homeSite(); // generate HTML based on template 
    thisHome.element = utils.createDOMFromHTML(generatedHTML); // create element using utils.createElementFromHTML
    console.log(thisHome.element);
    const homeContainer = document.querySelector(select.containerOf.home);// find menu container 
    homeContainer.appendChild(thisHome.element); // add element to menu 
  }
  
  
}

export default Home;