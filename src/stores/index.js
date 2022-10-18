import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { axiosInterceptor, axiosLegacyInterceptor } from "helper/axios";
import rootReducers from "./rootReducer";
import rootSaga from "./rootSaga";

// create middleware instance
const sagaMiddleware = createSagaMiddleware();

// create compose enhancer
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

// create enhancer
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);

// create store
const store = createStore(
    rootReducers,
    enhancer
);

// register all saga
sagaMiddleware.run(rootSaga);

// register axiosInterceptor and handlers
axiosInterceptor(store.dispatch);
axiosLegacyInterceptor(store.dispatch);

// TODO: dispatcher to store data from storage to store
// store.dispatch(restoreDataFromStorage);

export default store;