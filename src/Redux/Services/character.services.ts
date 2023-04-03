import Character from '../../Character/Character'
import axios from "axios";

interface characterResponse {
    character: Character;
}

interface charactersResponse {
    characters: Array<Character>;
}

export async function postCharacter(
    payload: Character
) : Promise<characterResponse> {
    console.log(payload);
    return await axios.post('/api/character', payload)
}

export async function getCharacters() : Promise<charactersResponse> {
    return await axios.get('/api/character');
}