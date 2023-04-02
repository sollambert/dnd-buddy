import React, { useState } from "react";
import FormInput from "./FormInput.tsx";

class InputBuffer {
  name: string;
  level: number;
  race: string;
  profession: string;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  [key: string]: any;

  constructor(
    name: string,
    level: number,
    race: string,
    profession: string,
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number
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

function CharacterForm() : JSX.Element {

  const [inputBuffer, setInputBuffer] = useState<InputBuffer>(
    new InputBuffer("", 1, "", "", 0, 0, 0, 0, 0, 0)
  );

  const [result, setResult] = useState<string>("");

  function handleInput(event: any, key: string) {
    if (key === "level") {
      event.target.value = Math.max(1, Math.min(event.target.value, 20));
    }
    const inputKey = key as keyof typeof inputBuffer;
    setInputBuffer({ ...inputBuffer, [inputKey]: event.target.value });
  }

  return (
    <>
      <h1>I'm a typescript component</h1>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          type="text"
          onChange={(e) => handleInput(e, "name")}
          value={inputBuffer.name}
          placeholder="Enter name..."
        ></input>
      </div>
      <div>
        <label htmlFor="name">Race: </label>
        <input
          name="race"
          type="text"
          onChange={(e) => handleInput(e, "race")}
          value={inputBuffer.race}
          placeholder="Enter race..."
        ></input>
      </div>
      <div>
        <FormInput
          name="class"
          display="Class"
          handler={handleInput}
          value={inputBuffer.class}
          type={''}
        />
      </div>
      <div>
        <FormInput
          type="number"
          name="level"
          display="Level"
          handler={handleInput}
          value={inputBuffer.level}
        />
      </div>
      <div>
        <FormInput
          type="number"
          name="str"
          display="Strength"
          handler={handleInput}
          value={inputBuffer.str}
        />
        <FormInput
          type="number"
          name="dex"
          display="Dexterity"
          handler={handleInput}
          value={inputBuffer.dex}
        />
        <FormInput
          type="number"
          name="con"
          display="Constitution"
          handler={handleInput}
          value={inputBuffer.cha}
        />
        <FormInput
          type="number"
          name="int"
          display="Intelligence"
          handler={handleInput}
          value={inputBuffer.cha}
        />
        <FormInput
          type="number"
          name="wis"
          display="Wisdom"
          handler={handleInput}
          value={inputBuffer.cha}
        />
        <FormInput
          type="number"
          name="cha"
          display="Charisma"
          handler={handleInput}
          value={inputBuffer.cha}
        />
      </div>
      <button
        onClick={() => {
          setResult(JSON.stringify(inputBuffer));
        }}
      >
        SHOW
      </button>
      {result}
    </>
  );
}

export { CharacterForm, InputBuffer };
