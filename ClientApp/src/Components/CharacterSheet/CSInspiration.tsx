import { PropsWithChildren } from "react";
import { Character } from "../../@types/global";
import FormInput from "../FormInput";

type Props = {
    character: Character,
    inputHandler: (event: any, key: string) => void
}

export default function CSInspiration(props: PropsWithChildren<Props>): JSX.Element {
    return (
        <div className="border p-2 flex items-center">
            <input
                className="w-14 h-8 mr-2 px-2"
                type="number"
                name="inspiration"
                onChange={e => props.inputHandler(e, "inspiration")}
                value={props.character.inspiration ? props.character.inspiration : 0}
            />
            <label htmlFor="inspiration">Inspiration</label>
        </div>
    )
}