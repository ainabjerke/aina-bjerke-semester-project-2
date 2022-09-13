import { baseURL, productsURL } from "../../../components/constance/url.js";
import { token } from "../../../components/storage/localStorage.js";
import displayMessage from "../../../components/messages/displayMessage.js";
import { fetchAPI } from "../../../components/constance/fetchApi.js";
import { productMenu } from "../../components/html/productMenu.js";

export async function updateProduct(
  image,
  title,
  price,
  description,
  featured,
  id
) {
  const url = baseURL + "/products/" + id;

  const data = JSON.stringify({
    image_url: image,
    title: title,
    price: price,
    description: description,
    featured: featured,
  });

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage(
        "feedbackMessage feedbackMessage--success",
        "Product successfully updated",
        ".feedbackMessage"
      );

      fetchAPI(productMenu, productsURL);
    }

    if (json.error) {
      displayMessage(
        "feedbackMessage feedbackMessage--error",
        json.message,
        ".feedbackMessage"
      );
    }
  } catch (error) {
    // console.log(error);
  }
}
