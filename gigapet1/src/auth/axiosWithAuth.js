import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://gigapetbw4.herokuapp.com/",
    headers: {
      authorization: token
    }
  });
};


/*
register a user == https://gigapetbw4.herokuapp.com/auth/register

User login == https://gigapetbw4.herokuapp.com/auth/login
*Needs token

User info == https://gigapetbw4.herokuapp.com/users/pet

*/
