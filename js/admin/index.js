import { formLogin } from "./components/form/formVariables.js";
import {  doLoginUser } from "./components/action/doLoginUser.js";

formLogin.addEventListener("submit",  doLoginUser);
