import React, {Component} from 'react';
import CodePen from './CodePen';

export default class ArrayFindAndFindIndex extends Component {

  render() {
    return (
        <div className="wrap">
            <h1>Array <code>.find()</code> and <code>.findIndex()</code></h1>
            <p>The methods <code>.find()</code> and <code>.findIndex()</code> allow the selecting of an object inside an array of objects by a value of one of the properties in an object in the array.</p>

            <CodePen codepen='wjxdPN' height='900' />
        </div>
    );
  }
}

