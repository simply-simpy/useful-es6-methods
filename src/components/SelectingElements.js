import React, {Component} from 'react';


export default class SelectingElements extends Component {

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
          <iframe height='265' scrolling='no' title='Selecting (DOM) Elements Via JavaScript'
                  src='//codepen.io/simply-simpy/embed/WJrMML/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true'
                  frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{width: 100 + "%", height: 800 + "px"}}>See the Pen <a
              href='https://codepen.io/simply-simpy/pen/WJrMML/'>Selecting (DOM) Elements Via JavaScript</a> by
            simply-simpy (<a href='https://codepen.io/simply-simpy'>@simply-simpy</a>) on <a
                href='https://codepen.io'>CodePen</a>.
          </iframe>
        </div>
    );
  }
}

