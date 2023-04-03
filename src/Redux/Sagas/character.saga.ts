import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import * as ActionTypes from "../ActionTypes/character.action.types";
import * as ActionCreators from "../ActionCreators/character.action.creators";
import {postCharacter, getCharacters } from '../Services/character.services.ts';

function* addCharacter({ payload, callback }: ActionTypes.AddCharacterAction) {
  try {
    let { data } = yield call (postCharacter, payload);
    yield put(ActionCreators.setCharacter(data));
    yield put(ActionCreators.getCharacters());
  } catch (error) {
    console.error(error);
  } finally {
    yield call(() => callback?.());
  }
}

function* getAllCharacters({ callback }: ActionTypes.GetCharactersAction) {
  try {
    let { data } = yield call (getCharacters);
    yield put(ActionCreators.setCharacters(data));
  } catch (error) {
    console.error(error);
  } finally {
    yield call(() => callback?.());
  }
}

function* getCharacter() {}

function* deleteCharacter() {}

function* watcherSaga() {
  yield takeLatest(ActionTypes.ADD_CHARACTER, addCharacter);
  yield takeLatest(ActionTypes.GET_CHARACTER, getCharacter);
  yield takeLatest(ActionTypes.GET_CHARACTERS, getAllCharacters);
  yield takeLatest(ActionTypes.DELETE_CHARACTER, deleteCharacter);
}

export default watcherSaga;
