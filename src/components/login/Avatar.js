import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import Account from 'material-ui/svg-icons/action/account-circle'
import Face from 'material-ui/svg-icons/action/face'
import { connect } from 'react-redux'

import LoginModal from './Modal'
import { login } from '../../services/api';

@connect(({ profile }) => profile)
export default class Avatar extends PureComponent {
  showModal = () => {
    console.log('profile is ', this.props)
    this.loginModal && this.loginModal.handleOpen()
  }
  render() {
    const { containerStyle, isLogin, username } = this.props
    const AvatarElement = isLogin ? Face : Account
    return (
      <div style={{ ...styles.container, ...containerStyle }}>
        <IconButton tooltip={isLogin ? username : 'click to login'}
          tooltipPosition="bottom-left" onClick={this.showModal}>
          <AvatarElement />
        </IconButton>
        <LoginModal ref={e => this.loginModal = e} />
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
