import { combineReducers } from "redux";
import characterReducer from "./character.reducer";

const rootReducer = combineReducers({
    characterReducer
});

export default rootReducer;