import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

import config from '../utils/config'
import { Button } from 'antd'

export default class Logo extends PureComponent {
  render() {
    const { containerStyle } = this.props
    return (
      <div style={{ ...styles.container, ...containerStyle }}>
        <Button ghost style={styles.leftBtn}>
          登录
        </Button>
        <Button ghost type="dashed">
          注册
        </Button>
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
