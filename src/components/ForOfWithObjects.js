import React, {Component} from 'react';
import CodePen from './CodePen';

export default class Destructuring extends Component {

  render() {
    return (
        <div className="wrapper">
            <h1>The <code>for of </code> loop for Objects</h1>
            <p>The best solution for Objects is to use the <code>for...in</code> method.</p>
            <CodePen codepen='JvZdby' height='900' />
        </div>
    );
  }
}

