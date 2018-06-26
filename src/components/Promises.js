import React, {Component} from 'react';
import CodePen from './CodePen';

export default class ObjectLiteralUpgrades extends Component {

    render() {
        const postsPromise = fetch('https://wesbos.com/wp-json/wp/v2/posts');
        const streetCarsPromise = fetch('https://data.ratp.fr/api/datasets/1.0/search/?q=paris')

        Promise
            .all([postsPromise, streetCarsPromise]) //array of promises
            .then(responses => {
                console.log("responses: ",responses) // returns responses, but without data we need. We need to convert the readable stream to JSON
                return Promise.all(responses.map(res => res.json()))
                    .then(responses => {
                        console.log('other responses: ', responses)
                    })
            });

    return (
        <div className="items">
          <h1>Promises</h1>
            <p>Often used when you are using an API and fetching data</p>
            <p>Promises are something that will happen in the future, but probably not immediately. </p>
            <p>Javascript is almost entirely asynchronous </p>
            <p>Promises are built into <code>fetch</code> and <code>getUserMedia</code></p>
            <ul>

            </ul>
            <CodePen codepen='jKwQmz' height = '400' />
            <CodePen codepen='XYByvW' height = '400' />

        </div>
    );
  }
}

