
import React, {Component} from 'react';
import CodePen from './CodePen';

export default class NewVariables extends Component {

    person = {
        points: 10,
        score: () => {
            console.log('click', this.person.points)
            this.person.points++;
            return this.person.points;
        }
    }
    componentDidMount(){


      }




    render() {

    return (
        <div className="playground">
            <button onClick={this.person.score} id="my-button">my button</button>
          <h1>Playground</h1>
            <ul className="list">
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam explicabo id in. Aliquam aut autem blanditiis, commodi, consequuntur cumque et libero nemo nostrum officia omnis pariatur praesentium rerum unde voluptas.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa dolorem eius est fuga fugiat incidunt libero, mollitia officiis omnis ratione repudiandae tempore veritatis? Dignissimos eligendi inventore quae quisquam vitae.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque exercitationem itaque nemo optio. Alias aspernatur blanditiis, consectetur debitis doloremque ducimus eaque eligendi error facilis ipsa necessitatibus non nostrum reiciendis.</li>
            </ul>
            <ul className="list">
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam explicabo id in. Aliquam aut autem blanditiis, commodi, consequuntur cumque et libero nemo nostrum officia omnis pariatur praesentium rerum unde voluptas.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa dolorem eius est fuga fugiat incidunt libero, mollitia officiis omnis ratione repudiandae tempore veritatis? Dignissimos eligendi inventore quae quisquam vitae.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque exercitationem itaque nemo optio. Alias aspernatur blanditiis, consectetur debitis doloremque ducimus eaque eligendi error facilis ipsa necessitatibus non nostrum reiciendis.</li>
            </ul>
        </div>
    );
  }
}

