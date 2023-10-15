import { useDispatch } from "react-redux";
import { Character, Coinage } from "../../@types/global";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import * as ActionCreators from "../../Redux/ActionCreators/character.action.creators";
import { useEffect, useState } from "react";
import Button from "../Buttons/Button";

type Props = {
    className?: string,
}

export default function CSCoinage(props: Props) {
    const dispatch = useDispatch();
    const character = useSelector((store: RootState) => store.characterReducer);
    const [coins, setCoins] = useState({
        copper: 0,
        silver: 0,
        electrum: 0,
        gold: 0,
        platinum: 0
    });

    useEffect(() => {
        if (character.coins) {
            setCoins(character.coins);
        }
    }, [character])

    function reduceCoins(character: Character) {
        let coins = character.coins;
        if (coins) {
            coins.silver += Math.floor(coins.copper / 10) + (coins.electrum * 5);
            coins.electrum = 0;
            coins.copper %= 10;
            coins.gold += Math.floor(coins.silver / 10);
            coins.silver %= 10;
            coins.platinum += Math.floor(coins.gold / 10);
            coins.gold %= 10;
        }
        dispatch(ActionCreators.setCharacter({...character, coins}));
    }

    function inputHandler(value: number, key: string) {
        const inputKey = key as keyof typeof character.coins;
        let currentCoins = character.coins;
        if (currentCoins) {
            currentCoins = {...currentCoins, [inputKey]: value}
        } else {
            currentCoins = {
                copper: 0,
                silver: 0,
                electrum: 0,
                gold: 0,
                platinum: 0,
                [inputKey]: value
            };
        }
        dispatch(ActionCreators.setCharacter({...character, coins: currentCoins}));
    }

    return (
        <div className={props.className}>
            <h1 className="text-xl">Coins</h1>
            <div>
                <label htmlFor="copper">CP</label>
                <input
                    className="my-2 ml-2 w-14"
                    name="copper"
                    type="number"
                    min="0"
                    value={coins.copper}
                    onChange={(e) => inputHandler(Number(e.target.value), "copper")}
                />
            </div>
            <div>
                <label htmlFor="silver">SP</label>
                <input
                    className="my-2 ml-2 w-14"
                    name="silver"
                    type="number"
                    min="0"
                    value={coins.silver}
                    onChange={(e) => inputHandler(Number(e.target.value), "silver")}
                />
            </div>
            <div>
                <label htmlFor="electrum">EP</label>
                <input
                    className="my-2 ml-2 w-14"
                    name="electrum"
                    type="number"
                    min="0"
                    value={coins.electrum}
                    onChange={(e) => inputHandler(Number(e.target.value), "electrum")}
                />
            </div>
            <div>
                <label htmlFor="gold">GP</label>
                <input
                    className="my-2 ml-2 w-14"
                    name="gold"
                    type="number"
                    min="0"
                    value={coins.gold}
                    onChange={(e) => inputHandler(Number(e.target.value), "gold")}
                />
            </div>
            <div>
                <label htmlFor="platinum">PP</label>
                <input
                    className="my-2 ml-2 w-14"
                    name="platinum"
                    type="number"
                    min="0"
                    value={coins.platinum}
                    onChange={(e) => inputHandler(Number(e.target.value), "platinum")}
                />
            </div>
            <Button
                className="w-full mt-2"
                onClick={() => {reduceCoins(character)}}
            >Reduce</Button>
        </div>
    )
}