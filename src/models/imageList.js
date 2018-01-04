const initialState = {
  data: [],
}
const reducers = {
  test(state, { payload }) {
    return { ...state, payload }
  },
}
const effects = {
  * effect({ payload }, { put }) {
    yield 1
  },
}
export default {
  namespace: 'imageList',
  state: initialState,
  reducers,
  effects,
}
