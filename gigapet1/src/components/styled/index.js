import styled from "styled-components";

export const PetContainer = styled.div`
  width: 100%;
  img {
    height: 250px;
  }
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 90%;
  margin: 20px auto;
  font-family: 'Rancho', cursive, sans-serif;
  align-items: center;
  select{
    max-width: 300px;
    min-width: 200px;
    margin: 0 auto;
  }
  h3{
    max-width: 300px;
    font-size: 1rem;
  }
`;

export const FoodEntryStyle = styled.div`
    margin: 0 auto;
    section{
        display: flex;
        flex-flow: column wrap;
        color: white;
        background-color: #6C46A2;
        width: 90%;
        margin: 20px auto;
        align-items: center;
        border: 2px solid #6C46A2;
        border-radius: 25px;
        p{
            font-family: sans-serif;
            width: 80%;
            max-width: 500px;
            margin: 0;
            display: flex;
            justify-content: space-between;
            color: white;
        }
        .buttons{
            width: 80%;
            button{
                color: black;
                margin: 10px;
                background-color: white;
            }
        }
    }
`;