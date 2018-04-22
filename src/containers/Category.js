import React, { Component } from 'react'
import { connect } from 'react-redux'

import ImageList from './ImageList'
import TopNavigator from '../components/TopNavigator'
import { dispatch, isClient } from '../utils'
import ImageStatus from '../components/ImageStatus'
import DrawMenu from '../components/DrawMenu'
import Banner from '../components/Banner'

@connect(({ app, profile: { isLogin } }) => ({ ...app, isLogin }))
export default class Category extends Component {
  handleRequestClose = () => {
    dispatch({ type: 'app/showSnack' })
  }
  render() {
    const { dbCount, onlineCount, selfCount, isLogin } = this.props
    return (
      <section style={styles.full}>
        <Banner
          dbCount={dbCount}
          onlineCount={onlineCount}
          selfCount={selfCount}
          isLogin={isLogin}
        />
        <TopNavigator />
        <div style={styles.container}>
          <ImageList />
          <ImageStatus />
          <DrawMenu />
        </div>
      </section>
    )
  }
}

const styles = {
  full: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  container: {
    display: 'flex',
    width: isClient ? '100%' : '70%',
    marginLeft: isClient ? 0 : '15%',
    // border: 'solid red 2px',
    position: 'relative',
    minHeight: '100px',
    flexDirection: 'column',
  },
  flexContainer: {
    display: 'flex',
    background: 'url("./maldives.jpg") no-repeat center ',
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}
