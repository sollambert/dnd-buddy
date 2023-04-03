import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters } from "../../Redux/ActionCreators/character.action.creators.ts";
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store.ts';
import { Character } from '../CharCreator/CharacterForm.tsx';

function CharacterTable(): JSX.Element {

    const dispatch = useDispatch();
    const characters = useSelector((store: RootState) => store.charactersReducer);

    useEffect(() => {
        dispatch(getCharacters());
    }, []);

    return (
        <ul>
            {characters?.map((character: Character, i: number) => {
                return (
                <li key={i}>
                    {JSON.stringify(character)}
                </li>)
            })}
        </ul>
    )
}

export default CharacterTable;