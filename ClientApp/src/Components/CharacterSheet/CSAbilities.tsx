import { PropsWithChildren } from "react";
import CSAbilityInput from "./CSAbilityInput";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

type Props = {
    className?: string,
    inputHandler: (event: any, key: string) => void
}

export default function CSAbilities(props : PropsWithChildren<Props>) : JSX.Element {

    const character = useSelector((store: RootState) => store.characterReducer);
    return (
        <div className={props.className}>
            <h1 className="text-xl">Abilities</h1>
            <CSAbilityInput
                name="strength"
                value={character.strength}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="dexterity"
                value={character.dexterity}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="constitution"
                value={character.constitution}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="intelligence"
                value={character.intelligence}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="wisdom"
                value={character.wisdom}
                inputHandler={props.inputHandler}
            />
            <CSAbilityInput
                name="charisma"
                value={character.charisma}
                inputHandler={props.inputHandler}
            />
        </div>
    )
}