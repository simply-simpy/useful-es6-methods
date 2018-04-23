import React, {Component} from 'react';


export default class ArrowFunctions extends Component {

  render() {
    return (
        <div className="items">
          <h1>Arrow Functions</h1>
          <p>Three main benefits</p>
          <ol>
            <li>Much more concise</li>
            <li>Implicit returns</li>
            <li>Doesn't rebind the value of <code>this</code> when you use the function inside another function (handy
              for click events)
            </li>
          </ol>
          <iframe height='265' scrolling='no' title='Arrow functions'
                  src='//codepen.io/simply-simpy/embed/eac01e99a2002a55c7d2615dde044b81/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true'
                  frameBorder='no' allowTransparency='true' allowFullscreen='true' style={{width: 100 + "%", height: 800 + "px"}}>See the Pen <a
              href='https://codepen.io/simply-simpy/pen/eac01e99a2002a55c7d2615dde044b81/'>Arrow functions</a> by
            simply-simpy (<a href='https://codepen.io/simply-simpy'>@simply-simpy</a>) on <a
                href='https://codepen.io'>CodePen</a>.
          </iframe>
        </div>
    );
  }
}

