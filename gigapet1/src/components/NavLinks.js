import React from "react";
import { NavLink } from "react-router-dom";

//Tools and Hooks

//Style

//Components

//Coontext/STATE

export const NavLinks = props => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/feedpet">Add Food</NavLink>
          </li>
          <li>
            <NavLink to="/feedlog">What I Ate</NavLink>
          </li>
          <li>
            <NavLink to="/removefood">Remove food</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
