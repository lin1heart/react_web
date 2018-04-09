import { toast, fetch } from '../utils'
import { getImageList } from '../services/api'
import { SERVER_URL, IMAGE_URL } from '../utils/config'

// export type ImageListItem = {
//   id: number,
//   title: string,
//   headImage: stirng,
//   type: number,
//   uploadDt?: string,
//   width: number,
//   height: number,
// }
// type Status = 'loading' | 'noMore' | 'loaded'

// const _imageList: Array<ImageListItem> = []
// const _status: Status = 'loaded'
const _imageList = []
const _status = 'loaded'
const initialState = {
  imageList: _imageList,
  pageIndex: 0, // next page index,
  status: _status,
}
const reducers = {
  loadImageList(preState, { imageList, pageIndex }) {
    const newPageIndex = pageIndex || preState.pageIndex + 1
    const status = imageList.length < 10 ? 'noMore' : 'loaded'
    return { ...preState, imageList, pageIndex: newPageIndex, status }
  },
  loadMoreImageList(preState, { imageList }) {
    const pageIndex = preState.pageIndex + 1
    const oldImageList = preState.imageList
    const status = imageList.length < 10 ? 'noMore' : 'loaded'
    return {
      ...preState,
      imageList: [...oldImageList, ...imageList],
      pageIndex,
      status,
    }
  },
  updataStatus(preState, { status }) {
    return { ...preState, status }
  },
}
const effects = {
  * effect({ payload }, { put, call, select, take }) {
    console.log('this is effect test')

    yield 1
  },
  * getImageList({ payload: type }, { put, call, select }) {
    try {
      console.log('getImageList type is ', type)
      yield put({ type: 'updataStatus', status: 'loading' })
      const { data: imageList } = yield call(getImageList, 0, 10, type)
      yield put({
        type: 'loadImageList',
        imageList: imageList || [],
        pageIndex: 1,
      })
      yield put({ type: 'app/updateChildIndex', childIndex: type })
    } catch (e) {
      yield put({ type: 'updataStatus', status: 'loaded' })
      console.log('getImageList  with error: ', e)
    }
  },
  * getMoreImageList({ payload }, { put, call, select }) {
    try {
      yield put({ type: 'updataStatus', status: 'loading' })
      const { pageIndex } = yield select(({ imageList }) => imageList)
      const { childIndex } = yield select(({ app }) => app)

      console.log('getMoreImageList pageIndex is ', pageIndex, childIndex)
      const { data: imageList } = yield call(
        getImageList,
        pageIndex,
        10,
        childIndex
      )
      if (Array.isArray(imageList)) {
        yield put({ type: 'loadMoreImageList', imageList })
      } else {
        toast('没有更多了')
      }
    } catch (e) {
      yield put({ type: 'updataStatus', status: 'loaded' })
      console.log('getImageList  with error: ', e)
    }
  },
}
export default {
  namespace: 'imageList',
  state: initialState,
  reducers,
  effects,
}
