import Character from '../../Classes/Character/Character'
import axios from "axios";

interface characterResponse {
    character: Character;
}
interface deleteResponse {
    payload: number;
}

interface charactersResponse {
    characters: Array<Character>;
}

export async function postCharacter(
    payload: Character
) : Promise<characterResponse> {
    // console.log(payload);
    return await axios.post('/api/character', payload)
}

export async function getCharacters() : Promise<charactersResponse> {
    return await axios.get('/api/character');
}

export async function deleteCharacter(
    payload: number
) : Promise<deleteResponse> {
    return await axios.delete(`/api/character/${payload}`);
}