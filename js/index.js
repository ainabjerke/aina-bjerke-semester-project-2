import toggleHamburgerMenu from "./components/html/hamburgerMenu.js";
import { fetchAPI } from "./components/constance/fetchApi.js";
import { launchHeroBanner } from "./components/html/launchHeroBanner.js";
import { launchFeaturedProducts } from "./components/html/launchFeaturedProducts.js";
import { heroBannerURL, productsURL } from "./components/constance/url.js";
import {
  searchBarLarge,
  searchBarSmall,
  redirectUser,
} from "./components/search/redirect.js";

import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";

//HERO BANNER:
//*** FETCHES DATA FROM THE MAIN SEPERATE FUNCTION STORED IN FETCHAPI.JS:***//
fetchAPI(launchHeroBanner, heroBannerURL);

//FEATURED PRODUCTS:
//*** FETCHES DATA FROM THE MAIN SEPERATE FUNCTION STORED IN FETCHAPI.JS:***//
fetchAPI(launchFeaturedProducts, productsURL);

//SERACHBAR:
//REDIRECT USER TO PRODUCTS.HTML:
searchBarLarge.addEventListener("click", redirectUser);
searchBarSmall.addEventListener("click", redirectUser);

//CART ICON AND CART PAGE COUNTER:
//COUNT ITEM ADDED TO CART:
countItemsAddedToCart();
