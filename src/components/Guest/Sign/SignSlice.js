import { createSlice } from "@reduxjs/toolkit";

export const signSlice = createSlice({
  name: "sign",
  initialState: {
    isAuthed: false,
    isShown: false,
    isSignUp: false,
  },
  reducers: {
    setIsAuthed: (state) => {
      state.isAuthed = !state.isAuthed;
      state.isShown = false;
    },
    setIsShown: (state) => {
      state.isShown = !state.isShown;
    },
    setIsSignUp: (state) => {
      state.isSignUp = !state.isSignUp;
    },
  },
});

export const { setIsAuthed, setIsShown, setIsSignUp } = signSlice.actions;

export const selectIsAuthed = (state) => state.sign.isAuthed;
export const selectIsShown = (state) => state.sign.isShown;
export const selectIsSignUp = (state) => state.sign.isSignUp;

export default signSlice.reducer;
