import React, {Component} from 'react';
import CodePen from './CodePen';

export default class ArrowFunctions extends Component {

    render() {
        return (
            <div className="items">

                <h1>Arrow Functions</h1>
                <p>Three main benefits</p>
                <ol>
                    <li>Much more concise</li>
                    <li>Implicit returns</li>
                    <li>Doesn't rebind the value of <code>this</code> when you use the function inside another function
                        (handy
                        for click events)
                    </li>
                </ol>
                <CodePen codepen="eac01e99a2002a55c7d2615dde044b81" height="600"/>
            </div>
        );
    }
}

