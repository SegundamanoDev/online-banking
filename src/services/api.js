// "http://localhost:5000/api",
// "https://united-capital.onrender.com/api",
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://united-capital.onrender.com/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Transaction", "Account", "Admin", "Loan"],

  endpoints: (builder) => ({
    /* --- AUTHENTICATION --- */
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User", "Account"],
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),

    /* --- USER OPERATIONS --- */
    getProfile: builder.query({
      query: () => "/users/me",
      providesTags: ["User", "Account"],
    }),
    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: "/users/profile",
        method: "PATCH",
        body: profileData,
      }),
      invalidatesTags: ["User"],
    }),

    /* --- SECURITY & PIN MANAGEMENT --- */
    setTransactionPin: builder.mutation({
      query: (pinData) => ({
        url: "/security/set-pin",
        method: "POST",
        body: pinData,
      }),
      invalidatesTags: ["Account"],
    }),
    verifyTransactionPin: builder.mutation({
      query: (pinData) => ({
        url: "/security/verify-pin",
        method: "POST",
        body: pinData,
      }),
      // Invalidates account because 3 fails will change 'isActive' to false
      invalidatesTags: ["Account"],
    }),

    /* --- TRANSACTION & BANKING --- */
    getTransactions: builder.query({
      query: () => "/transactions/history",
      providesTags: ["Transaction"],
    }),
    transferMoney: builder.mutation({
      query: (transferData) => ({
        url: "/transactions/transfer",
        method: "POST",
        body: transferData,
      }),
      invalidatesTags: ["Account", "Transaction"],
    }),
    getStatement: builder.query({
      query: () => "/transactions/statement",
    }),

    /* --- CREDIT FACILITIES (LOANS) --- */
    requestLoan: builder.mutation({
      query: (loanData) => ({
        url: "/loans/apply",
        method: "POST",
        body: loanData,
      }),
      invalidatesTags: ["Account", "Loan"],
    }),

    /* --- ADMINISTRATIVE CORE (USER MGMT) --- */
    getAdminUsers: builder.query({
      query: () => "/admin/users",
      providesTags: ["Admin", "User"],
    }),
    updateUserStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/admin/users/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Admin", "User", "Account"],
    }),
    adminDeposit: builder.mutation({
      query: (depositData) => ({
        url: "/admin/deposit",
        method: "POST",
        body: depositData,
      }),
      invalidatesTags: ["Admin", "Account", "Transaction"],
    }),
    getSystemStats: builder.query({
      query: () => "/admin/stats",
      providesTags: ["Admin"],
    }),

    /* --- ADMINISTRATIVE LEDGER & WIRES --- */
    getAdminTransactions: builder.query({
      query: () => "/admin/transactions",
      providesTags: ["Transaction", "Admin"],
    }),
    getPendingWires: builder.query({
      query: () => "/admin/wires/pending",
      providesTags: ["Transaction"],
    }),
    approveWire: builder.mutation({
      query: (transactionId) => ({
        url: `/admin/transactions/${transactionId}/approve-wire`,
        method: "PATCH",
      }),
      invalidatesTags: ["Transaction", "Admin", "Account"],
    }),

    /* --- ADMINISTRATIVE LOAN UNDERWRITING --- */
    getLoanRequests: builder.query({
      query: () => "/admin/loans/pending",
      providesTags: ["Admin", "Loan"],
    }),
    approveLoan: builder.mutation({
      query: (loanId) => ({
        url: `/admin/loans/${loanId}/approve`,
        method: "PATCH",
      }),
      invalidatesTags: ["Admin", "Account", "Transaction", "Loan"],
    }),
    rejectLoan: builder.mutation({
      query: (loanId) => ({
        url: `/admin/loans/${loanId}/reject`,
        method: "PATCH",
      }),
      invalidatesTags: ["Admin", "Loan"],
    }),

    requestPinReset: builder.mutation({
      query: () => ({
        url: "/security/request-pin-reset",
        method: "POST",
      }),
    }),

    resetPinWithToken: builder.mutation({
      query: (resetData) => ({
        url: "/security/verify-pin-reset",
        method: "POST",
        body: resetData,
      }),
      invalidatesTags: ["Account"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useSetTransactionPinMutation,
  useVerifyTransactionPinMutation,
  useGetTransactionsQuery,
  useTransferMoneyMutation,
  useGetStatementQuery,
  useRequestLoanMutation,
  useGetAdminUsersQuery,
  useUpdateUserStatusMutation,
  useAdminDepositMutation,
  useGetSystemStatsQuery,
  useGetAdminTransactionsQuery,
  useGetPendingWiresQuery,
  useApproveWireMutation,
  useGetLoanRequestsQuery,
  useApproveLoanMutation,
  useRejectLoanMutation,
  useRequestPinResetMutation,
  useResetPinWithTokenMutation,
} = apiSlice;
