import React, { useState } from "react";
//Tools and Hooks
import { axiosWithAuth } from "../auth/axiosWithAuth";
import { AddFoodForm } from "./AddFoodForm";

//Style
import { FoodEntryStyle } from "./styled";

function deleteEntry(userId, entryId, stateSetter) {
  axiosWithAuth()
    .delete(`/auth/${userId}/pet/${entryId}`)
    .then(response => {
      console.log("New state set to:" + JSON.stringify(response.data));
      stateSetter(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

export default function FoodEntry({ entry, stateSetter }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <FoodEntryStyle>
      <section className="food-entry">
        <p><span>Date:</span>{entry.date_fed}</p>
        <p><span>Category:</span>{entry.food_category}</p>
        <p><span>Name:</span>{entry.food_name}</p>
        <p><span>Amount:</span>{entry.food_amount}</p>
        <div className="buttons">
          <button
            onClick={event =>
              deleteEntry(localStorage.getItem("userID"), entry.id, stateSetter)
            }
          >
            Delete entry
          </button>
          <button onClick={event => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel editing" : "Edit entry"}
          </button>
        </div>
        {isEditing && <AddFoodForm toEdit={entry} />}
      </section>
    </FoodEntryStyle>
  );
}
