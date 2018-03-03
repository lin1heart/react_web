import React from 'react'
import Dialog from 'material-ui/Dialog'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'

import Login from './Login'
import Signup from './Signup'

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class Modal extends React.Component {
  state = {
    open: false,
    slideIndex: 0
  };

  handleOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  handleChange = value => {
    this.setState({
      slideIndex: value
    })
  };
  render() {
    console.log('this.state.open is', this.state)
    return (
      <div>
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
              <Login handleClose={this.handleClose} />
              <Signup handleClose={this.handleClose} />
            </SwipeableViews>
          </div>
        </Dialog>
      </div>
    )
  }
}
