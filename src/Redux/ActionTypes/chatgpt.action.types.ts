import ChatGPTRequest from "../../Types/ChatGPT/ChatGPTRequest/ChatGPTRequest";

export const SEND_PROMPT = "gpt/SEND_PROMPT";
export interface SendPromptAction {
    type: typeof SEND_PROMPT;
    payload: ChatGPTRequest;
    callback?: () => void;
}

export const GET_PROMPTS = "gpt/GET_PROMPT";
export interface GetPromptsAction {
    type: typeof GET_PROMPTS;
    callback?: () => void;
}

export type ChatGPTAction =
| SendPromptAction
| GetPromptsAction