const hamburgerMenuIcon = document.querySelector(".nav__menu-icon");
const hamburgerProductMenu = document.querySelector(".product-menu");
hamburgerMenuIcon.addEventListener("click", toggleHamburgerMenuIcon);

//FUNCTION THAT OPENTS THE PRODUCTMENUUSER
export default function toggleHamburgerMenuIcon() {
  hamburgerMenuIcon.classList.toggle("open");
  hamburgerProductMenu.classList.toggle("product-menu--open");
}
