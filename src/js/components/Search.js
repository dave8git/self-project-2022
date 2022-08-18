import {select, templates} from '../settings.js';
import {utils} from '../utils.js';

export class Search{
  constructor() {
    const thisSearch = this; 
    thisSearch.render();
  }

  render() {
    const thisSearch = this;
    const generatedHTML = templates.searchSite(); // generate HTML based on template 
    thisSearch.element = utils.createDOMFromHTML(generatedHTML); // create element using utils.createElementFromHTML
    const searchContainer = document.querySelector(select.containerOf.search);// find menu container \
    console.log(searchContainer);
    searchContainer.appendChild(thisSearch.element); // add element to menu 
  }
  
  
}

export default Search;