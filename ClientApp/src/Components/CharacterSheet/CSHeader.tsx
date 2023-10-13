import React, { PropsWithChildren } from "react";
import { Character } from "../../@types/global";
import FormInput from "../FormInput";
import { Alignment } from "../../Constants/character";

type Props = {
    character: Character,
    inputHandler: (event: any, key: string) => void,
}

export default function CSHeader(props: PropsWithChildren<Props>): JSX.Element {
    return (
        <div className="flex flex-row w-full justify-center">
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center m-2">
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="name"
                        display="Name"
                        handler={props.inputHandler}
                        value={props.character.name ? props.character.name : ""}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="profession"
                        display="Class"
                        handler={props.inputHandler}
                        value={props.character.profession ? props.character.profession : ""}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="background"
                        display="Background"
                        handler={props.inputHandler}
                        value={props.character.background ? props.character.background : ""}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="player"
                        display="Player"
                        handler={props.inputHandler}
                        value={props.character.player ? props.character.player : ""}
                    />
                </div>
                <div className="flex flex-row items-center m-2">
                    <FormInput
                        className="w-14 px-2 mr-4"
                        type="number"
                        name="level"
                        display="Total Level"
                        handler={props.inputHandler}
                        value={props.character.level ? props.character.level : 1}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="race"
                        display="Race"
                        handler={props.inputHandler}
                        value={props.character.race ? props.character.race : ""}
                    />
                    <div>
                        <label className="mr-2" htmlFor="alignment">
                            Alignment
                        </label>
                        <select
                            name="alignment"
                            className="w-12 mr-4 px-1"
                            onChange={(e: any) => props.inputHandler(e, "alignment")}
                            value={props.character.alignment ? props.character.alignment : Alignment.TN}
                        >
                            {(
                                Object.values(Alignment).filter(
                                    (value) => typeof value === "string"
                                ) as string[]
                            ).map((alignment: string, i: number) => {
                                if (typeof alignment === "string") {
                                    return (
                                        <option value={alignment} key={i}>
                                            {alignment}
                                        </option>
                                    );
                                } return null;
                            })}
                        </select>
                    </div>
                    <FormInput
                        className="w-48 px-2 mr-4"
                        type="number"
                        name="experience"
                        display="Experience"
                        handler={props.inputHandler}
                        value={props.character.experience ? props.character.experience : 0}
                    />
                </div>
            </div>
        </div>
    )
}