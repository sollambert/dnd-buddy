import React from "react";

import { CharacterForm } from "../../CharCreator/CharacterForm";
import CharacterTable from "../../CharacterTable/CharacterTable";

function Characters(): JSX.Element {
  return (
  <>
    <CharacterForm />
    <CharacterTable />
  </>);
}

export default Characters;
