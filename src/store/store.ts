import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import requestReducer from "./reducers/requestSlice";
import createSagaMiddleware from "@redux-saga/core";
import requestSaga from "../sagas/requestSagas";

const rootReducer = combineReducers({
    requestReducer,
})

const saga = createSagaMiddleware();

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: [saga]
    })
}

export const store = setupStore();
saga.run(requestSaga)
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
