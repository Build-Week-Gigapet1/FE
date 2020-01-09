import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";

//Tools and Hooks
import { PrivateRoute } from "./auth/PrivateRoute";
import { axiosWithAuth } from "./auth/axiosWithAuth";

//Style
import './App.scss';

//Components
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Dashboard } from "./components/Dashboard";
import { FoodLog } from "./components/FoodLog";
import { AddFoodForm } from "./components/AddFoodForm";
import { NavLinks } from './components/NavLinks';
import { NavBar } from "./components/NavBar";

//Coontext/STATE
import { UserInfoContext } from "./context/UserInfoContext";


function App() {

  const [petFeedLog, setPetFeedLog] = useState([]);
  const [changeMade, setChangeMade] = useState("");
  const [menuState, setMenuState] = useState("hideme");

  useEffect(() => {
    if(localStorage.getItem("token")){
      axiosWithAuth()
       .get(`/auth/${localStorage.getItem("userID")}/pet`, localStorage.getItem("token"))
       .then(response => {
         setPetFeedLog(response.data);
       })
       .catch(error => console.log(error.response));
    }
  }, [changeMade]);


  return (
    <div className="App">
      <UserInfoContext.Provider value={{petFeedLog, setChangeMade, setPetFeedLog, menuState, setMenuState}}>
          <NavBar/>
          <PrivateRoute path="/" component={NavLinks} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/feedlog" component={FoodLog} />
          <PrivateRoute exact path="/feedpet" component={AddFoodForm} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
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
