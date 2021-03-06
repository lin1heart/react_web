import moment from 'moment'

import debug from './debug'
import { dispatch } from './dispatch'
export { fetch } from './fetch'

const snackInfo = (message = 'system error', delay = 2000) => {
  dispatch({ type: 'app/showSnack', message })
  setTimeout(() => {
    dispatch({ type: 'app/hideSnack' })
  }, delay)
}
const toast = snackInfo

export const isClient = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
export const StandardFormat = timestamp => {
  if (moment(timestamp).isValid()) {
    return moment(timestamp).format('YYYY-MM-DD HH:mm')
  }
  return '-'
}
export { toast, dispatch, snackInfo, debug }
