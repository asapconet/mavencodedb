import { RootState } from "../../store/index";

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectAuthUser = (state: RootState) => state.auth.user;
