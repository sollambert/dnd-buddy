import React from "react";
import Character from "../../../Classes/Character/Character";

type Props = {
    character: Character;
}

function CharacterDetails({character} : Props): JSX.Element {
    return (
        <>
            {JSON.stringify(character)}
        </>);
}

export default CharacterDetails;
