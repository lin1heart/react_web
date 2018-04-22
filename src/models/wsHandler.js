const initialState = { data: [] }
const reducers = {
  test(state, { payload }) {
    return { ...state, payload }
  },
}
const effects = {
  * onResponse({ body }, { put }) {
    console.log(' onresponse body is ', body)
    const { type, data } = body || {}
    if (type === 'chat') {
      yield put({ type: 'chatRoom/addHistory', data })
    } else if (type === 'version') {
      yield put({ type: 'app/updateCount', ...data })
    }
  },
}
export default {
  namespace: 'wsHandler',
  state: initialState,
  reducers,
  effects,
}
