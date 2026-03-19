import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// "http://localhost:5000/api",
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // Replace with your actual backend URL if different
    baseUrl: "https://banking-backend-1-9v3x.onrender.com",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // Tags allow RTK Query to know when to auto-refresh data
  tagTypes: ["User", "Transaction", "Account"],

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    // 1. GET USER PROFILE & ACCOUNT
    getProfile: builder.query({
      query: () => "/users/me",
      providesTags: ["User", "Account"],
    }),

    // 2. GET TRANSACTION HISTORY
    getTransactions: builder.query({
      query: () => "/transactions/history",
      providesTags: ["Transaction"],
    }),

    // 3. TRANSFER MONEY (MUTATION)
    // We invalidate 'Account' and 'Transaction' so the dashboard updates instantly
    transferMoney: builder.mutation({
      query: (transferData) => ({
        url: "/transactions/transfer",
        method: "POST",
        body: transferData,
      }),
      invalidatesTags: ["Account", "Transaction"],
    }),

    // 4. UPDATE USER PROFILE
    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: "/users/profile",
        method: "PATCH",
        body: profileData,
      }),
      invalidatesTags: ["User"],
    }),

    // 5. GET STATEMENT (Returns the URL or raw data)
    getStatement: builder.query({
      query: () => "/transactions/statement",
    }),

    getAdminUsers: builder.query({
      query: () => "/admin/users",
      providesTags: ["Admin", "User"],
    }),
    // Admin Deposit (Mutation)
    adminDeposit: builder.mutation({
      query: (depositData) => ({
        url: "/admin/deposit",
        method: "POST",
        body: depositData,
      }),
      // This forces the user list and account balances to refresh
      invalidatesTags: ["Admin", "Account", "Transaction"],
    }),

    // Update User Status (Block/Active)
    updateUserStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/admin/users/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Admin"],
    }),

    // Get System-wide Stats
    getSystemStats: builder.query({
      query: () => "/admin/stats",
      providesTags: ["Admin"],
    }),
  }),
});

// Export hooks for use in components
export const {
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useGetTransactionsQuery,
  useTransferMoneyMutation,
  useUpdateProfileMutation,
  useGetStatementQuery,
  useGetAdminUsersQuery,
  useAdminDepositMutation,
  useUpdateUserStatusMutation,
  useGetSystemStatsQuery,
} = apiSlice;
