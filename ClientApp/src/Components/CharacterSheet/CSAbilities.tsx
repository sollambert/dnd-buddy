import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Character } from "../../@types/global";
import FormInput from "../FormInput";
import CSAbilityInput from "./CSAbilityInput";

type Props = {
    character: Character,
    inputHandler: (event: any, key: string) => void,
    setCharacter: Dispatch<SetStateAction<Character>>
}

export default function CSAbilities(props : PropsWithChildren<Props>) : JSX.Element {

    const getBonus = (abilityScore: number | undefined) => {
        if (abilityScore) {
            let bonus = Math.floor((abilityScore - 10) / 2);
            return bonus > 0 ? `+${bonus}` : bonus
        }
        return "-"
    }

    return (
        <div className="m-2 flex flex-col w-24 h-full items-center text-sm">
            <CSAbilityInput
                name="strength"
                character={props.character}
                value={props.character.strength}
                inputHandler={props.inputHandler}
                setCharacter={props.setCharacter}
            />
            <CSAbilityInput
                name="dexterity"
                character={props.character}
                value={props.character.dexterity}
                inputHandler={props.inputHandler}
                setCharacter={props.setCharacter}
            />
            <CSAbilityInput
                name="constitution"
                character={props.character}
                value={props.character.constitution}
                inputHandler={props.inputHandler}
                setCharacter={props.setCharacter}
            />
            <CSAbilityInput
                name="intelligence"
                character={props.character}
                value={props.character.intelligence}
                inputHandler={props.inputHandler}
                setCharacter={props.setCharacter}
            />
            <CSAbilityInput
                name="wisdom"
                character={props.character}
                value={props.character.wisdom}
                inputHandler={props.inputHandler}
                setCharacter={props.setCharacter}
            />
            <CSAbilityInput
                name="charisma"
                character={props.character}
                value={props.character.charisma}
                inputHandler={props.inputHandler}
                setCharacter={props.setCharacter}
            />
        </div>
    )
}