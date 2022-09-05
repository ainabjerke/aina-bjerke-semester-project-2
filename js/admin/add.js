import mobileMenu from "../components/html/mobileMenu.js";
import { productsURL } from "../components/constance/url.js";
import { token } from "../components/storage/localStorage.js";
import { fetchAPI } from "../components/constance/fetchApi.js";
import { productMenu } from "./components/html/productMenu.js";
import logoutButton from "./components/action/logoutButton.js";
import { form } from "./components/form/formVariables.js";
import { submitForm } from "./components/form/submitForm.js";

// Redirecting to homepage if they are not logged in
if (!token) {
    location.href = "../admin";
}

// Display Product Menu
fetchAPI(productMenu, productsURL);
logoutButton();

// Listen for button click
form.addEventListener("submit", submitForm);
