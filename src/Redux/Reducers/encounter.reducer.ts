import Encounter from "../../Classes/Encounter/Encounter";
import * as ActionTypes from "../ActionTypes/encounter.action.types";

const initialState: Encounter = {

}

export const charactersReducer = (
    state: Array<Encounter> = [],
    action: ActionTypes.EncounterAction
) => {
    switch (action.type) {
        case ActionTypes.SET_ENCOUNTERS:
            return action.payload;
        case ActionTypes.CLEAR_ENCOUNTERS:
            return [];
        default:
            return state;
    }
}

export const characterReducer = (
    state: Encounter = initialState,
    action: ActionTypes.EncounterAction
) => {
    switch (action.type) {
        case ActionTypes.SET_ENCOUNTER:
            return action.payload;
        case ActionTypes.CLEAR_ENCOUNTER:
            return initialState;
        default:
            return state;
    }
};