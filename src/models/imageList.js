import { toast, fetch } from '../utils';
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
  loadImageList(preState, { imageList, pageIndex }) {
    const newPageIndex = pageIndex || preState.pageIndex + 1;
    return { ...preState, imageList, pageIndex: newPageIndex };
  },
  loadMoreImageList(preState, { imageList }) {
    const pageIndex = preState.pageIndex + 1;
    const oldImageList = preState.imageList;
    return {
      ...preState,
      imageList: [...oldImageList, ...imageList],
      pageIndex
    };
  }
};
const effects = {
  *effect({ payload }, { put, call, select, take }) {
    console.log('this is effect test');

    yield 1;
  },
  *getImageList({ payload:type }, { put, call, select }) {
    try {
      console.log('type is ', type);
      
      const { data: imageList } = yield call(getImageList, 0, 10, type);
        yield put({ type: 'loadImageList', imageList: imageList|| [], pageIndex: 1 });
    } catch (e) {
      console.log('getImageList  with error: ', e);
    }
  },
  *getMoreImageList({ payload }, { put, call, select }) {
    try {
      const { pageIndex } = yield select(({ imageList }) => imageList);
      console.log('getMoreImageList pageIndex is ', pageIndex);
      const { data: imageList } = yield call(getImageList, pageIndex);
      if (Array.isArray(imageList)) {
        yield put({ type: 'loadMoreImageList', imageList });
      } else {
        toast('没有更多了');
      }
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
