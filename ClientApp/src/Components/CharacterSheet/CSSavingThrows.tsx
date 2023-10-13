import { Dispatch, PropsWithChildren, SetStateAction, useEffect } from "react"
import { Character } from "../../@types/global"

type Props = {
    character: Character,
    inputHandler: (event: any, key: string) => void
    setCharacter: Dispatch<SetStateAction<Character>>;
}

export default function CSSavingThrows(props: PropsWithChildren<Props>): JSX.Element {

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

    useEffect(() => {
        console.log(props.character)
    }, [props.character])

    return (
        <div className="border p-2 flex flex-col items-start">
            <h1>Saving Throws</h1>
            <div key="strsave" className="flex">
                <input
                    name="strprof"
                    type="checkbox"
                    onChange={e => props.inputHandler(e, "strProf")}
                    value={"savingthrow"}
                    checked={!!Boolean(props.character.strProf)}
                />
                <p className="mx-2">
                    {calcSaveBonus(props.character.strProf, props.character.strength, props.character.proficiency)}
                </p>
                <label htmlFor="strprof">Strength</label>
            </div>
        </div>
    )
}