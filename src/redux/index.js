import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { cartReducer } from './cart/reducer'
import { gamesReducer } from './games/reducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gamesReducer,
  },
})

export const persistor = persistStore(store)
