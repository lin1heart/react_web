import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import Account from 'material-ui/svg-icons/action/account-circle'
import Face from 'material-ui/svg-icons/action/face'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'

import { login } from '../../services/api'
import Login from './Login'
import Signup from './Signup'
import { dispatch } from '../../utils/dispatch'

// @connect(({ profile }) => profile)
export default class Avatar extends PureComponent {
  state = {
    slideIndex: 0,
  }
  handleOpen = () => {
    dispatch({ type: 'profile/showModal' })
  };

  handleClose = () => {
    dispatch({ type: 'profile/hideModal' })
  };

  handleChange = value => {
    this.setState({
      slideIndex: value
    })
  };
  render() {
    console.log('this props ius ', this.props);

    const { containerStyle, isLogin, username } = this.props
    const AvatarElement = isLogin ? Face : Account
    return (
      <div style={{ ...styles.container, ...containerStyle }}>
        <IconButton tooltip={isLogin ? username : 'click to login'}
          tooltipPosition="bottom-left" onClick={this.handleOpen}>
          <AvatarElement />
        </IconButton>
        <Dialog
          // title="Dialog With Actions"
          // actions={actions}
          modal={false}
          open={this.props.showModal}
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
Avatar.defaultProps = {
  containerStyle: {}
}
Avatar.propTypes = {
  containerStyle: propTypes.object
}
const styles = {
  container: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1
  },
  leftBtn: {
    marginRight: 16
  }
}
