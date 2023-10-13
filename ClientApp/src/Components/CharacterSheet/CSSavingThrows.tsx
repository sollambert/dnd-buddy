import { Dispatch, PropsWithChildren, SetStateAction, useEffect } from "react"
import { Character } from "../../@types/global"
import CSSavingThrowInput from "./CSSavingThrowInput";

type Props = {
    character: Character,
    inputHandler: (event: any, key: string) => void
    setCharacter: Dispatch<SetStateAction<Character>>;
}

export default function CSSavingThrows(props: PropsWithChildren<Props>): JSX.Element {


    useEffect(() => {
        console.log(props.character)
    }, [props.character])

    return (
        <div className="border p-2 flex flex-col items-start">
            <h1>Saving Throws</h1>
            <CSSavingThrowInput 
                name="strProf"
                display="Strength"
                value={props.character.strProf}
                abilityScore={props.character.strength}
                profBonus={props.character.proficiency}
                inputHandler={props.inputHandler}
            />
            <CSSavingThrowInput 
                name="dexProf"
                display="Dexterity"
                value={props.character.dexProf}
                abilityScore={props.character.dexterity}
                profBonus={props.character.proficiency}
                inputHandler={props.inputHandler}
            />
            <CSSavingThrowInput 
                name="conProf"
                display="Constitution"
                value={props.character.conProf}
                abilityScore={props.character.constitution}
                profBonus={props.character.proficiency}
                inputHandler={props.inputHandler}
            />
            <CSSavingThrowInput 
                name="intProf"
                display="Intelligence"
                value={props.character.intProf}
                abilityScore={props.character.intelligence}
                profBonus={props.character.proficiency}
                inputHandler={props.inputHandler}
            />
            <CSSavingThrowInput 
                name="wisProf"
                display="Wisdom"
                value={props.character.wisProf}
                abilityScore={props.character.wisdom}
                profBonus={props.character.proficiency}
                inputHandler={props.inputHandler}
            />
            <CSSavingThrowInput 
                name="chaProf"
                display="Charisma"
                value={props.character.chaProf}
                abilityScore={props.character.charisma}
                profBonus={props.character.proficiency}
                inputHandler={props.inputHandler}
            />
        </div>
    )
}