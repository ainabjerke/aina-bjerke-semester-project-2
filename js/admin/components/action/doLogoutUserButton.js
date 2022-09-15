import { clearAdmin } from "../../../components/storage/localStorage.js";

export default function doLogoutUserButton() {
  const logoutButton = document.querySelector("#logout");

  if (logoutButton) {
    logoutButton.onclick = function () {
      const doLogoutUser = confirm("Are you sure you want to log out?");

      if (doLogoutUser) {
        clearAdmin();
        // location.href = "../admin";
        location.href = "../admin";
      }
    };
  }
}
