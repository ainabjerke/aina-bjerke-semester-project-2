/**** *** *** PRODUCT MENU *** *** ****/
export function doProductMenuUser(item) {
  const productMenuUserContainer = document.querySelector(".product-menu__list");

  productMenuUserContainer.innerHTML = "";

  //CHEKING ID:
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  // DISPLAY THE PRODUCTS:
  item.forEach(function (product) {
    let activeLink = "";

    if (id == product.id) {
      activeLink = "product-menu__link--active";
    }

    productMenuUserContainer.innerHTML += `
            <li class="product-menu__item">
            <a href="./edit.html?id=${product.id}" class="product-menu__link ${activeLink}">
                <i class="fa-regular fa-pen-to-square"></i>
                    ${product.title}
                </a>
            </li>
        `;
  });
}


