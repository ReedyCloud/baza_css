import React, { Component } from 'react';

import Foo from '../components/Foo/Foo';

class Users extends Component {
  render() {
    return (
      <div>
        <h1>The Users</h1>
        <Foo />
        <p>lorem ipsum dolor sit amet</p>
      </div>
    );
  }
}

export default Users;
