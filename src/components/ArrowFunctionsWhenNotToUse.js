import React, {Component} from 'react';

export default class ArrowFunctionsWhenNotToUse extends Component {

    render() {
        return (
            <div className="items">
                <h1>Arrow Functions — When not to use</h1>
                <p>There are some cases when an arrow function not the best choice</p>
                <ol>
                    <li>When you have a `click event` handler attached to a button, and need the click to target the
                        button you click.
                    </li>

                    <li>When you need a method to bind to an object</li>
                    <li>When you need to add a prototype method</li>
                    <li>When you need the arguments object</li>
                </ol>
                <iframe height='265' scrolling='no' title='Arrow functions'
                        src='//codepen.io/simply-simpy/embed/eac01e99a2002a55c7d2615dde044b81/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true'
                        frameBorder='no' allowTransparency='true' allowFullscreen='true'
                        style={{width: 100 + "%", height: 800 + "px"}}>See the Pen <a
                    href='https://codepen.io/simply-simpy/pen/eac01e99a2002a55c7d2615dde044b81/'>Arrow functions</a> by
                    simply-simpy (<a href='https://codepen.io/simply-simpy'>@simply-simpy</a>) on <a
                        href='https://codepen.io'>CodePen</a>.
                </iframe>
            </div>
        );
    }
}

