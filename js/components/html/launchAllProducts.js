import displayMessage from "../messages/displayMessage.js";

//FUNCTION THAT WILL DISPLAY ALL PRODUCT IN THE API
//WHEN CLICKING ON THE PRODUCTCONTAINER OR BUTTON WILL GO TO DETAIL.HTML PAGE
//WITH THE CORRECT ID
export function launchAllProducts(products) {
  const productsContainer = document.querySelector(".products");

  productsContainer.innerHTML = "";

  if (products.length === 0) {
    displayMessage(
      "feedbackMessage feedbackMessage--error",
      "Sorry, no products found. Please check your search and try again",
      ".products"
    );
  }
  // console.log("products ===", products);

  products.forEach(function (product) {
    productsContainer.innerHTML += `
            <div class="product col-sm-12 col-md-6 col-lg-3">
            <a href="./details.html?id=${product.id}" class="product__content">
                <img src="${product.image_url}" alt="${product.title}" class="product__image">
                    <h5 class="product__title">${product.title}</h5>      
                    <p class="product__price">${product.price} NOK</p>
                <a href="./details.html?id=${product.id}" class="btn btn--primary btn--sm product__button">
                    details
                </a>
                </a>
            </div>

        `;
  });
}
