import React, {Component} from 'react';
import CodePen from './CodePen';

export default class Symbols extends Component {

  render() {
    return (
        <div className="wrap">
           <h1>Symbols</h1>
            <p>Symbols are the 7th primitive type that has been added to JavaScript.</p>
            <p>The existing primitive types are: </p>
            <ol>
                <li>Number</li>
                <li>String</li>
                <li>Object</li>
                <li>Boolean</li>
                <li>Null</li>
                <li>Undefined</li>
            </ol>
            <p>Symbols are unique identifies to avoid naming collisions.</p>
            <p>Help ensure keys are unique</p>
            <p>Will prevent overrides</p>
            <p>
                <code>

                </code>
            </p>
            <CodePen codepen='vrVvpm' height='900' />
        </div>
    );
  }
}

