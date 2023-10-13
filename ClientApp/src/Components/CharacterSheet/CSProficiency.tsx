import { PropsWithChildren } from "react";
import { Character } from "../../@types/global";
import { levelFromExperience } from "./CharacterUtils";

type Props = {
    character: Character,
    className?: string,
    inputHandler: (event: any, key: string) => void
}

export function CSProficiency(props: PropsWithChildren<Props>): JSX.Element {
    return (
        <div className={props.className}>
            <input
                readOnly
                className="w-6 h-8 mr-2 text-center"
                name="proficiency"
                onChange={e => props.inputHandler(e, "proficiency")}
                value={calcProficiency(props.character)}
            />
            <label htmlFor="proficiency">Proficiency Bonus</label>
        </div>
    )
}

export function calcProficiency(character: Character) {
    let level = levelFromExperience(character.experience ? character.experience : 1);
    return  Math.floor((level - 1) / 4) + 2
}