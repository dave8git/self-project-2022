import {select, templates} from './../settings.js';
import {utils} from './../utils.js';
import Plugin from './Plugin.js';
//import GreenAudioPlayer from './green-audio-player.js';

export class Home {
  constructor(data) {
    const thisHome = this; 
    thisHome.render();
    //thisHome.initPlugin();
    const pluginWrapper = document.querySelector(select.containerOf.plugin);
    new Plugin(data, pluginWrapper);

  }

  

  render() {
    const thisHome = this;
    const generatedHTML = templates.homeSite(); // generate HTML based on template 
    thisHome.element = utils.createDOMFromHTML(generatedHTML); // create element using utils.createElementFromHTML
    const homeContainer = document.querySelector(select.containerOf.home);// find menu container 
    homeContainer.appendChild(thisHome.element); // add element to menu 
  }
  
  
}

export default Home;