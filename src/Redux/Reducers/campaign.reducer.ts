import Campaign from "../../Classes/Campaign/Campaign";
import * as ActionTypes from "../ActionTypes/campaign.action.types";

const initialState: Campaign = {

}

export const charactersReducer = (
    state: Array<Campaign> = [],
    action: ActionTypes.CampaignAction
) => {
    switch (action.type) {
        case ActionTypes.SET_CAMPAIGNS:
            return action.payload;
        case ActionTypes.CLEAR_CAMPAIGNS:
            return [];
        default:
            return state;
    }
}

export const characterReducer = (
    state: Campaign = initialState,
    action: ActionTypes.CampaignAction
) => {
    switch (action.type) {
        case ActionTypes.SET_CAMPAIGN:
            return action.payload;
        case ActionTypes.CLEAR_CAMPAIGN:
            return initialState;
        default:
            return state;
    }
};