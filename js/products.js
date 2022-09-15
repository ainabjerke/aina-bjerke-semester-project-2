import toggleHamburgerMenu from "./components/html/hamburgerMenu.js";
import { productsURL } from "./components/constance/url.js";
import { launchProduct } from "./components/html/launchProduct.js";
import { fetchAPI } from "./components/constance/fetchApi.js";
import countItemsAddedToCart from "./components/storage/countItemsAddedToCart.js";

import {
  searchProductsBoxLarge,
  searchProductsBoxSmall,
} from "./components/search/searchProducts.js";

fetchAPI(launchProduct, productsURL);

countItemsAddedToCart();
fetchAPI(searchProductsBoxLarge, productsURL);
fetchAPI(searchProductsBoxSmall, productsURL);
fetchAPI(productsURL);
