import { all } from "redux-saga/effects";
import { authSaga } from "../modules/auth/authSaga";

export default function* rootSaga() {
  yield all([authSaga()]);
}
