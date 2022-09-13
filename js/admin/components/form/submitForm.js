import { updateProduct } from "./updateProduct.js";
import { addProduct } from "./addProduct.js";
import { feedbackMessage, featuredTrue, idInput } from "./formVariables.js";
import { validateForm } from "./validateForm.js";
import displayMessage from "../../../components/messages/displayMessage.js";

// Submit Form Function
export function submitForm(event) {
  event.preventDefault();

  feedbackMessage.innerHTML = "";

  const imageValue = image.value;
  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();

  let featuredValue;

  if (featuredTrue.checked) {
    featuredValue = true;
  } else {
    featuredValue = false;
  }

  const idValue = idInput.value;
  // if (validateForm() === false || isNaN(priceValue))
  if (validateForm() === false) {
    return displayMessage(
      "feedbackMessage feedbackMessage--error",
      "Please enter proper values",
      ".feedbackMessage"
    );
  }

  if (document.URL.includes("add")) {
    addProduct(
      imageValue,
      titleValue,
      priceValue,
      descriptionValue,
      featuredValue
    );
  } else {
    updateProduct(
      imageValue,
      titleValue,
      priceValue,
      descriptionValue,
      featuredValue,
      idValue
    );
  }
}
