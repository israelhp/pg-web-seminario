export const persistAuthState = (item, data) => {
  localStorage.setItem(item, data)
}

export const removeLocalStorage = item => {
  localStorage.removeItem(item)
}
