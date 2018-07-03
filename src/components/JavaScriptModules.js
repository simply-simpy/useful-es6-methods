import React, {Component} from 'react';
import {Users} from "../modules/users";
import ReverseString from '../modules/ReverseString';
export default class JavaScriptModules extends Component {

  render() {
      let users = Users('scott', 'scott@scott.com', 'simply-simpy.com');
      let reverseString = ReverseString('Buster');
    return (
        <div className="wrap">
           <h1>JavaScript Modules</h1>
            <p>Imports from <code>Users</code></p>
            {users.name},
            {users.email},
            {users.website}

           <p>Instead of using a script tag, we import modules.</p>
            <code>
                import slug from 'slug';
            </code>
            <p>Reverse String default export</p>
            <code>let reverseString = ReverseString('Buster');</code><br/>
            {reverseString}
        </div>
    );
  }
}

