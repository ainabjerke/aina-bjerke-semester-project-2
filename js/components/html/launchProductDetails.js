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
export function launchProductDetails(productDetail) {
  // Document title!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!skal det stå gg optic fremfor product????
  document.title = `Product | ${productDetail.title}`;

  // BREADCRUMB TITLE:
  const detailsBreadcrumb = document.querySelector(".breadcrumb__item--active");
  detailsBreadcrumb.innerHTML = productDetail.title;

  // DISPLAY IMAGES TO HTML:                                                                               
  const detailsImage = document.querySelector(".details__images img");
  detailsImage.src = productDetail.image_url;
  detailsImage.alt = productDetail.title;

  // DISPLAY PRODUCT TITLE TO HTML:
  const detailsTitle = document.querySelector(".details__title");
  detailsTitle.innerHTML = productDetail.title;

  // DISPLAY PRICE TO HTML:
  const detailsPrice = document.querySelector(".details__price");
  detailsPrice.innerHTML = productDetail.price + " NOK";

  // DISPLAY DESCRIPTION TO HTML:
  const detailsDescription = document.querySelector(".details__description");
  detailsDescription.innerHTML = productDetail.description;

  //DATA ATTRIBUTES THAT GETS THE API DATA AND STORED THIS IN THE DETAILSBTN:
  const detailsBtn = document.querySelector(".details__btn");
  detailsBtn.dataset.id = productDetail.id;
  detailsBtn.dataset.title = productDetail.title;
  detailsBtn.dataset.description = productDetail.description;
  detailsBtn.dataset.price = productDetail.price;
  detailsBtn.dataset.image = productDetail.image_url;
  detailsBtn.dataset.url = `./details.html?id=${productDetail.id}`;
  detailsBtn.href = `./details.html?id=${productDetail.id}`;

  // ADD TO CART BUTTON AND ADD TO LOCAL STORAGE WITH DATA ATTRIBUTES INFO:
  const buttonAddProductToCart = document.querySelectorAll(".details__btn");

  buttonAddProductToCart.forEach((button) => {
    button.addEventListener("click", addProductToCart);
  });

  // ADD TO CART BUTTON AND ADD TO LOCAL STORAGE WITH DATA ATTRIBUTES INFO:
  function addProductToCart() {
    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;
    const description = this.dataset.description;
    const url = this.dataset.url;

    const currentCart = getShoppingCart();

    const productExists = currentCart.find(function (product) {
      return product.id === id;
    });

    if (productExists === undefined) {
      const productItem = {
        id: id,
        title: title,
        price: price,
        image: image,
        description: description,
        url: url,
      };

      currentCart.push(productItem);
      saveFavs(currentCart);
    } else {
      const newCarts = currentCart.filter((product) => product.id !== id);
      saveFavs(newCarts);
    }
  }

  function saveFavs(products) {
    localStorage.setItem("shoppingcart", JSON.stringify(products));
  }
}
