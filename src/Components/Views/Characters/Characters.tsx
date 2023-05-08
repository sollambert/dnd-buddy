import React from "react";

import { CharacterForm } from "../../CharCreator/CharacterForm";
import CharacterTable from "../../CharacterTable/CharacterTable";
import ChatGPTTable from "../../ChatGPT/ChatGPTTable/ChatGPTTable";

type Props = {
};

function Characters({
}: Props): JSX.Element {
  return (
  <>
    <CharacterForm />
    <CharacterTable />
    <ChatGPTTable />
  </>);
}

export default Characters;
