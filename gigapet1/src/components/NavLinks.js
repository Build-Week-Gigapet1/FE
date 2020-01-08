import React from 'react';
import { Link } from "react-router-dom";

//Tools and Hooks

//Style

//Components

//Coontext/STATE


export const NavLinks = (props) => {

  return (
    <>
    <Link to="/feedpet">Add Food</Link>
    <Link to="/feedlog">What I Ate</Link>
    <Link to="/removefood">Remove food</Link>
    </>
  );
};
