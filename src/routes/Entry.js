import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
      <div>
        <Link to="/imageList">imageList</Link><br/>
        <Link to="/imageDetail">imageList</Link><br/>
        <Link to="/uploadImage">imageList</Link><br/>
      </div>
    );
  }
}
