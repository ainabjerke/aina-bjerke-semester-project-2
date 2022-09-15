import { getShoppingCart } from "../storage/localStorage.js";
import { productsURL } from "../constance/url.js";

// LOOKING FOR ID PARAMETER:
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

//ID VARIABLE:
let id;

//LOOKING FOR "ID" IN THE URL:
if (params.has("id")) {
  id = params.get("id");
} else {
  console.log("there is an error in 'id' if/else statement");
}

export const detailsURL = `${productsURL}${id}`;

/*** *** *** FUNCTION LAUNCH PRODUCT DETIALS GETS THE CORRECT PRODUCT PROPERTY AND ID *** *** ***/
export function launchProductDetails(detail) {
  // Document title!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!skal det stå gg optic fremfor product????
  document.title = `Product | ${detail.title}`;

  // BREADCRUMB TITLE:
  const detailsBreadcrumb = document.querySelector(".breadcrumb__item--active");
  detailsBreadcrumb.innerHTML = detail.title;

  // IMAGES:
  const detailsImage = document.querySelector(".details__images img");
  detailsImage.src = detail.image_url;
  detailsImage.alt = detail.title;

  // PRODUCT TITLE:
  const detailsTitle = document.querySelector(".details__title");
  detailsTitle.innerHTML = detail.title;

  // PRICE:
  const detailsPrice = document.querySelector(".details__price");
  detailsPrice.innerHTML = detail.price + " NOK";

  // DESCRIPTION:
  const detailsDescription = document.querySelector(".details__description");
  detailsDescription.innerHTML = detail.description;

  // DATA ATTRIBUTES:
  const detailsBtn = document.querySelector(".details__btn");
  detailsBtn.dataset.id = detail.id;
  detailsBtn.dataset.title = detail.title;
  detailsBtn.dataset.description = detail.description;
  detailsBtn.dataset.price = detail.price;
  detailsBtn.dataset.image = detail.image_url;
  detailsBtn.dataset.url = `./details.html?id=${detail.id}`;
  detailsBtn.href = `./details.html?id=${detail.id}`;

  // ADD TO CART BUTTON AND ADD TO LOCAL STORAGE:
  const buttonAddToCart = document.querySelectorAll(".details__btn");

  buttonAddToCart.forEach((button) => {
    button.addEventListener("click", addToCartButton);
  });

  function addToCartButton() {
    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;
    const description = this.dataset.description;
    const url = this.dataset.url;

    const currentCart = getShoppingCart();

    const productExists = currentCart.find(function (cart) {
      return cart.id === id;
    });

    if (productExists === undefined) {
      const product = {
        id: id,
        title: title,
        price: price,
        image: image,
        description: description,
        url: url,
      };

      currentCart.push(product);
      saveFavs(currentCart);
    } else {
      const newCarts = currentCart.filter((cart) => cart.id !== id);
      saveFavs(newCarts);
    }
  }

  function saveFavs(carts) {
    localStorage.setItem("shoppingcart", JSON.stringify(carts));
  }
}
