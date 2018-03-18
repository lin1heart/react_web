import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getImageDetail } from '../services/api'
import { IMAGE_URL, BG_COLOR } from '../utils/config'
import CopyRight from '../components/CopyRight'
import TopNavigator from '../components/TopNavigator'
import styled from 'styled-components'

import stylesHelper from '../utils/stylesHelper.css'

const Ad = styled.div`
  border: 1px solid #ffa11a;
  height: 40;
  width: 100%;
`
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
  render() {
    const { data } = this.state
    return (
      <div style={styles.container}>
        {/* <header style={styles.header}>
          <Ad>this is ad 1</Ad>
          <Ad>this is ad 1</Ad>
          <Ad>this is ad 1</Ad>
    </header> */}
        <TopNavigator showCategory={false} />
        <section style={styles.section}>
          {data.map((item, index) => {
            const { url, id, height, width } = item
            return <img key={id} src={IMAGE_URL + url} style={styles.imageItem} />
          })}
          <br />
        </section>
        <div>
          登陆之后可以查看更多哦
        </div>
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
    width: '100%'
  },
  section: {
    flexDirection: 'column',
    padding: '0 10%',
    display: 'inline-flex',
    flex: 1
  },
  imageItem: {
    width: '100%',
    marginTop: 16,
    border: '1px #ffa11a solid',
    borderRadius: 8
  }
}
