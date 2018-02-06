import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getImageDetail } from '../services/api'
import { IMAGE_URL, BG_COLOR } from '../utils/config'

export default class ImageDetail extends Component {
  state = {
    data: []
  }
  componentWillMount() {
    const { id } = this.props.match.params
    getImageDetail(id).then(res => {
      const { data } = res
      console.log('getImageDetail data is ', data)
      this.setState({
        data
      })
    })
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { data } = this.state
    return (
      <section style={styles.section}>
        <header style={styles.header}>
          <div>this is header</div>
        </header>
        <div style={styles.contaier}>
          {data.map((item, index) => {
            const { url, id, height, width } = item
            return (
              <img
                key={id}
                src={IMAGE_URL + url}
                style={{ maxWidth: '2000px' }}
              />
            )
          })}
        </div>
      </section>
    )
  }
}
const styles = {
  section: {
    backgroundColor: BG_COLOR,
    width: '100%',
    height: '100%'
  },
  header: {
    width: '100%',
    height: 50,
  },
  contaier: {
    width: '80%',
    marginLeft: '10%'
  }
}
