import toggleHamburgerMenu from "./components/html/hamburgerMenu.js";
import { fetchAPI } from "./components/constance/fetchApi.js";
import { heroBannerURL, productsURL } from "./components/constance/url.js";
import { launchHeroBanner } from "./components/html/launchHeroBanner.js";
import { launchFeaturedProducts } from "./components/html/launchFeaturedProducts.js";
import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";
import {
  searchBarLarge,
  searchBarSmall,
  redirectUser,
} from "./components/search/redirect.js";

fetchAPI(launchHeroBanner, heroBannerURL);
fetchAPI(launchFeaturedProducts, productsURL);

countItemsAddedToCart();
searchBarLarge.addEventListener("click", redirectUser);
searchBarSmall.addEventListener("click", redirectUser);

console.log("hello world!");


