import React, { Component } from 'react';
import './App.css';
import NewVariables from "./components/NewVariables";
import ArrowFunctions from "./components/ArrowFunctions";
import TheThisKeyword from "./components/TheThisKeyword";

class App extends Component {
  render() {
    return (
        <div className="app">
          <NewVariables />
          <ArrowFunctions />
          <TheThisKeyword/>
        </div>

    );
  }
}

export default App;
