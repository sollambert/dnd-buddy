import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Character } from "../../@types/global";
import FormInput from "../FormInput";

type Props = {
    character: Character,
    inputHandler: (event: any, key: string) => void,
    setCharacter: Dispatch<SetStateAction<Character>>
}

export default function CSProficiency(props: PropsWithChildren<Props>): JSX.Element {
    return (
        <div className="border p-2 flex items-center">
            <input
                className="w-14 h-8 mr-2 px-2"
                type="number"
                name="proficiency"
                onChange={e => props.inputHandler(e, "proficiency")}
                value={props.character.proficiency}
            />
            <label htmlFor="proficiency">Proficiency Bonus</label>
        </div>
    )
}