import { cardData } from "./../../data/cardData";
import { put, takeLatest, delay } from "redux-saga/effects";
import {
  getCardData,
  getCardDataSuccess,
  getCardDataFailure,
} from "./dataSlice";

function* getDashboardDataSaga() {
  try {
    yield delay(3000);
    yield put(getCardDataSuccess({ cardData }));
  } catch (error) {
    yield put(getCardDataFailure("failed to get dashboard data"));
  }
}

export default function* watchDashboardSaga() {
  yield takeLatest(getCardData.type, getDashboardDataSaga);
}
