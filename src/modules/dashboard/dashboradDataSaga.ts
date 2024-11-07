import { cardData } from "../../data/cardData";
import { pieChartData } from "../../data/chartData";
import { put, takeLatest, delay } from "redux-saga/effects";
import {
  getDashboardData,
  getDashboardDataSuccess,
  getDashboardDataFailure,
} from "./dataSlice";

function* getDashboardDataSaga() {
  try {
    yield delay(3000);
    yield put(getDashboardDataSuccess({ cardData, pieChartData }));
  } catch (error) {
    yield put(getDashboardDataFailure("failed to get dashboard data"));
  }
}

export default function* watchDashboardSaga() {
  yield takeLatest(getDashboardData.type, getDashboardDataSaga);
}
