import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Character } from "../../@types/global";
import CSAbilities from "../../Components/CharacterSheet/CSAbilities.tsx";
import CSHeader from "../../Components/CharacterSheet/CSHeader.tsx";
import CSInspiration from "../../Components/CharacterSheet/CSInspiration.tsx";
import CSProficiency from "../../Components/CharacterSheet/CSProficiency.tsx";
import CSSavingThrows from "../../Components/CharacterSheet/CSSavingThrows.tsx";


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
      <div className="flex flex-col m-4 w-full">
        <CSHeader
          character={props.character}
          inputHandler={handleInput}
        />
        <div className="flex flex-row w-full">
          <CSAbilities
            character={props.character}
            inputHandler={handleInput}
          />
          <div className="flex flex-col">
            <CSInspiration
              character={props.character}
              inputHandler={handleInput}
            />
            <CSProficiency
              character={props.character}
              inputHandler={handleInput}
            />
            <CSSavingThrows
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
