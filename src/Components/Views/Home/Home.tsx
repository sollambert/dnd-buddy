import React from "react";

import ChatGPTForm from "../../ChatGPT/ChatGPTForm/ChatGPTForm";
import ChatGPTTable from "../../ChatGPT/ChatGPTTable/ChatGPTTable";

type Props = {};

function Home({}: Props): JSX.Element {
  return (
    <>
      <ChatGPTForm />
      <ChatGPTTable />
    </>
  );
}

export default Home;
