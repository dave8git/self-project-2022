import {select, templates} from '../settings.js';
import {utils} from '../utils.js';
import Plugin from './Plugin.js';

export class Search{
  constructor(data) {
    const thisSearch = this; 
    thisSearch.data = data;
    //thisSearch.render();

    const pluginWrapper1 = document.querySelector('.pluginsWrapper');
    new Plugin(data, pluginWrapper1);
    console.log(data);
    //thisSearch.search();
    thisSearch.hideClass();
  }

  hideClass() {
    const button = document.querySelector('.search-button');
    button.addEventListener('click', function (event) { 
      event.preventDefault();
      let inputValue = document.querySelector('.search-song').value;
      const searchWrapper = document.querySelector('.search-wrapper');
    
      let searchAudioElements = searchWrapper.querySelectorAll('.audioElement');

      for (let audioElem of searchAudioElements) {
        let attr = audioElem.getAttribute('title');
        if(attr.includes(inputValue)) {
          audioElem.style.display = '';
        } else {
          audioElem.style.display = 'none';
        }
      }
    });
  }

  render() {
    const thisSearch = this;
    const generatedHTML = templates.searchSite(); // generate HTML based on template 
    thisSearch.element = utils.createDOMFromHTML(generatedHTML); // create element using utils.createElementFromHTML
    const searchContainer = document.querySelector(select.containerOf.search);// find menu container \
    searchContainer.appendChild(thisSearch.element); // add element to menu 
  }
  
  search() {
    //const thisSearch = this;
    document.querySelector('.search-song').addEventListener('keyup', function(e) {
      e.preventDefault();
    });
  }
}

export default Search;