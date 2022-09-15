import hamburgerMenuUser from "./components/html/doHamburgerMenuUser.js";
import { productsURL } from "../components/constance/url.js";
import { token } from "../components/storage/localStorage.js";
import { fetchAPI } from "../components/constance/fetchApi.js";
import { doProductMenuUser } from "./components/html/doProductMenuUser.js";
import doLogoutUserButton from "./components/action/doLogoutUserButton.js";
import { form } from "./components/form/formVariables.js";
import { doSubmitProductForm } from "./components/form/doSubmitProductForm.js";

// Redirecting to homepage if they are not logged in
if (!token) {
  location.href = "../admin";
}

// Display Product Menu
fetchAPI(doProductMenuUser, productsURL);
doLogoutUserButton();

// Listen for button click
form.addEventListener("submit", doSubmitProductForm);
