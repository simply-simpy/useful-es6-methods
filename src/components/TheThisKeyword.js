import React, {Component} from 'react';


export default class TheThisKeyword extends Component {

  render() {
    return (
        <div className="items">
          <h1>Event listeners and the <code>this</code> keyword.</h1>
          <p>An event listener listens for events such as click, hover, etc, and handles the event by running a function after the event happens</p>
          <p>For example, a user clicks a button, then a modal dialog opens and displays a message. The event is click, the button is the DOM element to which the handler is attached, and the
          event handler is the code that displays the modal dialog</p>
          <p>In the example below, the event listener is attached to the .box div DOM element, and the handler adds or removes classes depending on certain conditions.</p>
          <p>In a normal function, the value of <code>this</code> is equal to the element attached to the event listener</p>
          <p>The <code>this</code> keyword inside and arrow function inherits the value of <code>this</code> from the parent</p>
          <iframe height='265' scrolling='no' title='This keyword with arrow functions' src='//codepen.io/simply-simpy/embed/e197a52b9c9c05d0d8cbfef14734f7f1/?height=265&theme-id=0&default-tab=css,result&embed-version=2&editable=true' frameBorder='no' allowTransparency='true' allowFullscreen='true' style={{width: 100 + "%", height: 800 + "px"}}>See the Pen <a href='https://codepen.io/simply-simpy/pen/e197a52b9c9c05d0d8cbfef14734f7f1/'>This keyword with arrow functions</a> by simply-simpy (<a href='https://codepen.io/simply-simpy'>@simply-simpy</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
        </div>
    );
  }
}
