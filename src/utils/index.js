import { notification, message } from 'antd'

import fetch from './fetch'

const toast = (msg) => {
  notification.info({
    description: msg,
    duration: 2,
    message: '[smile]'
  })
}
toast.error = msg => {
  message.error(msg)
}
toast.warning = msg => {
  message.warning(msg)
}
export const isClient = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

export default fetch
export { fetch, toast }
