import React from "react";

import BeerImage from "../../assets/beer.jpg";

import styles from "./beer.css";

const beerImage = () => (
  <div className={styles.xD}>
    <img src={BeerImage} />
    <p>Half empty</p>
  </div>
);

export default beerImage;
