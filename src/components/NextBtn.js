import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import 'antd/dist/antd.css';

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
    console.log('this is:', this);
  };
  handleMouseOver = e => {
    console.log('handleMouseOver');
    
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
    console.log('handleMouseOut');
    
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
    console.log('arrStyle is ', arrStyle);
    
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
