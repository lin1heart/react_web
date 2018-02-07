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
    // return (
    //   <section
    //     style={{
    //       width: '100%',
    //       height: '100%',
    //       alignItems: 'stretch',
    //     }}
    //   >
    //     <div style={{  flex: 1 }} />
    //   </section>
    // )
    return (
      <section style={styles.container}>
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
      </section>
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
    width: '100%'
  },
  section: {
    flexDirection: 'column',
    padding: '0 10%',
    display: 'inline-flex',
    flex: 1
  },
  imageItem: {
    width: '100%'
  }
}
