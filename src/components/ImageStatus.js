import React, { Component } from 'react'
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress'
import FlatButton from 'material-ui/FlatButton'

import { dispatch } from '../utils/dispatch'
import { BG_COLOR } from '../utils/config'

@connect(({ imageList: { status } }) => ({ status }))
export default class Status extends Component {
  getMore = () => {
    dispatch({ type: 'imageList/getMoreImageList' })
  }
  render() {
    const { status } = this.props
    // console.log('image status props is ', status);
    let StatusView = <CircularProgress size={30} thickness={3} />
    if (status === 'loaded') {
      StatusView = (
        <FlatButton
          label="加载更多"
          fullWidth={true}
          backgroundColor={BG_COLOR}
          onClick={this.getMore}
        />
      )
    } else if (status === 'noMore') {
      StatusView = (
        <FlatButton
          label="没有更多了"
          fullWidth={true}
          backgroundColor={BG_COLOR}
        />
      )
    }
    return <div style={styles.container}>{StatusView}</div>
  }
}
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BG_COLOR,
  },
}
