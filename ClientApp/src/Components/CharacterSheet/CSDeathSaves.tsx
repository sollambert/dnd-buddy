import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { useEffect, useState } from "react";
import { setCharacter } from "../../Redux/ActionCreators/character.action.creators";

type Props = {
    className?: string;
    inputHandler: (event: any, key: string) => void;
}

export default function CSDeathSaves(props: Props) {
    const dispatch = useDispatch();
    const character = useSelector((store: RootState) => store.characterReducer);
    const [saves, setSaves] = useState({successes: 0, failures: 0});

    useEffect(() => {
        if (character.deathSuccesses == undefined
            || character.deathFailures == undefined) {
            dispatch(setCharacter({...character, deathSuccesses: 0, deathFailures: 0}));
        } else {
            setSaves({successes: character.deathSuccesses, failures: character.deathFailures})
        }
    }, [character])

    return (
        <div className={props.className}>
            <h1 className="text-xl">Death Saves</h1>
            <div className="flex flex-row">
                <div className="flex flex-col m-1">
                    <label className="my-1" htmlFor="death-successes">Successes</label>
                    <label className="my-1" htmlFor="death-failures">Failures</label>
                </div>
                <div className="flex flex-col m-1">
                    <input className="my-1" type="range" min="0" max="3" value={saves.successes} onChange={e => props.inputHandler(e, "deathSuccesses")} />
                    <input className="my-1" type="range" min="0" max="3" value={saves.failures} onChange={e => props.inputHandler(e, "deathFailures")} />
                </div>
                <div className="flex flex-col w-8 m-1">
                    <input className="my-1 text-center" readOnly type="text" min="0" max="3" value={saves.successes} />
                    <input className="my-1 text-center" readOnly type="text" min="0" max="3" value={saves.failures} />
                </div>
            </div>
        </div>
    )
}