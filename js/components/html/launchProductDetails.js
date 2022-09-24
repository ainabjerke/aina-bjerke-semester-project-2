import { getShoppingCartItem } from "../storage/localStorage.js";
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

/*** *** *** FUNCTION LAUNCH PRODUCT DETIALS THAT GETS THE CORRECT PRODUCT PROPERTY AND ID *** *** ***/
export function launchProductDetails(productDetail) {
  //DISPLAY DOCUMENT TITLE:
  //REFERENCE:https://www.w3schools.com/jsref/prop_html_title.asp
  document.title = `Product | ${productDetail.title}`;

  //DISPLAY BREADCRUMB TITLE:
  const productDetailsBreadcrumb = document.querySelector(
    ".breadcrumb__item--active"
  );
  //REFERENCE:REFERENCE:hhttps://www.w3schools.com/jsref/prop_html_innerhtml.asp
  productDetailsBreadcrumb.innerHTML = productDetail.title;

  // DISPLAY IMAGES TO HTML:
  //REFERANCE:https://w3collective.com/fetch-display-api-data-javascript/
  const productDetailsImage = document.querySelector(".details__images img");
  //REFERENCE:https://www.w3schools.com/jsref/prop_img_src.asp
  productDetailsImage.src = productDetail.image_url;
  //REFERENCE:https://www.w3schools.com/jsref/prop_area_alt.asp
  productDetailsImage.alt = productDetail.title;

  // DISPLAY PRODUCT TITLE TO HTML:
  const productDetailsTitle = document.querySelector(".details__title");
  productDetailsTitle.innerHTML = productDetail.title;

  // DISPLAY PRICE TO HTML:
  const productDetailsPrice = document.querySelector(".details__price");
  productDetailsPrice.innerHTML = productDetail.price + " NOK";

  // DISPLAY DESCRIPTION TO HTML:
  const productDetailsDescription = document.querySelector(
    ".details__description"
  );
  productDetailsDescription.innerHTML = productDetail.description;

  //DATA ATTRIBUTES THAT GETS THE API DATA AND STORED THIS IN THE PRODUCTDETAILSBTN:
  const productDetailsBtn = document.querySelector(".details__btn");
  //REFERENCE:https://www.educba.com/dataset-javascript/
  //REFERENCE:https://www.educba.com/dataset-in-html/
  productDetailsBtn.dataset.id = productDetail.id;
  productDetailsBtn.dataset.title = productDetail.title;
  productDetailsBtn.dataset.description = productDetail.description;
  productDetailsBtn.dataset.price = productDetail.price;
  productDetailsBtn.dataset.image = productDetail.image_url;
  productDetailsBtn.dataset.url = `./details.html?id=${productDetail.id}`;
  productDetailsBtn.href = `./details.html?id=${productDetail.id}`;

  // BUTTONADDPRODUCTTOCART ADDS DATA ATTRIBUTES TO LOCAL STORAGE BY FUNCTION ADDPRODUCTTOCART:
  const buttonAddProductToCart = document.querySelectorAll(".details__btn");

  buttonAddProductToCart.forEach((button) => {
    button.addEventListener("click", addProductToCart);
  });

  // ADDPRODUCTSTOCART ADDS DATA ATTRIBUTES INFO TO LOCAL STORAGE:
  function addProductToCart() {
    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;
    const description = this.dataset.description;
    const url = this.dataset.url;

    const currentCart = getShoppingCartItem();

    //FIND PRODUCT/ITEM IN CURRECTCART
    const productExists = currentCart.find(function (product) {
      return product.id === id;
    });

    //PRODUCT/ITEM IS NOT IN THE PRODUCTEXISTS
    //ADD IT
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
      //SAVES THE PRODUCT/ITEM THAT HAS NOT THE SAME ID IN NEWCARTS
      saveFavs(newCarts);
    }
  }

  function saveFavs(products) {
    localStorage.setItem("shoppingcartitem", JSON.stringify(products));
  }
}
