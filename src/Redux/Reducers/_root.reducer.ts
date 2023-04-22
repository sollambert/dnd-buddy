import { combineReducers } from "redux";
import {characterReducer, charactersReducer} from "./character.reducer";
import {messageReducer, responseReducer} from "./chatgpt.reducer";

const rootReducer = combineReducers({
    characterReducer,
    charactersReducer,
    messageReducer,
    responseReducer
});

export default rootReducer;