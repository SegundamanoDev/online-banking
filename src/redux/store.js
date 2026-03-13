import { configureStore } from "@reduxjs/toolkit";
import { bankApi } from "../services/api";
import authReducer from "./slices/authSlice";
import twoFactorReducer from "./slices/twoFactorSlice";

export const store = configureStore({
  reducer: {
    [bankApi.reducerPath]: bankApi.reducer,
    auth: authReducer,
    twoFactor: twoFactorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bankApi.middleware),
});
