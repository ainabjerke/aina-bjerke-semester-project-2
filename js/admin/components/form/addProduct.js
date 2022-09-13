import { baseURL, productsURL } from "../../../components/constance/url.js";
import { token } from "../../../components/storage/localStorage.js";
import { productMenu } from "../html/productMenu.js";
import displayMessage from "../../../components/messages/displayMessage.js";
import { fetchAPI } from "../../../components/constance/fetchApi.js";

export async function addProduct(image, title, price, description, featured) {
  const url = baseURL + "/products/";

  const data = JSON.stringify({
    image_url: image,
    title: title,
    price: price,
    description: description,
    featured: featured,
  });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage(
        "feedbackMessage feedbackMessage--success",
        "Product successfully added",
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
