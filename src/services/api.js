import { SERVER_URL, IMAGE_URL } from '../utils/config';
import fetch from '../utils/fetch';

export const getImageList = (pageIndex: number, pageSize: number = 10) => {
  return fetch.get(SERVER_URL + 'image/getList', { pageIndex, pageSize });
};
