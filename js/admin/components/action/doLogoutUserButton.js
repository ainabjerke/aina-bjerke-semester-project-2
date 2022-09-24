import { clearAdminUser } from "../../../components/storage/localStorage.js";

//FUNCTION LOGOUT USER:
export default function doLogoutUserButton() {
  const logoutButton = document.querySelector("#logout");

  //IF USER CLICKS YES ON CONFIRMATION MESSAGE:
  if (logoutButton) {
    logoutButton.onclick = function () {
      const doLogoutUser = confirm("Are you sure you want to log out?");

      if (doLogoutUser) {
        clearAdminUser();
        location.href = "../admin";
      }
    };
  }
}
