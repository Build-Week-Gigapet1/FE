import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

//Tools and Hooks
import { PrivateRoute } from "./auth/PrivateRoute";
import { axiosWithAuth } from "./auth/axiosWithAuth";

//Style
import './App.css';

//Components
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Dashboard } from "./components/Dashboard";
import { RemoveFoodForm } from "./components/RemoveFoodForm";
import { FoodLog } from "./components/FoodLog";

//Coontext/STATE
import { UserInfoContext } from "./context/UserInfoContext";

function App() {
/*  const [testBEState, settestBEState] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/users/pet", localStorage.getItem("token"))
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
  }, []);*/

  const [signUpState, confimationstate] = useState();

  useEffect(() => {
    axiosWithAuth()
     .get(`/auth/${localStorage.getItem("userID")}/pet`, localStorage.getItem("token"))
     .then(response => console.log(response.data))
     .catch(error => console.log(error.response));
  }, []);

  return (
    <div className="App">
      <UserInfoContext.Provider value={{}}>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/removefood" component={RemoveFoodForm} />
          <PrivateRoute path="/feedlog" component={FoodLog} />
          <Route path="/signup" component={SignUp} />
          <Route component={Login} />
        </Switch>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;

/* EXSAMPLE OF MVP REMOVE TO COMENT: Author == create react-app
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
*/
