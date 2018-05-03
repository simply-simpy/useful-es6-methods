import React, {Component} from 'react';

export default class ArrowFunctionsExercises extends Component {
    componentDidMount(){
        let list = [1, 2, 3];
        let mult = 4;
        let mapped = list.map((listItem) => listItem * 3 )

        console.log(mapped)


        let items = Array.from(document.querySelectorAll('[data-time]'));

        const filtered = items
            .filter(item => item.textContent.includes('Flexbox'))
            .map(item => item.dataset.time)
            .map(timecode => {
                const parts = timecode.split(':')
                    .map(part => parseFloat(part));
                return (parts[0] * 60) + parts[1];
                console.log('parts: ', parts)

            })
        console.log("filtered: " + filtered)
        }

    render() {


        return (
            <div className="items">
                <h1>Error functions exercises</h1>
                <ul>
                    <li data-time="5:17">Flexbox Video</li>
                    <li data-time="8:22">Flexbox Video</li>
                    <li data-time="3:34">Redux Video</li>
                    <li data-time="5:23">Flexbox Video</li>
                    <li data-time="7:12">Flexbox Video</li>
                    <li data-time="7:24">Redux Video</li>
                    <li data-time="6:46">Flexbox Video</li>
                    <li data-time="4:45">Flexbox Video</li>
                    <li data-time="4:40">Flexbox Video</li>
                    <li data-time="7:58">Redux Video</li>
                    <li data-time="11:51">Flexbox Video</li>
                    <li data-time="9:13">Flexbox Video</li>
                    <li data-time="5:50">Flexbox Video</li>
                    <li data-time="5:52">Redux Video</li>
                    <li data-time="5:49">Flexbox Video</li>
                    <li data-time="8:57">Flexbox Video</li>
                    <li data-time="11:29">Flexbox Video</li>
                    <li data-time="3:07">Flexbox Video</li>
                    <li data-time="5:59">Redux Video</li>
                    <li data-time="3:31">Flexbox Video</li>
                </ul>
                {/*// Select all the list items on the page and convert to array*/}
                {/*// Filter for only the elements that contain the word 'flexbox'*/}
                {/*// map down to a list of time strings*/}
                {/*// map to an array of seconds*/}
                {/*// reduce to get total*/}
                {/*// 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!*/}
            </div>
        );
    }
}

