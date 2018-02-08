import { getImageList, delImageList } from '../services/api'

const initialState = {
  imageList: [],
  pageIndex: 0
}
const reducers = {
  loadImageList(preState, { imageList, pageIndex }) {
    const newPageIndex = pageIndex || preState.pageIndex + 1
    return { ...preState, imageList, pageIndex: newPageIndex }
  },
  delImages(preState, { ids }) {
    const { imageList } = preState
    const newList = imageList.filter(({ id }) => ids.indexOf(id) === -1)
    return { ...preState, imageList: [...newList] }
  }
}
const effects = {
  *getImageList(payload, { put, call, select }) {
    try {
      const { data: imageList } = yield call(getImageList, 0, 10)
      yield put({
        type: 'loadImageList',
        imageList: imageList || [],
        pageIndex: 1
      })
    } catch (e) {
      console.log('getImageList  with error: ', e)
    }
  },
  *deleteImages({ ids }, { put, call, select }) {
    try {
      yield call(delImageList, ids)
      yield put({ type: 'delImages', ids })
    } catch (e) {
      console.log('deleteImages  with error: ', e)
    }
  }
}
export default {
  namespace: 'admin',
  state: initialState,
  reducers,
  effects
}
