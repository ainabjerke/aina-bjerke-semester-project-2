import hamburgerMenuUser from "./components/html/doHamburgerMenuUser.js";
import { baseURL, productsURL } from "../components/constance/url.js";
import { token } from "../components/storage/localStorage.js";
import doDeleteProductButton from "./components/action/doDeleteProductButton.js";
import { fetchAPI } from "../components/constance/fetchApi.js";
import { doProductMenuUser } from "./components/html/doProductMenuUser.js";
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

// DISPLAY PRODUCT MENU USER AND LOGOUT BUTTON:
fetchAPI(doProductMenuUser, productsURL);
doLogoutUserButton();

// LOOKING FOR ID IN THE URL:
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// REDIRECT TO PRODUCT WITH ID=1 IF THE URL HAS NO ID:
if (!id) {
  location.href = "?id=1";
}

// URL:
const editURL = baseURL + "/products/" + id;

// FETCH API:
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

    if (details.featured == true) {
      labelTrue.classList.add("active");
    } else {
      labelFalse.classList.add("active");
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "none";
    form.style.display = "block";
  }
})();

// DO SUBMIT PRODUCTFORM:
form.addEventListener("submit", doSubmitProductForm);
