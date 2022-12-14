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

// FUNCTION VALIDATE PRODUCT FORM
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

  if (checkLength(titleValue, 1) === true) {
    titleError.style.display = "none";
    titleHasError = false;
  } else {
    titleError.style.display = "block";
    titleHasError = true;
  }

  // PRICE:
  const priceValue = price.value;
  console.log("priceValue", priceValue);

  if (checkLength(priceValue, 1) === true) {
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

  if (checkLength(descriptionValue, 5) === true) {
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

//FUNCTION CHECKS IF INPUTVALUE IS A NUMBER:
//REFERENCE:https://www.delftstack.com/howto/javascript/check-if-string-is-number-javascript/
function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
console.log(isNumeric("1"));

//FUNCTION CHECKS INPUTLENGTH AND REMOVE SPACE ADDED:
function checkLength(value, lenghtToCheck) {
  const trimmedValue = value.trim();

  if (trimmedValue.length >= lenghtToCheck) {
    return true;
  } else {
    return false;
  }
}

//FUNCTION CHECKS FOR VALID URL:
//REFERENCE: https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
function validateURL(value) {
  return /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(
    value
  );
}
