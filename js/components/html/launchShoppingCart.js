import { getShoppingCartItem } from "../storage/localStorage.js";
import displayMessage from "../messages/displayMessage.js";

export function launchShoppingCart() {
  const shoppingCartItem = getShoppingCartItem();

  const cartProductsContainer = document.querySelector(".cart__products");

  cartProductsContainer.innerHTML = "";

  if (shoppingCartItem.length === 0) {
    displayMessage(
      "feedbackMessage feedbackMessage--warning",
      "You have no product in the shopping cart",
      ".cart__products"
    );
  }

  /*** *** *** DISPLAY PRODUCT FROM LOCAL STORAGE BY const shoppingCartItem = getShoppingCartItem() *** *** ***/
  shoppingCartItem.forEach(function (product) {
    cartProductsContainer.innerHTML += `
            <div class="cart__product-card col-12 row">
                <img src="${product.image}" alt="${product.title}" class="col cart__product-card__image">

                <div class="cart__product-card__content col ">
                    <h5 class="cart__product-card__title col">${product.title}</h5>

                    <p class="cart__product-card__price col-sm-12 col-md-12 col-lg">
                        ${product.price} NOK
                    </p>

                    <a href="${product.url}" class="cart__product-card__link link">
                        View Product 
                    </a>
                </div>
                
            </div>
        `;
  });

  /*** *** *** CALCULATE TOTAL PRODUCT PRICE: *** *** ***/
  //REFERENCE:https://stackoverflow.com/questions/67095723/how-to-make-total-of-cart-price-in-a-shopping-cart
  const totalPriceContainer = document.querySelector(".cart__total__price");

  let totalPrice = 0;

  for (let i = 0; i < shoppingCartItem.length; i++) {
    let price = parseFloat(shoppingCartItem[i].price);

    totalPrice += price;
  }

  totalPriceContainer.innerHTML = totalPrice + " NOK";
}
