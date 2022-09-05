/* global GreenAudioPlayer */

import { select, templates } from '../settings.js';
import utils from '../utils.js';


export class Discover {
  constructor(data) {
    const thisDiscover = this;
    thisDiscover.render();
    thisDiscover.data = data;
    thisDiscover.initElements(); 
    console.log(thisDiscover.data);
  }

  initElements() {
    const thisDiscover = this;
    const button = document.querySelector('.button-discover');
    button.addEventListener('click', () => thisDiscover.randomSong()); // funkcja strzałkowa, żeby this wskazywało na instancje
  }

  randomSong() {
    const thisDiscover = this; 
    console.log(thisDiscover.data);
    const randomSongNumber = Math.floor(Math.random() * thisDiscover.data.songs.length); 
    const randomSong = thisDiscover.data.songs[randomSongNumber];
    thisDiscover.renderSong(randomSong); 
    console.log('randomSong', randomSong);
  }
  
  
  render() {
    const thisDiscover = this;
    const generatedHTML = templates.discoverSite();
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const discoverContainer = document.querySelector(select.containerOf.discover);
    discoverContainer.appendChild(thisDiscover.element);  
  }

  renderSong(song) {
    const thisDiscover = this;
    const generatedHTML = templates.song(song);
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const discoverContainer = document.querySelector('.songElement');
    discoverContainer.innerHTML = '';
    discoverContainer.appendChild(thisDiscover.element); 
    thisDiscover.initPlugin(); 
  }

  initPlugin() {
    GreenAudioPlayer.init({
      selector: '.songWrapper', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
    });
  }
  
}

export default Discover;