import { all } from "redux-saga/effects";
import { authSaga } from "../modules/auth/authSaga";
import watchDashboardSaga from "../modules/dashboard/dataSaga";

export default function* rootSaga() {
  yield all([authSaga(), watchDashboardSaga()]);
}
