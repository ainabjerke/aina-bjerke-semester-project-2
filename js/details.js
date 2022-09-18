import toggleHamburgerMenu from "./components/html/hamburgerMenu.js";
import { fetchAPI } from "./components/constance/fetchAPI.js";
import { launchProductDetails } from "./components/html/launchProductDetails.js";
import { detailsURL } from "./components/html/launchProductDetails.js";
// import { launchProductDetails } from "./components/html/launchProductDetails.js";
// import { fetchAPI } from "./components/constance/fetchAPI.js";
// import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";
import {
  searchBarLarge,
  searchBarSmall,
  redirectUser,
} from "./components/search/redirect.js";
import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";



//PRODUCT DETAILS:
//*** FETCHES DATA FROM THE MAIN SEPERATE FUNCTION STORED IN FETCHAPI.JS:***//
fetchAPI(launchProductDetails, detailsURL);

// countItemsAddedToCart();
//SERACHBAR:
//REDIRECT USER TO PRODUCT.HTML:
searchBarSmall.addEventListener("click", redirectUser);
searchBarLarge.addEventListener("click", redirectUser);
countItemsAddedToCart();
