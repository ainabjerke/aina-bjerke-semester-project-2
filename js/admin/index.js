import { formLogin } from "./components/form/formVariables.js";
import { doLoginUser } from "./components/action/doLoginUser.js";

//LOG IN USER:
formLogin.addEventListener("submit", doLoginUser);
