import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload)
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (game) => game.id !== action.payload,
      )
    },
  },
})

const persistConfig = {
  key: 'root',
  storage,
}

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions
export const cartReducer = persistReducer(persistConfig, cartSlice.reducer)
