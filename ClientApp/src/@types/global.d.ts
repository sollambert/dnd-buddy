export type RequireOnly<T, P extends keyof T> =
    Pick<T, P>
    & Partial<Omit<T, P>>;

export type Character = {
    id: number;
    name: string;
    level: number;
    race: Race;
    profession: Profession;
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
    background?: string;
    campaignId?: number;
}

export type Campaign = {
    id: number;
    name: string;
    description: string;
    notes: Array<CampaignNote>;
    encounters: Array<Encounter>;
    characters: Array<Character>;
}

export type ChatGPTRequest = {
    id?: number | undefined;
    prompt: string;
    temperature: number;
}
export type ChatGPTResponse = {
    id: number;
    choices: Array<Choice>;
    finishReason: string;
    index: number;
    request: ChatGPTRequest;
}

export type Choice = {
    id : number;
    message : Message;
}

export type Message = {
    id: number;
    role: string;
    content: string;
}

export type Encounter = {
    id: number;
    entities: Array<Entity>;
    items: Array<Item>;
    notes: Array<string>;
    cr: number;
    exp: number;
    name: string;
    description: string;
    imageUrl: string;
}

export type Entity = {
    id: number;
    name: string;
    description: string;
    apiUrl: string;
}

export type Item = {
    id: number;
    name: string;
    description: string;
    apiUrl: string;
}

export type CampaignInfo = {
        id: number,
        name: string
    }

export type CampaignNote = {
    campaignId: number,
    note: string
}