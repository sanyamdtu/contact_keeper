import React from "react";
import "./App.css";
import set_authtoken from "./utils/set_authtoken";
import About from "./components/pages/about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/navbar";
import Contact_state from "./Context/contacts/Contact_state";
import Auth_Context from "./Context/auth/auth_state";
import Login_Form from "./components/login/form";
import Alert_compomnent from "./components/layouts/alerts";
import Register_form from "./components/register/register_form";
import Home from "./components/contacts/home";
function App(props) {
  if (localStorage.token) set_authtoken(localStorage.token);
  return (
    <Auth_Context>
      <Contact_state>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" render={(props) => <Home />}></Route>
              <Route exact path="/about" render={(props) => <About />} />
              <Route exact path="/login" render={(props) => <Login_Form />} />
              <Route
                exact
                path="/register"
                history={props.history}
                render={(props) => <Register_form />}
              />
            </Switch>
          </div>
        </Router>
      </Contact_state>
    </Auth_Context>
  );
}

export default App;
