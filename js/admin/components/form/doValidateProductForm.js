import {
  image,
  imageError,
  title,
  titleError,
  price,
  priceError,
  description,
  descriptionError,
} from "./formVariables.js";

// FUNCTION VALIDATE FORM
export function doValidateProductForm() {
  let imageHasError;
  let titleHasError;
  let priceHasError;
  let descriptionHasError;

  // IMAGE URL:
  const imageURL = image.value;

  if (validateURL(imageURL) === true) {
    imageError.style.display = "none";
    imageHasError = false;
  } else {
    imageError.style.display = "block";
    imageHasError = true;
  }

  // TITLE:
  const titleValue = title.value;

  if (validateLength(titleValue, 1) === true) {
    titleError.style.display = "none";
    titleHasError = false;
  } else {
    titleError.style.display = "block";
    titleHasError = true;
  }

  // PRICE:
  const priceValue = price.value;
  console.log("priceValue", priceValue);

  if (validateLength(priceValue, 1) === true) {
    priceError.style.display = "none";
    priceHasError = false;
  } else {
    priceError.style.display = "block";
    priceHasError = true;
  }

  // PRICE IS A NUMBER:
  if (isNumeric(priceValue) === true) {
    priceError.style.display = "none";
    priceHasError = false;
  } else {
    priceError.style.display = "block";
    priceHasError = true;
  }

  // DESCRIPTION:
  const descriptionValue = description.value;

  if (validateLength(descriptionValue, 5) === true) {
    descriptionError.style.display = "none";
    descriptionHasError = false;
  } else {
    descriptionError.style.display = "block";
    descriptionHasError = true;
  }

  // FEATURED:
  let featuredValue;

  // VALIDATE CHECK:
  if (
    imageHasError === true ||
    titleHasError === true ||
    priceHasError === true ||
    descriptionHasError === true ||
    featuredValue === null
  ) {
    return false;
  } else {
    return true;
  }
}

//FUNCTION CHECKS IF VALUE IS A NUMBER:
function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
console.log(isNumeric("1"));


//FUNCTION CHECKS LENGTH AND REMOVE SPACE ADDED:
function validateLength(value, lenghtToCheck) {
  const trimmedValue = value.trim();

  if (trimmedValue.length >= lenghtToCheck) {
    return true;
  } else {
    return false;
  }
}

//FUNCTION CHECKS FOR VALID URL:
function validateURL(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}
