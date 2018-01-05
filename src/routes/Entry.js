import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styles from './Entry.css'

@connect(({ imageList }) => imageList)
export default class extends Component {
  state = {
    value: 333
  };
  componentWillMount() {
    console.log('will');
    this.props.dispatch({ type: 'imageList/test1', test: 'from view' });
    this.props.dispatch({ type: 'imageList/test2', payload: 'from view' });
  }
  componentDidMount() {
    console.log('did');
  }
  componentWillUnmount() {
    console.log('willun');
  }
  render() {
    console.log('this props is %o', this.props);
    console.log('this state is %o', this.state);
    return (
      <div className={styles.flexContainer}>
        <h4>welcome to our site</h4>
        <Link className={styles.flexItem} to="/imageList">imageList</Link><br/>
        <Link className={styles.flexItem} to="/imageDetail">imageDetail</Link><br/>
        <Link className={styles.flexItem} to="/uploadImage">uploadImage</Link><br/>
      </div>
    );
  }
}


