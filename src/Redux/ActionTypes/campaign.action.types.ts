import Campaign from "../../Classes/Campaign/Campaign";

export const GET_CAMPAIGN = "character/GET_CAMPAIGN";
export interface GetCampaignAction {
    type: typeof GET_CAMPAIGN;
    payload: number,
    callback?: () => void;
}

export const GET_CAMPAIGNS = "character/GET_CAMPAIGNS";
export interface GetCampaignsAction {
    type: typeof GET_CAMPAIGNS;
    callback?: () => void;
}

export const SET_CAMPAIGN = "character/SET_CAMPAIGN";
export interface SetCampaignAction {
    type: typeof SET_CAMPAIGN;
    payload: Campaign;
    callback?: () => void;
}

export const SET_CAMPAIGNS = "character/SET_CAMPAIGNS";
export interface SetCampaignsAction {
    type: typeof SET_CAMPAIGNS;
    payload: Array<Campaign>;
    callback?: () => void;
}

export const ADD_CAMPAIGN = "character/ADD_CAMPAIGN";
export interface AddCampaignAction {
    type: typeof ADD_CAMPAIGN;
    payload: Campaign;
    callback?: () => void;
}

export const CLEAR_CAMPAIGN = "character/CLEAR_CAMPAIGN";
export interface ClearCampaignAction {
    type: typeof CLEAR_CAMPAIGN;
    callback?: () => void;
}

export const CLEAR_CAMPAIGNS = "character/CLEAR_CAMPAIGNS";
export interface ClearCampaignsAction {
    type: typeof CLEAR_CAMPAIGNS;
    callback?: () => void;
}


export const DELETE_CAMPAIGN = "character/DELETE_CAMPAIGN";
export interface DeleteCampaignAction {
    type: typeof DELETE_CAMPAIGN;
    payload: number;
    callback?: () => void;
}

export type CampaignAction =
    | AddCampaignAction
    | GetCampaignAction
    | GetCampaignsAction
    | SetCampaignAction
    | SetCampaignsAction
    | DeleteCampaignAction
    | ClearCampaignAction
    | ClearCampaignsAction;
