import { authSlice } from './states/auth'
import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './states/Cart'

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
})
