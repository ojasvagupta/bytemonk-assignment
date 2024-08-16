import { put, takeEvery } from "redux-saga/effects";
import { CALL_DATA, SET_DATA } from "./constant";
function* setFetchData() {
  let data = yield fetch("http://52.168.1.54:8080/api/v1/userActivities");
  data = yield data.json();
  yield put({ type: SET_DATA, data });
}
function* fetchData() {
  yield takeEvery(CALL_DATA, setFetchData);
}
export default fetchData;
