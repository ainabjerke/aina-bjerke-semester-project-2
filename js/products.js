import { productsURL } from "./components/constance/url.js";
import { createProduct } from "./components/html/createProduct.js";
import { fetchAPI } from "./components/constance/fetchApi.js";
import countStorage from "./components/storage/countStorage.js";
import mobileMenu from "./components/html/mobileMenu.js";
import {
  searchProductsBoxLarge,
  searchProductsBoxSmall,
} from "./components/search/searchProducts.js";

fetchAPI(createProduct, productsURL);
countStorage();
fetchAPI(searchProductsBoxLarge, productsURL);
fetchAPI(searchProductsBoxSmall, productsURL);
fetchAPI(productsURL);
