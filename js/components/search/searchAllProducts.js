import { launchAllProducts } from "../html/launchAllProducts.js";

//THE TWO FUNCITONS BELOW FILTERS ONLY THE PRODUCT THAT ICLUDES 
//THE SEARCHERED TEXT (THE TITLE AND DESCRIPTION):

//LARGE INPUT SEARCH FIELD:
export function searchProductsBoxLarge(products) {
  const searchInputFieldLarge = document.querySelector(".search__input-large");
  
  searchInputFieldLarge.onkeyup = function (event) {
    const searchValue = event.target.value.toLowerCase();
    const filteredProducts = products.filter(function (product) {
      if (
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });

    launchAllProducts(filteredProducts);
  };
}

//SMALL INPUT SEARCH FIELD:
export function searchProductsBoxSmall(products) {
  const searchInputFieldSmall = document.querySelector(".search__input-small");

  searchInputFieldSmall.onkeyup = function (event) {
    const searchValue = event.target.value.toLowerCase();
    const filteredProducts = products.filter(function (product) {
      if (
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });

    launchAllProducts(filteredProducts);
  };
}
