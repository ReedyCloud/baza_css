import React from 'react';

import classes from './Foo.scss';

const foo = () => (
  <div className={classes.Foo}>
    <p className={classes.Header}>
      hello im header
    </p>
    <div className={classes.Top}>Top</div>
    <div className={classes.Main}>
      <div className={classes.Tile}>a</div>
      <div className={classes.Tile}>b</div>
      <div className={classes.Tile}>c</div>
      <div className={classes.Tile}>d</div>
    </div>
    <div className={classes.Bottom}>bottom</div>
  </div>
);

export default foo;
