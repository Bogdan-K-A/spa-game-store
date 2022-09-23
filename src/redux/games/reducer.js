import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const gameSlice = createSlice({
  name: 'games',
  initialState: {
    currentGame: null,
  },
  reducers: {
    setCurrenrGame: (state, action) => {
      state.currentGame = action.payload
    },
  },
})

const persistConfig = {
  key: 'root',
  storage,
}

export const { setCurrenrGame } = gameSlice.actions
export const gamesReducer = persistReducer(persistConfig, gameSlice.reducer)
