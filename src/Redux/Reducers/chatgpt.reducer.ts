import ChatGPTResponse from "../../Types/ChatGPT/ChatGPTResponse/ChatGPTResponse";
import * as ActionTypes from "../ActionTypes/chatgpt.action.types";
export const characterReducer = (
    state: Array<ChatGPTResponse> = new Array<ChatGPTResponse>(),
    action: ActionTypes.ChatGPTAction
) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMPT:
            return [...state, action.payload];
        case ActionTypes.SET_PROMPTS:
            return action.payload;
        case ActionTypes.CLEAR_PROMPTS:
            return new Array<ChatGPTResponse>();
        default:
            return state;
    }
};