import React, { Component } from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'

import { dispatch, isClient } from '../utils'
import Banner from '../components/Banner'

@connect(({ app }) => app)
export default class SnackBar extends Component {
  handleRequestClose = () => {
    dispatch({ type: 'app/showSnack' })
  }
  render() {
    // console.log('category prosp is ', this.props)
    const { typeIndex, childIndex } = this.props
    return (
      <Snackbar
        open={this.props.showSnack}
        message={this.props.snackMessage}
        // action="undo"
        // autoHideDuration={3000}
        // onRequestClose={this.handleRequestClose}
      />
    )
  }
}
