import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 25

export const counterSlice = createSlice({
  name : "counter",
  initialState : {
    value : initialStateValue
  },
  reducers : {
    increment : (state,action) => {
      state.value = state.value + 1
    },
    decrement : (state,action) => {
      state.value = action.payload
    },
    reset : (state,action) => {
      state.value = 0
    }
  }
})

export const {increment, decrement, reset} = counterSlice.actions

export default counterSlice.reducer