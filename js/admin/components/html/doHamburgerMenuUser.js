const hamburgerMenuIcon = document.querySelector(".nav__menu-icon");
const hamburgerProductMenu = document.querySelector(".product-menu");
hamburgerMenuIcon.addEventListener("click", toggleHamburgerMenuIcon);

export default function toggleHamburgerMenuIcon() {
  hamburgerMenuIcon.classList.toggle("open");
  hamburgerProductMenu.classList.toggle("product-menu--open");
}
