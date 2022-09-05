import {select, templates} from '../settings.js';
import {utils} from '../utils.js';
import Plugin from './Plugin.js';

export class Search{
  constructor(data) {
    const thisSearch = this; 
    thisSearch.data = data;
    //thisSearch.render();
    thisSearch.singleCategories = [];
    const pluginWrapper1 = document.querySelector('.pluginsWrapper');
    const optionWrapper = document.querySelector('.search-option');
    console.log('optionWrapper', optionWrapper);
    new Plugin(data, pluginWrapper1);
    //console.log(data);
    //thisSearch.search();
    thisSearch.hideClass();
    thisSearch.initData(data); 
    thisSearch.renderOption(data, optionWrapper);
    thisSearch.addListeners(); 
  }

  hideClass() {
    const button = document.querySelector('.search-button');
    button.addEventListener('click', function (event) { 
      event.preventDefault();
      let inputValue = document.querySelector('.search-song').value;
      let optionValue = document.querySelector('.search-option').value;
     
      //selectedOption = optionValue.options[optionValue.optionValue].value;
      //console.log('selectedOption', selectedOption);
     
      const searchWrapper = document.querySelector('.search-wrapper');
      const searchAudioElements = searchWrapper.querySelectorAll('.audioElement');
      
      for (let audioElem of searchAudioElements) {
        let attr = audioElem.getAttribute('title');
        //let title = audioElem.getAttribute('title');
        let category = audioElem.getAttribute('attr').split(',');
        //console.log(category);
        // console.log('optionValue.options', optionValue);
        // console.log('attr', attr);
        // console.log('title type', typeof(title));
        // console.log('attr type', typeof(attr));
        // console.log('optionValue type', typeof(optionValue));
        // console.log('', attr == optionValue);
        //console.log('category', category);
        // console.log('title 1', title);
        //console.log('optionValue 1', optionValue);
        if(attr.includes(inputValue)  &&  category.includes(optionValue)) {
          
          // console.log('w pętli');
          audioElem.style.display = '';
        } else if (inputValue == '' && category.includes(optionValue)) {
          for(let audioElem of searchAudioElements) {
            audioElem.classList.remove('non-visible');
          }
          audioElem.style.display = '';
        } else if (inputValue == '' && optionValue == '') {
          for(let audioElem of searchAudioElements) {
            audioElem.classList.remove('non-visible');
          }
          audioElem.style.display = '';
        } else if (attr.includes(inputValue) && optionValue == '') { 
          for(let audioElem of searchAudioElements) {
            audioElem.classList.remove('non-visible');
          }
          audioElem.style.display = '';
        } else {
          for(let audioElem of searchAudioElements) {
            audioElem.classList.remove('non-visible');
          }
          audioElem.style.display = 'none';
        }
      }
    });
  }

  initData(data) {
    const thisSearch = this;
    //console.log(data.songs);
    thisSearch.elements = '';
    for (let song of data.songs) {
      //console.log('song', song.categories);
      for(let i = 0; i < song.categories.length; i++) {
        if(!thisSearch.singleCategories.includes(song.categories[i])) {
          thisSearch.singleCategories.push(song.categories[i]);
        } 
      }
    }
  }

  renderOption(data, wrapper) {
    const thisSearch = this; 
    console.log('thisSearch.singleCategories', thisSearch.singleCategories);
    thisSearch.options = '<option selected value> -- select an option -- </option>';
    for(let i = 0; i < thisSearch.singleCategories.length; i++) {
      thisSearch.options += '<option value="'+ thisSearch.singleCategories[i] + '">' + thisSearch.singleCategories[i] + '</option>';

    }
    console.log('wrapper', wrapper);
    console.log('thisSearch', thisSearch.element);
    wrapper.innerHTML = thisSearch.options;
  }

  render() {
    const thisSearch = this;
    const generatedHTML = templates.searchSite(); // generate HTML based on template 
    thisSearch.element = utils.createDOMFromHTML(generatedHTML); // create element using utils.createElementFromHTML
    const searchContainer = document.querySelector(select.containerOf.search);// find menu container 
    searchContainer.appendChild(thisSearch.element); // add element to menu 
  }
  
  search() {
    //const thisSearch = this;
    document.querySelector('.search-song').addEventListener('keyup', function(e) {
      e.preventDefault();
    });
  }

  addListeners() {
    const thisSearch = this;
    const searchWrapper = document.querySelector('.search-wrapper');
    console.log(searchWrapper);
    const categoryElements = searchWrapper.querySelectorAll('.category');
    categoryElements.forEach(categoryElement => { 
      categoryElement.addEventListener('click', thisSearch.classInvisible);
    });
    // for(let element of categoryElements) {
    //   element.addEventListener('click', function (event) {
    //     event.preventDefault();
    //     thisSearch.classInvisible();
    //   });
    // }
  }

  classInvisible(event) {
    console.log('kategoria kliknięta');
    const thisSearch = this;
    event.preventDefault();
    const searchWrapper = document.querySelector('.search-wrapper');
    const elements = searchWrapper.querySelectorAll('.audioElement');
    for(let element of elements) {
      element.classList.remove('non-visible');
      console.log('classList.remove');
    }
    event.target.classList.remove('non-visible');
    const clickedElement = thisSearch;
    const clickedElementAttribute = clickedElement.getAttribute('attr');
    event.preventDefault();
    for (let element of elements) {
      let attributeArray = element.getAttribute('attr').split(',');
      if(!attributeArray.includes(clickedElementAttribute)) {
        element.classList.add('non-visible');
      }
    }
  }
}

export default Search;