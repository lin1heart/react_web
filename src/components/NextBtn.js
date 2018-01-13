import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import 'antd/dist/antd.css';

import { dispatch } from '../utils/dispatch'

const RADIUS = 70;
export default class NextBtn extends Component {
  state = {
    hoverStyle: {},
    arrStyle: {
      transform: 'scale(1)'
    }
  };
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  handleClick = () => {
    dispatch({ type: 'imageList/effect'})
  };
  handleMouseOver = e => {
    this.setState({
      divStyle: {
        backgroundColor: '#eee685'
      },
      arrStyle: {
        transform: 'scale(1.3)'
      }
    });
  };
  handleMouseOut = e => {
    this.setState({
      divStyle: {
        backgroundColor: '#ffa11a'
      },
      arrStyle: {
        transform: 'scale(1)'
      }
    });
  };
  render() {
    const { divStyle, arrStyle } = this.state;
    
    return (
      <div
        style={{ ...styles.btnWrapper, ...divStyle }}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onClick={this.handleClick}
      >
        <Icon
          type="arrow-down"
          style={{ fontSize: 25, color: '#08c', ...arrStyle }}
        />
      </div>
    );
  }
}

const styles = {
  btnWrapper: {
    width: RADIUS,
    height: RADIUS,
    backgroundColor: '#ffa11a',
    borderRadius: RADIUS / 2,
    position: 'fixed',
    left: '80%',
    top: '80%',
    boxShadow: '1px 1px 8px  #3300cc',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
