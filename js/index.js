import { fetchAPI } from "./components/constance/fetchApi.js";
import { bannerURL, productsURL } from "./components/constance/url.js";
import { createBanner } from "./components/html/createBanner.js";
import { createFeaturedProducts } from "./components/html/createFeaturedProducts.js";
import countTotalItems from "./components/storage/countStorage.js";
import { searchBarLarge, searchBarSmall, redirectUser } from "./components/search/redirect.js";
import mobileMenu from "./components/html/mobileMenu.js";

fetchAPI(createBanner, bannerURL);
fetchAPI(createFeaturedProducts, productsURL);
countTotalItems();
searchBarLarge.addEventListener("click", redirectUser);
searchBarSmall.addEventListener("click", redirectUser);

console.log("hello world!");
