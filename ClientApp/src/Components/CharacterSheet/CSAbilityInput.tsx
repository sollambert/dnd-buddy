import { PropsWithChildren } from "react";
import { calcAbilityBonus } from "../../Utils/global";

type Props = {
    name: string,
    value: number | undefined,
    inputHandler: (event: any, key: string) => void
}

export default function CSAbilityInput(props: PropsWithChildren<Props>) {
    let bonus = props.value ? calcAbilityBonus(props.value) : 0;
    let bonusDisplay= bonus >= 0 ? `+${bonus}` : bonus;
    return (
        <div className="mb-2 w-full border">
            <label htmlFor={props.name}>{props.name.toLocaleUpperCase()}</label>
            <div className="flex flex-row items-center text-xl mt">
                <input
                    className="w-14 mr-1 px-1"
                    name={props.name}
                    type="number"
                    value={props.value ? props.value : 0}
                    onInput={e=>props.inputHandler(e, props.name)}
                />
                <p className="mr-1">{bonusDisplay}</p>
            </div>
        </div>
    )
}