import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'

import Login from './Login'
import Signup from './Signup'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  }
}
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class Modal extends React.Component {
  state = {
    open: true
  };

  handleOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
  };
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
  }

  handleChange = value => {
    this.setState({
      slideIndex: value
    })
  };
  render () {
    const actions = [
      <FlatButton key={1} label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        key={2}
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />
    ]

    return (
      <div>
        <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
        <Dialog
          // title="Dialog With Actions"
          // actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          bodyStyle={{ padding: 0 }}
          autoScrollBodyContent={true}
        >
          <div>
            <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
              <Tab label="LOGIN" value={0} />
              <Tab label="SIGNUP" value={1} />
            </Tabs>
            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
              <Login />
              <Signup />
            </SwipeableViews>
          </div>
        </Dialog>
      </div>
    )
  }
}
