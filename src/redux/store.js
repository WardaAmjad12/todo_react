import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/index";
import rootReducer from "./slice/index";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    devTools:composeWithDevTools(),

    middleware: (getDefaultMiddleware) => [
        sagaMiddleware,
        ...getDefaultMiddleware({ thunk: false }),
    ]
});

sagaMiddleware.run(rootSaga);
export default store;