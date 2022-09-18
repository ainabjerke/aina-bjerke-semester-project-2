export default function countItemsAddedToCart() {
  const navCartIcon = document.querySelector(".cart__icon-quantity");
  const cartPageQuantity = document.querySelector(".cart__total-quantity");

  if (localStorage["shoppingcart"]) {
    const totalitems = JSON.parse(localStorage["shoppingcart"]).length;
    navCartIcon.innerHTML = totalitems;
  }

  if (localStorage["shoppingcart"] && cartPageQuantity) {
    const totalitems = JSON.parse(localStorage["shoppingcart"]).length;
    // cartPageQuantity.innerHTML = `(${totalitems})`;
    cartPageQuantity.innerHTML = totalitems;
  }
}
