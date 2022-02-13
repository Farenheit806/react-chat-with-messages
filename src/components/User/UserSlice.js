import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: {
      firstName: "",
      surName: "",
    },
    email: "",
    id: Date.now(),
  },
  reducers: {
    setSurName: (state, action) => {
      state.name.surName = action.payload;
    },
    setFirstName: (state, action) => {
      state.name.firstName = action.payload;
    },
    setId: (state) => {
      state.id = Date.now();
    },
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setFirstName, setSurName, setId, setUserEmail } =
  userSlice.actions;

export const selectUser = (state) => state.user;
export const selectUserId = (state) => state.user.id;

export default userSlice.reducer;
