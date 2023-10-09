import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

function Nav(): JSX.Element {
  return (
    <div className="w-full h-12 flex flex-row justify-evenly items-center bg-white dark:bg-black text-gray-800 dark:text-gray-100">
      <NavLink to="/">
        HOME
      </NavLink>
      <NavLink to="/gpt">
        GPT
      </NavLink>
      <NavLink to="/characters">
        CHARACTERS
      </NavLink>
      <NavLink to="/encounters">
        ENCOUNTERS
      </NavLink>
      <NavLink to="/campaigns">
        CAMPAIGNS
      </NavLink>
      <NavLink to="/resources">
        RESOURCES
      </NavLink>
    </div>
  );
}

export default Nav;
