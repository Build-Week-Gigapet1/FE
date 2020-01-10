import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

//Tools and Hooks

//Style

//Components

//Coontext/STATE
import { UserInfoContext } from "./../context/UserInfoContext";

export const NavLinks = props => {
  const { menuState, setMenuState } = useContext(UserInfoContext);

  const toggle = () => {
    if (menuState === "hideme") {
      setMenuState("reactDashLinks");
    } else {
      setMenuState("hideme");
    }
  };

  return (
    <header>
      <nav className={menuState}>
        <ul>
          <li>
            <NavLink onClick={toggle} to="/feedpet">Add Food</NavLink>
          </li>
          <li>
            <NavLink onClick={toggle} to="/feedlog">What I Ate</NavLink>
          </li>
          <li>
            <NavLink onClick={toggle} to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggle}
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
