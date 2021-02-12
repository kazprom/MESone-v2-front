import { all, put, select, takeEvery } from 'redux-saga/effects';
import { MESSAGE_HIDE, MESSAGE_SHOW, messageSetList } from './actions';
import { getMessages } from './selectors';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Workers ~~~ */

let messageId = 0;

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

export function* watchPutMessage() {
    yield takeEvery(MESSAGE_SHOW, workerPutMessage);
}

export function* watchRemoveMessage() {
    yield takeEvery(MESSAGE_HIDE, workerRemoveMessage);
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield all([
        watchPutMessage(),
        watchRemoveMessage(),
    ])
}
