import React, {Component} from 'react';
import CodePen from './CodePen';


export default class TheThisKeyword extends Component {

    render() {
        return (
            <div className="items">
                <h1>Event listeners and the <code>this</code> keyword.</h1>
                <p>An event listener listens for events such as click, hover, etc, and handles the event by running a
                    function after the event happens</p>
                <p>For example, a user clicks a button, then a modal dialog opens and displays a message. The event is
                    click, the button is the DOM element to which the handler is attached, and the
                    event handler is the code that displays the modal dialog</p>
                <p>In the example below, the event listener is attached to the .box div DOM element, and the handler
                    adds or removes classes depending on certain conditions.</p>
                <p>In a normal function, the value of <code>this</code> is equal to the element attached to the event
                    listener</p>
                <p>The <code>this</code> keyword inside and arrow function inherits the value of <code>this</code> from
                    the parent, it is not rebound inside the function</p>
                <p>If a function is not bound to anything, it will be bound to the window.</p>
                <CodePen codepen='e197a52b9c9c05d0d8cbfef14734f7f1' height='900'/>
            </div>
        );
    }
}

