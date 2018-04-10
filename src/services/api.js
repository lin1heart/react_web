import { SERVER_URL, IMAGE_URL, UPLOAD_URL } from '../utils/config'
import myFetch from '../utils/fetch'
import { toast } from '../utils'

export const getImageList = (pageIndex = 0, pageSize = 10, type = 0) => {
  return myFetch.get(SERVER_URL + 'image/getList', {
    pageIndex,
    pageSize,
    type,
  })
}
export const delImageList = (ids = []) => {
  return myFetch.post(SERVER_URL + 'image/deleteList', ids)
}

export const getImageDetail = id => {
  return myFetch.get(SERVER_URL + 'image/getDetail', { id })
}

export const login = (username, password) => {
  return myFetch.params(SERVER_URL + 'user/login', { username, password })
}
export const signup = (username, password, mail) => {
  return myFetch.params(SERVER_URL + 'user/register', {
    username,
    password,
    mail,
  })
}
export const version = () => {
  return myFetch.get(SERVER_URL + 'user/version', {})
}

export const uploadImage = formData => {
  fetch(UPLOAD_URL + 'image/upload', {
    method: 'post',
    body: formData,
  })
    .then(res => res.json())
    .then(res => {
      console.log('uploadImage res is ', res)
      toast('上传成功')
    })
    .catch(e => {
      console.log('uploadImage with error', e)
    })
}
