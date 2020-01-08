import React, {useState} from "react";
//Tools and Hooks
import { axiosWithAuth } from "../auth/axiosWithAuth";
import { AddFoodForm } from "./AddFoodForm";
function deleteEntry(userId, entryId, stateSetter) {
  axiosWithAuth()
    .delete(`/auth/${userId}/pet/${entryId}`)
    .then(response => {
      console.log("New state set to:" + JSON.stringify(response.data));
      stateSetter(response.data)
    })
    .catch(error => {
      console.error(error);
    });
}
function editEntry(userId, entryId) {
  axiosWithAuth()
    .delete(`/${userId}/pet/${entryId}`)
    .then(response => {
      console.log("New state set to:" + response);
    })
    .catch(error => {
      console.error(error);
    });
}
export default function FoodEntry({ entry, stateSetter }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <section className="food-entry">
      <p>{entry.date_fed}</p>
      <p>{entry.food_category}</p>
      <p>{entry.food_name}</p>
      <p>{entry.food_amount}</p>
      <button onClick={event => deleteEntry(localStorage.getItem("userID"), entry.id, stateSetter)}>
        Delete entry
      </button>
      <button onClick={event => setIsEditing(!isEditing)}>{isEditing?"Cancel editing" : "Edit entry"}</button>
      {isEditing && <AddFoodForm toEdit={entry}/>}
    </section>
  );
}
