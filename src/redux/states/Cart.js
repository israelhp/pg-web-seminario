import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    Lista: JSON.parse(localStorage.getItem("Carrito"))
  },
  reducers: {
    CartSet: (state, action) => {
      if (state.Lista == null) {
        return { Lista: [action.payload] }
      } else {
        return { Lista: [...state.Lista, action.payload] }
      }
    },
    CartSum: (state, action) => {
      const temp = Object.values(state.Lista)
      const index = state.Lista.findIndex((articulo) => articulo.id === action.payload.id)
      temp[index] = action.payload
      return { Lista: temp }

    },
    CartDel: (state, action) => {
      const temp = Object.values(state.Lista.filter(d => d.id !== action.payload.id))
      return { Lista: temp }
    }
  },
})

export const { CartSet, CartDel, CartSum } = cartSlice.actions

export default cartSlice.reducer
