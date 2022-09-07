/* global GreenAudioPlayer, app */

import { select, templates } from '../settings.js';
import utils from '../utils.js';


export class Discover {
  constructor(data) {
    const thisDiscover = this;
    thisDiscover.render();
    thisDiscover.data = data;
    thisDiscover.initElements(); 
  }

  initElements() {
    const thisDiscover = this;
    const button = document.querySelector('.discover-text');
    button.addEventListener('click', function (event)  {
      thisDiscover.randomSong(event); // funkcja strzałkowa, żeby this wskazywało na instancje
    });
  }

  randomSong(event) {
    const thisDiscover = this; 
    event.preventDefault();
    if(Object.keys(app.stats).length) {
      let max = 0;
      let songName = '';
      for (let song in app.stats) {
        if(app.stats[song] > max) {
          max = app.stats[song];
          songName = song;
        }
      }
      
      const mostPlayedSong = thisDiscover.data.songs.find(song => {
        if(songName.includes(song.filename)) {
          return true;
        } else {
          return false;
        }
      });
      const similarSong = thisDiscover.data.songs.find(song => {
        if(song.filename != mostPlayedSong.filename) {
          for(let category of mostPlayedSong.categories) {
            if(song.categories.includes(category)) {
              return true;
            } 
          }
        } else {
          return false; 
        }
      });
      thisDiscover.renderSong(similarSong); 
    } else {
      const randomSongNumber = Math.floor(Math.random() * thisDiscover.data.songs.length); 
      const randomSong = thisDiscover.data.songs[randomSongNumber];
      thisDiscover.renderSong(randomSong); 
    }
   
    //console.log('randomSong', randomSong);
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