import React, {Component} from 'react';
import CodePen from './CodePen';

export default class PrototypalInheritanceAndClasses extends Component {

    render() {
    return (
        <div className="items">
          <h1>Prototypal Inheritance and Classes</h1>
            <h2>Prototypal Inheritance</h2>
            <p>Methods on the constructor are inherited by the instances. </p>

            <h2>Classes</h2>
            <p>There are two ways to make a class in ES6</p>
            <ol>
                <li>Class declaration</li>
                <li>Class expression</li>
            </ol>
            <p>The constructor method is the only method required when building a new class</p>

            <h2>Protypal Inheritance</h2>
            <CodePen codepen='MBgPja' height = '800' />
            <h2>Classes</h2>
            <CodePen codepen='GBRGZx' height = '800' />



        </div>
    );
  }
}

