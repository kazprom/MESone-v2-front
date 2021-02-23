import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import appSagas from './app/sagas';
import authSagas from './auth/sagas';

import appReducer from './app/reducer';
import authReducer from './auth/reducers';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        appSagas(),
        authSagas(),
    ])
}

const middlewares = applyMiddleware(sagaMiddleware);
const devTools = process.env.NODE_ENV === 'production' ? middlewares : composeWithDevTools(middlewares);

export default createStore(
    combineReducers({
        app: appReducer,
        auth: authReducer,
    }),
    devTools
);

sagaMiddleware.run(rootSaga);