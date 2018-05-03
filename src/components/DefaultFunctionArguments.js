import React, {Component} from 'react';
import CodePen from './CodePen';

export default class DefaultFunctionArguments extends Component {
    render() {
        return (
            <div className="items">
                <h1>Default Function Arguments</h1>
                <p>ES6 allows the setting of default arguments when the function is declared</p>
                <p>These functions are overridable as well</p>
                <CodePen codepen="LmxdeE" height="400"/>
            </div>
        );
    }
}

