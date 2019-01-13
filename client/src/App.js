import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Home from "./components/scenes/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header
          currentUser={this.props.currentUser}
          userType={this.props.userType}
        /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/categories" component={Categories} /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
