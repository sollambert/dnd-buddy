import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Character } from "../../@types/global";
import FormInput from "../FormInput";
import CSAbilityInput from "./CSAbilityInput";

type Props = {
    character: Character,
    inputHandler: (event: any, key: string) => void,
    setCharacter: Dispatch<SetStateAction<Character>>
}

export default function CSHeader(props: PropsWithChildren<Props>): JSX.Element {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center">
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="name"
                        display="Name"
                        handler={props.inputHandler}
                        value={props.character.name}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="profession"
                        display="Class"
                        handler={props.inputHandler}
                        value={props.character.profession}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="background"
                        display="Background"
                        handler={props.inputHandler}
                        value={undefined}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="player"
                        display="Player Name"
                        handler={props.inputHandler}
                        value={undefined}
                    />
                </div>
                <div className="flex flex-row items-center">
                    <FormInput
                        className="w-14 px-2 mr-4"
                        type="number"
                        name="level"
                        display="Level"
                        handler={props.inputHandler}
                        value={props.character.level}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="race"
                        display="Race"
                        handler={props.inputHandler}
                        value={props.character.race}
                    />
                    <FormInput
                        className="w-12 px-2 mr-4"
                        name="alignment"
                        display="Alignment"
                        handler={props.inputHandler}
                        value={undefined}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        type="number"
                        name="experience"
                        display="Experience"
                        handler={props.inputHandler}
                        value={undefined}
                    />
                </div>
            </div>
        </div>
    )
}