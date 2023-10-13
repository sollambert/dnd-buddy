import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Character } from "../../@types/global";

type Props = {
    name: string,
    display: string,
    value: boolean,
    abilityScore?: number,
    profBonus?: number,
    inputHandler: (event: any, key: string) => void
}


export default function CSSavingThrowInput(props: PropsWithChildren<Props>) {

    function calcSaveBonus(proficiency: boolean, abilityScore: number | undefined, profBonus: number | undefined) {
        if (abilityScore) {
            let bonus = Math.floor((abilityScore - 10) / 2);
            if (proficiency && profBonus) {
                bonus += Number(profBonus);
            }
            return bonus >= 0 ? `+${bonus}` : bonus
        }
        return "-"
    }
    return (
        <div key="strsave" className="flex">
            <input
                name={props.name}
                type="checkbox"
                onChange={e => props.inputHandler(e, props.name)}
                value={"savingthrow"}
                checked={!!Boolean(props.value)}
            />
            <p className="mx-2">
                {calcSaveBonus(props.value, props.abilityScore, props.profBonus)}
            </p>
            <label htmlFor={props.name}>{props.display}</label>
        </div>
    )
}