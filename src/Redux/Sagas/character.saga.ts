import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { SagaIterator } from "redux-saga";
import * as ActionTypes from "../ActionTypes/character.action.types";
import * as ActionCreators from "../ActionCreators/character.action.creators";

function* addCharacter({ payload, callback }: ActionTypes.AddCharacterAction) {
  try {
    let { data } = yield call(() => axios.post("/api/character", payload));
    yield put(ActionCreators.setCharacter(payload));
    yield console.log(data);
  } catch (error) {}
  yield call(() => callback?.());
}

function* getCharacters(): SagaIterator {}

function* getCharacter(): SagaIterator {}

function* deleteCharacter(): SagaIterator {}

function* watcherSaga(): SagaIterator {
  takeLatest(ActionTypes.ADD_CHARACTER, addCharacter);
  takeLatest(ActionTypes.GET_CHARACTER, getCharacter);
  takeLatest(ActionTypes.GET_CHARACTERS, getCharacters);
  takeLatest(ActionTypes.DELETE_CHARACTER, deleteCharacter);
}

export default watcherSaga;
