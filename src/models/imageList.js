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
  pageIndex: 0
};
const reducers = {
  loadImageList(preState, { imageList }) {
    const pageIndex = preState.pageIndex + 1;
    return { ...preState, imageList, pageIndex };
  },

};
const effects = {
  *effect({ payload }, { put, call, select, take }) {
    console.log('this is effect test');
    
    yield 1;
  },
  *getImageList({ payload }, { put, call, select }) {
    try {
      const { pageIndex } = yield select(({ imageList }) => imageList);
      console.log('getImageList pageIndex is ', pageIndex);

      const { data: imageList } = yield call(getImageList, pageIndex);
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
