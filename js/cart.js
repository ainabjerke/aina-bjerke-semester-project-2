import toggleHamburgerMenu from "./components/html/hamburgerMenu.js";
import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";
import { launchShoppingCart } from "./components/html/launchShoppingCart.js";
import { launchFeaturedProducts } from "./components/html/launchFeaturedProducts.js";
import { productsURL } from "./components/constance/url.js";
import { fetchAPI } from "./components/constance/fetchAPI.js";
import {
  searchBarLarge,
  searchBarSmall,
  redirectUser,
} from "./components/search/redirect.js";

fetchAPI(launchFeaturedProducts, productsURL);
launchShoppingCart();
countItemsAddedToCart();
searchBarLarge.addEventListener("click", redirectUser);
searchBarSmall.addEventListener("click", redirectUser);
