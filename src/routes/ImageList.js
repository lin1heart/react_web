import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress';

import styles from './ImageList.css'
import { IMAGE_URL } from '../utils/config'

import type { ImageListItem } from '../models/imageList'

@connect(({ imageList }) => imageList)
export default class ImageList extends Component {
  state = {
    pageIndex: 0
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  componentWillMount() {
    if (this.context.router.history.action === 'PUSH') {
      this.props.dispatch({ type: 'imageList/getImageList' })
    }
  }
  _onClick = id => {
    this.context.router.history.push('/imageDetail/' + id)
  }
  _onMouseOver = id => {
    // console.log('_onMouseOver', id)
  }
  _onMouseOut = id => {
    // console.log('_onMouseOut', id)
  }
  handleWheel = (event) => {
    //判断鼠标滚轮的上下滑动
    let deta = event.deltaY;
    if (deta > 0) {
      this.setState({
        indexs: 1
      });
      console.log(this.state.indexs + "bottom");
    }
    if (deta < 0) {
      this.setState({
        indexs: -1
      });
      console.log(this.state.indexs + "top");
    }
    console.log('event is ', event)

  }
  render() {
    const { imageList } = this.props
    return (
      <section onWheel={this.handleWheel} className={styles.container}>
        {imageList.map((item, index) => {
          const {
            height = 200,
            width = 200,
            headImage,
            id,
            title
          }: ImageListItem = item
          const aspectRatio = width / height
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
                <span className={styles.titleText}>
                  {title}
                </span>
              </div>
            </div>
          )
        })}
      </section>
    )
  }
}