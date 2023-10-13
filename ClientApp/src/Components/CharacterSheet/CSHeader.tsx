import { PropsWithChildren } from "react";
import { Character } from "../../@types/global";
import FormInput from "../FormInput";
import { Alignment } from "../../Constants/character";
import { levelFromExperience } from "./CharacterUtils";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

type Props = {
    className?: string,
    inputHandler: (event: any, key: string) => void,
}

export default function CSHeader(props: PropsWithChildren<Props>): JSX.Element {
    const character = useSelector((store: RootState) => store.characterReducer);
    return (
        <div className={props.className}>
            <div className="flex flex-col items-center border">
                <div className="flex flex-row items-center m-2">
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="name"
                        display="Name"
                        handler={props.inputHandler}
                        value={character.name ? character.name : ""}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="profession"
                        display="Class"
                        handler={props.inputHandler}
                        value={character.profession ? character.profession : ""}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="background"
                        display="Background"
                        handler={props.inputHandler}
                        value={character.background ? character.background : ""}
                    />
                    <FormInput
                        className="w-48 px-2"
                        name="player"
                        display="Player"
                        handler={props.inputHandler}
                        value={character.player ? character.player : ""}
                    />
                </div>
                <div className="flex flex-row items-center m-2">
                    <FormInput
                        readOnly
                        className="w-8 mr-4 text-center"
                        type="text"
                        name="level"
                        display="Total Level"
                        handler={props.inputHandler}
                        value={levelFromExperience(character.experience ? character.experience : 0)}
                    />
                    <FormInput
                        className="w-48 px-2 mr-4"
                        name="race"
                        display="Race"
                        handler={props.inputHandler}
                        value={character.race ? character.race : ""}
                    />
                    <div>
                        <label className="mr-2" htmlFor="alignment">
                            Alignment
                        </label>
                        <select
                            name="alignment"
                            className="w-12 mr-4 px-1"
                            onChange={(e: any) => props.inputHandler(e, "alignment")}
                            value={character.alignment ? character.alignment : Alignment.TN}
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
                        className="w-48 px-2"
                        type="number"
                        name="experience"
                        display="Experience"
                        handler={props.inputHandler}
                        value={character.experience ? character.experience : 0}
                    />
                </div>
            </div>
        </div>
    )
}