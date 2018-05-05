import React, {Component} from 'react';
import './App.css';
import NewVariables from "./components/NewVariables";
import ArrowFunctions from "./components/ArrowFunctions";
import ArrowFunctionsWhenNotToUse from "./components/ArrowFunctionsWhenNotToUse";
import TheThisKeyword from "./components/TheThisKeyword";
import SelectingElements from "./components/SelectingElements";
import DefaultFunctionArguments from "./components/DefaultFunctionArguments";
import ArrowFunctionsExercises from "./components/ArrowFunctionsExercises";
import TemplateStrings from "./components/TemplateStrings";
import Destructuring from "./components/Destructuring";

class App extends Component {
    render() {
        return (

            <div className="app">
                <SelectingElements/>
                <NewVariables/>
                <ArrowFunctions/>
                <ArrowFunctionsWhenNotToUse />

                <TheThisKeyword/>
                <DefaultFunctionArguments/>
                <TemplateStrings />
                <Destructuring/>
            </div>
        );
    }
}

export default App;
