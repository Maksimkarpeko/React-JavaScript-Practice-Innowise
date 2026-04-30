import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '@modules/auth/api/authApi';
import authSlice from '@modules/auth/store/authSlice';
import { userApi } from '@modules/users';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});
