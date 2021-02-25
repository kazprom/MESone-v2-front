import { all, put, call, takeLatest, select } from 'redux-saga/effects';
import { loaderToggle, messageShow } from '../app/actions';
import { AUTH_REFRESH_TOKEN, AUTH_SIGN_IN, AUTH_SIGN_OUT, authLogin, authLogout } from './actions';
import { loginRequest, logoutRequest, refreshTokenRequest } from '../../queries/auth';
import { user } from './selectors';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Workers ~~~ */

function* workerAuthRequest({ payload }) {
    yield put(loaderToggle(true));
    try {
        const data = yield call(loginRequest, payload);
        if (data.authLogin !== null) {
            const { token, ...user } = data.authLogin;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            yield put(authLogin({ user, token }));
        } else {
            yield put(messageShow({
                severity: 'error',
                message: 'Не верный логин или пароль.',
                lifeTime: 3000
            }));
        }
    } catch (error) {
        yield put(messageShow({
            severity: 'error',
            message: 'Что-то пошло не так!',
            lifeTime: 3000
        }));
        console.error('workerAuthRequest', error);
    }
    yield put(loaderToggle(false));
}

function* workerAuthLogout() {
    try {
        const { id } = yield select(user);
        if (id > 0) yield call(logoutRequest);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        yield put(authLogout());
    } catch (error) {
        yield put(messageShow({
            severity: 'error',
            message: 'Что-то пошло не так!',
            lifeTime: 3000
        }));
        console.error('workerAuthLogout', error);
    }
}

function* workerAuthRefresh() {
    try {
        const currentUser = yield select(user);
        const { authRefreshToken } = yield call(refreshTokenRequest);
        localStorage.setItem('token', authRefreshToken);
        yield put(authLogin({ user: currentUser, token: authRefreshToken }));
    } catch (error) {
        yield put(messageShow({
            severity: 'error',
            message: 'Что-то пошло не так!',
            lifeTime: 3000
        }));
        console.error('workerAuthRefresh', error);
    }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Watchers ~~~ */

function* watchAuthRequest() {
    yield takeLatest(AUTH_SIGN_IN, workerAuthRequest);
}

function* watchAuthLogout() {
    yield takeLatest(AUTH_SIGN_OUT, workerAuthLogout);
}

function* watchAuthRefresh() {
    yield takeLatest(AUTH_REFRESH_TOKEN, workerAuthRefresh);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield all([
        watchAuthRequest(),
        watchAuthLogout(),
        watchAuthRefresh(),
    ])
}
