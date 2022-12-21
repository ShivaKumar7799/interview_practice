import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name : "Shva Kumar",
  age : 23,                         
  email : "shivakumarbammidi@gmail.com"
}

export const userSlice = createSlice({
  name : "user",
  initialState : {
    value : initialStateValue
  },
  reducers : {
    login : (state,action) => {
      state.value = action.payload
    },
    logout : (state,action) => {
      state.value = initialStateValue
    }
  }
})

export const {login,logout} = userSlice.actions;

export default userSlice.reducer