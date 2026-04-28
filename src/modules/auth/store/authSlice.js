import { createSlice } from "@reduxjs/toolkit";

const helperLocalStorage = () => {
  try {
    const auth = localStorage.getItem("user");
    const parseAuthData = JSON.parse(auth);
    return parseAuthData;
  } catch (error) {
    console.error(error);
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: { user: helperLocalStorage() || null },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    logOutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
