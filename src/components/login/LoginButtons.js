import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

import { Button, Input, Icon } from 'antd'
import LoginModal from './Modal'

export default class Logo extends PureComponent {
  showModal = (type) => {
    this.loginModal.showModal(type)
  }
  render() {
    const { containerStyle } = this.props
    return (
      <div style={{ ...styles.container, ...containerStyle }}>
        <Button ghost style={styles.leftBtn} onClick={()=>this.showModal('LOGIN')}>
          登录
        </Button>
        <Button ghost type="dashed" onClick={()=>this.showModal('SIGNUP')}>
          注册
        </Button>
        <LoginModal ref={e => (this.loginModal = e)} />
      </div>
    )
  }
}
Logo.defaultProps = {
  containerStyle: {}
}
Logo.propTypes = {
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
