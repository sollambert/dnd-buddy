import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../../Redux/ActionCreators/character.action.creators";
import { RootState } from "../../../Redux/store";
import { useParams } from "react-router-dom";

type Params = {
    id?: string;
}

function CharacterDetails(): JSX.Element {
    const dispatch = useDispatch();
    const character = useSelector((store: RootState) => store.characterReducer);
    const params : Params = useParams();

    useEffect(() => {
        dispatch(getCharacter(Number(params.id)))
    }, [dispatch])

    return (
        <>
            {JSON.stringify(character)}
        </>);
}

export default CharacterDetails;
