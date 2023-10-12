import React, { PropsWithChildren, useState } from "react";
import FormInput from "../../Components/FormInput.tsx";
import { useDispatch } from "react-redux";
import { Character } from "../../@types/global";
import { addCharacter, updateCharacter } from "../../Redux/ActionCreators/character.action.creators.ts";


type Props = {
  character?: Character;
  editing?: boolean;
}

const newCharacter : Character = {id: 0, name: "New Character"};

function CharacterForm(props : PropsWithChildren<Props>): JSX.Element {

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
    if (key === "level") {
      event.target.value = Math.max(1, Math.min(event.target.value, 20));
    }
    const inputKey = key as keyof typeof character;
    setCharacter({ ...character, [inputKey]: event.target.value });
  }

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}>
          <div>
            <FormInput
              name="name"
              display="Name"
              handler={handleInput}
              value={character.name}
            />
          </div>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
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
              submitHandler(character);
            }}
          >
            SAVE
          </button>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}>
          <FormInput
            type="number"
            name="strength"
            display="Strength"
            handler={handleInput}
            value={character.strength}
          />
          <FormInput
            type="number"
            name="dexterity"
            display="Dexterity"
            handler={handleInput}
            value={character.dexterity}
          />
          <FormInput
            type="number"
            name="constitution"
            display="Constitution"
            handler={handleInput}
            value={character.constitution}
          />
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}>
          <FormInput
            type="number"
            name="intelligence"
            display="Intelligence"
            handler={handleInput}
            value={character.intelligence}
          />
          <FormInput
            type="number"
            name="wisdom"
            display="Wisdom"
            handler={handleInput}
            value={character.wisdom}
          />
          <FormInput
            type="number"
            name="charisma"
            display="Charisma"
            handler={handleInput}
            value={character.charisma}
          />
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: '100%', height: '100%'
        }}>
          <label htmlFor={'notes'}>Notes</label>
          <textarea
            value={character.background}
            onChange={(e) => handleInput(e, 'background')}
            rows={6}
            style={{ width: 'stretch', resize: 'none' }}
          />
        </div>
      </div>
    </>
  );
}

export default CharacterForm;
