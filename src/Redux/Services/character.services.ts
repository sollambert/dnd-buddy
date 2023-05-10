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

async function postCharacter(
    payload: Character
) : Promise<characterResponse> {
    return await axios.post('/api/character', payload)
}

async function updateCharacter(
    payload: Character
) : Promise<characterResponse> {
    return await axios.put('/api/character', payload)
}

async function getCharacters() : Promise<charactersResponse> {
    return await axios.get('/api/character');
}

async function getCharacter(
    payload: number
) : Promise<characterResponse> {
    return await axios.get(`/api/character/${payload}`);
}

async function deleteCharacter(
    payload: number
) : Promise<deleteResponse> {
    return await axios.delete(`/api/character/${payload}`);
}

export default {postCharacter, getCharacters, getCharacter, deleteCharacter, updateCharacter}