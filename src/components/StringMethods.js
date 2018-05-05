import React, {Component} from 'react';
import CodePen from './CodePen';

export default class Destructuring extends Component {

  render() {
    return (
        <div className="string-methods">
            <h1>String Methods</h1>
            <p>There are several new string methods which make a developers life a little easier</p>
            <ul>
                <li><code>.startsWith()</code></li>
                <li><code>.endsWith()</code></li>
                <li><code>.includes()</code></li>
                <li><code>.repeat()</code></li>
            </ul>
            <CodePen codepen='QrqvrJ' height="800" />
        </div>
    );
  }
}

