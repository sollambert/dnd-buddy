import { Character } from "../../Components/CharCreator/CharacterForm";

export const GET_CHARACTER = "character/GET_CHARACTER";
export interface GetCharacterAction {
  type: typeof GET_CHARACTER;
  callback?: () => void;
}

export const GET_CHARACTERS = "character/GET_CHARACTERS";
export interface GetCharactersAction {
  type: typeof GET_CHARACTERS;
  payload: number,
  callback?: () => void;
}

export const SET_CHARACTER = "character/SET_CHARACTER";
export interface SetCharacterAction {
  type: typeof SET_CHARACTER;
  payload: Character;
  callback?: () => void;
}

export const ADD_CHARACTER = "character/ADD_CHARACTER";
export interface AddCharacterAction {
  type: typeof ADD_CHARACTER;
  payload: Character;
  callback?: () => void;
}

export const CLEAR_CHARACTER = "character/CLEAR_CHARACTER";
export interface ClearCharacterAction {
    type: typeof CLEAR_CHARACTER;
    callback?: () => void;
}


export const DELETE_CHARACTER = "character/DELETE_CHARACTER";
export interface DeleteCharacterAction {
  type: typeof DELETE_CHARACTER;
  payload: number;
  callback?: () => void;
}

export type CharacterAction =
  | AddCharacterAction
  | GetCharacterAction
  | GetCharactersAction
  | SetCharacterAction
  | DeleteCharacterAction
  | ClearCharacterAction;
