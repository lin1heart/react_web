import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton';

import config from '../utils/config'

export default class Logo extends PureComponent {
  static contextTypes = {
    router: propTypes.object.isRequired
  }
  toHome = () => {
    const { history } = this.context.router
    history.push('/')
  }
  render() {
    const { containerStyle } = this.props
    return <FlatButton label="LOGO" onClick={this.toHome}/>
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
