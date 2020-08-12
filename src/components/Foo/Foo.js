import React from 'react';

import styles from './Foo.scss';

const foo = () => (
  <div className={styles.foo}>
    <p className={styles.header}>
      hello im header
    </p>
    <div className={styles.top}>Top</div>
    <div className={styles.main}>
      <div className={styles.tile}>a</div>
      <div className={styles.tile}>b</div>
      <div className={styles.tile}>c</div>
      <div className={styles.tile}>d</div>
    </div>
    <div className={styles.bottom}>bottom</div>
  </div>
);

export default foo;
