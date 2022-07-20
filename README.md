# amazonClone-react
front(react) back(node) mongoDB

Step by Step for building:

You Will Learn

    HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
    React: Components, Props, Events, Hooks, Router, Axios
    Redux: Store, Reducers, Actions
    Node & Express: Web API, Body Parser, File Upload, JWT
    MongoDB: Mongoose, Aggregation
    Development: ESLint, Babel, Git, Github,
    Deployment: Heroku
    Watch React & Node Tutorial

* 1 - Create root folder and create react app
    * 1 - mkdir amazon; cd amazon
    * 2 - npx create-react-app frontend
    * 3 - Remove unused files
    * 4 - Create the base HTML in App.js
    
* 2 - Share Code On Github 
    * 1 - Initialize git repository (git init) in root folder
    * 2 - commit cahnges
    * 3 - login github 
    * 4 - create repo on github
    * 5 - connect local repo to github repo
    * 6 - push changes to github
    
* 3 - Create MainRating and MainCardProduct Component
    * 1 - create components/MainRating.js
    * 2 - create div.card-rating
    * 3 - style div.card-rating, span and last span
    * 4 - Create MainCardProduct component
    * 5 - use MainRating component in MainCardProduct component
    
* 4 - Build ProductScreen and HomeScreen (pages) in folder screens
    * 1 - install react-router-dom (v6)
    * 2 - use BrowserRouter and make Routes for HomeScreen path: / exact and ProductScreen path product/:id in index.js 
    * 3 - create screens/HomeScreen.js 
    * 4 - #HomeScreen: add product list (data.js) code there
    * 5 - create screens/ProductScreen.js
    * 6 - #ProductScreen: add the onClick for singleProduct in home for redirect to path /product/this.id
    * 7 - #ProductScreen: use FLEX GRID and create 3 columns for product-image(col-2), info(col-1) and action/addToCart(col-1)
    
* 5 - Create Node.JS Server
    * 1 - run npm init in root folder (amazon)
    * 2 - Update amazon/package.json set type: module
    * 3 - Add .js to imports
    * 4 - npm install express 
    * 5 - create backend/server.js
    * 6 - npm install nodemon (for auto re-running the aplication)
    * 7 - add start command as node backend/server.js in amazon/package.json -> scripts -> "start": nodemon --watch backend --exec node --experimental-modules backend/server.js
    * 8 - require express
    * 9 - create route for "/" return "backend is ready."
    * 10 - move data.js from frontend to backend
    * 11 - create route for "/api/products" in server.js (GET)
    * 12 - return products
    * 13 - run npm start 
    
* 6 - 
