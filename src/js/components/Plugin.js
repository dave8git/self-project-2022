import {select, templates} from './../settings.js';
import {utils} from './../utils.js';


class Plugin {
  constructor(data) {
    console.log('data-data', data);
    const thisPlugin = this; 
    thisPlugin.render(data);
    //thisPlugin.initPlugin();
    
  }

  render(data) {
    const thisPlugin = this;
    console.log('data', JSON.stringify(data));
    console.log('działa');
    const generatedHTML = templates.plugin(data); // generate HTML based on template 
    thisPlugin.element = utils.createDOMFromHTML(generatedHTML); // create element using utils.createElementFromHTML
    const pluginContainer = document.querySelector(select.containerOf.plugin);// find menu container 
    console.log(pluginContainer);
    pluginContainer.appendChild(thisPlugin.element); // add element to menu 
  }
}

export default Plugin; 