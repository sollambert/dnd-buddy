export default class Encounter {

    id: number;
    entities: Array<Entity>;
    items: Array<Item>;
    notes: Array<string>;
    cr: number;
    exp: number;
    name: string;
    description: string;
    imageUrl: string;

    constructor(id: number, entites: Array<Entity>, items: Array<Item>, notes: Array<string>,
        cr: number, exp: number, name: string, description: string, imageUrl: string) {
        this.id = id;
        this.entities = entites;
        this.items = items;
        this.notes = notes;
        this.cr = cr;
        this.exp = exp;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}

export class Entity {
    id: number;
    name: string;
    description: string;
    apiUrl: string;

    constructor(id: number, name: string, description: string, apiUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.apiUrl = apiUrl;
    }
}

export class Item {
    id: number;
    name: string;
    description: string;
    apiUrl: string;

    constructor(id: number, name: string, description: string, apiUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.apiUrl = apiUrl;
    }
}