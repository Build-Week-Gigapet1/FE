import React, { useContext } from "react";

//Tools and Hooks

//Style

//Components
import FoodEntry from "./FoodEntry";

//Coontext/STATE
import { UserInfoContext } from "../context/UserInfoContext";

export const FoodLog = props => {
  const { petFeedLog, setPetFeedLog } = useContext(UserInfoContext);

  return (
    <>
      {petFeedLog.map((entry, index) => (
        <FoodEntry key={index} entry={entry} stateSetter={setPetFeedLog} />
      ))}
    </>
  );
};

//export default Login;
