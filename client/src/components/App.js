import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Home from "./scenes/Home";
import Videos from "./scenes/Videos";
import Profile from "./scenes/Profile";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {" "}
        {/* <Header
                          currentUser={this.props.currentUser}
                          userType={this.props.userType}
                        /> */}{" "}
        <Switch>
          <Route exact path="/" component={Home} />{" "}
          {/* <Route path="/videos" render={props => <Login {...props} />} /> */}{" "}
          <Route path="/videos" component={Videos} />{" "}
          <Route path="/profile" component={Profile} />{" "}
        </Switch>{" "}
      </React.Fragment>
    );
  }
}

export default App;
