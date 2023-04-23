import "./App.css";
import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Views/Home/Home"
import Characters from "./Components/Views/Characters/Characters"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Nav />
            <Home />
          </Route>
          <Route path="/characters" exact>
            <Nav />
            <Characters />
          </Route>
          <Route>
            <Nav />
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
