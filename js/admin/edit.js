import hamburgerMenuUser from "./components/html/doHamburgerMenuUser.js";
import { token } from "../components/storage/localStorage.js";
import { fetchAPI } from "../components/constance/fetchApi.js";
import { baseURL, productsURL } from "../components/constance/url.js";
import { doProductMenuUser } from "./components/html/doProductMenuUser.js";
import doDeleteProductButton from "./components/action/doDeleteProductButton.js";
import doLogoutUserButton from "./components/action/doLogoutUserButton.js";
import { doSubmitProductForm } from "./components/form/doSubmitProductForm.js";
import {
  form,
  title,
  price,
  description,
  idInput,
  loading,
  image,
  featured,
  labelFalse,
  labelTrue,
} from "./components/form/formVariables.js";

// REDIRECT TO HOMEPAGE IF USER ARE NOT LOOGED IN:
if (!token) {
  location.href = "../admin";
}

// DISPLAY PRODUCT MENU
fetchAPI(doProductMenuUser, productsURL);

//DISPLAY USER LOGOUT BUTTON:
doLogoutUserButton();

// LOOKING FOR ID IN THE URL:
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// REDIRECT TO PRODUCT WITH ID=2 (ID=1 WAS DELETED BY MISTAKE IN STRAPI API) IF THE URL HAS NO ID:
if (!id) {
  location.href = "?id=2";
}

// URL:
const editURL = baseURL + "/products/" + id;

// GET LIST OF PRODUCTS TO EDIT PAGE:
(async function () {
  try {
    const response = await fetch(editURL);
    const details = await response.json();
    console.log(details);
    image.value = details.image_url;
    title.value = details.title;
    price.value = details.price;
    description.value = details.description;
    featured.value = details.featured;
    idInput.value = details.id;

    doDeleteProductButton(details.id);
    //REFERENCE:https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    if (details.featured == true) {
      labelTrue.classList.add("active");
    } else {
      labelFalse.classList.add("active");
    }
  } catch (error) {
    // console.log(error);
  } finally {
    loading.style.display = "none";
    form.style.display = "block";
  }
})();

// DO SUBMIT PRODUCTFORM:
form.addEventListener("submit", doSubmitProductForm);
