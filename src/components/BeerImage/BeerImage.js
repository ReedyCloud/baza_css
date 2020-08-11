import React from 'react';

import BeerImage from '../../assets/beer.jpg';

import styles from './BeerImage.scss';

const beerImage = () => (
  <div className={styles.wrapper}>
    <img src={BeerImage} />
    <p className={styles.text}>Half empty</p>
  </div>
);

export default beerImage;
