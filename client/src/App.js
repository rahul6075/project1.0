import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/landing";
import Register from "./components/auth/Register";
import login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
//Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Navbar} />
            <Route exact path="/" component={Landing} />
            <Alert />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={login} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
