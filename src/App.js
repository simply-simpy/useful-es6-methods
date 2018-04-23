import React, { Component } from 'react';
import './App.css';
import NewVariables from "./components/NewVariables";
import ArrowFunctions from "./components/ArrowFunctions";
import TheThisKeyword from "./components/TheThisKeyword";
import SelectingElements from "./components/SelectingElements";

class App extends Component {
  render() {
    return (
        <div className="app">
          <SelectingElements/>
          <NewVariables />
          <ArrowFunctions />
          <TheThisKeyword/>
        </div>

    );
  }
}

export default App;
