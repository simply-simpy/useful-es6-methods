import React, {Component} from 'react';


export default class CodePen extends Component {
    constructor(props){
        super(props)
    }
    theUrl = `//codepen.io/simply-simpy/embed/${this.props.codepen}/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true`;

    render() {
        return (
            <iframe
                height= {this.props.height}
                scrolling='no'
                title='ES6 — const with mutable object'
                src={this.theUrl}
                frameBorder='no'
                allowtransparency='true'
                allowFullScreen={true}
                style={{width: 100 +"%"}}>See the Pen
                <a href='https://codepen.io/simply-simpy/pen/95f960392cb354d2d8dfd6c0dbf27fd5/'>ES6 — const with mutable object</a>
                by simply-simpy (<a href='https://codepen.io/simply-simpy'>@simply-simpy</a>) on
                <a href='https://codepen.io'>CodePen</a>.
            </iframe>
        );
    }
}
