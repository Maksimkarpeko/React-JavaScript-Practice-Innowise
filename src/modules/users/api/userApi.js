import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@app/redux/config";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getUsers: build.query({
      query: ({ limit, skip }) =>
        `users?${limit && `limit=${limit}`}&skip=${skip}`,
    }),
    getUserById: build.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
