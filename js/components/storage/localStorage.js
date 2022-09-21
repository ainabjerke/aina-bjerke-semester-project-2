//*** *** ***  GET PRODUCT FROM STORAGE *** *** ***//
export function getShoppingCart() {
  const shoppingCart = localStorage.getItem("shoppingcart");

  if (shoppingCart === null) {
    return [];
  } else {
    return JSON.parse(shoppingCart);
  }
}

//*** *** *** ADMIN  *** *** ***//

// ADMIN VARIABLES:
const tokenKey = "token";
const userKey = "user";

// SAVE TOKEN:
export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

// TOKEN KEY:
export const token = getToken();

// GET TOKEN:
export function getToken() {
  return getFromStorage(tokenKey);
}

// SAVE USER:
export function saveUser(user) {
  saveToStorage(userKey, user);
}

// GET USERNAME:
export function getUsername() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }

  return null;
}

// SAVE TO STORAGE FUNCTION:
export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// GET FROM STORAGE FUNCTION:
function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

// CLEAR ADMIN FUNCTION:
//REFERENCES:https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem
export function clearAdmin() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  // localStorage.clear();
}
