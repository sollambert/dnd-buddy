import "./App.css";
import {CharacterForm} from "./Components/CharCreator/CharacterForm.tsx";
import CharacterTable from "./Components/CharacterTable/CharacterTable.tsx";
import ChatGPTForm from "./Components/ChatGPT/ChatGPTForm/ChatGPTForm.tsx";
import ChatGPTTable from "./Components/ChatGPT/ChatGPTTable/ChatGPTTable";

function App() {
  return (
    <div className="App">
        <CharacterForm />
        <CharacterTable />
        <ChatGPTForm />
        <ChatGPTTable />
    </div>
  );
}

export default App;
