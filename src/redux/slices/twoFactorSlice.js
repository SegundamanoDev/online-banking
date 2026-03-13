import { createSlice } from "@reduxjs/toolkit";
import { accountApiSlice } from "./accountApiSlice"; // To listen for 2FA verification success

const twoFactorSlice = createSlice({
  name: "twoFactor",
  initialState: {
    qrCode: null,
    secret: null,
    isVerifying: false,
    isEnabled: false,
  },
  reducers: {
    setQRData: (state, action) => {
      state.qrCode = action.payload.qrCodeImage;
      state.secret = action.payload.secret;
      state.isVerifying = true;
    },
    reset2FAState: (state) => {
      state.qrCode = null;
      state.secret = null;
      state.isVerifying = false;
    },
  },
  // This updates the UI state automatically when the API verification succeeds
  extraReducers: (builder) => {
    builder.addMatcher(
      accountApiSlice.endpoints.verify2FA.matchFulfilled,
      (state) => {
        state.isEnabled = true;
        state.isVerifying = false;
        state.qrCode = null;
      },
    );
  },
});

export const { setQRData, reset2FAState } = twoFactorSlice.actions;
export default twoFactorSlice.reducer;
