import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { useEffect, useState } from "react";
import { setCharacter } from "../../Redux/ActionCreators/character.action.creators";
import { calcAbilityBonus } from "../../Utils/global";

type Props = {
    className?: string,
    inputHandler: (event: any, key: string) => void
}

export default function CSInititative(props: Props) {
    const dispatch = useDispatch();
    const character = useSelector((store: RootState) => store.characterReducer);
    const [data, setData] = useState({
        initMod: 0,
        initTotal: 0
    });

    useEffect(() => {
        if (character.initMod == undefined) {
            dispatch(setCharacter({
                ...character,
                initMod: 0,
            }));
        } else {
            let totalMod = 0;
            totalMod += character.dexterity ? Number(calcAbilityBonus(character.dexterity)) : 0;
            totalMod += character.initMod ? Number(character.initMod) : 0;
            setData({
                initMod: character.initMod,
                initTotal: totalMod
            })
        }
    }, [character])

    let bonusDisplay = data.initTotal >= 0 ? `+${data.initTotal}` : data.initTotal;

    return (
        <div className={props.className}>
            <h1 className="text-xl">Inititative</h1>
            <div className="flex flex-row">
                <div className="flex flex-col mr-1">
                    <label className="text-sm" htmlFor="initiative">
                        TOTAL MOD
                    </label>
                    <input readOnly className="w-16 text-center" type="text" value={bonusDisplay} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm" htmlFor="initiative">BONUS</label>
                    <input className="w-12 text-center" type="number" onChange={e => props.inputHandler(e, "initMod")}/>
                </div>
            </div>
        </div>
    )
}