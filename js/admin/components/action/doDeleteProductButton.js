import { baseURL } from "../../../components/constance/url.js";
import { token } from "../../../components/storage/localStorage.js";

//FUNCTION DELETE PRODUCT:
export default function doDeleteProductButton(id) {
  const deleteButton = document.querySelector(".delete-button");
  //IF USER CLICKS YES ON CONFIRMATION MESSAGE:
  deleteButton.onclick = async function () {
    const doDelete = confirm("Are you sure you want to delete this product?");

    if (doDelete) {
      const url = baseURL + "/products/" + id;

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        location.href = "./edit.html";
      } catch (error) {
        console.log(error);
      }
    }
  };
}
