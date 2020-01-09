import React, { useContext } from "react";
//Tools and Hooks

//Style
import pet1 from "../pet/pet_lvl1.png";
import pet2 from "../pet/pet_lvl2.png";
import pet3 from "../pet/pet_lvl3.png";
import { UserInfoContext } from "../context/UserInfoContext";
import { PetContainer } from "./styled";
const petProgression = [pet1, pet2, pet3];

//Components

//Coontext/STATE

export const Pet = ({ petLvl }) => {
  const { petFeedLog } = useContext(UserInfoContext);
  return (
    <PetContainer>
      <img src={petProgression[petLvl]} />
    </PetContainer>
  );
};

//export default Login;
