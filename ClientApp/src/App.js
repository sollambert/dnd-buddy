import "./App.css";
import {
  Route,
  Routes,
} from "react-router-dom";

import FourOFour from "./Views/404/404";
import Nav from "./Components/Nav/Nav";

import AuthorizeRoute from "./Components/api-authorization/AuthorizeRoute"
import AppRoutes from "./AppRoutes";
import { Layout } from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, requireAuth, ...rest } = route;
            return <Route key={index} {...rest} element={requireAuth ? <AuthorizeRoute {...rest} element={element} /> : element} />;
          })}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
