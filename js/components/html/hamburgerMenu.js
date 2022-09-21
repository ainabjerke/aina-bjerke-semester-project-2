const hamburgerMenuIcon = document.querySelector(".nav__menu-icon");
const hamburgerMenu = document.querySelector(".nav__menu");

//FUNCTION THAT OPEN THE HAMBURGER MENU
hamburgerMenuIcon.addEventListener("click", toggleHamburgerMenu);

export default function toggleHamburgerMenu() {
  hamburgerMenuIcon.classList.toggle("open");
  hamburgerMenu.classList.toggle("open-menu");
}
