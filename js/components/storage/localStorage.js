// GET SHOPPING CART FROM LOCAL STORAGE:
export function getShoppingCart() {
  const shoppingCart = localStorage.getItem("shoppingcart");

  if (shoppingCart === null) {
    return [];
  } else {
    return JSON.parse(shoppingCart);
  }
}

// ADMIN VARIABLES:
const tokenKey = "token";
const userKey = "user";

// SAVE TOKEN:
export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

// GET TOKEN:
export function getToken() {
  return getFromStorage(tokenKey);
}

export const token = getToken();

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

// SAVE TOP STORAGE FUNCTION:
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

// CLEAR ADNIN FUNCTION:
export function clearAdmin() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}
