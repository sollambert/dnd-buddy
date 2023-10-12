import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter, deleteCharacter } from "../../Redux/ActionCreators/character.action.creators";
import { RootState } from "../../Redux/store";
import { Character } from "../../@types/global";
import CharacterForm from "./CharacterForm";
import BackButton from "../../Components/Buttons/BackButton";
import { useParams } from "react-router-dom";

function CharacterDetails(): JSX.Element {
    const dispatch = useDispatch();
    const character: Character = useSelector((store: RootState) => store.characterReducer);
    const {id} = useParams();

    const [editing, setEditing] = useState(false);

    useEffect(() => {
        dispatch(getCharacter(Number(id)))
    }, [dispatch])

    useEffect(() => {
        document.title = character.name;
        return () => {
            document.title = 'D&D Buddy';
        }
    }, [character]);

    const handleDelete = (e: any, id: number) => {
        dispatch(deleteCharacter(id));
    };

    return (
        <>
            <BackButton/>
            <CharacterForm character={character} editing={true} />
        </>);
}

export default CharacterDetails;
