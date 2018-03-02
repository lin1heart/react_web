import { SERVER_URL, IMAGE_URL, UPLOAD_URL } from '../utils/config'
import myFetch from '../utils/fetch'
import { toast } from '../utils'

export const getImageList = (pageIndex: number = 0, pageSize: number = 10, type: string = 0) => {
  return myFetch.get(SERVER_URL + 'image/getList', {
    pageIndex,
    pageSize,
    type
  })
}
export const delImageList = (ids: Array<string> = []) => {
  return myFetch.post(SERVER_URL + 'image/deleteList', ids)
}

export const getImageDetail = (id: string) => {
  return myFetch.get(SERVER_URL + 'image/getDetail', { id })
}

export const login = (username: string, password: string) => {
  return myFetch.form(SERVER_URL + 'user/logon', { username, password })
}
export const signup = (username: string, password: string, mail: string) => {
  return myFetch.form(SERVER_URL + 'user/register', { username, password, mail })
}

export const uploadImage = formData => {
  fetch(UPLOAD_URL + 'image/upload', {
    method: 'post',
    body: formData
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
