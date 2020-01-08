import React, { useState, useContext } from "react";

//Tools and Hooks
import { axiosWithAuth } from "./../auth/axiosWithAuth";
//Style

//Components
import { NavLinks } from "./NavLinks";

//Coontext/STATE
import { UserInfoContext } from "./../context/UserInfoContext";
import { getCurrentDate } from "../helpers";


//Reused the form for editing entries, so there is a little bit more logic inside, depending on where it is used.
export const AddFoodForm = ({ toEdit }) => {
  const { petFeedLog, setChangeMade } = useContext(UserInfoContext);
  const [testFeed, setFestFeed] = useState(
    toEdit
      ? {
        date_fed: toEdit.date_fed,
        food_amount: toEdit.food_amount,
        food_category: toEdit.food_category,
        food_name: toEdit.food_name
      }
      : {
          date_fed: getCurrentDate(),
          food_amount: 3,
          food_category: "fruit",
          food_name: "apple"
        }
  );

  const handleChange = event => {
    setFestFeed({
      ...testFeed,
      [event.target.name]: event.target.value
    });
    console.log(testFeed);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(toEdit){
      axiosWithAuth()
        .put(`/auth/${localStorage.getItem("userID")}/pet/${toEdit.id}`, testFeed)
        .then(response => {
          //console.log(response);
          //props.history.push("/dashboard");
          setChangeMade(new Date());
        })
        .catch(error => console.log(error));
    }else{
      axiosWithAuth()
        .post(`/auth/${localStorage.getItem("userID")}/pet`, testFeed)
        .then(response => {
          //console.log(response);
          //props.history.push("/dashboard");
          setChangeMade(new Date());
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <>
      Add Food Form
      {/*console.log(new Date())*/}
      <form onSubmit={handleSubmit}>
        <input
          type="date"
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
          <option value="fruits">Fruit</option>
          <option value="vegetables">Vegi</option>
          <option value="dairy">Dariy</option>
          <option value="bread">Bread</option>
          <option value="meat">Meat</option>
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
