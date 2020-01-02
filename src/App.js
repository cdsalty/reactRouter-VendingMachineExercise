import React, { Component } from "react";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Navbar from "./Navbar"; // must be above <Switch>
import VendingMachine from "./VendingMachine";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* Use Switch to return only one path */}
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/sardines" render={() => <Sardines />} />
          <Route exact path="/chips" render={() => <Chips />} />
        </Switch>
        {/* <Chips />
        <Sardines />
        <Soda /> */}
      </div>
    );
  }
}

export default App;
