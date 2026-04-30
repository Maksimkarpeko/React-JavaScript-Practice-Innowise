import { createSlice } from '@reduxjs/toolkit';
import { getUserFromLocalStorage } from '../utils/get-user-from-local-storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user:getUserFromLocalStorage() },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem('user',action.payload.user);
    },
    logOutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
