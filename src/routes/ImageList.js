import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './ImageList.css';
import { IMAGE_URL } from '../utils/config';

import type { ImageListItem } from '../models/imageList';

@connect(({ imageList }) => imageList)
export default class ImageList extends Component {
  state ={
    pageIndex: 0,
  }
  componentWillMount() {
    this.props.dispatch({ type: 'imageList/getImageList' });
  }
  _toNextPage = () => {
    const pageIndex = this.state.pageIndex + 1
    this.props.dispatch({ type: 'imageList/getImageList', pageIndex })
    this._updatePageIndex(pageIndex)
  }
  _updatePageIndex = () => {
    this.setState({
      pageIndex,
    })
  }
  render() {
    const { imageList } = this.props;
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
              <img src={ IMAGE_URL + headImage} alt="" />
            </div>
          );
        })}
      </section>
    );
  }
}
