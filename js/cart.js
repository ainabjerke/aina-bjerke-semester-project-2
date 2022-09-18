import toggleHamburgerMenu from "./components/html/hamburgerMenu.js";
// import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";
// import { fetchAPI } from "./components/constance/fetchAPI.js";
import { launchShoppingCart } from "./components/html/launchShoppingCart.js";
// import { launchFeaturedProducts } from "./components/html/launchFeaturedProducts.js";
// import { productsURL } from "./components/constance/url.js";
// import { fetchAPI } from "./components/constance/fetchAPI.js";
import {
  searchBarLarge,
  searchBarSmall,
  redirectUser,
} from "./components/search/redirect.js";
import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";
import { fetchAPI } from "./components/constance/fetchAPI.js";
import { launchFeaturedProducts } from "./components/html/launchFeaturedProducts.js";
import { productsURL } from "./components/constance/url.js";

// fetchAPI(launchFeaturedProducts, productsURL);
//CART BASKET PAGE:
//DISPLAY LIST OF PRODUCTS ADDED TO THE CART, IF CART IS EMPTY DISPLAY MESSAGE, DISPLAY TOTAL PRODUCT PRICE:
launchShoppingCart();
// countItemsAddedToCart();

//SERACHBAR:
//REDIRECT USER TO PRODUCT.HTML:
searchBarLarge.addEventListener("click", redirectUser);
searchBarSmall.addEventListener("click", redirectUser);


countItemsAddedToCart();

//FEATURED PRODUCTS:
//*** FETCHES DATA FROM THE MAIN SEPERATE FUNCTION STORED IN FETCHAPI.JS:***//
fetchAPI(launchFeaturedProducts, productsURL);