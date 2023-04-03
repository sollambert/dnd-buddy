import "./App.css";
import {CharacterForm} from "./Components/CharCreator/CharacterForm.tsx";
import CharacterTable from "./Components/CharacterTable/CharacterTable.tsx";

function App() {
  return (
    <div className="App">
        <CharacterForm />
        <CharacterTable />
    </div>
  );
}

export default App;
