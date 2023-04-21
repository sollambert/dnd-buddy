import Character, {Race, Profession} from "../../Types/Character/Character";
import * as ActionTypes from "../ActionTypes/character.action.types";

const initialState: Character = {
  id: 0,
  name: "",
  level: 0,
  race: Race.HUMAN,
  profession: Profession.FIGHTER,
  str: 0,
  dex: 0,
  con: 0,
  int: 0,
  wis: 0,
  cha: 0,
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