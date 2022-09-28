import { authSlice } from './states/auth'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})
