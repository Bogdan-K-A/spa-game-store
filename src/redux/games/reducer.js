import { createSlice } from '@reduxjs/toolkit'

const gaemsSlice = createSlice({
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

export const { setCurrenrGame } = gaemsSlice.actions
export default gaemsSlice.reducer
