import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

export default class Copyright extends PureComponent {
  render () {
    const { containerStyle } = this.props
    return (
      <section style={{ ...styles.flexContainer, ...containerStyle }}>
        <span style={styles.item}>CopyRight</span>
        <span style={styles.item}>github</span>
        <span style={styles.item}>version</span>
        <span style={styles.item}>contact</span>
      </section>
    )
  }
}
Copyright.defaultProps = {
  containerStyle: {}
}
Copyright.propTypes = {
  containerStyle: propTypes.object
}
const styles = {
  container: {},
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
