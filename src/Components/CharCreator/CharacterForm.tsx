import React, { useState } from "react";
import FormInput from "./FormInput.tsx";
import { useDispatch } from "react-redux";
import { addCharacter } from "../../Redux/ActionCreators/character.action.creators.ts";
import Character from '../../Character/Character.ts'

function CharacterForm(): JSX.Element {
  const [character, setCharacter] = useState<Character>(
    new Character("",1,"","",0,0,0,0,0,0)
  );

  const dispatch = useDispatch();
  const [result, setResult] = useState<string>("");

  function handleInput(event: any, key: string) {
    if (key === "level") {
      event.target.value = Math.max(1, Math.min(event.target.value, 20));
    }
    const inputKey = key as keyof typeof character;
    setCharacter({ ...character, [inputKey]: event.target.value });
  }

  const handleSubmit = (): void => {
    dispatch(addCharacter(character, () => setCharacter(new Character("",1,"","",0,0,0,0,0,0))
    ));
  };

  return (
    <>
      <div>
        <FormInput
          name="name"
          display="Name"
          handler={handleInput}
          value={character.name}
        />
      </div>
      <div>
        <FormInput
          name="race"
          display="Race"
          handler={handleInput}
          value={character.race}
        />
      </div>
      <div>
        <FormInput
          name="profession"
          display="Class"
          handler={handleInput}
          value={character.profession}
        />
      </div>
      <div>
        <FormInput
          type="number"
          name="level"
          display="Level"
          handler={handleInput}
          value={character.level}
        />
      </div>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        SHOW
      </button>
      {result}
    </>
  );
}

export { CharacterForm, Character };
