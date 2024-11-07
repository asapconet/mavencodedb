import { createAction } from "@reduxjs/toolkit";
import { AuthUser } from "./types";

export const loginRequest = createAction<AuthUser>("auth/loginRequest");
export const loginSuccess = createAction<AuthUser>("auth/loginSuccess");
export const logoutRequest = createAction("auth/logoutRequest");
export const logoutSuccess = createAction("auth/logoutSuccess");
