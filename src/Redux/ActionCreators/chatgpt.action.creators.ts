import ChatGPTRequest from "../../Types/ChatGPT/ChatGPTRequest/ChatGPTRequest";
import ChatGPTResponse from "../../Types/ChatGPT/ChatGPTResponse/ChatGPTResponse";
import * as actions from "../ActionTypes/chatgpt.action.types";

export function sendPrompt(payload: ChatGPTRequest, callback?: () => void): actions.SendPromptAction {
    return {
        type: actions.SEND_PROMPT,
        payload,
        callback
    };
}

export function getPrompts(callback?: () => void): actions.GetPromptsAction {
    return {
        type: actions.GET_PROMPTS,
        callback
    };
}

export function setPrompts(payload: Array<ChatGPTResponse>, callback?: () => void): actions.SetPromptAction {
    return {
        type: actions.SET_PROMPTS,
        payload,
        callback
    };
}