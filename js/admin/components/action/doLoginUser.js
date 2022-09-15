import displayMessage from "../../../components/messages/displayMessage.js";
import { doConfirmUserLogin} from "./doConfirmUserLogin.js";
import { username, password, feedbackMessage } from "../form/formVariables.js";

export function doLoginUser(event) {
  event.preventDefault();

  feedbackMessage.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage(
      "feedbackMessage feedbackMessage--error",
      "Please insert username or password",
      ".feedbackMessage"
    );
  }

  doConfirmUserLogin(usernameValue, passwordValue);
}
