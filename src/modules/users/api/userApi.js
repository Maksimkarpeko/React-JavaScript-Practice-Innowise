import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@app/redux/config';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: (build) => ({
    getUsers: build.query({
      query: ({ limit, skip }) => ({
        url: 'user',
        params: { limit, skip },
      }),
    }),
    getUserById: build.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
