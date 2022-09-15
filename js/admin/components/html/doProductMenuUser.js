// const hamburgerMenuIcon = document.querySelector(".nav__menu-icon");
// const hamburgerProductMenu = document.querySelector(".product-menu");
// hamburgerMenuIcon.addEventListener("click", toggleHamburgerMenu);

// export default function toggleHamburgerMenu() {
//   hamburgerMenuIcon.classList.toggle("open");
//   hamburgerProductMenu.classList.toggle("product-menu--open");
// }


/* Product Menu */
export function doProductMenuUser(item) {
  const productMenuUserContainer = document.querySelector(".product-menu__list");

  productMenuUserContainer.innerHTML = "";

  // Checking ID
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  // Display the Products
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

// export function productMenu(item) {
//   const productMenuContainer = document.querySelector(".product-menu__list");

//   productMenuContainer.innerHTML = "";

// Checking ID
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// Display the Products
//   item.forEach(function (product) {
//     let activeLink = "";

//     if (id == product.id) {
//       activeLink = "product-menu__link--active";
//     }

//     productMenuContainer.innerHTML += `
//             <li class="product-menu__item">
//                 <a href="./edit.html?id=${product.id}" class="product-menu__link ${activeLink}">
//                 <i class="fa-regular fa-pen-to-square"></i>
//                     ${product.title}
//                 </a>
//             </li>
//         `;
//   });
// }
