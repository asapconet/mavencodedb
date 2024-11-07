import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser, AuthState } from "./types";

const loadStateFromLocalStorage = (): AuthState => {
  const savedAuthState = localStorage.getItem("authState");
  if (savedAuthState) {
    return JSON.parse(savedAuthState);
  }
  return { isAuthenticated: false, user: null };
};

const initialState: AuthState = loadStateFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (_state, _action: PayloadAction<AuthUser>) => {},
    loginSuccess: (state, action: PayloadAction<AuthUser>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("authState", JSON.stringify(state));
    },
    logoutRequest: (_state) => {},
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("authState");
    },
  },
});

export default authSlice.reducer;
