import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import { dispatch } from '../../utils/dispatch'
import { toast } from '../../utils'

class Login extends Component {
  state = {
    name: '',
    pass: ''
  };
  login = () => {
    const { name, pass } = this.state
    if (!name) {
      toast('please input your user name')
    } else if (!pass) {
      toast('please input your user password')
    } else {
      dispatch({ type: 'profile/login', name, pass }).then((e) => {
        this.props.handleClose()
      })
    }
  };
  updateValue = (type, value) => {
    this.setState({
      [type]: value
    })
  };
  render () {
    const { name, pass } = this.state
    return (
      <div style={styles.container}>
        <TextField
          hintText="e.g. rose"
          value={name}
          onChange={(fun, value) => this.updateValue('name', value)}
          floatingLabelText="username"
        />
        <br />
        <TextField
          hintText="e.g. ****"
          value={pass}
          onChange={(fun, value) => this.updateValue('pass', value)}
          floatingLabelText="password"
          type="password"
        />
        <br />
        <br />
        <div style={styles.marginBottom}>
          <FlatButton label="Confirm" primary={true} onClick={this.login} />
          <FlatButton style={styles.marginLeft} label="forget pass" />
        </div>
      </div>
    )
  }
}

Login.propTypes = {}
Login.defaultProps = {}

export default Login

const styles = {
  container: {
    padding: 16,
    paddingTop: 0,
    margin: 'auto',
    width: '100%',
    height: '100%'
  },
  marginLeft: {
    marginLeft: 16
  },
  marginBottom: {
    bottom: 16,
    position: 'absolute'
  },
  red: { backgroundColor: 'red' }
}
