import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface dataState {
  isAuth?: boolean;
  email?: string | null;

}

// Define the initial state using that type
const initialState: dataState = {
  isAuth: false,
  email: "",
  };

export const dataSlice = createSlice({
  name: "data",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<dataState>) => {
      state.isAuth = true;
      state.email = action.payload.email;
    },
   logout: (state) => {
      state.isAuth = false;
      state.email = "";
    },
    
  },
});

export const {login } = dataSlice.actions;

export default dataSlice.reducer;
