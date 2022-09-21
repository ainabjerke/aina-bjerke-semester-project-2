import hamburgerMenuUser from "./components/html/doHamburgerMenuUser.js";
import { productsURL } from "../components/constance/url.js";
import { token } from "../components/storage/localStorage.js";
import { fetchAPI } from "../components/constance/fetchApi.js";
import { doProductMenuUser } from "./components/html/doProductMenuUser.js";
import doLogoutUserButton from "./components/action/doLogoutUserButton.js";
import { form } from "./components/form/formVariables.js";
import { doSubmitProductForm } from "./components/form/doSubmitProductForm.js";

// REDIRECTING TO HOMEPAGE IF USER ARE NOT LOGGED IN:
if (!token) {
  location.href = "../admin";
}

// DISPLAY PRODUCT MENU:
fetchAPI(doProductMenuUser, productsURL);

//DISPLAY USER LOGOUT BUTTON:
doLogoutUserButton();

//LISTEN FOR SUBMIT EVENT ON THE FUNCTION DOSUBMITPRODUCTFORM:
form.addEventListener("submit", doSubmitProductForm);
