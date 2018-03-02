import React, { Component } from 'react'

class Example extends Component {
  render () {
    return <div style={styles.red}>Example</div>
  }
}

Example.propTypes = {}
Example.defaultProps = {}

export default Example

const styles = {
  container: {},
  red: { backgroundColor: 'red' }
}
