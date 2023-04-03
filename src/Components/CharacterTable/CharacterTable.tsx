import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { getCharacter } from "../../Redux/ActionCreators/character.action.creators.ts";
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store.ts';

function CharacterTable() : JSX.Element {

    const dispatch = useDispatch();
    const character = useSelector((store : RootState) => store.characterReducer);

    useEffect(() => {
        dispatch(getCharacter());
    }, []); 

    return (
        <>
        {JSON.stringify(character)}
        </>
    )
}

export default CharacterTable;