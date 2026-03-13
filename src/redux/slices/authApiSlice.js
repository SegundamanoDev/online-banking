import { bankApi } from "../../services/api";

export const authApiSlice = bankApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyLogin2FA: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-login-2fa",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyLogin2FAMutation,
} = authApiSlice;
