import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../components/Guest/Sign/SignSlice";
import userReducer from "../components/User/UserSlice";

export default configureStore({
  reducer: {
    sign: signReducer,
    user: userReducer,
  },
});
