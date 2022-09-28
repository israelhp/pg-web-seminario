import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    role: localStorage.getItem('role'),
  },
  reducers: {
    loginAuth: (state, action) => action.payload,
    logoutAuth: (state, action) => action.payload,
  },
})

export const { loginAuth, logoutAuth } = authSlice.actions

export default authSlice.reducer
