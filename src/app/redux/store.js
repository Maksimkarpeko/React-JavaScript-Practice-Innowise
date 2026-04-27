import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@modules/auth/api/authApi";
import authSlice from "@modules/auth/hook/authSlice"

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})