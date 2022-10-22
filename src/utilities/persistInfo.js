export const persistAuthState = (item, data) => {
  localStorage.setItem(item, data)
}

export const removeLocalStorage = item => {
  localStorage.removeItem(item)
}

export const persistCartState = (item, data) => {
  localStorage.setItem(item, data)
}
