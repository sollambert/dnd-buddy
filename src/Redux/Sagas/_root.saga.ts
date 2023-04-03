import { SagaIterator } from 'redux-saga';
import { all, call, fork } from 'redux-saga/effects'
import characterSaga from './character.saga';

export default function* rootSaga() {
    yield all([
        fork(characterSaga)
    ]);
}