import { all, fork } from 'redux-saga/effects'
import characterSaga from './character.saga';
import chatgptSaga from './chatgpt.saga';
import campaignSaga from './campaign.saga';
import encounterSaga from './encounter.saga';

export default function* rootSaga() {
    yield all([
        fork(characterSaga),
        fork(chatgptSaga),
        fork(campaignSaga),
        fork(encounterSaga)
    ]);
}