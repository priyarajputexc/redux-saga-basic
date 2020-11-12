import { put, takeLatest, all } from "redux-saga/effects";

function* fetchUsers() {
  const json = yield fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  yield put({ type: "USERS_RECEIVED", users: json });
}

function* actionWatcher() {
  yield takeLatest("GET_USERS", fetchUsers);
}

export default function* saga() {
  yield all([actionWatcher()]);
}
