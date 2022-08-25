import {select, templates} from './../settings.js';
import {utils} from './../utils.js';
import Plugin from './Plugin.js';
//import GreenAudioPlayer from './green-audio-player.js';

export class Home {
  constructor(data) {
    const thisHome = this; 
    //thisHome.render();
    //thisHome.initPlugin();
    const pluginWrapper = document.querySelector('.home-wrapper');
    new Plugin(data, pluginWrapper);
    thisHome.initElements(); 
  }

  hideClass(thisElement) {
    //const thisHome = this;
    const clickedElement = thisElement;
    const href = clickedElement.getAttribute('attr');
    const categoryElements = document.querySelectorAll('.category');

    categoryElements.forEach(category => {
      category.parentNode.parentNode.classList.add('non-visible');
    });

    const allElemCat = document.querySelectorAll('[attr="'+href+'"]'); 
    //console.log('!!!!!!!!!!!', [class="${href}"]);

    allElemCat.forEach(elem => elem.parentNode.parentNode.classList.remove('non-visible'));
    console.log('allElemCat', allElemCat);
   
    // categoryElements.forEach(category => {
    //   // if(category.getAttribute('attr') !== href) {
    //   //   category.parentNode.parentNode.classList.add('non-visible');
    //   //   //console.log('category.parentNode', category.parentNode.parentNode);
    //   //   category.parentNode.parentNode.classList.add('visible');
    //   // }

    // });
    allElemCat.forEach(elem => console.log(elem));//elem.classList.remove('non-visible'));
    
    //const categoryLinks = document.querySelector
  }

  initElements() {
    const thisHome = this;
    const categoryElements = document.querySelectorAll('.category');
    console.log(categoryElements);
    categoryElements.forEach(category => category.addEventListener('click', function (event) {
      event.preventDefault();
      thisHome.hideClass(this);
      console.log('thisthisthis', this);
    }));
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