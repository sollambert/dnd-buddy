import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Character } from "../../@types/global";
import CSAbilities from "../../Components/CharacterSheet/CSAbilities";
import CSHeader from "../../Components/CharacterSheet/CSHeader";
import CSInspiration from "../../Components/CharacterSheet/CSInspiration";
import {CSProficiency} from "../../Components/CharacterSheet/CSProficiency";
import CSSavingThrows from "../../Components/CharacterSheet/CSSavingThrows";


type Props = {
  character: Character;
  setCharacter: Dispatch<SetStateAction<Character>>;
  editing?: boolean;
}

function CharacterForm(props: PropsWithChildren<Props>): JSX.Element {


  function handleInput(event: any, key: string) {
    console.log(event.target);
    console.log(key);
    if (key === "level") {
      event.target.value = Math.max(1, Math.min(event.target.value, 20));
    }
    const inputKey = key as keyof typeof props.character;
    if (event.target.value === "savingthrow") {
      props.setCharacter({ ...props.character, [inputKey]: !props.character[inputKey] });
      return;
    }
    props.setCharacter({ ...props.character, [inputKey]: event.target.value });
  }

  return (
    <>
      <div className="flex flex-col m-4">
        <CSHeader
          className="mx-3 flex flex-row"
          character={props.character}
          inputHandler={handleInput}
        />
        <div className="flex flex-row w-full">
          <CSAbilities
            character={props.character}
            inputHandler={handleInput}
          />
          <div className="flex flex-col m-2 mt-4">
            <CSInspiration
              className="border p-2 mb-2 flex items-center"
              character={props.character}
              inputHandler={handleInput}
            />
            <CSProficiency
              className="border p-2 mb-2 flex items-center"
              character={props.character}
              inputHandler={handleInput}
            />
            <CSSavingThrows
              className="border p-2 mb-2 flex flex-col items-start"
              character={props.character}
              inputHandler={handleInput}
              setCharacter={props.setCharacter}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterForm;
