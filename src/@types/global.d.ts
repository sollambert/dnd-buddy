export type RequireOnly<T, P extends keyof T> =
    Pick<T, P>
    & Partial<Omit<T, P>>;

export type Character = {
    id: number;
    name: string;
    level: number;
    race: Race;
    profession: Profession;
    strength?: number | undefined;
    dexterity?: number | undefined;
    constitution?: number | undefined;
    intelligence?: number | undefined;
    wisdom?: number | undefined;
    charisma?: number | undefined;
    background?: string | undefined;
    campaignId?: number | undefined;
}

export type DraftCharacter = RequireOnly<Character, 'name' | 'level' | 'race' | 'profession'>;

export type Campaign = {
    id: number;
    name: string;
    description: string;
    notes: Array<CampaignNote>;
    encounters: Array<Encounter>;
    characters: Array<Character>;
    // [key: string]: any;
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
    // [key: string]: any;
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