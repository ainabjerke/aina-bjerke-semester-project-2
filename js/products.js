import toggleHamburgerMenu from "./components/html/hamburgerMenu.js";
import { fetchAPI } from "./components/constance/fetchApi.js";
import { launchAllProducts } from "./components/html/launchAllProducts.js";
import { productsURL } from "./components/constance/url.js";
// import { launchProduct } from "./components/html/launchProduct.js";
// import { fetchAPI } from "./components/constance/fetchApi.js";
// import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";

import {
  searchProductsBoxLarge,
  searchProductsBoxSmall,
} from "./components/search/searchAllProducts.js";

import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";


//LIST OF ALL PRODUCTS ADDED TO STRAPI:
//FETCHES DATA FROM THE MAIN SEPERATE FUNCTION STORED IN FETCHAPI.JS:
fetchAPI(launchAllProducts, productsURL);

// SEARCH TEXT BOX:
//FILTER ONLY THE PRODUCTS THAT INCLUDE IN THE SEARCHED TEXT IN THEIR TITLE/DISCRIPTION
fetchAPI(searchProductsBoxLarge, productsURL);
fetchAPI(searchProductsBoxSmall, productsURL);


// fetchAPI(productsURL);


//CART ICON AND CART PAGE COUNTER:
//COUNT ITEM ADDED TO CART:
countItemsAddedToCart();