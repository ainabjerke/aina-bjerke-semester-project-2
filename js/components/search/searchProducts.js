import { launchProduct } from "../html/launchProduct.js";

//LARGE INPUT FIELD:
export function searchProductsBoxLarge(products) {
  const searchInputFieldLarge = document.querySelector(".search__input-large");

  searchInputFieldLarge.onkeyup = function (event) {
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

    launchProduct(filteredProducts);
  };
}

//SMALL INPUT FIELD:
export function searchProductsBoxSmall(products) {
  const searchInputFieldSmall = document.querySelector(".search__input-small");

  searchInputFieldSmall.onkeyup = function (event) {
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

    launchProduct(filteredProducts);
  };
}
