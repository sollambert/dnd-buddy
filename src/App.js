import "./App.css";
import {CharacterForm} from "./Components/CharCreator/CharacterForm.tsx";
import CharacterTable from "./Components/CharacterTable/CharacterTable.tsx";
import ChatGPTForm from "./Components/ChatGPTForm/ChatGPTForm.tsx";

function App() {
  return (
    <div className="App">
        <CharacterForm />
        <CharacterTable />
        <ChatGPTForm />
    </div>
  );
}

export default App;
