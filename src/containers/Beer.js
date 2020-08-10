import React, { Component } from 'react';

import BeerImage from '../components/BeerImage/BeerImage';

class Beer extends Component {
  render() {
    return (
      <div>
        <h1>The beer</h1>
        <BeerImage />
      </div>
    );
  }
}

export default Beer;
