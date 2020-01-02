import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <h1>hello i am a vending machine. what would you like to eat?</h1>
        {/* first, created the routes in App.js and matching them up here accordingly */}
        {/* Link always comes with ' to ' */}
        <Link exact to="/soda">
          Soda
        </Link>
        <Link exact to="/chips">
          Chips
        </Link>
        <Link exact to="/sardines">
          Sardines
        </Link>
      </div>
    );
  }
}

export default VendingMachine;
