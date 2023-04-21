export default class ChatGPTRequest {
    id: number;
    prompt: string;
    temperature: number;

    constructor(id: number, prompt: string, temperature: number) {
        this.id = id;
        this.prompt = prompt;
        this.temperature = temperature;
    }
}