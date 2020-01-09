import React, { useContext } from 'react';
import styled from 'styled-components';
//Tools and Hooks

//Style
import pet1 from '../pet/pet_lvl1.png';
import pet2 from '../pet/pet_lvl2.png';
import pet3 from '../pet/pet_lvl3.png';
import { UserInfoContext } from '../context/UserInfoContext';
const petProgression=[pet1, pet2, pet3];
const PetContainer = styled.div`
  width:100%;
  img{
    height: 250px;
  }
`;
//Components

//Coontext/STATE

export const Pet = ({petLvl}) => {
  const {petFeedLog} = useContext(UserInfoContext);
  return (
    <PetContainer>
    Pet Component
    <img src={petProgression[2]}/>
    </PetContainer>
  );
};

//export default Login;
