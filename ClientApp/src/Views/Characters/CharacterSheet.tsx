import CSAbilities from "../../Components/CharacterSheet/CSAbilities";
import CSHeader from "../../Components/CharacterSheet/CSHeader";
import CSInspiration from "../../Components/CharacterSheet/CSInspiration";
import { CSProficiency } from "../../Components/CharacterSheet/CSProficiency";
import CSSavingThrows from "../../Components/CharacterSheet/CSSavingThrows";
import CSSkills from "../../Components/CharacterSheet/CSSkills";
import * as ActionCreators from "../../Redux/ActionCreators/character.action.creators";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import CSCoinage from "../../Components/CharacterSheet/CSCoinage";
import CSHitPoints from "../../Components/CharacterSheet/CSHitPoints";

function CharacterSheet(): JSX.Element {
  const dispatch = useDispatch();
  const character = useSelector((store: RootState) => store.characterReducer);


  function handleInput(event: any, key: string) {
    if (key === "level") {
      event.target.value = Math.max(1, Math.min(event.target.value, 20));
    }
    const inputKey = key as keyof typeof character;
    if (event.target.value === "savingthrow") {
      dispatch(ActionCreators.setCharacter({ ...character, [inputKey]: !character[inputKey] }));
      return;
    }
    dispatch(ActionCreators.setCharacter({ ...character, [inputKey]: event.target.value }));
  }

  return (
    <>
      <div className="flex flex-col m-4">
        <CSHeader
          className="mx-3 flex flex-row"
          inputHandler={handleInput}
        />
        <div className="flex flex-row w-full">
          <div className="flex flex-col">
            <CSAbilities
              inputHandler={handleInput}
            />
            <CSCoinage />
          </div>
          <div className="flex flex-col m-2 mt-4">
            <CSInspiration
              className="border p-2 mb-2 flex items-center"
              inputHandler={handleInput}
            />
            <CSProficiency
              className="border p-2 mb-2 flex items-center"
              inputHandler={handleInput}
            />
            <CSSavingThrows
              className="border p-2 mb-2 flex flex-col items-start"
              inputHandler={handleInput}
            />
            <CSSkills className="border p-2 mb-2 flex flex-col items-start" />
          </div>
          <div className="flex flex-col m-2 mt-4">
            <CSHitPoints
              className="border p-2 mb-2 flex flex-col items-start"
              inputHandler={handleInput}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterSheet;
