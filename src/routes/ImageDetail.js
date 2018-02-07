import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getImageDetail } from '../services/api'
import { IMAGE_URL, BG_COLOR } from '../utils/config'
import CopyRight from '../components/CopyRight'

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
      <div style={styles.contaier}>
        <header style={styles.header}>
          <div style={styles.ad}>this is ad</div>
          <div style={styles.ad}>this is ad2</div>
          <div style={styles.ad}>this is ad3</div>
        </header>
        <section style={styles.section}>
          {data.map((item, index) => {
            const { url, id, height, width } = item
            return <img key={id} src={IMAGE_URL + url} style={styles.imageItem} />
          })}
        </section>
        <CopyRight />
      </div>
    )
  }
}
const styles = {
  container: {
    backgroundColor: BG_COLOR,
    width: '100%',
    height: '100%'
  },
  ad: {
    border: '1px solid #ffa11a',
    height: 40,
    width: '100%'
  },
  header: {
    width: '100%',
  },
  section: {
    flexDirection: 'column',
    padding: '0 10%',
  },
  imageItem: {
    width: '100%',
    height: '100%',
  }
}
