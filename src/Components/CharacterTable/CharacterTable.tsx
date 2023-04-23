import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getCharacters,
  deleteCharacter,
} from "../../Redux/ActionCreators/character.action.creators.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store.ts";
import { Character } from "../CharCreator/CharacterForm.tsx";

function CharacterTable(): JSX.Element {
  const dispatch = useDispatch();
  const characters = useSelector((store: RootState) => store.charactersReducer);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  const handleDelete = (e: any, id: number) => {
    dispatch(deleteCharacter(id));
  };

  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Level</th>
        <th>Race</th>
        <th>Class</th>
        <th>STR</th>
        <th>DEX</th>
        <th>CON</th>
        <th>INT</th>
        <th>WIS</th>
        <th>CHA</th>
        <th></th>
      </thead>
      <tbody>
        {characters?.map((character: Character, i: number) => {
          return (
            <tr key={i}>
              <td>{character.name}</td>
              <td>{character.level}</td>
              <td>{character.race}</td>
              <td>{character.profession}</td>
              <td>{character.strength}</td>
              <td>{character.dexterity}</td>
              <td>{character.constitution}</td>
              <td>{character.intelligence}</td>
              <td>{character.wisdom}</td>
              <td>{character.charisma}</td>
              <td>
                <button
                  onClick={(e) => {
                    handleDelete(e, character.id);
                  }}
                >
                  DELETE
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CharacterTable;
