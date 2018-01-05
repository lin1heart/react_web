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
    const temdata = [1,0.75,1.3333333333333333,1.829268292682927,1.3333333333333333,1.3333333333333333,1,1.4104372355430184,0.6845703125,1.411764705882353]
    const arr1 = imageList.slice(0, 4);
    const arr2 = imageList.slice(4, 7);
    return (
      <section className={styles.container}>
        {imageList.map((item, index) => {
          const { height = 200, width = 200, headImage } = item
          console.log('item is ', item)
          return (
            <div style={{ width: temdata[index]*200, flexGrow: temdata[index]*200 }}>
              <i style={{paddingBottom:1/temdata[index] *100+'%' }}></i>
              <img src={IMAGE_URL + headImage} alt="" />
            </div>
          )
        })}
      </section>
    );
  }
}
