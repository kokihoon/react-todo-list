import { all, fork, takeEvery, call, put } from "redux-saga/effects";

import axios from "axios";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE
} from "../reducers/users";

function* login({ data }) {
  try {
    const json = {
      username: data.username,
      password: data.password
    };
    const token = yield call(
      [axios, "post"],
      "https://prographytodolist.azurewebsites.net/api-token-auth/",
      json
    );
    console.log(token);
    yield put({
      type: LOG_IN_SUCCESS
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOG_IN_FAILURE,
      error
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
