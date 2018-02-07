import { notification } from 'antd'

import fetch from './fetch'

const toast = msg => {
  notification.info({
    description: msg,
    duration: 2,
    message: '[smile]'
  })
}

export const isClient = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

export default fetch
export { fetch, toast }
