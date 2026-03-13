import { bankApi } from "../../services/api";

export const accountApiSlice = bankApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1. Existing Account Endpoints
    getProfile: builder.query({
      query: () => "/users/me",
      providesTags: ["User", "Account"],
    }),
    getTransactions: builder.query({
      query: () => "/transactions/history",
      providesTags: ["Transaction"],
    }),
    sendMoney: builder.mutation({
      query: (data) => ({
        url: "/transactions/transfer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Account", "Transaction"],
    }),

    // 2. Added 2FA Endpoints (Updated)
    setup2FA: builder.query({
      query: () => "/auth/2fa/setup",
      keepUnusedDataFor: 0,
    }),
    verify2FA: builder.mutation({
      query: (token) => ({
        url: "/auth/2fa/verify",
        method: "POST",
        body: { token },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

// These are the "Hooks" you will use in your React Components
export const {
  useGetProfileQuery,
  useGetTransactionsQuery,
  useSendMoneyMutation,
  useSetup2FAQuery,
  useVerify2FAMutation,
} = accountApiSlice;
