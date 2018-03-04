import React, { Component } from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar';
import 'antd/dist/antd.css'

// import ImageBtn from '../components/ImageBtn'
import ImageList from './ImageList'
import TopNavigator from '../components/TopNavigator'
import { dispatch, isClient } from '../utils'
import ImageStatus from '../components/ImageStatus'

@connect(({ app }) => app)
export default class Category extends Component {

  handleRequestClose = () => {
    dispatch({ type: 'app/showSnack' })
  };
  render() {
    // console.log('category prosp is ', this.props)
    const { typeIndex, childIndex } = this.props
    return (
      <section style={styles.full}>
        <Banner />
        <TopNavigator typeIndex={typeIndex} childIndex={childIndex} />
        <div style={styles.container}>
          <ImageList />
          <ImageStatus />
        </div>
        <Snackbar
          open={this.props.showSnack}
          message={this.props.snackMessage}
        // action="undo"
        // autoHideDuration={3000}
        // onRequestClose={this.handleRequestClose}
        />
      </section>
    )
  }
}

const Banner = () => {
  return (
    <div style={styles.full}>
      <div style={styles.flexContainer}>
        <h1 style={styles.imageTitle}>welcome to maldives holiday</h1>
        <h2 style={styles.imameSubTitle}>WYSIWYG</h2>
      </div>
      <div style={{ height: '10%', display: 'flex' }}>
        <h3 style={styles.middleText}>拯救世界银河小分队的密码花园</h3>
      </div>
    </div>
  )
}
const styles = {
  full: {
    width: '100%',
    height: '100%'
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
    flexDirection: 'column'
  },
  imageTitle: {
    display: 'inline-flex',
    color: '#fff',
    fontSize: '2.5rem',
    textAlign: 'center'
  },
  imameSubTitle: {
    display: 'inline-flex',
    color: '#fff',
    marginTop: '1rem',
    fontSize: '2rem'
  },
  middleText: {
    fontSize: '1rem',
    display: 'inline-flex',
    alignSelf: 'center',
    marginLeft: '1.5rem'
  }
}
