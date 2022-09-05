import displayMessage from "../messages/displayMessage.js";

export function createProduct(products) {
  const productsContainer = document.querySelector(".products");

  productsContainer.innerHTML = "";

  if (products.length === 0) {
    displayMessage(
      "feedback feedback--error",
      "No products found",
      ".products"
    );
  }
  // console.log("products ===", products);

  products.forEach(function (product) {
    productsContainer.innerHTML += `
            <div class="product col-sm-12 col-md-6 col-lg-3">
                <img src="${product.image_url}" alt="${product.title}" class="product__image">
                <div class="product__content">
                    <h5 class="product__title">${product.title}</h5>      
                   
                    <p class="product__price">${product.price} NOK</p>
                </div>
                <a href="./details.html?id=${product.id}" class="btn btn--primary btn--sm product__button">
                    details
                </a>
            </div>

        `;
  });
}
