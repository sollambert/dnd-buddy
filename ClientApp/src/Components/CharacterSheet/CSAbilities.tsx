import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Character } from "../../@types/global";
import CSAbilityInput from "./CSAbilityInput";

type Props = {
    character: Character,
    inputHandler: (event: any, key: string) => void
}

export default function CSAbilities(props : PropsWithChildren<Props>) : JSX.Element {

    return (
        <div className="m-2 flex flex-col w-24 h-full items-center text-sm">
            <CSAbilityInput
                name="strength"
                character={props.character}
                value={props.character.strength}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="dexterity"
                character={props.character}
                value={props.character.dexterity}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="constitution"
                character={props.character}
                value={props.character.constitution}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="intelligence"
                character={props.character}
                value={props.character.intelligence}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="wisdom"
                character={props.character}
                value={props.character.wisdom}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="charisma"
                character={props.character}
                value={props.character.charisma}
                inputHandler={props.inputHandler}
            />
        </div>
    )
}