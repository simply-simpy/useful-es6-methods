import React, {Component} from 'react';
import './App.css';
import NewVariables from "./components/NewVariables";
import ArrowFunctions from "./components/ArrowFunctions";
import TheThisKeyword from "./components/TheThisKeyword";
import SelectingElements from "./components/SelectingElements";
import DefaultFunctionArguments from "./components/DefaultFunctionArguments";

class App extends Component {
    render() {
        return (
            <div className="app">
                <SelectingElements/>
                <NewVariables/>
                <ArrowFunctions/>
                <TheThisKeyword/>
                <DefaultFunctionArguments/>
            </div>

        );
    }
}

export default App;
