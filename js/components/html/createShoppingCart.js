import { getShoppingCart } from "../storage/localStorage.js";
import displayMessage from "../messages/displayMessage.js";

export function createShoppingCart() {
  const shoppingCart = getShoppingCart();

  const cartContainer = document.querySelector(".cart__products");

  cartContainer.innerHTML = "";

  if (shoppingCart.length === 0) {
    displayMessage(
      "feedbackMessage feedbackMessage--warning",
      "You have no product in the shopping cart",
      ".cart__products"
    );
  }

  /* Display products from the localStorage() */
  shoppingCart.forEach(function (product) {
    cartContainer.innerHTML += `
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

  /* Total Price: */
  const totalPriceContainer = document.querySelector(".cart__total__price");

  let totalPrice = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    let price = parseFloat(shoppingCart[i].price);

    totalPrice += price;
  }

  totalPriceContainer.innerHTML = totalPrice + " NOK";
}
