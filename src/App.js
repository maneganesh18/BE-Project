import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

//COMPONENTS
import Navbarr from "./components/navbar/navbar";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Home from "./components/home/home";
import Forget from "./components/forget/forget";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/register">
            <Register />
          </Route> 
          <Route  path="/forget">
            <Forget />
          </Route> 
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
