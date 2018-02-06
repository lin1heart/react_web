import { SERVER_URL, IMAGE_URL, UPLOAD_URL } from '../utils/config';
import myFetch from '../utils/fetch';
import { toast } from '../utils'

export const getImageList = (
  pageIndex: number = 0,
  pageSize: number = 10,
  type: string = 0
) => {
  return myFetch.get(SERVER_URL + 'image/getList', { pageIndex, pageSize, type });
};

export const getImageDetail = (id: string) => {
  return myFetch.get(SERVER_URL + 'image/getDetail', { id });
};

export const uploadImage = formData => {
  fetch(UPLOAD_URL + 'image/upload', {
    method: 'post',
    body: formData
  })
    .then(res => res.json())
    .then(res => {
      console.log('uploadImage res is ', res);
      toast('上传成功');
    })
    .catch(e => {
      console.log('uploadImage with error', e);
    });
};
