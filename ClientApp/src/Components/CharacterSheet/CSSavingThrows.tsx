import { Dispatch, PropsWithChildren, SetStateAction, useEffect } from "react"
import { Character } from "../../@types/global"
import CSSavingThrowInput from "./CSSavingThrowInput";
import { calcProficiency } from "./CSProficiency";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

type Props = {
    className?: string,
    inputHandler: (event: any, key: string) => void
}

export default function CSSavingThrows(props: PropsWithChildren<Props>): JSX.Element {

    const character = useSelector((store: RootState) => store.characterReducer);
    return (
        <div className={props.className}>
            <h1>Saving Throws</h1>
            <CSSavingThrowInput 
                name="strProf"
                display="Strength"
                value={character.strProf}
                abilityScore={character.strength}
                profBonus={calcProficiency(character)}
                inputHandler={props.inputHandler}
            />
            <CSSavingThrowInput 
                name="dexProf"
                display="Dexterity"
                value={character.dexProf}
                abilityScore={character.dexterity}
                profBonus={calcProficiency(character)}
                inputHandler={props.inputHandler}
            />
            <CSSavingThrowInput 
                name="conProf"
                display="Constitution"
                value={character.conProf}
                abilityScore={character.constitution}
                profBonus={calcProficiency(character)}
                inputHandler={props.inputHandler}
            />
            <CSSavingThrowInput 
                name="intProf"
                display="Intelligence"
                value={character.intProf}
                abilityScore={character.intelligence}
                profBonus={calcProficiency(character)}
                inputHandler={props.inputHandler}
            />
            <CSSavingThrowInput 
                name="wisProf"
                display="Wisdom"
                value={character.wisProf}
                abilityScore={character.wisdom}
                profBonus={calcProficiency(character)}
                inputHandler={props.inputHandler}
            />
            <CSSavingThrowInput 
                name="chaProf"
                display="Charisma"
                value={character.chaProf}
                abilityScore={character.charisma}
                profBonus={calcProficiency(character)}
                inputHandler={props.inputHandler}
            />
        </div>
    )
}