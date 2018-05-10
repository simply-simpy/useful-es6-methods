import React, {Component} from 'react';
import CodePen from "./CodePen";


export default class NewVariables extends Component {

    render() {
        return (
            <div className="items">
                <h1>New Variables in ES6</h1>

                <pre>
            <code>
                const key = "abc123";
                let points = 50;
                let winner = false
            </code>
          </pre>
                <ul>
                    <li><code>let</code></li>
                    <li><code>const</code></li>
                </ul>
                <h2><code>var</code></h2>
                <p><code>var</code> is function scope</p>
                <h2><code>let, const</code></h2>
                <p><code>let, const</code> are block scope, which means their scope is limited to the curly braces which
                    contain them</p>
                <p>A <code>let</code> variable cannot be defined twice in the same scope</p>
                <p><code>Const</code></p>
                <p>Properties of a <code>const</code> variable can be updated, although the value cannot</p>
                <CodePen codepen="95f960392cb354d2d8dfd6c0dbf27fd5"/>
                <h2>Is <code>var</code> dead in JavaScript?</h2>
                <p>Sort of —</p>
                <p>One suggested best practice</p>
                <ul>
                    <li>Use <code>const</code> by default</li>
                    <li>Use <code>let</code> if rebinding is needed</li>
                    <li>Don't use <code>var</code> in ES6, except in cases where you need top-level variables that are
                        shared across many scopes.
                    </li>
                </ul>
            </div>
        );
    }
}

