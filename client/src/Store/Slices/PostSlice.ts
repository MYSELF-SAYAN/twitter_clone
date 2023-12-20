import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface postState {
  open?: boolean;
}

// Define the initial state using that type
const initialState: postState = {
  open: false,
};

export const postSlice = createSlice({
  name: "post",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    isOpen: (state) => {
      state.open = true;
    },
    isClose: (state) => {
      state.open = false;
    },
  },
});

export const { isClose,isOpen } = postSlice.actions;

export default postSlice.reducer;
