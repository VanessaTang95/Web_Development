//jshint esversion:6
const receipes = require("./receipe");

const webPage = {
  pageWrap: function(content) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="./receipe.css"/>
        <title>Recipe</title>
      </head>
      <body>
        <div id="receipe-app">
        ${content}
        </div>
        <script src="/receipejs.js"></script>
      </body>
    </html>
    `;
  },

  homePage: function() {
    return this.pageWrap(`
      <div id="home-page">
      <h1>FindURecipe.com</h1>
      <div class="operate">
      <form action="/addReceipe">
      <button class="redirect-btn" type='submit'>Add Receipes</button>
      </form>
      </div>
      <div class="show-list">
      ${this.getReceipeTitleList(receipes)}
      </div>
            </div>
      `);
  },

  receipeTitleFormat: function(receipe) {
    return `
    <li>
    <div class='titles'>
    <a class="titleName" href="/receipes?title=${receipe}">${receipe}</a>
    </form>
    </div>
    </li>
    `;
  },

  getReceipeTitleList: function(receipes) {
    return `
  <ul class='titlesList'>
  ${Object.values(receipes.receipeTitleList).map(this.receipeTitleFormat).join('')}
  </ul>
  `;
  },


  getReceipeList: function(receipeName) {
    return `<ul class="receipes">
      ${Object.values(receipes.getReceipe(receipeName)).map(this.formatReceipe).join('')}
      </ul>
      `;
  },

  formatReceipe: function(receipe) {
    return `
      <li>
      <div class="receipe">
      <span class="receipe-detail">${receipe}</span>
      </div>
      </li>
    `;
  },

  detailPage: function(receipes) {
    return this.pageWrap(`
      <div>
      <div class='operate'>
      <form action='/' >
      <button class='redirect-btn' type='submit'>Return to Home</button>
      </form>
      </div>
      <div class="view">
      ${this.getReceipeList(receipes)}
      </div>
      </div>
      `);
  },

  addInfoPage: function() {
    return this.pageWrap(`
      <div id="add-container">
      <h1>Add Your Receipe!</h1>
      <div class="submit-div">
      <form action='/addReceipe' method='POST'>
      <div>
      <label for="title">Title</label>
      <input id="title" name="title" placeholder="Please enter a name" required></input>
      </div>

      <div>
      <label for="ingredients">Ingredients</label>
      <textarea id="ingredients" name="ingredients" row=5 col=33 placeholder="Please input your ingredients here"></textarea>
      </div>

      <div>
      <label for="instruction">Instruction</label>
      <textarea id="instruction" name="instruction" row=5 col=33 placeholder="Please input your instruction here"></textarea>
      </div>

      <div>
      <button type="submit" class="submit-btn">Submit</button>
      </div>

      </form>

      </div>
      <div class="return-div>">
      <form action="/">
      <button type="submit" class="redirect-btn">Return to Home</button>
      </form>
      </div>
      </div>
      `);
  }


};

module.exports = webPage;
