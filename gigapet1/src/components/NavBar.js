import React, { useContext } from "react";

//Tools and Hooks

//Style

//Components

//Coontext/STATE
import { UserInfoContext } from "./../context/UserInfoContext";

export const NavBar = props => {
  const { menuState, setMenuState } = useContext(UserInfoContext);

  const toggle = () => {
    if (menuState == "hideme") {
      setMenuState("reactDashLinks");
    } else {
      setMenuState("hideme");
    }
  };

  return (
    <>
    <nav>
      <h1><a className="nodec" href="https://compassionate-lamarr-da90b8.netlify.com/">Lambdi Pet</a></h1>
      <div>
        <a className="nodec" href="https://compassionate-lamarr-da90b8.netlify.com/about.html">Our Team</a>
        <a onClick={toggle}>{localStorage.getItem("token") ? "Menu" : " "}</a>
      </div>
    </nav>
    </>
  );
};

//export default Login;
