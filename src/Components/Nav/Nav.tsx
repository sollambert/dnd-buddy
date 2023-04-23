import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

type Props = {};

function Nav({}: Props): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        marginTop: "1em",
        marginBottom: "1em",
      }}
    >
      <Link to="/home" className="nav-button">
        HOME
      </Link>
      <Link to="/characters" className="nav-button">
        CHARACTERS
      </Link>
      <Link to="/encounters" className="nav-button">
        ENCOUNTERS
      </Link>
      <Link to="/campaigns" className="nav-button">
        CAMPAIGNS
      </Link>
      <Link to="/monsters" className="nav-button">
        MONSTERS
      </Link>
    </div>
  );
}

export default Nav;
