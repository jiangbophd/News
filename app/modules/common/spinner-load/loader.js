/**
 * Created by Richard on 12/25/17.
 */
import styles from './loader.css';
import React, { PropTypes }from 'react';
const Loader = (props) => {
  return (
    <div className={styles.spinnerLoader}>
      <div className={styles.bounce1}></div>
      <div className={styles.bounce2}></div>
      <div className={styles.bounce3}></div>
    </div>
  );
};

export default Loader;
