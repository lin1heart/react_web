import fetch from '../utils/fetch';

import { getImageList } from '../services/api';
import { SERVER_URL, IMAGE_URL } from '../utils/config';

export type ImageListItem = {
  id: number,
  title: string,
  headImage: stirng,
  type: number,
  uploadDt?: string,
  width: number,
  height: number
};
const _imageList: Array<ImageListItem> = [];
const initialState = {
  imageList: _imageList,
  ratioList: []
};
const reducers = {
  loadImageList(preState, { imageList }) {
    return { ...preState, imageList };
  },
  loadRatioList(preState, { payload: { ratioList } }) {
    return { ...preState, ratioList };
  }
};
const effects = {
  *effect({ payload }, { put, call, select, take }) {
    yield 1;
  },
  *getImageList(payload, { put, call }) {
    try {
      const {data: imageList}= yield call(getImageList, 0);
      yield put({ type: 'loadImageList', imageList });
    } catch (e) {
      console.log('getImageList  with error: ', e);
    }
  }
};
export default {
  namespace: 'imageList',
  state: initialState,
  reducers,
  effects
};
