import React, {Component} from 'react';
import CodePen from './CodePen';

export default class SelectingElements extends Component {
span = {
    display: "table",
    width: "50%"
};
flex = {
    display: "flex",
    width: "50%"
};
  render() {
    return (
        <div className="items">
          <h1>Selecting Elements</h1>
          <p>There are various ways to select elements on an HTML page in order to manipulate those elements via JavaScript</p>
          <p>Here are just a few ways in which you can manipulate elements after they have been selected:</p>
          <ol>
            <li>Add a CSS class to an element based on a user action. This will restyle an element when a user clicks, hovers, etc.</li>
            <li>Change the text of an element. This is sometimes needed when you don't have access to the source of the text. Perhaps the text is coming from a Json file on a remove server. </li>
            <li>Show and hide elements based upon user actions</li>
          </ol>
            <h2>NodeLists versus HTMLCollections</h2>
            <p>The different methods used to reference the DOM results in two types of collections. A NodeList or a HTMLCollection.</p>
            <ul>
                <li style={this.flex}>
                    <span style={this.span}><strong>NodeList</strong></span>
                    <span style={this.span}><strong>HTMLCollection</strong></span>
                </li>
                <li style={this.flex}>
                    <span style={this.span}>Returns all nodes (text, comments, etc...)</span>
                    <span style={this.span}>Returns only HTML</span>
                </li>
                <li style={this.flex}>
                    <span style={this.span}>Returns a static collection <sup><strong>[1]</strong></sup></span>
                    <span style={this.span}>Returns a live collection <sup><strong>[2]</strong></sup></span>
                </li>
            </ul>
            <p><strong>[1]: An example of static collection: </strong> Let's say you you create a variable called <code>introDiv</code>. You then assign
            this variable to the value of <code>document.querySelectorAll("#intro")</code> like so: <code>let introDive = document.querySelectorAll("#intro")</code>.<br />
            If you then make changes to your page to the element that is matched by <code>document.querySelectorAll("#intro")</code>, those changes will NOT be reflected in the value of <code>introDiv</code>.</p>

            <p><strong>[2]: An example of live collection: </strong> Let's say you you create a variable called <code>introDiv</code>. You then assign
                this variable to the value of <code>document.getElementById("intro")</code> like so: <code>let introDive = document.getElementById("intro")</code>.<br />
            If you then make changes to your page to the element that is matched by <code>document.getElementById("intro")</code>, those changes will be reflected in the value of <code>introDiv</code>.</p>
            <p><a href="https://www.youtube.com/watch?v=ubNP6fbT2Ac">Learn More about NodeList and HTMLCollections</a></p>
            <CodePen codepen='WJrMML' height='900' />

        </div>
    );
  }
}

