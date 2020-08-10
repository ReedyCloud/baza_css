import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncBeer = asyncComponent(() => {
  return import('./containers/Beer.js');
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/'>Users</Link> |
          <Link to='/beer'>Beer</Link>
        </div>
        <div>
          <Route
            path='/'
            exact
            component={Users}
          />
          <Route
            path='/beer'
            component={AsyncBeer}
          />
        </div>
      </div>
    );
  }
}

export default App;
