import { SagaIterator } from 'redux-saga';
import { all, call, fork } from 'redux-saga/effects'
import characterSaga from './character.saga';
import chatgptSaga from './chatgpt.saga';

export default function* rootSaga() {
    yield all([
        fork(characterSaga),
        fork(chatgptSaga)
    ]);
}