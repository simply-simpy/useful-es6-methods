import React, {Component} from 'react';
import CodePen from './CodePen';

export default class SomeAndEvery extends Component {

  render() {
    return (
        <div className="wrap">
            <h1><code>Array .some() and .every()</code></h1>
            <p>Will check the items in an array to see if some of the items meet what you are looking for, or all of the items meet what you are looking for. </p>

            <CodePen codepen='OZapVK' height='900' />
        </div>
    );
  }
}

