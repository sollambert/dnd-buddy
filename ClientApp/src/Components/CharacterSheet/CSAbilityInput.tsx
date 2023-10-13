import { PropsWithChildren } from "react";
import { Character } from "../../@types/global";

type Props = {
    name: string,
    character: Character,
    value: number | undefined,
    inputHandler: (event: any, key: string) => void
}

export const getBonus = (abilityScore: number | undefined) => {
    if (abilityScore) {
        let bonus = Math.floor((abilityScore - 10) / 2);
        return bonus >= 0 ? `+${bonus}` : bonus
    }
    return "-"
}

export default function CSAbilityInput(props: PropsWithChildren<Props>) {

    return (
        <div className="mt-2 border">
            <label htmlFor={props.name}>{props.name.toLocaleUpperCase()}</label>
            <div className="flex flex-row items-center text-xl mt">
                <input
                    className="w-14 mr-1 px-1"
                    name={props.name}
                    type="number"
                    value={props.value ? props.value : 0}
                    onInput={e=>props.inputHandler(e, props.name)}
                />
                <p className="mr-1">{getBonus(props.value)}</p>
            </div>
        </div>
    )
}