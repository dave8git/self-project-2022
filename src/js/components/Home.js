import {select, templates} from './../settings.js';
import {utils} from './../utils.js';
import GreenAudioPlayer from './green-audio-player.js';

export class Home {
  constructor() {
    const thisHome = this; 
    thisHome.render();
    thisHome.initPlugin();
  }

  initPlugin() {
    GreenAudioPlayer.init({
      selector: '.player', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
    });
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