import React, {Component} from 'react';
import CodePen from './CodePen';

export default class RestParamInFunctions extends Component {

    render() {
    return (
        <div className="items">
          <h1>The rest param looks like the spread operator <code>…</code></h1>
            <ul>
                <li>The rest param is the opposite of the spread operator. Instead of unpacking an item, it packs multiple items into an array </li>
                <li>Then, you can set variables for any number of the array values and then get 'the rest' with the <code>...</code> notation</li>
            </ul>
            <CodePen codepen='KeWrmJ' height = '400' />
        </div>
    );
  }
}

