import React, { useContext } from 'react';
import { Link } from "react-router-dom";

//Tools and Hooks
import { axiosWithAuth } from "../auth/axiosWithAuth";

//Style

//Components
import { Pet } from "./Pet";

//Coontext/STATE


export const Dashboard = (props) => {

  return (
    <>
    Dashboard
    <Pet />

    <Link to="/feedpet">Add Food</Link>
    <Link to="/feedlog">What I Ate</Link>
    <Link to="/removefood">Remove food</Link>
    </>
  );
};
