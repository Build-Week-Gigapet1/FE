import React from "react";
import { NavLink } from "react-router-dom";

//Tools and Hooks

//Style

//Components

//Coontext/STATE

export const NavLinks = props => {
  return (
    <header>
      <nav className="reactDashLinks">
        <ul>
          <li>
            <NavLink to="/feedpet">Add Food</NavLink>
          </li>
          <li>
            <NavLink to="/feedlog">What I Ate</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              onClick={event =>
                localStorage.getItem("token")
                  ? localStorage.removeItem("token")
                  : ""
              }
            >
              {localStorage.getItem("token") ? "Log out" : "Log in"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
