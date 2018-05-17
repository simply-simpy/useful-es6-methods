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
import StringMethods from './components/StringMethods';
import Destructuring from "./components/Destructuring";
import ForOfLoop from './components/ForOfLoop';
import ForOfWithObjects from './components/ForOfWithObjects';
import Playground from "./components/Playground";
import ArrayOfAndArrayFrom from './components/ArrayOfAndArrayFrom';
import ArrayFindAndFindIndex from "./components/ArrayFindAndFindIndex";
import SomeAndEvery from "./components/SomeAndEvery";

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
                <StringMethods />
                <Destructuring/>
                <ForOfLoop />
                <ForOfWithObjects/>
                <ArrayOfAndArrayFrom />
                <ArrayFindAndFindIndex />
                <SomeAndEvery />
                <Playground />
            </div>
        );
    }
}

export default App;
