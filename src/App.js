import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Views/Home/Home"
import GPTHome from "./Components/Views/GPT/GPTHome"
import Characters from "./Components/Views/Characters/Characters"
import Resources from "./Components/Views/Resources/Resources"
import Campaigns from "./Components/Views/Campaigns/Campaigns"
import Encounters from "./Components/Views/Encounters/Encounters"

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
          <Route path="/gpt" exact>
            <Nav />
            <GPTHome />
          </Route>
          <Route path="/campaigns" exact>
            <Nav />
            <Campaigns />
          </Route>
          <Route path="/encounters" exact>
            <Nav />
            <Encounters />
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
