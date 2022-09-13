import mobileMenu from "./components/html/mobileMenu.js";
import { detailsURL } from "./components/html/createDetails.js";
import { createDetails } from "./components/html/createDetails.js";
import { fetchAPI } from "./components/constance/fetchAPI.js";
import countStorage from "./components/storage/countStorage.js";
import {
  searchBarLarge,
  searchBarSmall,
  redirectUser,
} from "./components/search/redirect.js";

fetchAPI(createDetails, detailsURL);
countStorage();
searchBarSmall.addEventListener("click", redirectUser);
searchBarLarge.addEventListener("click", redirectUser);
