import Character from '../../Character/Character'
import axios from "axios";

interface characterResponse {
    character: Character;
}

export async function postCharacter(
    payload: Character
) : Promise<characterResponse> {
    console.log(payload);
    return await axios.post('/api/character', payload)
}