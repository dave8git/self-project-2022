import {select, templates} from './../settings.js';
import {utils} from './../utils.js';


class Plugin {
  constructor(data, wrapper) {
    const thisPlugin = this; 
    thisPlugin.render(data, wrapper);
    //thisPlugin.initPlugin();
    
  }

  render(data, wrapper) {
    const thisPlugin = this;
    console.log('wrapper', wrapper);
    const generatedHTML = templates.plugin(data); // generate HTML based on template 
    thisPlugin.element = utils.createDOMFromHTML(generatedHTML); // create element using utils.createElementFromHTML
    const pluginContainer = wrapper; //document.querySelector(select.containerOf.plugin); // find menu container 
    console.log('pluginContainer', pluginContainer);
    pluginContainer.appendChild(thisPlugin.element); // add element to menu 
  }
}

export default Plugin; 