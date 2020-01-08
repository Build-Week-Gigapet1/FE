import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
//  const userID = localStorage.getItem("userID");
  return axios.create({
    baseURL: "https://gigapetbw4.herokuapp.com",
    headers: {
      authentication: token
    }
  });
};


/*
register a user == https://gigapetbw4.herokuapp.com/auth/register

User login == https://gigapetbw4.herokuapp.com/auth/login
*Needs token

User info == https://gigapetbw4.herokuapp.com/users/pet


/login

WHAT THE GET WAS RETURNING
////////​​
[{
date_fed: "01-07-2020"
food_amount: 2  ​​
food_category: "fruit"  ​​
food_name: "apple"
id: 1  ​​
password: "$2a$10$Dc64lZcHk94t5uQHpK7R8eUBVlODc8jsantelylZccTsc4UQUVjQu"
petname: "Sparky"  ​​
user_id: 1  ​​
username: "user1"
},...]
///////////

registration
/register
{
    username: "
    password: "
    petname: "
}
{
    userID: 1
    username: "
    password: "
    petname: "
    token: "
}
POST /:id/pet
id is the userID
{
    date_fed: "
    food_category: "
    food_name: "
    food_amount: "
}
GET /:id/pet
id is the userId
[
    {
        feedingID: 1
        date_fed: "
        food_category: "
        food_name: "
        food_amount: "
    }
]
PUT /:id/pet/:feedingID
id is the userId

DELETE /:id/pet/feedID
id is userID
*/
