import React, { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import FormInput from "../../Components/FormInput.tsx";
import { useDispatch } from "react-redux";
import { Character } from "../../@types/global";
import { addCharacter, updateCharacter } from "../../Redux/ActionCreators/character.action.creators.ts";
import CSAbilities from "../../Components/CharacterSheet/CSAbilities.tsx";
import CSHeader from "../../Components/CharacterSheet/CSHeader.tsx";
import CSInspiration from "../../Components/CharacterSheet/CSInspiration.tsx";
import CSProficiency from "../../Components/CharacterSheet/CSProficiency.tsx";


type Props = {
  character: Character;
  setCharacter: Dispatch<SetStateAction<Character>>;
  editing?: boolean;
}

function CharacterForm(props: PropsWithChildren<Props>): JSX.Element {


  function handleInput(event: any, key: string) {
    console.log(event);
    console.log(key);
    if (key === "level") {
      event.target.value = Math.max(1, Math.min(event.target.value, 20));
    }
    const inputKey = key as keyof typeof props.character;
    props.setCharacter({ ...props.character, [inputKey]: event.target.value });
  }

  return (
    <>
      <div className="flex flex-col m-4 w-full">
        <CSHeader
          character={props.character}
          inputHandler={handleInput}
          setCharacter={props.setCharacter}
        />
        <div className="flex flex-row w-full">
          <CSAbilities
            character={props.character}
            inputHandler={handleInput}
            setCharacter={props.setCharacter}
          />
          <div className="flex flex-col">
            <CSInspiration
              character={props.character}
              inputHandler={handleInput}
              setCharacter={props.setCharacter}
            />
            <CSProficiency
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
