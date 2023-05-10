import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import * as ActionTypes from "../ActionTypes/character.action.types";
import * as ActionCreators from "../ActionCreators/character.action.creators";
import CharacterServices from '../Services/character.services.ts';

function* addCharacter({ payload, callback }: ActionTypes.AddCharacterAction) {
  try {
    let { data } = yield call (CharacterServices.postCharacter, payload);
    yield put(ActionCreators.setCharacter(data));
    yield put(ActionCreators.getCharacters());
  } catch (error) {
    console.error(error);
  } finally {
    yield call(() => callback?.());
  }
}

function* updateCharacter({ payload, callback }: ActionTypes.UpdateCharacterAction) {
  try {
    let { data } = yield call (CharacterServices.updateCharacter, payload);
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
    let { data } = yield call (CharacterServices.getCharacters);
    yield put(ActionCreators.setCharacters(data));
  } catch (error) {
    console.error(error);
  } finally {
    yield call(() => callback?.());
  }
}

function* getCharacter({payload, callback }: ActionTypes.GetCharacterAction) {
  try {
    let { data } = yield call (CharacterServices.getCharacter, payload);
    yield put(ActionCreators.setCharacter(data));
  } catch (error) {
    console.error(error);
  } finally {
    yield call(() => callback?.());
  }
}

function* deleteCharacterById({payload, callback}: ActionTypes.DeleteCharacterAction) {
    try {
        let {data} = yield call(CharacterServices.deleteCharacter, payload);
        yield put(ActionCreators.getCharacters());
    } catch (error) {
        console.error(error);
    } finally {
        yield call(() => callback?.());
    }
}

function* watcherSaga() {
  yield takeLatest(ActionTypes.ADD_CHARACTER, addCharacter);
  yield takeLatest(ActionTypes.UPDATE_CHARACTER, updateCharacter);
  yield takeLatest(ActionTypes.GET_CHARACTER, getCharacter);
  yield takeLatest(ActionTypes.GET_CHARACTERS, getAllCharacters);
  yield takeLatest(ActionTypes.DELETE_CHARACTER, deleteCharacterById);
}

export default watcherSaga;
