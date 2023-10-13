import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter, updateCharacter } from "../../Redux/ActionCreators/character.action.creators";
import { RootState } from "../../Redux/store";
import { Character } from "../../@types/global";
import CharacterForm from "./CharacterForm";
import { useParams } from "react-router-dom";

function CharacterDetails(): JSX.Element {
    const dispatch = useDispatch();
    const characterReducer = useSelector((store: RootState) => store.characterReducer);
    const [character, setCharacter] = useState<Character>(characterReducer);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getCharacter(Number(id)))
    }, [dispatch])

    useEffect(() => {
        setCharacter(characterReducer)
    }, [characterReducer])

    useEffect(() => {
        document.title = character.name;
        return () => {
            document.title = 'D&D Buddy';
        }
    }, [character]);


    const submitHandler = (character: Character, cb?: () => void): void => {
        console.log(character)
        if (character.name !== "") {
            if (character.id) {
                dispatch(updateCharacter(character))
            }
        } else {
            character.name="Dingus";
            dispatch(updateCharacter(character))
        }
    };

    return (
        <>
            <button
                onClick={() => {
                    submitHandler(character);
                }}
            >
                SAVE
            </button>
            <CharacterForm character={character} setCharacter={setCharacter} editing={true} />
        </>);
}

export default CharacterDetails;
