import { SERVER_URL, IMAGE_URL } from '../utils/config';
import fetch from '../utils/fetch';

export const getImageList = (pageIndex: number = 0, pageSize: number = 10) => {
  return fetch.get(SERVER_URL + 'image/getList', { pageIndex, pageSize });
};

export const getImageDetail = (id: string) => {
  return fetch.get(SERVER_URL + 'image/getDetail', { id });
};
