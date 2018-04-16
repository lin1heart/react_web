import React, { Component } from 'react'
import Draggable from 'react-draggable'
import FlatButton from 'material-ui/FlatButton'

import { ws } from '../services/ws'

export default class ChatRoom extends Component {
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
    ws.sendChat('to chatRoooom')
  }
  render() {
    // return <div>1</div>

    return (
      <Draggable
      // handle=".handle"
      // defaultPosition={{
      //   x: 0,
      //   y: 0,
      // }}
      // position={null}
      // grid={[25, 25]}
      // onStart={this.handleStart}
      // onDrag={this.handleDrag}
      // onStop={this.handleStop}
      >
        <div
          style={{
            position: 'absolute',
            top: '100px',
            border: '2px solid #ffa11a',
          }}
        >
          <div> Drag from here </div>
          <FlatButton label="send to single" onClick={this.sendSingle} />
          <FlatButton label="send to chat" onClick={this.sendChat} />
        </div>
      </Draggable>
    )
  }
}
