import React, {Component} from 'react';
import CodePen from './CodePen';

export default class ArrowFunctionsWhenNotToUse extends Component {

    render() {
        return (
            <div className="items">
                <h1>Arrow Functions — When not to use</h1>
                <p>There are some cases when an arrow function not the best choice</p>
                <ol>
                    <li>When you have a `click event` handler attached to a button, and need the click to target the
                        button you click.
                    </li>

                    <li>When you need a method to bind to an object</li>
                    <li>When you need to add a prototype method</li>
                    <li>When you need the arguments object</li>
                </ol>
                <CodePen codepen="xjgjQr" height="600"/>
            </div>
        );
    }
}

