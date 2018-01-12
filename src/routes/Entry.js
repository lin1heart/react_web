import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styles from './Entry.css'

@connect(({ imageList }) => imageList)
export default class eEntry extends Component {
  componentWillMount() {
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className={styles.flexContainer}>
        <h4>welcome to our site</h4>
        <Link className={styles.flexItem} to="/imageList">imageList</Link><br/>
        <Link className={styles.flexItem} to="/imageDetail">imageDetail</Link><br/>
        <Link className={styles.flexItem} to="/uploadImage">uploadImage</Link><br/>
        <Link className={styles.flexItem} to="/category">category</Link><br/>
      </div>
    );
  }
}


