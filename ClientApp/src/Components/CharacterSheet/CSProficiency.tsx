import { PropsWithChildren } from "react";
import { Character } from "../../@types/global";

type Props = {
    character: Character,
    inputHandler: (event: any, key: string) => void
}

export default function CSProficiency(props: PropsWithChildren<Props>): JSX.Element {
    return (
        <div className="border p-2 flex items-center">
            <input
                className="w-14 h-8 mr-2 px-2"
                type="number"
                name="proficiency"
                onChange={e => props.inputHandler(e, "proficiency")}
                value={props.character.proficiency ? props.character.proficiency : 0}
            />
            <label htmlFor="proficiency">Proficiency Bonus</label>
        </div>
    )
}