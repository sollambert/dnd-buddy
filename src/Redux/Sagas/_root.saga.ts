import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects'
import characterSaga from './character.saga';

export default function* rootSaga() : SagaIterator {
    yield all([
        call(()=> characterSaga)
    ]);
}