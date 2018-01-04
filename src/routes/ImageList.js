import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './ImageList.css';
const IMAGE_URL = 'http://192.168.0.105:80/image/';


@connect(({ imageList }) => imageList)
export default class ImageList extends Component {
  state = {
    value: 333
  };
  componentWillMount() {
    console.log('will');
    this.props.dispatch({ type: 'imageList/test1', test: 'from view' });
    this.props.dispatch({ type: 'imageList/getImageList' });
    this.setState({
      bbb: 333
    });
  }
  componentDidMount() {
    console.log('did');
  }
  componentWillUnmount() {
    console.log('willun');
  }
  _onLoad = (x, y) => {
    console.log('x is %o ,y is %o', x, y);
    
  }
  render() {
    const { imageList = [], ratioList } = this.props;
    console.log('render imageList is %o', imageList);
    console.log('render ratioList is %o', ratioList);
    const arr1 = imageList.slice(0, 4);
    const arr2 = imageList.slice(4, 7);
    return (
      <div>
        <div className={styles.container}>
          {arr1.map((item, index) => {
            return (
              <div key={index} className={styles.flexItem}>
                <img src={IMAGE_URL + item.headImage} />
              </div>
            );
          })}
        </div>
        <div className={styles.container}>
          {arr2.map((item, index) => {
            return (
              <div key={index} className={styles.flexItem}>
                <img src={IMAGE_URL + item.headImage} />
              </div>
            );
          })}
        </div>
        <FourImage data={arr1} />
      </div>
    );
  }
}

const FourImage = props => {
  const { data } = props;
  console.log('data is ', data);

  return <span>span</span>;
};
