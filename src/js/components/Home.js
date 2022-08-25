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
    //thisHome.initElements(); 
    thisHome.addListeners();
  }

  // hideClass(thisElement) {
  //   //const thisHome = this;
  //   const clickedElement = thisElement;
  //   const href = clickedElement.getAttribute('attr');
  //   const categoryElements = document.querySelectorAll('.category');

  //   categoryElements.forEach(category => {
  //     category.parentNode.parentNode.classList.add('non-visible');
  //   });

  //   const allElemCat = document.querySelectorAll('[attr="'+href+'"]'); 

  //   allElemCat.forEach(elem => elem.parentNode.parentNode.classList.remove('non-visible'));
  //   console.log('allElemCat', allElemCat);
 
  //   allElemCat.forEach(elem => console.log(elem));//elem.classList.remove('non-visible'));
  // }

  // initElements() {
  //   const thisHome = this;
  //   const categoryElements = document.querySelectorAll('.category');
  //   console.log(categoryElements);
  //   categoryElements.forEach(category => category.addEventListener('click', function (event) {
  //     event.preventDefault();
  //     thisHome.hideClass(this);
  //     console.log('thisthisthis', this);
  //   }));
  // }

  classInvisible() {
    const thisHome = this;
    console.log(thisHome);
    const clickedElement = thisHome;
    const clickedElementAttribute = clickedElement.getAttribute('attr');
    console.log(clickedElementAttribute);
    event.preventDefault();
    const elements = document.querySelectorAll('.audioElement');
    for (let element of elements) {
      let attributes = element.getAttribute('attr');
      let attributesArray = attributes.split(',');
      
      for (let attribute of attributesArray) {
        if(clickedElementAttribute !== attribute) {
          element.classList.add('non-visible');
        }
      }
    }


    console.log('elements', elements);
  }

  addListeners() {
    const thisHome = this;
    const categoryElements = document.querySelectorAll('.category');

    for (let categoryElement of categoryElements) {
      categoryElement.addEventListener('click', thisHome.classInvisible);
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