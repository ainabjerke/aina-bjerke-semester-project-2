import mobileMenu from "./components/html/mobileMenu.js";
import countStorage from "./components/storage/countStorage.js";
import { createShoppingCart } from "./components/html/createShoppingCart.js";
import { createFeaturedProducts } from "./components/html/createFeaturedProducts.js";
import { productsURL } from "./components/constance/url.js";
import { fetchAPI } from "./components/constance/fetchAPI.js";
import { search, redirectUser } from "./components/search/redirect.js";

fetchAPI(createFeaturedProducts, productsURL);
createShoppingCart();
countStorage();
search.addEventListener("click", redirectUser);
