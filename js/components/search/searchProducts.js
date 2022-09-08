import { createProduct } from "../html/createProduct.js";

export function searchProducts(products) {
  const search = document.querySelector(".search__input");

  search.onkeyup = function (event) {
    // const searchValue = event.target.value;
    const searchValue = event.target.value.toLowerCase();
    const filteredProducts = products.filter(function (product) {
      if (
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
      ) {
        return true;
        // return product.name.toLowerCase().includes(search);
      }
    });

    createProduct(filteredProducts);
  };
}
