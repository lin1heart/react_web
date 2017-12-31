import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

export default connect()(show);

function show() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>List</h1>
      <a href="http://localhost:8000/#/detail">132</a>
    </div>
  );
}
