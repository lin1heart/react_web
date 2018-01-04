const initialState = {
  imamgeList: 'asdada',
}
const reducers = {
  test1(state, { test }) {
    console.log('test1 payload  ', test);
    return { ...state, test }
  },
}
const effects = {
  * effect({ payload }, { put }) {
    yield 1
  },
  * test2({ payload }, { put }) {
    console.log('test2 payload', payload );
    yield put({ type: 'test1', test: 'from effects' })
  },
}
export default {
  namespace: 'imageList',
  state: initialState,
  reducers,
  effects,
}
