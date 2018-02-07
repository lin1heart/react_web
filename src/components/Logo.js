import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

import config from '../utils/config'

export default class Logo extends PureComponent {
  render() {
    const { containerStyle } = this.props
    return <div style={{ ...styles.container, ...containerStyle }}>LOGO</div>
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
    marginRight: '16px',
  },
  flexContainer: {
    display: 'flex',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  item: {
    margin: '0 10px'
  }
}
