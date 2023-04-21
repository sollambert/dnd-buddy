import ChatGPTRequest from "../../Types/ChatGPT/ChatGPTRequest/ChatGPTRequest";
import ChatGPTResponse from "../../Types/ChatGPT/ChatGPTResponse/ChatGPTResponse";
import axios from 'axios';

interface chatGPTResponse {
    response: ChatGPTResponse;
}

export async function getChatGPTResponses() : Promise<chatGPTResponse> {
    return await axios.get('/api/chatgpt');
}

export async function postChatGPTResponse(
    payload: ChatGPTRequest
) : Promise<chatGPTResponse> {
    console.log(payload);
    return await axios.post('/api/chatgpt', payload)
}