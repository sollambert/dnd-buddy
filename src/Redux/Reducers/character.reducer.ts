import { Character } from "../../Components/CharCreator/CharacterForm";
import * as ActionTypes from "../ActionTypes/character.action.types";
import * as ActionCreators from "../ActionCreators/character.action.creators";
import { Action } from "redux";

const initialState: Character = {
  name: "",
  level: 0,
  race: "",
  profession: "",
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0,
};

const characterReducer = (
  state: Character = initialState,
  action: ActionTypes.CharacterAction
) => {
  switch (action.type) {
    case ActionTypes.SET_CHARACTER:
      return action.payload;
    case ActionTypes.CLEAR_CHARACTER:
      return initialState;
    default:
      return state;
  }
};

export default characterReducer;
