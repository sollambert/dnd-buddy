import { combineReducers } from "redux";
import {characterReducer, charactersReducer} from "./character.reducer";

const rootReducer = combineReducers({
    characterReducer,
    charactersReducer
});

export default rootReducer;