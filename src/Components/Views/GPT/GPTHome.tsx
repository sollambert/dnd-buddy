import React from "react";

import ChatGPTForm from "../../ChatGPT/ChatGPTForm/ChatGPTForm";
import ChatGPTTable from "../../ChatGPT/ChatGPTTable/ChatGPTTable";

function GPTHome(): JSX.Element {
  return (
    <>
      <ChatGPTForm />
      <ChatGPTTable />
    </>
  );
}

export default GPTHome;
