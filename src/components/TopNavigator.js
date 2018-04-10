import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Affix } from 'antd'
import propTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'

import { dispatch } from '../utils/dispatch'
import Logo from './Logo'
import Avatar from './login/Avatar'

@connect(({ app }) => app)
export default class TopNavigator extends Component {
  static contextTypes = {router: propTypes.object.isRequired}
  _handleClick = (childIndex, typeIndex, code) => {
    console.log('childIndex, typeIndex, code is ', childIndex, typeIndex, code)
    dispatch({ type: 'imageList/getImageList', payload: code })
  }
  _back = () => {
    const { history } = this.context.router
    console.log('history is ', history)
    history.goBack()
  }
  render() {
    return (
      <Affix>
        <header style={styles.topContainer}>
          <Logo containerStyle={{ display: 'inline' }} />
          <FlatButton label="BACK" onClick={this._back} />
          <Avatar />
        </header>
      </Affix>
    )
  }
}
TopNavigator.defaultProps = {showCategory: true}
const styles = {
  topContainer: {
    background: 'rgb(190, 200, 200)',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
  },
}
