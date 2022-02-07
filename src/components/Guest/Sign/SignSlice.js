import { createSlice } from "@reduxjs/toolkit";

export const signSlice = createSlice({
  name: "sign",
  initialState: {
    isAuthed: false,
    isShown: false,
  },
  reducers: {
    setIsAuthed: (state) => {
      state.isAuthed = !state.isAuthed;
      state.isShown = false;
    },
    setIsShown: (state) => {
      state.isShown = !state.isShown;
    },
  },
});

export const { setIsAuthed, setIsShown } = signSlice.actions;

export const selectIsAuthed = (state) => state.sign.isAuthed;
export const selectIsShown = (state) => state.sign.isShown;

export default signSlice.reducer;
