class Category {
  constructor(data, wrapper) {
    const thisCategory = this; 
    thisCategory.singleCategories = [];
    console.log('wrapperconstructor', wrapper);
    //thisPlugin.initPlugin();
    thisCategory.initData(data);
    thisCategory.render(thisCategory.singleCategories, wrapper);
  }

  initData(data) {
    const thisCategory = this;
    console.log(data.songs);
    thisCategory.elements = '';
    for (let song of data.songs) {
      console.log('song', song.categories);
      for(let i = 0; i < song.categories.length; i++) {
        if(!thisCategory.singleCategories.includes(song.categories[i])) {
          thisCategory.singleCategories.push(song.categories[i]);
        } 
      }
    }
  }

  render(data, wrapper) {
    const thisCategory = this;
    for (let i = 0; i < thisCategory.singleCategories.length; i++) {
      thisCategory.elements += '<a href="" class="category" attr="' + thisCategory.singleCategories[i] + '"> ' + thisCategory.singleCategories[i] + '</a>';
    }
    wrapper.innerHTML = thisCategory.elements;
  }

   
}

export default Category; 