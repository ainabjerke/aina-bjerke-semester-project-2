import { doUpdateProductForm } from "./doUpdateProductForm.js";
import { doAddProductForm } from "./doAddProductForm.js";
import { feedbackMessage, featuredTrue, idInput } from "./formVariables.js";
import { doValidateProductForm } from "./doValidateProductForm.js";
import displayMessage from "../../../components/messages/displayMessage.js";

// SUBMIT PRODUCT FROM FUNCTION:
export function doSubmitProductForm(event) {
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

  if (doValidateProductForm() === false) {
    return displayMessage(
      "feedbackMessage feedbackMessage--error",
      "Please enter proper values",
      ".feedbackMessage"
    );
  }

  if (document.URL.includes("add")) {
    doAddProductForm(
      imageValue,
      titleValue,
      priceValue,
      descriptionValue,
      featuredValue
    );
  } else {
    doUpdateProductForm(
      imageValue,
      titleValue,
      priceValue,
      descriptionValue,
      featuredValue,
      idValue
    );
  }
}
