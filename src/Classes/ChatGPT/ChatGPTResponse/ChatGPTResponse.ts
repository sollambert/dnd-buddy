import ChatGPTRequest from "../ChatGPTRequest/ChatGPTRequest";

export default class ChatGPTResponse {
    id: number;
    choices: Array<Choice>;
    finishReason: string;
    index: number;
    request: ChatGPTRequest;

    constructor(id: number, choices: Array<Choice>, finishReason: string, index: number, request: ChatGPTRequest) {
        this.id = id;
        this.choices = choices;
        this.finishReason = finishReason;
        this.index = index;
        this.request = request;
    }
}

export class Choice {
    id : number;
    message : Message;

    constructor(id: number, message: Message) {
        this.id = id;
        this.message = message;
    }
}

export class Message {
    id: number;
    role: string;
    content: string;

    constructor(id: number, role: string, content: string) {
        this.id = id;
        this.role = role;
        this.content = content;
    }
}