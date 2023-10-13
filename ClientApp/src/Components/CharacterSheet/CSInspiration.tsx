import { PropsWithChildren } from "react";
import { Character } from "../../@types/global";
import FormInput from "../FormInput";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

type Props = {
    className?: string,
    inputHandler: (event: any, key: string) => void
}

export default function CSInspiration(props: PropsWithChildren<Props>): JSX.Element {
    const character = useSelector((store: RootState) => store.characterReducer);
    return (
        <div className={props.className}>
            <input
                className="w-14 h-8 mr-2 px-2"
                type="number"
                name="inspiration"
                onChange={e => props.inputHandler(e, "inspiration")}
                value={character.inspiration ? character.inspiration : 0}
            />
            <label htmlFor="inspiration">Inspiration</label>
        </div>
    )
}