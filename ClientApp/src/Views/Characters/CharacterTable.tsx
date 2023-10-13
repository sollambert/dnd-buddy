import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getCharacters,
  deleteCharacter,
} from "../../Redux/ActionCreators/character.action.creators.ts"
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store.ts";
import { useNavigate } from "react-router-dom";
import { Character } from "../../@types/global";

function CharacterTable(): JSX.Element {
  const dispatch = useDispatch();
  const characters = useSelector((store: RootState) => store.charactersReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const handleDelete = (e: any, id: number) => {
    dispatch(deleteCharacter(id));
  };

  return (
    <table style={{ width: '100%', border: "1px solid black", borderCollapse: "collapse"}}>
      <thead>
        <tr style={{ width: '100%', border: "1px solid black"}}>
          <th>Name</th>
          <th>Level</th>
          <th>Race</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        {characters?.map((character: Character, i: number) => {
          return (
            <React.Fragment key={i} >
              <tr>
                <td>{character.name}</td>
                <td>{character.level}</td>
                <td>{character.race}</td>
                <td>{character.profession}</td>
                <td>
                  <button onClick={() => navigate(`${character.id}`, {replace: true})}>DETAILS</button>
                </td>
                <td>
                  <button onClick={(e) => {handleDelete(e, character.id)}}>DELETE</button>
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default CharacterTable;
