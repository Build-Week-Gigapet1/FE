import React, { useContext } from 'react';
import { Link } from "react-router-dom";

//Tools and Hooks
import { axiosWithAuth } from "../auth/axiosWithAuth";

//Style

//Components
import { Pet } from "./Pet";
import { NavLinks } from "./NavLinks";

//Coontext/STATE


export const Dashboard = (props) => {

  return (
    <>
    Dashboard
    <Pet />
    <NavLinks />
    </>
  );
};
