/* global GreenAudioPlayer */
import {select, classNames, settings} from './settings.js';
import Discover from './components/Discover.js';
import Home from './components/Home.js';
import Search from './components/Search.js';
import Category from './components/Category.js';

Handlebars.registerHelper('concat', function(arr) {
  //arguments = [...arguments].slice(0, -1);
  return arr.join(', ');
});


const app = {
  initPages: function () {
    const thisApp = this; 

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    
    for(let page of thisApp.pages){
      if(page.id == idFromHash) {
        pageMatchingHash = page.id;
        break; // brek sprawia, że nie zostaną wykonane kolejne iteracje pętli,
      }
    }
    thisApp.activePage(pageMatchingHash);

    for(let link of thisApp.navLinks) {
      link.addEventListener('click', function(event) {
        const clickedElement = this;
        event.preventDefault();
        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');
        /* run thisApp.activatePage with that id */
        thisApp.activePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id; // dodajemy / aby ciąg znaków (np. #/order) nie odpowiadał żadnemu hash na stronie, 
      });
    }
  },

  activePage: function(pageId) {
    const thisApp = this;
    /* add class "active" to matching pages, remove from non-matching */
    for(let page of thisApp.pages) {
      page.classList.toggle('active', page.id === pageId); // w toggle możemy dodać 
    }
    /* add class "active" to matching links, remove from non matching */
    for(let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId 
      ); // w toggle możemy dodać 
    }
  },
  
  initHome() {
    const thisApp = this;
    //const homeSiteElem = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(thisApp.data);


    const homeWrapper = document.querySelector('.home-wrapper');
    let audioData = homeWrapper.querySelectorAll('audio');
    console.log(audioData);
    // for (let i = 0; i < audioData.length; i++) {
    //   console.log('działą');
    // }
    homeWrapper.addEventListener('play', function () {
      console.log('PLAY DZIAŁĄ');
    });
    audioData.forEach(audio => {  console.log(audio); 
      audio.addEventListener('play', (event) => {
        console.log('działa play');
        thisApp.collectData(event); 
      });});
    //console.log('ap72',audioData);
  },
  collectData(event) {
    console.log(event.target);
    //thisApp.collectData(event, )
  },
  initDiscover() {
    const thisApp = this;
    //const homeSiteElem = document.querySelector(select.containerOf.home);
    console.log('!', thisApp.data);
    thisApp.discover = new Discover(thisApp.data);
  },

  initSearch: function () {
    const thisApp = this; 
    //const bookingElem = document.querySelector(select.containerOf.booking);
    //const songs = [];
    thisApp.search = new Search(thisApp.data);
    // const button = document.querySelector('.search-button');
    
    // button.addEventListener('click', function (event) { 
    //   event.preventDefault();
    //   let inputValue = document.querySelector('.search-song').value;
    //   let songsObject = {songs: []};
    //   for(let i = 0; i < thisApp.data.songs.length; i++) {
    //     if(thisApp.data.songs[i].title.includes(inputValue)) {
    //       songsObject.songs.push(thisApp.data.songs[i]);
    //     } 
    //   }
    //   thisApp.search = new Search(songsObject);
      
    // }, {capture: false});
    //thisApp.initPlugin();
  },
  
  initPlugin: function () {
    GreenAudioPlayer.init({
      selector: '.audioWrapper', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
    });
  },
  initData: function () {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.songs;
    fetch(url).then(function (rawResponse) {
      return rawResponse.json();
    })
      .then(function (parsedResponse) {
        //console.log('parsedResponse', parsedResponse);

        thisApp.data.songs = parsedResponse; 
        thisApp.initHome();
        thisApp.initSearch();
        thisApp.initDiscover();
        thisApp.initPlugin();
        //thisApp.initCategoriesPlugin();
      });

    //console.log('thisApp.data', JSON.stringify(thisApp.data));
  },

  init: function () {
    const thisApp = this;
    thisApp.initData(); 
    thisApp.initPages(); 
    thisApp.stats = {};
  },
};

app.init();
