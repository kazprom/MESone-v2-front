import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { APP_INIT, MESSAGE_HIDE, MESSAGE_SHOW, messageSetList, messageShow } from './actions';
import { authSetDomains } from '../auth/actions';
import { getMessages } from './selectors';
import { queryInitData } from '../../queries/app';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Workers ~~~ */

let messageId = 0;

function* workerAppInit() {
    try {
        const { domains } = yield call(queryInitData);
        yield put(authSetDomains(domains));
    } catch (error) {
        console.error('workerAppInit', error);
        yield put(messageShow({
            severity: 'error',
            message: 'Что-то пошло не так.',
            lifeTime: 3000
        }));
    }
}

function* workerPutMessage({ payload }) {
    const messages = yield select(getMessages);
    yield put(messageSetList([...messages, { id: messageId++, ...payload }]));
}

function* workerRemoveMessage({ payload }) {
    const messages = yield select(getMessages);
    const newMessages = messages.filter(message => message.id !== payload);
    yield put(messageSetList(newMessages));
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Watchers ~~~ */

export function* watchAppInit() {
    yield takeLatest(APP_INIT, workerAppInit);
}

export function* watchPutMessage() {
    yield takeEvery(MESSAGE_SHOW, workerPutMessage);
}

export function* watchRemoveMessage() {
    yield takeEvery(MESSAGE_HIDE, workerRemoveMessage);
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield all([
        watchAppInit(),
        watchPutMessage(),
        watchRemoveMessage(),
    ])
}
