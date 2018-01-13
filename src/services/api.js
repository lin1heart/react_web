import { SERVER_URL, IMAGE_URL } from '../utils/config';
import fetch from '../utils/fetch';

export const getImageList = (
  pageIndex: number = 0,
  pageSize: number = 10,
  type: string = 0
) => {
  return fetch.get(SERVER_URL + 'image/getList', { pageIndex, pageSize, type });
};

export const getImageDetail = (id: string) => {
  return fetch.get(SERVER_URL + 'image/getDetail', { id });
};
