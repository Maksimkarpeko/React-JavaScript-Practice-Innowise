import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: ({ limit = "", skip}) =>
        `users?${limit && `limit=${limit}`}&skip=${skip}`,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
