import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Views/Home/Home"
import Characters from "./Components/Views/Characters/Characters"
import Resources from "./Components/Views/Resources/Resources"

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
          <Route path="/resources" exact>
            <Nav />
            <Resources />
          </Route>
          <Route path="/resources/:endpoint" exact>
            <Nav />
            <Resources />
          </Route>
          <Route path="/resources/:endpoint/:index" exact>
            <Nav />
            <Resources />
          </Route>
          <Route path="/resources/:endpoint/:index/:subindex" exact>
            <Nav />
            <Resources />
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
