import React, { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import FormInput from "../../Components/FormInput.tsx";
import { useDispatch } from "react-redux";
import { Character } from "../../@types/global";
import { addCharacter, updateCharacter } from "../../Redux/ActionCreators/character.action.creators.ts";
import CSAbilities from "../../Components/CharacterSheet/CSAbilities.tsx";
import CSHeader from "../../Components/CharacterSheet/CSHeader.tsx";


type Props = {
  character: Character;
  setCharacter: Dispatch<SetStateAction<Character>>;
  editing?: boolean;
}

const newCharacter: Character = { id: 0, name: "New Character" };

function CharacterForm(props: PropsWithChildren<Props>): JSX.Element {
  const dispatch = useDispatch();


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
      <CSHeader
        character={props.character}
        inputHandler={handleInput}
        setCharacter={props.setCharacter}
      />
      <CSAbilities
        character={props.character}
        inputHandler={handleInput}
        setCharacter={props.setCharacter}
      />
    </>
  );
}

export default CharacterForm;
