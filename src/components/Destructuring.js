import React, {Component} from 'react';
import CodePen from './CodePen';

export default class Destructuring extends Component {

  render() {
    return (
        <div className="destructuring">
            <h1>Destructuring</h1>
            <p>A JavaScript expression that allows the extraction of data from arrays, objects, maps and sets into their own variables </p>
            <p>Provides a top-level variable into our actual scope</p>
            <CodePen codepen='xjreJK' height='900' />
        </div>
    );
  }
}

