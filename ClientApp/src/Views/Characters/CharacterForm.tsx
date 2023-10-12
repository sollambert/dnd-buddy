import React, { PropsWithChildren, useState } from "react";
import FormInput from "../../Components/FormInput.tsx";
import { useDispatch } from "react-redux";
import { Character } from "../../@types/global";
import { addCharacter, updateCharacter } from "../../Redux/ActionCreators/character.action.creators.ts";
import CSAbilities from "../../Components/CharacterSheet/CSAbilities.tsx";
import CSHeader from "../../Components/CharacterSheet/CSHeader.tsx";


type Props = {
  character?: Character;
  editing?: boolean;
}

const newCharacter: Character = { id: 0, name: "New Character" };

function CharacterForm(props: PropsWithChildren<Props>): JSX.Element {

  const [character, setCharacter] = useState<Character>(props.character ? props.character : newCharacter);
  const dispatch = useDispatch();


  const submitHandler = (character: Character, cb?: () => void): void => {
    if (character.name !== "") {
      if (character.id) {
        dispatch(updateCharacter(character))
      }
      else {
        dispatch(addCharacter(character, cb))
      }
    } else {
      alert("Add a name dingus!");
    }
  };

  function handleInput(event: any, key: string) {
    console.log(event);
    console.log(key);
    if (key === "level") {
      event.target.value = Math.max(1, Math.min(event.target.value, 20));
    }
    const inputKey = key as keyof typeof character;
    setCharacter({ ...character, [inputKey]: event.target.value });
  }

  return (
    <>
      <button
        onClick={() => {
          submitHandler(character);
        }}
      >
        SAVE
      </button>
      <CSHeader
        character={character}
        inputHandler={handleInput}
        setCharacter={setCharacter}
      />
      <CSAbilities
        character={character}
        inputHandler={handleInput}
        setCharacter={setCharacter}
      />
    </>
  );
}

export default CharacterForm;
