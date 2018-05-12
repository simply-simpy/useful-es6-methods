import React, {Component} from 'react';
import CodePen from './CodePen';

export default class Destructuring extends Component {

  render() {
    return (
        <div className="destructuring">
            <h1>The <code>for of </code> loop</h1>
            <p>The <code>for of</code> loop is used to loop over any type of data that is an iterable.</p>
            <p>An iterable is anything that can be looped over</p>
            <p><strong>Iterables</strong></p>
            <ul>
                <li>DOM collection</li>
                <li>String</li>
                <li>Argument</li>
                <li>Array</li>
                <li>Map</li>
                <li>Set</li>

            </ul>
            <CodePen codepen='wjjyXB' height='900' />
        </div>
    );
  }
}

