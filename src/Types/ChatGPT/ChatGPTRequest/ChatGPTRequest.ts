export default class ChatGPTRequest {
    id?: number | undefined;
    prompt: string;
    temperature: number;

    constructor(prompt: string, temperature: number, id?: number) {
        this.id = id;
        this.prompt = prompt;
        this.temperature = temperature;
    }
}