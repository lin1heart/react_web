const initialState = {history: []}
const reducers = {
  addHistory(state, { data }) {
    const { history } = state
    return { ...state, history: [...history, data] }
  },
}
const effects = {
  * effect({ payload }, { put }) {
    yield 1
  },
}
export default {
  namespace: 'chatRoom',
  state: initialState,
  reducers,
  effects,
}
