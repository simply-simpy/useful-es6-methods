import React, {Component} from 'react';
import CodePen from './CodePen';

export default class Destructuring extends Component {

  render() {
    return (
        <div className="wrap">
            <h1>Array <code>.from()</code> and <code>.of()</code></h1>
            <p>The methods <code>.from()</code> and <code>.of()</code> are not on the prototype. This means that they are not available at <code>yourArray.from()</code> or
            <code>yourArray.of()</code>.
                <p>These methods are found on the Array Object itself.</p>
                <p><code>Array.of()</code> , <code>Array.from()</code></p>
                <p>These two methods will turn an array-like object into an array. This is often the case when working with DOM elements. </p>
                <p>When accessing an DOM element via <code>document.querySelectorAll('.your-element')</code>, a NodeList is returned, not an array. This can be verified in the console by looking at the prototype of your element.</p>
            </p>
            <CodePen codepen='BxVmWj' height='900' />
        </div>
    );
  }
}

