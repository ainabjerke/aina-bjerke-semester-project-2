import { launchAllProducts } from "./launchAllProducts.js";

//FUNCTION THAT GETS THE FEATURED PRODUCT FROM LAUNCHALLPRODUCTS
//IF PRODUCTS FEATURED IT TRUE DISPLAY IT TO THE FEATUREDPRODUCTCONTAINER:
export function launchFeaturedProducts(products) {
  const featuredProductsContainer = document.querySelector(
    ".featured__products"
  );

  featuredProductsContainer.innerHTML = "";

  /*** *** **** FUNCTION LOOPS THROUGH FEATURED AND LOOKS FOR TRUE OBJECTS:*** *** ***/
  //REFERENCE:https://mikebifulco.com/posts/javascript-filter-boolean
  const filteredProducts = products.filter(function (product) {
    // console.log(filteredProducts);
    if (product.featured === true) {
      return true;
    }
  });

  launchAllProducts(filteredProducts);
}
