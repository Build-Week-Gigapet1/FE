import React, { useContext } from 'react';

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
    </>
  );
};
