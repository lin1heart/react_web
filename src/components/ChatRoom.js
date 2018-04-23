import React, { Component } from 'react'
import Draggable from 'react-draggable'
import FlatButton from 'material-ui/FlatButton'
import { List, ListItem } from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import Divider from 'material-ui/Divider'
import { connect } from 'react-redux'
import { Input } from 'antd'

import { H, V } from './Useless'
import { YMDFormat } from '../utils/time'

import { ws } from '../services/ws'

const { TextArea } = Input

@connect(({ chatRoom, profile: { username } }) => ({ ...chatRoom, username }))
export default class ChatRoom extends Component {
  state = { text: '' }
  eventLogger = (e, data) => {
    console.log('Event: ', e)
    console.log('Data: ', data)
  }
  componentWillMount() {
    // const ws = new WebSocket()
    // ws.connect()
  }
  sendSingle = () => {
    ws.sendSingle('to chrome only', 'Chrome')
  }
  sendChat = () => {
    const { username } = this.props
    const { text } = this.state
    ws.sendChat(text, username)
  }
  componentDidUpdate() {
    // this.toView && this.toView.scrollIntoView()
  }
  handleInputChange = event => {
    const text = event.target.value
    this.setState({ text })
  }
  render() {
    const { username, history } = this.props
    console.log(' chatRoom render ', this.props)
    return (
      <Draggable enableUserSelectHack={false}>
        <div
          style={{
            position: 'absolute',
            top: '100px',
            height: '40%',
            width: '50%',
            overflow: 'scroll',
            backgroundColor: '#fffd',
            padding: 16,
          }}
        >
          <List>
            {history.map((item, index) => {
              const { name } = item
              return name === username ? (
                <RightItem {...item} key={index} />
              ) : (
                <LeftItem {...item} key={index} />
              )
            })}
            <div
              ref={node => (this.toView = node)}
              style={{ height: 0, overflow: 'hidden' }}
            />
          </List>
          <div style={{ margin: '24px 0' }} />
          <TextArea
            placeholder="AutoSize"
            autosize={{ minRows: 1, maxRows: 6 }}
            onChange={this.handleInputChange}
            ref={node => (this.text = node)}
          />
          <FlatButton label="send to single" onClick={this.sendSingle} />
          <FlatButton label="send to chat" onClick={this.sendChat} />
        </div>
      </Draggable>
    )
  }
}
const LeftItem = props => {
  const { name, content, timestamp } = props
  return (
    <V style={styles.leftContainer}>
      <div>
        <span style={styles.name}>{name}</span>
        {' ' + YMDFormat(timestamp) + ':'}
      </div>
      <div>{content}</div>
    </V>
  )
}
const RightItem = props => {
  const { name, content, timestamp } = props
  return (
    <V style={styles.rightrContainer}>
      <div>
        <span style={styles.name}>{name}</span>
        {' ' + YMDFormat(timestamp) + ':'}
      </div>
      <div>{content}</div>
    </V>
  )
}

const styles = {
  container: {},
  leftContainer: { backgroundColor: 'green' },
  rightrContainer: {
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  name: { fontWeight: 'bold' },
}
