import React, { useState } from 'react';

//Tools and Hooks
import { axiosWithAuth } from "./../auth/axiosWithAuth";

//Style

//Components

//Coontext/STATE

export const AddFoodForm = (props) => {
  const [testFeed, setFestFeed] = useState(
    {
      date_fed: new Date(),
      food_amount: 3,
      food_category: "fruit",
      food_name: "apple"
    }
  );

  const handleChange = (event) => {
    setFestFeed(
      {
        ...testFeed,
        [event.target.name]: event.target.value,
      }
    );
    console.log(testFeed);
  };

  const test = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post(`/auth/${localStorage.getItem("userID")}/pet`, testFeed)
      .then(responce => {
        //console.log(responce);
        //props.history.push("/dashboard");
      })
      .catch(error => console.log(error));
  };

  return (
    <>
    Add Food Form
    {/*console.log(new Date())*/}
    <form onSubmit={test}>
      <input
        type="text"
        name="date_fed"
        value={testFeed.date_fed}
        placeholder="When"
        onChange={handleChange}
      />
      <input
        type="number"
        name="food_amount"
        value={testFeed.food_amount}
        placeholder="Qty"
        onChange={handleChange}
      />
      <select name="food_category" onChange={handleChange}>
        <option value="fruit">Fruit</option>
        <option value="vegi">Vegi</option>
        <option value="dariy">Dariy</option>
        <option value="bread">Bread</option>
      </select>
      <input
        type="text"
        name="food_name"
        value={testFeed.food_name}
        placeholder="What did you eat"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
    </>
  );
};
