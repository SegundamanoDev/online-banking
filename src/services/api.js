import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bankApi = createApi({
  reducerPath: "bankApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      // Pull token from auth slice
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Account", "Transaction"], // Used for automatic refreshing
  endpoints: () => ({}), // We will inject endpoints from slices to keep this clean
});
