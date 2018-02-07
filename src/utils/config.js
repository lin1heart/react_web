const IP = 'http://52.77.16.226:'

export const SERVER_URL = IP + '8080/'
export const IMAGE_URL = IP + '8888/dbImage/'
export const UPLOAD_URL = IP + '8888/'

export const BG_COLOR = '#f6f6f6'

export default {
  get C_WIDTH() {
    return document.body.clientWidth
  },
  get C_HEIGHT() {
    return document.body.clientHeight
  },
  get S_WIDTH() {
    return window.screen.availHeight
  },
  get S_HEIGHT() {
    return window.screen.availWidth
  }
}
