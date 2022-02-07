import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../components/Guest/Sign/SignSlice";

export default configureStore({
  reducer: {
    sign: signReducer,
  },
});
