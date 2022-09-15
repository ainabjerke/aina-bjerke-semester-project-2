import { launchProduct } from "./launchProduct.js";

export function launchFeaturedProducts(products) {
  const featuredProductsContainer = document.querySelector(
    ".featured__products"
  );

  featuredProductsContainer.innerHTML = "";

  /*** *** **** FUNCTION LOOPS THROUGH FEATURED AND LOOKS FOR TRUE OBJECTS:*** *** ***/
  const filteredProducts = products.filter(function (product) {
    if (product.featured === true) {
      return true;
    }
  });

  launchProduct(filteredProducts);
}
