import React from 'react'

const Example = () => {
  return <div style={styles.red}>Example</div>
}

Example.propTypes = {}
Example.defaultProps = {}

export default Example

const styles = {
  container: {},
  red: { backgroundColor: 'red' }
}
