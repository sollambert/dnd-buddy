export default class ChatGPTResponse {
    id: number;
    message: Message;
    finishReason: string;
    index: number;

    constructor(id: number, message: Message, finishReason: string, index: number) {
        this.id = id;
        this.message = message;
        this.finishReason = finishReason;
        this.index = index;
    }
}

class Message {
    id: number;
    role: string;
    content: string;

    constructor(id: number, role: string, content: string) {
        this.id = id;
        this.role = role;
        this.content = content;
    }
}