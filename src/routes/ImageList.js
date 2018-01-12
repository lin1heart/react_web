import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './ImageList.css';
import { IMAGE_URL } from '../utils/config';

import type { ImageListItem } from '../models/imageList';

@connect(({ imageList }) => imageList)
export default class ImageList extends Component {
  state = {
    value: 333
  };
  componentWillMount() {
    this.props.dispatch({ type: 'imageList/getImageList' });
    this.setState({
      bbb: 333
    });
  }
  render() {
    const { imageList } = this.props;
    console.log('render imageList is %o', imageList);
    return (
      <section className={styles.container}>
        {imageList.map((item, index) => {
          const {
            height = 200,
            width = 200,
            headImage,
            id
          }: ImageListItem = item;
          const aspectRatio = width / height;
          return (
            <div
              key={id}
              style={{
                width: aspectRatio * 200,
                flexGrow: aspectRatio * 200
              }}
            >
              <i style={{ paddingBottom: 1 / aspectRatio * 100 + '%' }} />
              <img src={1 || IMAGE_URL + headImage} alt="" />
            </div>
          );
        })}
      </section>
    );
  }
}
