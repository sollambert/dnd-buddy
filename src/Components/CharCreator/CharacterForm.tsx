import React, { useState, useEffect, ReactEventHandler } from "react";

type AppProps = {};

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

function CharacterForm({}: AppProps): JSX.Element {
  const [inputBuffer, setInputBuffer] = useState<InputBuffer>(
    new InputBuffer("", 1, "", "", 0, 0, 0, 0, 0, 0)
  );

  const [result, setResult] = useState<string>("");

  function handleInput(event: any, key: string) {
    if (key == "level") {
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
        <label htmlFor="class">Class: </label>
        <input
          name="class"
          type="text"
          onChange={(e) => handleInput(e, "profession")}
          value={inputBuffer.profession}
          placeholder="Enter class..."
        ></input>
      </div>
      <div>
        <label htmlFor="level">Level: </label>
        <input
          name="level"
          type="number"
          min="1"
          max="20"
          onChange={(e) => handleInput(e, "level")}
          value={inputBuffer.level}
        ></input>
      </div>
      <div>
        <label htmlFor="str">Strength: </label>
        <input
          name="str"
          type="number"
          onChange={(e) => handleInput(e, "str")}
          value={inputBuffer.str}
        ></input>
        <label htmlFor="dex">Dexterity: </label>
        <input
          name="dex"
          type="number"
          onChange={(e) => handleInput(e, "dex")}
          value={inputBuffer.dex}
        ></input>
        <label htmlFor="con">Constitution: </label>
        <input
          name="con"
          type="number"
          onChange={(e) => handleInput(e, "con")}
          value={inputBuffer.con}
        ></input>
        <label htmlFor="int">Intelligence: </label>
        <input
          name="int"
          type="number"
          onChange={(e) => handleInput(e, "int")}
          value={inputBuffer.int}
        ></input>
        <label htmlFor="wis">Wisdom: </label>
        <input
          name="wis"
          type="number"
          onChange={(e) => handleInput(e, "wis")}
          value={inputBuffer.wis}
        ></input>
        <label htmlFor="cha">Charisma: </label>
        <input
          name="cha"
          type="number"
          onChange={(e) => handleInput(e, "cha")}
          value={inputBuffer.cha}
        ></input>
      </div>
      <button onClick={() => {setResult(JSON.stringify(inputBuffer))}}>SHOW</button>
      {result}
    </>
  );
}

export default CharacterForm;
