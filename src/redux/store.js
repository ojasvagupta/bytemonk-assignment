import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import fetchData from "./dataSaga"
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(fetchData);
export default store;