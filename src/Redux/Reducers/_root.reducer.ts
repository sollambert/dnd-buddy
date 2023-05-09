import { combineReducers } from "redux";
import {characterReducer, charactersReducer} from "./character.reducer";
import {messageReducer, responseReducer} from "./chatgpt.reducer";
import { campaignReducer, campaignsReducer } from "./campaign.reducer";
import { encounterReducer, encountersReducer } from "./encounter.reducer";

const rootReducer = combineReducers({
    characterReducer,
    charactersReducer,
    campaignReducer,
    campaignsReducer,
    encounterReducer,
    encountersReducer,
    messageReducer,
    responseReducer
});

export default rootReducer;