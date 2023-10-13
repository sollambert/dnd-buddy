import CharacterTable from "./CharacterTable";
import './Characters.css';
import { useDispatch } from "react-redux";
import { addNewCharacter } from "../../Redux/ActionCreators/character.action.creators";
import { useNavigate } from "react-router-dom";

function Characters(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToNewCharacter = (id : number) => {
    navigate(`${id}`, {replace: true})
  } 

  return (
  <>
    <button onClick={() => {
      dispatch(
        addNewCharacter(
          {name: "New Character"}
          , navigateToNewCharacter
          ))}}
      >New Character</button>
    <CharacterTable />
  </>);
}

export default Characters;
