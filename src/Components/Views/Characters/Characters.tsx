import React from "react";

import { CharacterForm } from "../../CharCreator/CharacterForm";
import CharacterTable from "../../CharacterTable/CharacterTable";

type Props = {
};

function Characters({
}: Props): JSX.Element {
  return (<>
    <CharacterForm />
    <CharacterTable />
  </>);
}

export default Characters;
