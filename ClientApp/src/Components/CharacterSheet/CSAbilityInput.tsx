import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Character } from "../../@types/global";

type Props = {
    name: string,
    character: Character,
    value: number | undefined,
    inputHandler: (event: any, key: string) => void,
    setCharacter: Dispatch<SetStateAction<Character>>
}

export default function CSAbilityInput(props: PropsWithChildren<Props>) {

    const getBonus = (abilityScore: number | undefined) => {
        if (abilityScore) {
            let bonus = Math.floor((abilityScore - 10) / 2);
            return bonus > 0 ? `+${bonus}` : bonus
        }
        return "-"
    }

    return (
        <>
            <label htmlFor={props.name}>{props.name.toLocaleUpperCase()}</label>
            <div className="flex flex-row items-center text-xl">
                <input
                    className="w-14 mr-2 px-1"
                    name={props.name}
                    type="number"
                    value={props.value}
                    onInput={e=>props.inputHandler(e, props.name)}
                />
                <p>{getBonus(props.value)}</p>
            </div>
        </>
    )
}