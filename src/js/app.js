import {select, classNames} from './settings.js';
import Discover from './components/Discover.js';
import Home from './components/Home.js';
import Search from './components/Search.js';

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
    //console.log('thisApp.navLinks', thisApp.navLinks);

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
    thisApp.home = new Home();
  },

  initSearch() {
    const thisApp = this;
    thisApp.search = new Search();
  },

  initDiscover: function () {
    const thisApp = this; 
    //const bookingElem = document.querySelector(select.containerOf.booking);
    thisApp.discover = new Discover();
  },
  

  init: function () {
    const thisApp = this;
    thisApp.initHome();
    thisApp.initPages();
    thisApp.initDiscover(); 
    thisApp.initSearch();
  },
};

app.init();
