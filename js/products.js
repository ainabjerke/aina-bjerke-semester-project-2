import { productsURL } from "./components/constance/url.js";
import { createProduct } from "./components/html/createProduct.js";
import { fetchAPI } from "./components/constance/fetchApi.js";
import countStorage from "./components/storage/countStorage.js";
import mobileMenu from "./components/html/mobileMenu.js";
import { searchProducts } from "./components/search/searchProducts.js";

fetchAPI(createProduct, productsURL);
countStorage();
fetchAPI(searchProducts, productsURL);
fetchAPI(productsURL);
