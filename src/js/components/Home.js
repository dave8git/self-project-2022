import {select, templates} from './../settings.js';
import {utils} from './../utils.js';
import Category from './Category.js';
import Plugin from './Plugin.js';
//import GreenAudioPlayer from './green-audio-player.js';

export class Home {
  constructor(data) {
    const thisHome = this; 
    //thisHome.render();
    //thisHome.initPlugin();
    const pluginWrapper = document.querySelector('.home-wrapper');
    const categoryWrapper = document.querySelector('.categories');
    new Plugin(data, pluginWrapper);
    new Category(data, categoryWrapper);
    //console.log('data', data);
    //console.log(categoryWrapper);
    //thisHome.initElements(); 
    thisHome.addListeners();
    //console.log('homeData', data);S
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

  classInvisible(event) {
    const thisHome = this;
    event.preventDefault();
    const clickedElement = thisHome;
    thisHome.wasClicked = true;
    
    const homeWrapper = document.querySelector('.home-wrapper');
    const elements = homeWrapper.querySelectorAll('.audioElement');
    const categoryElements = document.querySelectorAll('.category');
    if(clickedElement.classList.contains('isClicked')) {
      clickedElement.classList.remove('isClicked');
      for(let element of elements) {
        element.classList.remove('non-visible');
      }
      return;
    } else {
      clickedElement.classList.add('isClicked');
      console.log('not clicked before, adding class');
    }

    console.log('poszło dalej');
    event.target.classList.remove('non-visible');
    const clickedElementAttribute = clickedElement.getAttribute('attr');
    thisHome.clickedAttribute = clickedElementAttribute;
    for(let element of elements) {
      element.classList.remove('non-visible');
    }
    
    for(let categoryElement of categoryElements) {
      categoryElement.classList.remove('categoryHighlight');
    }
  
    clickedElement.classList.add('categoryHighlight');
   
    for (let element of elements) {
      let attributeArray = element.getAttribute('attr').split(',');
      if(!attributeArray.includes(clickedElementAttribute)) {
        element.classList.add('non-visible');
      }
    }
    
  }

  addListeners() {
    const thisHome = this;
    const homeWrapper = document.querySelector('.home-wrapper');
    console.log(homeWrapper);
    const categoryElements = homeWrapper.querySelectorAll('.category');

    categoryElements.forEach(categoryElement => {
      categoryElement.addEventListener('click', thisHome.classInvisible);
    });
  }

  render() {
    const thisHome = this;
    const generatedHTML = templates.homeSite(); // generate HTML based on template 
    thisHome.element = utils.createDOMFromHTML(generatedHTML); // create element using utils.createElementFromHTML
    //console.log(thisHome.element);
    const homeContainer = document.querySelector(select.containerOf.home);// find menu container 
    homeContainer.appendChild(thisHome.element); // add element to menu 
  }
}

export default Home;