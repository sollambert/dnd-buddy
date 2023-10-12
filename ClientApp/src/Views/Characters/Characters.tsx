import React from "react";

import CharacterTable from "./CharacterTable";
import './Characters.css';
import { Character } from "../../@types/global";
import { useDispatch } from "react-redux";
import { addCharacter } from "../../Redux/ActionCreators/character.action.creators";
import { characterReducer } from "../../Redux/Reducers/character.reducer";
import { RootState } from "../../Redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Characters(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentCharacter = useSelector((store: RootState) => store.characterReducer);

  const navigateToNewCharacter = () => {
    navigate(`${currentCharacter.id}`, {replace: true})
  } 

  return (
  <>
    <button onClick={() => {
      dispatch(
        addCharacter(
          {id: 0, name: "New Character"}
          , navigateToNewCharacter
          ))}}
      >New Character</button>
    <CharacterTable />
  </>);
}

export default Characters;
