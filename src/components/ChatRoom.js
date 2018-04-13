import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { debug } from 'util';

export default class ChatRoom extends Component {
  eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

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
        <div style={{ position: 'absolute', top: '100px', border: '2px solid red' }}>
          <div> Drag from here </div>
          <div> This readme is really dragging on... </div>
        </div>
      </Draggable>
    )
  }
}
