import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@app/redux/config';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: 'user/add',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useAddUserMutation, useLoginUserMutation } = authApi;
