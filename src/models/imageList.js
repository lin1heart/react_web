import fetch from '../utils/fetch.js';

const SERVER_URL ='http://54.179.154.58:8080/'
const IMAGE_URL = 'http://54.179.154.58:8888/image/';

type ImageList = {
  id: number,
  title: string,
  headImage: stirng,
  type: number,
  uploadDt?: string,
  width: number,
  height: number,
}
const _imageList : ImageList = [
]
const initialState = {
  imageList: _imageList,
  ratioList: [],
};
const reducers = {
  loadImageList(preState, { imageList }) {
    return { ...preState, imageList };
  },
  loadRatioList(preState, { payload:{ ratioList }}) {
    return { ...preState, ratioList };
  },
};
const effects = {
  *effect({ payload }, { put, call, select, take }) {
    yield 1;
  },
  *test2({ payload }, { put }) {
    console.log('test2 payload', payload);
    yield put({ type: 'test1', test: 'from effects' });
    yield put({ type: 'fetchTest' });
  },
  *getImageList(payload, { put, call }) {
    try {
      const { data: imageList } = yield fetch.get(SERVER_URL + 'image/getList' ,{pageSize:10,pageIndex: 0});
      console.log(' res is ', imageList);
      const ratioList = yield call(calAspectRatio, imageList)
      console.log('ratioList.slice(0,4) is ', ratioList.slice(0,4),ratioList);

      const imageHeight = yield calHeight(ratioList.slice(0,4))
      const imageHeight2 = yield calHeight(ratioList.slice(4,7))
      console.log("heigt:!!!",imageHeight,imageHeight2);

      yield put({ type:'loadImageList', imageList})
      yield put({ type:'loadRatioList', payload:{ ratioList }})
    } catch (e) {
      console.log('getImageList  with error: ', e);
    }
  },
};
export default {
  namespace: 'imageList',
  state: initialState,
  reducers,
  effects,
};
