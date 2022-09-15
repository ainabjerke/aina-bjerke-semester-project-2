import toggleHamburgerMenu from "./components/html/hamburgerMenu.js";
import { detailsURL } from "./components/html/launchProductDetails.js";
import { launchProductDetails } from "./components/html/launchProductDetails.js";
import { fetchAPI } from "./components/constance/fetchAPI.js";
import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";
import {
  searchBarLarge,
  searchBarSmall,
  redirectUser,
} from "./components/search/redirect.js";

fetchAPI(launchProductDetails, detailsURL);

countItemsAddedToCart();
searchBarSmall.addEventListener("click", redirectUser);
searchBarLarge.addEventListener("click", redirectUser);
