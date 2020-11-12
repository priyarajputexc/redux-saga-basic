import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers/reducer";
import saga from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(saga);

export default store;
