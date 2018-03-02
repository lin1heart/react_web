const IP = 'http://13.250.226.195:'

export const SERVER_URL = IP + '8080/'
export const IMAGE_URL = IP + '8888/dbImage/'
export const UPLOAD_URL = IP + '8888/'

export const BG_COLOR = '#f6f6f6'

export default {
  get C_WIDTH () {
    return document.body.clientWidth
  },
  get C_HEIGHT () {
    return document.body.clientHeight
  },
  get S_WIDTH () {
    return window.screen.availHeight
  },
  get S_HEIGHT () {
    return window.screen.availWidth
  }
}

export const CATEGORY = [
  {
    name: '详情预览',
    code: 'image',
    children: [
      { name: '全部', code: 0 },
      { name: '今天', code: 1 },
      { name: '的风', code: 2 },
      { name: '儿有', code: 3 },
      { name: '点喧', code: 4 },
      { name: '嚣~', code: 5 }
      // { name: '全部', code: 0 },
      // { name: '欧美', code: 1 },
      // { name: '和风', code: 2 },
      // { name: '大陆', code: 3 },
      // { name: '耽美', code: 4 },
      // { name: '次元', code: 5 }
    ]
  },

  {
    name: '文学鉴赏',
    code: 'novel',
    children: [{ name: '上线中', code: 0 }, { name: 'test', code: 1 }]
  },
  {
    name: '视频剖析',
    code: 'video',
    children: [{ name: '上线中', code: 0 }]
  }
]
