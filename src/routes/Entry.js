import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Copyright from '../components/CopyRight'

import styles from './Entry.css'

@connect(({ imageList }) => imageList)
export default class Entry extends Component {
  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillUnmount() {}
  render() {

    return (
      <div className={styles.flexContainer}>
        <Notice />
        <Link className={styles.flexItem} to="/category">
          点击进入>>>Enter to our site
        </Link>
        <br />
        <Link className={styles.flexItem} to="/uploadImage">
          uploadImage
        </Link>
        <span>仅供娱乐</span>
        <Copyright containerStyle={{ position: 'absolute', bottom: 0 }} />
      </div>
    )
  }
}

const Notice = () => {
  return (
    <div className={styles.notice}>
      <span className={styles.noticeText}>
        Welcome to oursite,Best wishes for every day!
      </span>
      <br />
      <span className={styles.noticeText}>
        Waring:The site contain adult content,no entry for less than
        18-Years-Old!
      </span>
    </div>
  )
}
