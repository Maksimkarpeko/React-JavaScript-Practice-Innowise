import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: "user/add",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddUserMutation, useLoginUserMutation } = authApi;
