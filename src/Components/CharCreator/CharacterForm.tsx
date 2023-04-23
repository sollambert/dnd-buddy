import React, { useState } from "react";
import FormInput from "../FormInput.tsx";
import { useDispatch } from "react-redux";
import { addCharacter } from "../../Redux/ActionCreators/character.action.creators.ts";
import Character, {
  Race,
  Profession,
} from "../../Types/Character/Character.ts";
import ChatGPTForm from "../ChatGPT/ChatGPTForm/ChatGPTForm.tsx";
import ChatGPTTable from "../ChatGPT/ChatGPTTable/ChatGPTTable.tsx";

function CharacterForm(): JSX.Element {
  const [character, setCharacter] = useState<Character>(
    new Character(0, "", 1, Race.HUMAN, Profession.FIGHTER, 0, 0, 0, 0, 0, 0)
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
    if (character.name !== "") {
      dispatch(
        addCharacter(character, () =>
          setCharacter(
            new Character(
              0,
              "",
              1,
              Race.HUMAN,
              Profession.FIGHTER,
              0,
              0,
              0,
              0,
              0,
              0
            )
          )
        )
      );
    } else {
      alert("Add a name dingus!");
    }
  };

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
      }}>
        <div>
          <FormInput
            name="name"
            display="Name"
            handler={handleInput}
            value={character.name}
          />
        </div>
        <select
          onChange={(e: any) => handleInput(e, "race")}
          value={character.race}
        >
          {(
            Object.values(Race).filter(
              (value) => typeof value === "string"
            ) as string[]
          ).map((race: string, i: number) => {
            if (typeof race === "string") {
              return (
                <option value={race} key={i}>
                  {race}
                </option>
              );
            }
          })}
        </select>
        <select
          onChange={(e: any) => handleInput(e, "profession")}
          value={character.profession}
        >
          {(
            Object.values(Profession).filter(
              (value) => typeof value === "string"
            ) as string[]
          ).map((profession: string, i: number) => {
            if (typeof profession === "string") {
              return (
                <option value={profession} key={i}>
                  {profession}
                </option>
              );
            }
          })}
        </select>
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
        <ChatGPTForm width="40vw" />
      </div>
      <ChatGPTTable />
    </> 
  );
}

export { CharacterForm, Character };
