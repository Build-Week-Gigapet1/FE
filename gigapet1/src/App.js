import React from 'react';
import { Switch, Route } from "react-router-dom";

//Tools and Hooks
import { PrivateRoute } from "./auth/PrivateRoute";

//Style
import logo from './logo.svg';
import './App.css';

//Components
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route component={Login} />
      </Switch>
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
