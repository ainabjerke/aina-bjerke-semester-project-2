//FUNCTION THAT COUNT ITEMS ADDED TO CART AND
//DISPLAY THE AMOUNT TO THE CART ICON IN THE NAV AND ON CART PAGE
//REFERENCES:https://stackoverflow.com/questions/37524944/how-to-store-values-in-localstorage-as-object

export default function countItemsAddedToCart() {
  const navCartIcon = document.querySelector(".cart__icon-quantity");
  const cartPageQuantity = document.querySelector(".cart__total-quantity");

  if (localStorage["shoppingcartitem"]) {
    const totalitems = JSON.parse(localStorage["shoppingcartitem"]).length;
    navCartIcon.innerHTML = totalitems;
  }

  if (localStorage["shoppingcartitem"] && cartPageQuantity) {
    const totalitems = JSON.parse(localStorage["shoppingcartitem"]).length;
    cartPageQuantity.innerHTML = totalitems;
  }
}
