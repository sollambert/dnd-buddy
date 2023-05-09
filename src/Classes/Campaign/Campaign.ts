import Character from "../Character/Character";
import Encounter from "../Encounter/Encounter";

export default class Campaign {
    id: number;
    name: string;
    description: string;
    notes: Array<string>;
    encounters: Array<Encounter>;
    characters: Array<Character>;

    constructor(id: number, name: string, description: string, notes: Array<string>,
        encounters: Array<Encounter>, characters: Array<Character>) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.notes = notes;
            this.encounters = encounters;
            this.characters = characters;
    }
}