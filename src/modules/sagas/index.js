import { all, fork } from "redux-saga/effects";
import users from "./users";

function* rootSaga() {
  yield all([fork(users)]);
}

export default rootSaga;
