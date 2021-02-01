import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main, Auth, NotFound, Postings, Contact, Profile } from "./pages";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/auth" exact={true} component={Auth} />
            <Route path="/postings" exact={true} component={Postings} />
            <Route path="/profile" exact={true} component={Profile} />
            <Route path="/contact" exact={true} component={Contact} />
            <Route Component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
