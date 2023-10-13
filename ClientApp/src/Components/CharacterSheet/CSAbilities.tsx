import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Character } from "../../@types/global";
import CSAbilityInput from "./CSAbilityInput";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

type Props = {
    className?: string,
    inputHandler: (event: any, key: string) => void
}

export default function CSAbilities(props : PropsWithChildren<Props>) : JSX.Element {

    const character = useSelector((store: RootState) => store.characterReducer);
    return (
        <div className="m-2 flex flex-col w-24 h-full items-center text-sm">
            <CSAbilityInput
                name="strength"
                character={character}
                value={character.strength}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="dexterity"
                character={character}
                value={character.dexterity}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="constitution"
                character={character}
                value={character.constitution}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="intelligence"
                character={character}
                value={character.intelligence}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="wisdom"
                character={character}
                value={character.wisdom}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="charisma"
                character={character}
                value={character.charisma}
                inputHandler={props.inputHandler}
            />
        </div>
    )
}