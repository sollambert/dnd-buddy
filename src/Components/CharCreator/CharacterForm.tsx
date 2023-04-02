import React, { useState } from "react";
import FormInput from "./FormInput.tsx";
import { useDispatch } from "react-redux";
import { addCharacter } from "../../Redux/ActionCreators/character.action.creators.ts";

enum Race {}

enum Profession {}

class Character {
  name: string;
  level: number;
  race: string;
  profession: string;
  str: number | undefined;
  dex: number | undefined;
  con: number | undefined;
  int: number | undefined;
  wis: number | undefined;
  cha: number | undefined;
  [key: string]: any;

  constructor(
    name: string,
    level: number,
    race: string,
    profession: string,
    str: number | undefined,
    dex: number | undefined,
    con: number | undefined,
    int: number | undefined,
    wis: number | undefined,
    cha: number | undefined
  ) {
    this.name = name;
    this.level = level;
    this.race = race;
    this.profession = profession;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
  }
}

function CharacterForm(): JSX.Element {
  const [character, setCharacter] = useState<Character>(
    new Character(
      "",
      1,
      "",
      "",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    )
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
    dispatch(addCharacter(character));
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
      <div>
        <FormInput
          type="number"
          name="str"
          display="Strength"
          handler={handleInput}
          value={character.str}
        />
        <FormInput
          type="number"
          name="dex"
          display="Dexterity"
          handler={handleInput}
          value={character.dex}
        />
        <FormInput
          type="number"
          name="con"
          display="Constitution"
          handler={handleInput}
          value={character.con}
        />
        <FormInput
          type="number"
          name="int"
          display="Intelligence"
          handler={handleInput}
          value={character.int}
        />
        <FormInput
          type="number"
          name="wis"
          display="Wisdom"
          handler={handleInput}
          value={character.wis}
        />
        <FormInput
          type="number"
          name="cha"
          display="Charisma"
          handler={handleInput}
          value={character.cha}
        />
      </div>
      <button
        onClick={() => {
          // setResult(JSON.stringify(character));
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
