import Stomp from '@stomp/stompjs'


import { WS_URL } from '../utils/config'

class WebSocket {
  connect = () => {
    let client = Stomp.client(WS_URL)
    client.connect(
      {},
      this.connectCallback,
      this.errorCallback,
      this.closeEventCallback
    )
    this.client = client
    console.log('client is', client)
  }
  connectCallback = () => {
    console.log('connectCallback', arguments)
    this.subscribe()
  }
  errorCallback = () => {
    console.log('errorCallback', arguments)
  }
  closeEventCallback = () => {
    console.log('closeEventCallback', arguments)
  }
  subscribe = () => {
    this.client.subscribe('/topic/chatRoom', () => {
      console.log('subscribe', arguments)
    })
  }
  sendSingle = (msg, name) => {
    this.client.send('/ws/single', {}, JSON.stringify({ content: msg, name }))
  }
  sendChat = (msg, name) => {
    this.client.send(
      '/ws/chat',
      { priority: 9 },
      JSON.stringify({ content: msg, name })
    )
  }
}

const ws = new WebSocket()
ws.connect()
export { ws }
