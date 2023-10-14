import { useDispatch } from "react-redux";
import { calcAbilityBonus, calcMaxHP, parseDice } from "../../Utils/global"
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import * as ActionCreators from "../../Redux/ActionCreators/character.action.creators";

type Props = {
    className?: string,
    inputHandler: (event: any, key: string) => void,
}

export default function CSHitPoints(props: Props): JSX.Element {
    const dispatch = useDispatch();
    const character = useSelector((store: RootState) => store.characterReducer);

    function handleCalcMaxHP() {
        if (character.hitDice && character.constitution) {
            let dice = parseDice(character.hitDice);
            let bonus = calcAbilityBonus(character.constitution);
            dispatch(ActionCreators.setCharacter({...character, maxHitpoints: calcMaxHP(dice, bonus)}));
        }
    }

    return (
        <div className={props.className}>
            <h1 className="text-xl">Hit Points</h1>
            <div className="flex flex-row">
                <div className="flex flex-col w-20 mr-1">
                    <label htmlFor="max-hitpoints">Maximum</label>
                    <input
                        name="max-hitpoints"
                        className="text-center text-xl"
                        type="number"
                        min="0"
                        value={character.maxHitpoints}
                        onChange={e => props.inputHandler(e, "maxHitpoints")}
                    />
                </div>
                <div className="flex flex-col w-20 mx-1">
                    <label htmlFor="hitpoints">Current</label>
                    <input
                        name="hitpoints"
                        className="text-center text-xl"
                        type="number"
                        min="0"
                        max={character.maxHitpoints}
                        value={character.hitpoints}
                        onChange={e => props.inputHandler(e, "hitpoints")}
                    />
                </div>
                <div className="flex flex-col w-20 ml-1">
                    <label htmlFor="temp-hitpoints">Temporary</label>
                    <input
                        name="temp-hitpoints"
                        className="text-center text-xl"
                        type="number"
                        min="0"
                        value={character.tempHitpoints}
                        onChange={e => props.inputHandler(e, "tempHitpoints")}
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="hit-dice">Hit Dice</label>
                <input
                    name="hit-dice"
                    className="text-center text-xl"
                    type="text"
                    value={character.hitDice}
                    onChange={e => props.inputHandler(e, "hitDice")}
                />
            </div>
            <button
                className="m-2"
                onClick={handleCalcMaxHP}
            >Calc Max</button>
        </div>
    )
}