import { Character } from "../../@types/global";
import * as ActionTypes from "../ActionTypes/character.action.types";

const initialState: Character = {
  id: 0,
  name: ""
};

export const charactersReducer = (
  state: Array<Character> = [],
  action: ActionTypes.CharacterAction
) => {
  switch (action.type) {
    case ActionTypes.SET_CHARACTERS:
      return action.payload;
    case ActionTypes.CLEAR_CHARACTERS:
      return [];
    default:
      return state;
  }
}

export const characterReducer = (
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