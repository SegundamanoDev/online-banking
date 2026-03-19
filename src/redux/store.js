import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../../src/services/api";
import authReducer from "../../src/services/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer, // Add auth here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
