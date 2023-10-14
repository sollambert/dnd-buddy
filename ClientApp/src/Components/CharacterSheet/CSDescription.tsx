import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { useEffect, useState } from "react";
import { setCharacter } from "../../Redux/ActionCreators/character.action.creators";

type Props = {
    className?: string,
    inputHandler: (event: any, key: string) => void
}

export default function CSDescription(props: Props): JSX.Element {
    const dispatch = useDispatch();
    const character = useSelector((store: RootState) => store.characterReducer);
    const [data, setData] = useState({
        age: 0,
        eyes: "",
        height: "",
        weight: 0,
        skin: "",
        hair: "",
    });

    useEffect(() => {
        if (character.age == undefined
            || character.eyes == undefined
            || character.height == undefined
            || character.weight == undefined
            || character.skin == undefined
            || character.hair == undefined) {
            dispatch(setCharacter({
                ...character,
                age: 0,
                eyes: "",
                height: "",
                weight: 0,
                skin: "",
                hair: "",
            }));
        } else {
            setData({
                age: character.age,
                eyes: character.eyes,
                height: character.height,
                weight: character.weight,
                skin: character.skin,
                hair: character.hair,
            })
        }
    }, [character])

    return (
        <div className={props.className}>
            <div className="flex flex-row">
                <div className="flex flex-col w-20 text-center mr-1">
                    <label htmlFor="age">Age</label>
                    <input className="text-center" name="age" type="number" value={data.age} onChange={e => props.inputHandler(e, "age")} />
                </div>
                <div className="flex flex-col w-20 text-center mr-1">
                    <label htmlFor="height">Height</label>
                    <input className="text-center" name="height" type="text" value={data.height} onChange={e => props.inputHandler(e, "height")} />
                </div>
                <div className="flex flex-col w-20 text-center mr-1">
                    <label htmlFor="weight">Weight</label>
                    <input className="text-center" name="weight" type="number" value={data.weight} onChange={e => props.inputHandler(e, "weight")} />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col w-20 text-center mr-1">
                    <label htmlFor="eyes">Eyes</label>
                    <input className="text-center" name="eyes" type="text" value={data.eyes} onChange={e => props.inputHandler(e, "eyes")} />
                </div>
                <div className="flex flex-col w-20 text-center mr-1">
                    <label htmlFor="skin">Skin</label>
                    <input className="text-center" name="skin" type="text" value={data.skin} onChange={e => props.inputHandler(e, "skin")} />
                </div>
                <div className="flex flex-col w-20 text-center mr-1">
                    <label htmlFor="hair">Hair</label>
                    <input className="text-center" name="hair" type="text" value={data.hair} onChange={e => props.inputHandler(e, "hair")} />
                </div>
            </div>
        </div>
    )
}