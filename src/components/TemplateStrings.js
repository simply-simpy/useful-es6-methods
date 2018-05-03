import React, {Component} from 'react';
import CodePen from './CodePen';

export default class NewVariables extends Component {

    render() {
    return (
        <div className="items">
          <h1>Template Strings</h1>
            <p>Template strings allow for: </p>
            <ul>
                <li>the easy concatenation of variables and strings</li>
                <li>the use of expressions inside of strings</li>
                <li>multi-line strings — very helpful with creating HTML Fragments</li>
                <li>nestable</li>
                <li>the use of if statements via a ternary operator</li>
                <li>the use of functions inside of strings</li>
            </ul>

            <CodePen codepen='MGoWyp' />


        </div>
    );
  }
}

