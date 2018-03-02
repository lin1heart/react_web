import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import { dispatch } from '../../utils/dispatch'
import { toast } from '../../utils'

class Signup extends Component {
  state = {
    name: '',
    pass: '',
    mail: ''
  };
  login = () => {
    const { name, pass, mail } = this.state
    if (!name) {
      toast('please input your user name')
    } else if (!pass) {
      toast('please input your user password')
    } else if (!mail) {
      toast('please input your user email')
    } else {
      dispatch({ type: 'profile/signup', name, pass, mail })
    }
  };
  updateValue = (type, value) => {
    this.setState({
      [type]: value
    })
  };
  render () {
    const { name, pass, mail } = this.state
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
        <TextField
          hintText="e.g. rose@gmail.com"
          value={mail}
          onChange={(fun, value) => this.updateValue('mail', value)}
          floatingLabelText="email"
        />
        <br />
        <br />
        <FlatButton label="Confirm" primary={true} onClick={this.login} />
        <FlatButton style={styles.marginLeft} label="forget pass" />
      </div>
    )
  }
}

Signup.propTypes = {}
Signup.defaultProps = {}

export default Signup

const styles = {
  container: {
    padding: 16,
    paddingTop: 0,
    margin: 'auto',
  },
  marginLeft: {
    marginLeft: 16
  },
  red: { backgroundColor: 'red' }
}
