import { baseURL } from "../../../components/constance/url.js";
import {
  saveToken,
  saveUser,
} from "../../../components/storage/localStorage.js";
import displayMessage from "../../../components/messages/displayMessage.js";

export async function doLogin(username, password) {
  const url = baseURL + "/auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,

    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);
      // location.href = "./edit.html";
      location.href = "./edit.html";
    }

    if (json.error) {
      displayMessage(
        "feedbackMessage feedbackMessage--error",
        "Invalid login details",
        ".feedbackMessage"
      );
    }
  } catch (error) {
    console.log(error);
    displayMessage(
      "feedbackMessage feedbackMessage--error",
      "Invalid login details",
      ".feedbackMessage"
    );
  }
}
