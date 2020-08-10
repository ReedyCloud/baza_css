import React from 'react';

import BeerImage from '../../assets/beer.jpg';

import classes from './BeerImage.scss';

const beerImage = () => (
  <div className={classes.Wrapper}>
    <img src={BeerImage} />
    <p className={classes.Text}>Half empty</p>
  </div>
);

export default beerImage;
