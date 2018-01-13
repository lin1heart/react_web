import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import styles from './ImageList.css';
import { IMAGE_URL } from '../utils/config';

import type { ImageListItem } from '../models/imageList';

@connect(({ imageList }) => imageList)
export default class ImageList extends Component {
  state = {
    pageIndex: 0
  };
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  componentWillMount() {
    this.props.dispatch({ type: 'imageList/getImageList' });
  }
  _toNextPage = () => {
    const pageIndex = this.state.pageIndex + 1;
    this.props.dispatch({ type: 'imageList/getImageList', pageIndex });
    this._updatePageIndex(pageIndex);
  };
  _updatePageIndex = () => {
    this.setState({
      pageIndex
    });
  };
  _onClick = id => {
    console.log('onclick', id);
    console.log(this.context);
    setTimeout(() => {
      this.context.router.history.push('/imageDetail/' + id);
    }, 1000);
  };
  _onMouseOver = id => {
    console.log('_onMouseOver', id);
  };
  _onMouseOut = id => {
    console.log('_onMouseOut', id);
  };
  render() {
    const { imageList } = this.props;
    console.log('this.props is ', this);
    return (
      <section className={styles.container}>
        {imageList.map((item, index) => {
          const {
            height = 200,
            width = 200,
            headImage,
            id,
            title
          }: ImageListItem = item;
          const aspectRatio = width / height;
          return (
            <div
              className={styles.itemContainer}
              key={headImage + id}
              style={{
                width: aspectRatio * 200,
                flexGrow: aspectRatio * 200
              }}
            >
              <i style={{ paddingBottom: 1 / aspectRatio * 100 + '%' }} />
              <img
                src={IMAGE_URL + headImage}
                alt=""
                onMouseOver={() => this._onMouseOver(id)}
                onMouseOut={() => this._onMouseOut(id)}
                onClick={() => this._onClick(id)}
              />
              <div className={styles.titleWrapper}>
                <span className={styles.titleText}>{title}</span>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
