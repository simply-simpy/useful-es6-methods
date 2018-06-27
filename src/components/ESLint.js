import React, {Component} from 'react';
import CodePen from './CodePen';

export default class ESLint extends Component {

  render() {
    return (
        <div className="wrap">
           <h1>ESLint</h1>
            <p><a href="https://eslint.org/">ESLint</a>t is the best choice for code quality because it supports all ES 6 features</p>
            <h2>Three types of rules</h2>
            <ol>
                <li>off</li>
                <li>warn</li>
                <li>error</li>
            </ol>
            <CodePen codepen='zameqK' height='900' />
        </div>
    );
  }
}

