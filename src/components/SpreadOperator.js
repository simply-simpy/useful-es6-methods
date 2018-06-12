import React, {Component} from 'react';
import CodePen from './CodePen';

export default class SpreadOperator extends Component {

    render() {
    return (
        <div className="items">
          <h1>Spread Operator <code>…</code></h1>
            <ul>
                <li>Takes every single item from an iterable and apply it to the containing array.</li>
                <li>Allows for a simple way to copy array</li>
            </ul>
            <CodePen codepen='BxGWJo' height = '400' />
        </div>
    );
  }
}

