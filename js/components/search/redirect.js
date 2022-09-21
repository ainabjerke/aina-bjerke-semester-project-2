export const searchBarLarge = document.querySelector(".searchBarLarge");
export const searchBarSmall = document.querySelector(".searchBarSmall");

//FUNCTIONS THAT REDIRECT THE USER TO PRODUCT.HTML PAGE
//WHEN CLICKING ON THE SEARCHBARLARGE OR SEARCHBARSMALL ON ALL PAGE EXCEPTS PRODUCT.JS
export function redirectUser() {
  location.href = "./products.html";
}
