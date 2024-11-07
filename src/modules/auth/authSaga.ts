import { put, takeLatest } from "redux-saga/effects";
import {
  loginSuccess,
  logoutSuccess,
  loginRequest,
  logoutRequest,
} from "./actions";
import { AuthUser } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";

function* loginSaga(action: PayloadAction<AuthUser>) {
  try {
    const { username, password } = action.payload;

    const userData = { isAuthenticated: true, user: { username, password } };

    localStorage.setItem("authState", JSON.stringify(userData));
    yield put(loginSuccess(userData.user));
  } catch (error) {
    console.error("Login failed", error);
  }
}

function* logoutSaga() {
  try {
    localStorage.removeItem("authState");
    yield put(logoutSuccess());
  } catch (error) {
    console.error("Logout failed", error);
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
  yield takeLatest(logoutRequest.type, logoutSaga);
}
